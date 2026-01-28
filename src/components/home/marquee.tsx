import { Sparkles, Truck, Tag, Gift, Zap } from "lucide-react";

export function MarqueeBar() {
  const announcements = [
    { icon: Tag, text: "Summer Sale – Up to 50% Off" },
    { icon: Truck, text: "Free Shipping on Orders Over $75" },
    { icon: Gift, text: "Buy 2 Get 1 Free on Selected Items" },
    { icon: Sparkles, text: "New Arrivals – Premium Car Care" },
    { icon: Zap, text: "Limited Time Offer" },
  ];

  return (
    <div className="relative overflow-hidden bg-slate-900 border-y border-yellow-400/20">
      {/* subtle highlight line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

      <div className="flex w-max animate-marquee">
        {[...announcements, ...announcements].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-8 py-3 whitespace-nowrap"
            >
              {/* icon */}
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-yellow-400/10 text-yellow-400">
                <Icon className="h-4 w-4" />
              </div>

              {/* text */}
              <span className="text-sm font-semibold tracking-wide text-slate-100">
                {item.text}
              </span>

              {/* separator */}
              <span className="mx-2 text-yellow-400/40">•</span>
            </div>
          );
        })}
      </div>

      {/* bottom highlight */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
    </div>
  );
}
