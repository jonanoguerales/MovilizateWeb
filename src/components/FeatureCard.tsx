import { cn } from "../lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export const FeatureCard = ({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "group relative cursor-default overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/20",
        "border border-white/10 shadow-xl",
        className
      )}
    >
      <div className="relative z-10 flex flex-col gap-4">
        <div className="text-primary flex h-12 w-12 items-center justify-center rounded-xl style-icon">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
};
