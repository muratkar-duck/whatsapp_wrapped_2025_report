import fs from "fs";
import path from "path";
import type { Agg } from "../lib/types";

const rawPrimaryPath = path.join(process.cwd(), "data", "raw", "chat.txt");
const rawFallbackPath = path.join(process.cwd(), "data", "raw", "_chat.txt");
const stickerReportPath = path.join(process.cwd(), "data", "raw", "whatsapp_sticker_analizi.txt");
const stickerAssetsPath = path.join(process.cwd(), "public", "stickers");
const outputPath = path.join(process.cwd(), "lib", "data", "wrapped2025.generated.ts");

const lineRegex =
  /^\[?(\d{1,2})\.(\d{1,2})\.(\d{2,4})[,\s](\d{1,2}:\d{2})(?::(\d{2}))?\]?\s-?\s?(.*?): (.*)$/;

const emojiRegex = /\p{Extended_Pictographic}/gu;

const stopwords = new Set([
  "acaba",
  "ama",
  "aslında",
  "az",
  "ben",
  "bana",
  "bazen",
  "belki",
  "bir",
  "biri",
  "biz",
  "bu",
  "buna",
  "bunun",
  "da",
  "daha",
  "de",
  "degil",
  "değil",
  "diye",
  "en",
  "evet",
  "gibi",
  "hem",
  "hep",
  "her",
  "hiç",
  "icin",
  "için",
  "ile",
  "ise",
  "işte",
  "kadar",
  "ki",
  "kim",
  "mı",
  "mi",
  "mu",
  "mü",
  "ne",
  "neden",
  "nerde",
  "nerede",
  "niye",
  "o",
  "ol",
  "olan",
  "olarak",
  "on",
  "ona",
  "onda",
  "onu",
  "onun",
  "orada",
  "sana",
  "sen",
  "siz",
  "şu",
  "şey",
  "şeyler",
  "tam",
  "tamam",
  "tüm",
  "ve",
  "veya",
  "ya",
  "yani",
  "ya da",
  "yok",
  "zaten"
]);

type ParsedMessage = {
  sender: string;
  text: string;
  ts: Date;
  tsLabel: string;
  hasSeconds: boolean;
};

type GapSample = {
  index: number;
  diffSeconds: number;
};

type StickerReportGroup = {
  count: number;
  sizeBytes: number | null;
  filenames: string[];
};

const pad = (value: number) => String(value).padStart(2, "0");

const formatDateTime = (date: Date, includeSeconds: boolean) => {
  const datePart = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const timePart = includeSeconds
    ? `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
    : `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  return `${datePart} ${timePart}`;
};

