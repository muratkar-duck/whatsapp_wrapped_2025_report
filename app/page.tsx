import WrappedShell from "@/components/wrapped/WrappedShell";
import Section from "@/components/wrapped/Section";
import CoverSection from "@/components/sections/01Cover";
import SummarySection from "@/components/sections/02Summary";
import TempoSection from "@/components/sections/03Tempo";
import MonthlySection from "@/components/sections/04Monthly";
import HourlySection from "@/components/sections/05Hourly";
import WeekdaySection from "@/components/sections/06Weekday";
import ReplyTimeSection from "@/components/sections/07ReplyTime";
import StreaksSection from "@/components/sections/08Streaks";
import BusiestCalmestSection from "@/components/sections/09BusiestCalmest";
import WordCloudSection from "@/components/sections/10WordCloud";
import EmojisStickersSection from "@/components/sections/11EmojisStickers";
import TopicsSection from "@/components/sections/12Topics";
import TopPhrasesSection from "@/components/sections/13TopPhrases";
import LaughSection from "@/components/sections/14Laugh";
import RomanceSection from "@/components/sections/15Romance";
import CallsMediaSection from "@/components/sections/16CallsMedia";
import DatesSection from "@/components/sections/17Dates";
import WeeklyHighlightsSection from "@/components/sections/18WeeklyHighlights";
import ClosingSection from "@/components/sections/19Closing";
import ArchiveReadySection from "@/components/sections/20ArchiveReady";

const sections = [
  { id: "cover", component: <CoverSection /> },
  { id: "summary", component: <SummarySection /> },
  { id: "tempo", component: <TempoSection /> },
  { id: "monthly", component: <MonthlySection /> },
  { id: "hourly", component: <HourlySection /> },
  { id: "weekday", component: <WeekdaySection /> },
  { id: "reply-time", component: <ReplyTimeSection /> },
  { id: "streaks", component: <StreaksSection /> },
  { id: "busiest", component: <BusiestCalmestSection /> },
  { id: "word-cloud", component: <WordCloudSection /> },
  { id: "emoji-stickers", component: <EmojisStickersSection /> },
  { id: "topics", component: <TopicsSection /> },
  { id: "top-phrases", component: <TopPhrasesSection /> },
  { id: "laugh", component: <LaughSection /> },
  { id: "romance", component: <RomanceSection /> },
  { id: "calls-media", component: <CallsMediaSection /> },
  { id: "dates", component: <DatesSection /> },
  { id: "weekly", component: <WeeklyHighlightsSection /> },
  { id: "closing", component: <ClosingSection /> },
  { id: "archive", component: <ArchiveReadySection /> }
];

export default function HomePage() {
  return (
    <WrappedShell totalSections={sections.length}>
      {sections.map((section) => (
        <Section key={section.id} id={section.id}>
          {section.component}
        </Section>
      ))}
    </WrappedShell>
  );
}
