import { cn } from "../lib/utils";
import { Plus } from "lucide-react";

interface PlanCardProps {
  title: string;
  pricePerSession: string;
  totalPrice: string;
  icon: string;
  className?: string;
}

export const PlanCard = ({
  title,
  pricePerSession,
  totalPrice,
  icon,
  className,
}: PlanCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/20",
        "border border-white/10 shadow-xl",
        className
      )}
    >
      <div className="relative z-10 flex flex-col gap-4">
        <div className="mx-auto">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl">
            <img
              src={icon}
              alt={title}
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80 mb-4">{pricePerSession}</p>
          <p className="text-3xl font-bold text-white">€{totalPrice}</p>
        </div>
        {/*         <button className="mt-4 w-full bg-primary hover:bg-primary/80 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
          <Plus className="w-5 h-5" />
        </button> */}
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
};