const sanitizeTokens = (text: string) => {
  const normalized = text.replace(emojiRegex, " ").toLocaleLowerCase("tr-TR");
  return normalized
    .replace(/[^\p{L}\p{N}'-]+/gu, " ")
    .split(/\s+/)
    .filter(Boolean);
};

const parseStickerSizeBytes = (raw: string, unit: string) => {
  const normalized = raw.replace(",", ".");
  const value = Number.parseFloat(normalized);
  if (Number.isNaN(value)) {
    return null;
  }

  const normalizedUnit = unit.toLowerCase();
  if (normalizedUnit.startsWith("kb") || normalizedUnit.startsWith("kib")) {
    return Math.round(value * 1024);
  }
  if (normalizedUnit.startsWith("mb") || normalizedUnit.startsWith("mib")) {
    return Math.round(value * 1024 * 1024);
  }
  if (normalizedUnit.startsWith("b") || normalizedUnit.startsWith("byte")) {
    return Math.round(value);
  }

  return Math.round(value);
};

const extractStickerFilenames = (line: string) => line.match(/[^\s,;]+\.webp/gi) ?? [];

const parseStickerReport = () => {
  if (!fs.existsSync(stickerReportPath)) {
    console.log(`Sticker report not found at ${stickerReportPath}.`);
    return [] as StickerReportGroup[];
  }

  const content = fs.readFileSync(stickerReportPath, "utf-8");
  const lines = content.split(/\r?\n/);
  const groups: StickerReportGroup[] = [];
  let current: StickerReportGroup | null = null;

  lines.forEach((line) => {
    const countMatch = line.match(/(\d+)\s*kez/i);
    const sizeMatch = line.match(/(\d+(?:[.,]\d+)?)\s*(kb|kib|mb|mib|bytes?|byte|b)\b/i);

    if (countMatch && sizeMatch) {
      if (current) {
        groups.push(current);
      }
      const sizeBytes = parseStickerSizeBytes(sizeMatch[1], sizeMatch[2]);
      current = {
        count: Number.parseInt(countMatch[1], 10),
        sizeBytes,
        filenames: extractStickerFilenames(line)
      };
      return;
    }

    if (current) {
      current.filenames.push(...extractStickerFilenames(line));
    }
  });

  if (current) {
    groups.push(current);
  }

  return groups;
};

const rawPath = fs.existsSync(rawPrimaryPath)
  ? rawPrimaryPath
  : fs.existsSync(rawFallbackPath)
    ? rawFallbackPath
    : null;

if (!rawPath) {
  const stubContents = `import type { Agg } from "../types";\n\nexport const agg: Agg | null = null;\n`;
  fs.writeFileSync(outputPath, stubContents, "utf-8");
  console.log(
    `WhatsApp export not found at ${rawPrimaryPath} or ${rawFallbackPath}. Wrote stub aggregate.`
  );
  process.exit(0);
}

const content = fs.readFileSync(rawPath, "utf-8");
const lines = content.split(/\r?\n/);

const messages: ParsedMessage[] = [];
let current: ParsedMessage | null = null;

for (const line of lines) {
  const match = line.match(lineRegex);
  if (match) {
    const [, day, month, yearRaw, time, secondsRaw, sender, text] = match;
    const year = yearRaw.length === 2 ? Number(`20${yearRaw}`) : Number(yearRaw);
    const [hour, minute] = time.split(":").map(Number);
    const seconds = secondsRaw ? Number(secondsRaw) : 0;
    const date = new Date(year, Number(month) - 1, Number(day), hour, minute, seconds);
    const hasSeconds = Boolean(secondsRaw);

    const message: ParsedMessage = {
      sender: sender.trim(),
      text: text.trim(),
      ts: date,
      tsLabel: formatDateTime(date, hasSeconds),
      hasSeconds
    };

    messages.push(message);
    current = message;
  } else if (current) {
    const appended = line.trim();
    if (appended) {
      current.text = `${current.text}\n${appended}`.trim();
    }
  }
}

if (messages.length === 0) {
  const emptyAgg: Agg = {
    year: new Date().getFullYear(),
    personA: "",
    personB: "",
    totalMessages: 0,
    totalWords: 0,
    activeDays: 0,
    monthlyTotals: Array.from({ length: 12 }, () => 0),
    hourlyTotals: Array.from({ length: 24 }, () => 0),
    weekdayTotals: Array.from({ length: 7 }, () => 0),
    replyHistogram: Array.from({ length: 12 }, () => 0),
    replyMeanSeconds: 0,
    replyMedianSeconds: 0,
    replyWaits: [],
    wordCloud: [],
    topWords: [],
    emojiTop: [],
    stickers: [],
    topStickers: [],
    topics: [],
    topicSamples: [],
    topPhrases: [],
    laughQuotes: [],
    romanceQuotes: [],
    callsMedia: {
      whatsapp: [],
      media: [],
      gsmInsights: {
        callCount: 0,
        totalDuration: "0m",
        avgDuration: "0m",
        medianDuration: "0m",
        longestCall: "",
        shortestCall: "",
        peakHourByDuration: "",
        peakWeekdayByDuration: "",
        peakMonthByDuration: ""
      }
    }
  };

  const fileContents = `import type { Agg } from "../types";\n\nexport const agg: Agg = ${JSON.stringify(emptyAgg, null, 2)};\n`;
  fs.writeFileSync(outputPath, fileContents, "utf-8");
  console.log("No messages parsed. Generated an empty aggregate.");
  process.exit(0);
}

const senderCounts = new Map<string, number>();
const yearCounts = new Map<number, number>();
const monthlyTotals = Array.from({ length: 12 }, () => 0);
const hourlyTotals = Array.from({ length: 24 }, () => 0);
const weekdayTotals = Array.from({ length: 7 }, () => 0);
const activeDays = new Set<string>();

const emojiCounts = new Map<string, number>();
const wordCounts = new Map<string, number>();
const stickerCounts = new Map<string, number>();

let totalWords = 0;
let photoCount = 0;
let videoCount = 0;
let voiceCount = 0;

const gapSamples: GapSample[] = [];
const gapSeconds: number[] = [];
const replyHistogram = Array.from({ length: 12 }, () => 0);

messages.forEach((message, index) => {
  senderCounts.set(message.sender, (senderCounts.get(message.sender) ?? 0) + 1);
  yearCounts.set(message.ts.getFullYear(), (yearCounts.get(message.ts.getFullYear()) ?? 0) + 1);

  monthlyTotals[message.ts.getMonth()] += 1;
  hourlyTotals[message.ts.getHours()] += 1;
  const weekdayIndex = (message.ts.getDay() + 6) % 7;
  weekdayTotals[weekdayIndex] += 1;
  activeDays.add(`${message.ts.getFullYear()}-${pad(message.ts.getMonth() + 1)}-${pad(message.ts.getDate())}`);

  const emojis = message.text.match(emojiRegex) ?? [];
  emojis.forEach((emoji) => emojiCounts.set(emoji, (emojiCounts.get(emoji) ?? 0) + 1));

  const tokens = sanitizeTokens(message.text);
  totalWords += tokens.length;
  tokens.forEach((token) => {
    if (!stopwords.has(token) && token.length > 1) {
      wordCounts.set(token, (wordCounts.get(token) ?? 0) + 1);
    }
  });

  const lower = message.text.toLowerCase();
  if (
    /(\.jpe?g|\.png|\.heic|image omitted|photo omitted|<attached>)/i.test(lower)
  ) {
    photoCount += 1;
  }
  if (/(\.mp4|\.mov|\.mkv|\.avi|video omitted)/i.test(lower)) {
    videoCount += 1;
  }
  if (/(\.opus|\.ogg|\.m4a|\.mp3|\.wav|audio omitted|voice message|ptt)/i.test(lower)) {
    voiceCount += 1;
  }

  const stickerMatches = lower.match(/[\w.-]+\.webp/gi) ?? [];
  stickerMatches.forEach((match) => {
    const filename = match.split("/").pop() ?? match;
    stickerCounts.set(filename, (stickerCounts.get(filename) ?? 0) + 1);
  });

  if (index > 0) {
    const previous = messages[index - 1];
    if (previous.sender !== message.sender) {
      const diffSeconds = Math.max(0, Math.floor((message.ts.getTime() - previous.ts.getTime()) / 1000));
      gapSeconds.push(diffSeconds);
      gapSamples.push({ index, diffSeconds });
      const hourBucket = Math.min(Math.floor(diffSeconds / 3600), 11);
      replyHistogram[hourBucket] += 1;
    }
  }
});

const sortedSenders = [...senderCounts.entries()].sort((a, b) => b[1] - a[1]);
const personA = sortedSenders[0]?.[0] ?? "";
const personB = sortedSenders[1]?.[0] ?? "";

const year = [...yearCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? new Date().getFullYear();

const sortedWordCounts = [...wordCounts.entries()].sort((a, b) => b[1] - a[1]);
const wordCloud = sortedWordCounts.slice(0, 120).map(([word, count]) => ({ word, weight: count }));
const topWords = sortedWordCounts.slice(0, 20).map(([word, count]) => ({ word, count }));

const emojiTop = [...emojiCounts.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20)
  .map(([emoji, count]) => ({ emoji, count }));

const stickers = [...stickerCounts.entries()]
  .sort((a, b) => b[1] - a[1])
  .map(([filename, count]) => ({
    id: filename,
    label: filename.replace(/\.webp$/i, ""),
    count,
    sizeBytes: null,
    src: `/stickers/${filename}`
  }));

const stickerAssets = fs.existsSync(stickerAssetsPath)
  ? new Set(fs.readdirSync(stickerAssetsPath))
  : new Set<string>();
const stickerReportGroups = parseStickerReport();
const topStickers = stickerReportGroups.map((group, index) => {
  const uniqueFilenames = [...new Set(group.filenames)];
  const matchedFilename = uniqueFilenames.find((filename) => stickerAssets.has(filename));
  const src = matchedFilename ? `/stickers/${matchedFilename}` : null;

  return {
    id: matchedFilename ?? `sticker-${index + 1}`,
    label: matchedFilename ? matchedFilename.replace(/\.webp$/i, "") : "Sticker",
    count: group.count,
    sizeBytes: group.sizeBytes ?? null,
    src
  };
});

const stickerTotal = [...stickerCounts.values()].reduce((sum, value) => sum + value, 0);

const sortedGaps = gapSeconds.slice().sort((a, b) => a - b);
const replyMeanSeconds = gapSeconds.length
  ? Math.round(gapSeconds.reduce((sum, value) => sum + value, 0) / gapSeconds.length)
  : 0;
const replyMedianSeconds = gapSeconds.length
  ? sortedGaps.length % 2 === 1
    ? sortedGaps[Math.floor(sortedGaps.length / 2)]
    : Math.round((sortedGaps[sortedGaps.length / 2 - 1] + sortedGaps[sortedGaps.length / 2]) / 2)
  : 0;

const replyWaits = gapSamples
  .sort((a, b) => b.diffSeconds - a.diffSeconds)
  .slice(0, 5)
  .map((sample) => {
    const current = messages[sample.index];
    const previous = messages[sample.index - 1];
    const beforeMessages = messages
      .slice(Math.max(0, sample.index - 4), sample.index)
      .map((message) => ({ sender: message.sender, text: message.text, ts: message.tsLabel }));
    const afterMessages = messages
      .slice(sample.index, Math.min(messages.length, sample.index + 4))
      .map((message) => ({ sender: message.sender, text: message.text, ts: message.tsLabel }));

    return {
      waitSeconds: sample.diffSeconds,
      timestamp: formatDateTime(current.ts, current.hasSeconds),
      senderBefore: previous.sender,
      senderAfter: current.sender,
      beforeMessages,
      afterMessages
    };
  });

const agg: Agg = {
  year,
  personA,
  personB,
  totalMessages: messages.length,
  totalWords,
  activeDays: activeDays.size,
  monthlyTotals,
  hourlyTotals,
  weekdayTotals,
  replyHistogram,
  replyMeanSeconds,
  replyMedianSeconds,
  replyWaits,
  wordCloud,
  topWords,
  emojiTop,
  stickers,
  topStickers,
  topics: [],
  topicSamples: [],
  topPhrases: [],
  laughQuotes: [],
  romanceQuotes: [],
  callsMedia: {
    whatsapp: [{ label: "WhatsApp araması", value: "0" }],
    media: [
      { label: "Fotoğraf", value: photoCount.toLocaleString("tr-TR") },
      { label: "Video", value: videoCount.toLocaleString("tr-TR") },
      { label: "Ses", value: voiceCount.toLocaleString("tr-TR") },
      { label: "Sticker", value: stickerTotal.toLocaleString("tr-TR") }
    ],
    gsmInsights: {
      callCount: 0,
      totalDuration: "0m",
      avgDuration: "0m",
      medianDuration: "0m",
      longestCall: "",
      shortestCall: "",
      peakHourByDuration: "",
      peakWeekdayByDuration: "",
      peakMonthByDuration: ""
    }
  }
};

const fileContents = `import type { Agg } from "../types";\n\nexport const agg: Agg = ${JSON.stringify(agg, null, 2)};\n`;

fs.writeFileSync(outputPath, fileContents, "utf-8");
console.log(`Generated ${outputPath} from ${messages.length} messages.`);
