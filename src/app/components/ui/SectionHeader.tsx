interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 relative inline-block">
        <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent drop-shadow-sm tracking-tight">
          {title}
        </span>
        {/* Unified Emerald underline */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      </h2>

      {subtitle && (
        <p className="max-w-2xl mx-auto text-base md:text-lg text-zinc-400 leading-relaxed font-light mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
