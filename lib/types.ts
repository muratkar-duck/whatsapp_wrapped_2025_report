export type ReplyWaitMessage = {
  sender: string;
  text: string;
  ts: string;
};

export type ReplyWaitExample = {
  waitSeconds: number;
  timestamp: string;
  senderBefore: string;
  senderAfter: string;
  beforeMessages: ReplyWaitMessage[];
  afterMessages: ReplyWaitMessage[];
};

export type WordCloudEntry = {
  word: string;
  weight: number;
};

export type EmojiEntry = {
  emoji: string;
  count: number;
};

export type StickerEntry = {
  id: string;
  label: string;
  count: number;
  sizeBytes: number | null;
  thumbUrl?: string;
  src?: string;
};

export type TopStickerEntry = {
  id: string;
  label: string;
  count: number;
  sizeBytes: number | null;
  src: string | null;
};

export type CallMetric = {
  label: string;
  value: string;
};

export type GsmInsights = {
  callCount: number;
  totalDuration: string;
  avgDuration: string;
  medianDuration: string;
  longestCall: string;
  shortestCall: string;
  peakHourByDuration: string;
  peakWeekdayByDuration: string;
  peakMonthByDuration: string;
};

export type WrappedAgg = {
  year: number;
  personA: string;
  personB: string;
  totalMessages: number;
  totalWords: number;
  activeDays: number;
  monthlyTotals: number[];
  hourlyTotals: number[];
  weekdayTotals: number[];
  replyHistogram: number[];
  replyMeanSeconds: number;
  replyMedianSeconds: number;
  replyWaits: ReplyWaitExample[];
  wordCloud: WordCloudEntry[];
  topWords: { word: string; count: number }[];
  emojiTop: EmojiEntry[];
  stickers: StickerEntry[];
  topStickers: TopStickerEntry[];
  topics: string[];
  topicSamples: { topic: string; sample: string }[];
  topPhrases: { phrase: string; count: number }[];
  laughQuotes: string[];
  romanceQuotes: string[];
  callsMedia: {
    whatsapp: CallMetric[];
    media: CallMetric[];
    gsmInsights: GsmInsights;
  };
};

export type Agg = WrappedAgg;
