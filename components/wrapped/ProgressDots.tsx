interface ProgressDotsProps {
  total: number;
  activeIndex: number;
}

export default function ProgressDots({ total, activeIndex }: ProgressDotsProps) {
  return (
    <div className="fixed right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={`dot-${index}`}
          className={`h-2 w-2 rounded-full transition-all ${
            index === activeIndex ? "bg-white scale-125" : "bg-white/40"
          }`}
        />
      ))}
    </div>
  );
}
