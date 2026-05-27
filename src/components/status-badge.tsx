import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "deployed" | "open-source" | "in-development";
}

const statusConfig = {
  deployed: {
    label: "Deployed",
    className: "bg-green-500/10 text-green-500 border-green-500/20",
  },
  "open-source": {
    label: "Open Source",
    className: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  "in-development": {
    label: "In Development",
    className: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        config.className
      )}
    >
      {config.label}
    </span>
  );
}
