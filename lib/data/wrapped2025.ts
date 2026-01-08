import { WrappedAgg } from "../types";

export const wrapped2025: WrappedAgg = {
  year: 2025,
  personA: "Murat",
  personB: "Rümeysa",
  totalMessages: 48219,
  totalWords: 318904,
  activeDays: 329,
  monthlyTotals: [1200, 1800, 2400, 3200, 4100, 5100, 4800, 4500, 5200, 5600, 4900, 4400],
  hourlyTotals: [120, 90, 70, 50, 40, 60, 180, 320, 540, 680, 820, 980, 1050, 1120, 980, 920, 1040, 1160, 1380, 1520, 1680, 1220, 780, 360],
  weekdayTotals: [6200, 7100, 7600, 7800, 8400, 9000, 9100],
  replyHistogram: [4, 8, 14, 18, 26, 32, 30, 28, 22, 18, 16, 12],
  replyMeanSeconds: 1430,
  replyMedianSeconds: 820,
  replyWaits: [
    {
      waitSeconds: 6752,
      timestamp: "2025-01-12 23:14:09",
      senderBefore: "Murat",
      senderAfter: "Rümeysa",
      beforeMessages: [
        { sender: "Murat", text: "Otel check-in saatini teyit ettin mi?", ts: "2025-01-12 23:12:32" },
        { sender: "Murat", text: "Sabah erken çıkacağız ya", ts: "2025-01-12 23:13:01" }
      ],
      afterMessages: [
        { sender: "Rümeysa", text: "Evet, 14:00 dediler. Merak etme.", ts: "2025-01-13 01:06:10" },
        { sender: "Rümeysa", text: "Alarmı da kurdum ✅", ts: "2025-01-13 01:06:32" }
      ]
    },
    {
      waitSeconds: 3152,
      timestamp: "2025-03-03 19:42:55",
      senderBefore: "Rümeysa",
      senderAfter: "Murat",
      beforeMessages: [
        { sender: "Rümeysa", text: "Kahve mi çay mı?", ts: "2025-03-03 19:40:12" },
        { sender: "Rümeysa", text: "Buluşma yerini seç sen", ts: "2025-03-03 19:41:00" }
      ],
      afterMessages: [
        { sender: "Murat", text: "Latte diyelim, sahildeki yerde buluşalım.", ts: "2025-03-03 20:34:24" },
        { sender: "Murat", text: "Geliyorum 🚶", ts: "2025-03-03 20:35:02" }
      ]
    },
    {
      waitSeconds: 4540,
      timestamp: "2025-05-18 09:05:44",
      senderBefore: "Murat",
      senderAfter: "Rümeysa",
      beforeMessages: [
        { sender: "Murat", text: "Toplantıdan çıktım", ts: "2025-05-18 09:04:12" },
        { sender: "Murat", text: "Marketten bir şey lazım mı?", ts: "2025-05-18 09:04:55" },
        { sender: "Murat", text: "Evde misin?", ts: "2025-05-18 09:05:12" }
      ],
      afterMessages: [
        { sender: "Rümeysa", text: "Süt ve muz alabilir misin?", ts: "2025-05-18 10:21:32" },
        { sender: "Rümeysa", text: "Ben de birazdan çıkacağım", ts: "2025-05-18 10:21:48" }
      ]
    },
    {
      waitSeconds: 5221,
      timestamp: "2025-07-07 16:33:18",
      senderBefore: "Rümeysa",
      senderAfter: "Murat",
      beforeMessages: [
        { sender: "Rümeysa", text: "Sunum linkini attım mı?", ts: "2025-07-07 16:30:02" },
        { sender: "Rümeysa", text: "Bir bakar mısın", ts: "2025-07-07 16:31:10" }
      ],
      afterMessages: [
        { sender: "Murat", text: "Şimdi gördüm, taslak iyi.", ts: "2025-07-07 17:57:19" },
        { sender: "Murat", text: "Son slayta bir grafik ekleyelim.", ts: "2025-07-07 17:57:51" },
        { sender: "Murat", text: "PDF'yi de çıkartırım.", ts: "2025-07-07 17:58:03" }
      ]
    },
    {
      waitSeconds: 2230,
      timestamp: "2025-11-22 11:02:48",
      senderBefore: "Murat",
      senderAfter: "Rümeysa",
      beforeMessages: [
        { sender: "Murat", text: "Akşam film mi dizi mi?", ts: "2025-11-22 11:01:02" },
        { sender: "Murat", text: "Yeni bölüm çıkmış", ts: "2025-11-22 11:02:01" }
      ],
      afterMessages: [
        { sender: "Rümeysa", text: "Film seçelim, ben de liste yapmıştım.", ts: "2025-11-22 11:39:22" },
        { sender: "Rümeysa", text: "Komedi olsun 🎬", ts: "2025-11-22 11:39:45" }
      ]
    }
  ],
  wordCloud: [
    { word: "tamam", weight: 48 },
    { word: "geliyorum", weight: 42 },
    { word: "kahve", weight: 36 },
    { word: "günaydın", weight: 32 },
    { word: "akşam", weight: 30 },
    { word: "yolda", weight: 28 },
    { word: "naber", weight: 26 },
    { word: "bakarız", weight: 24 },
    { word: "tam", weight: 22 },
    { word: "evdeyim", weight: 20 }
  ],
  topWords: [
    { word: "tamam", count: 840 },
    { word: "geliyorum", count: 710 },
    { word: "kahve", count: 520 },
    { word: "günaydın", count: 480 },
    { word: "akşam", count: 420 },
    { word: "yolda", count: 390 },
    { word: "naber", count: 360 },
    { word: "bakarız", count: 330 },
    { word: "evdeyim", count: 300 },
    { word: "tam", count: 280 },
    { word: "sabah", count: 270 },
    { word: "yemek", count: 260 }
  ],
  emojiTop: [
    { emoji: "😂", count: 620 },
    { emoji: "❤️", count: 540 },
    { emoji: "😍", count: 430 },
    { emoji: "🥳", count: 360 },
    { emoji: "☕", count: 320 }
  ],
  // NOTE: v2 ingestion will dedupe same stickers by (sizeBytes + content hash) because filenames may differ.
  stickers: [
    { id: "sticker-1", label: "Happy", count: 92, sizeBytes: 48124 },
    { id: "sticker-2", label: "Coffee", count: 80, sizeBytes: 39812 },
    { id: "sticker-3", label: "Dance", count: 74, sizeBytes: 51244 },
    { id: "sticker-4", label: "Bye", count: 68, sizeBytes: 44201 },
    { id: "sticker-5", label: "Mood", count: 61, sizeBytes: 53002 },
    { id: "sticker-6", label: "LOL", count: 58, sizeBytes: 46210 }
  ],
  topStickers: [
    { id: "sticker-1", label: "Happy", count: 92, sizeBytes: 48124, src: null },
    { id: "sticker-2", label: "Coffee", count: 80, sizeBytes: 39812, src: null },
    { id: "sticker-3", label: "Dance", count: 74, sizeBytes: 51244, src: null },
    { id: "sticker-4", label: "Bye", count: 68, sizeBytes: 44201, src: null },
    { id: "sticker-5", label: "Mood", count: 61, sizeBytes: 53002, src: null },
    { id: "sticker-6", label: "LOL", count: 58, sizeBytes: 46210, src: null }
  ],
  topics: [
    "Travel planning",
    "Dinner ideas",
    "Work check-ins",
    "Family news",
    "Weekend plans",
    "Project brainstorms",
    "Memes",
    "Health reminders"
  ],
  topicSamples: [
    { topic: "Travel planning", sample: "Şehir içi kaçamağı için rota çıkardım." },
    { topic: "Dinner ideas", sample: "Akşam için mantarlı makarna öneriyorum." },
    { topic: "Work check-ins", sample: "Sunum 3'te hazır, feedback bekliyorum." }
  ],
  topPhrases: [
    { phrase: "Ben yoldayım", count: 182 },
    { phrase: "Biraz gecikeceğim", count: 164 },
    { phrase: "Tamamdır", count: 152 },
    { phrase: "Kahve molası?", count: 138 },
    { phrase: "İyi geceler", count: 120 }
  ],
  laughQuotes: [
    "Bunu okuyunca kahvemi püskürttüm 😂",
    "Tam bir sitcom sahnesi gibiydi",
    "Gülmekten yazamadım"
  ],
  romanceQuotes: [
    "Günün en güzel anı seni görmekti.",
    "Yanımdayken her şey kolaylaşıyor.",
    "Şarkılar bile senin gibi değil.",
    "Bu şehirde en sevdiğim yer senin yanın."
  ],
  callsMedia: {
    whatsapp: [
      { label: "WhatsApp araması", value: "48" },
      { label: "Toplam süre", value: "9h 22m" }
    ],
    media: [
      { label: "Fotoğraf", value: "3,240" },
      { label: "Video", value: "412" },
      { label: "Ses", value: "1,204" },
      { label: "Sticker", value: "1,580" }
    ],
    gsmInsights: {
      callCount: 240,
      totalDuration: "73h 8m 54s",
      avgDuration: "18m 17s",
      medianDuration: "10m 6s",
      longestCall: "2h at 2025-06-22 21:37:11",
      shortestCall: "10s at 2025-11-19 09:41:17",
      peakHourByDuration: "21:00",
      peakWeekdayByDuration: "Saturday",
      peakMonthByDuration: "2025-10 (15h 35m 06s)"
    }
  }
};
