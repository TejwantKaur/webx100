export default function Avatar({
  name,
  size = 7,
}: {
  name: string;
  size?: number;
}) {
  const sizes: Record<number, string> = {
    5: "w-5 h-5",
    6: "w-6 h-6",
    7: "w-7 h-7",
    8: "w-8 h-8",
    9: "w-9 h-9",
    10: "w-10 h-10",
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center ${sizes[size]} overflow-hidden bg-body rounded-full`}
    >
      <div className="text-neutral-tertiary">{name[0].toUpperCase()}</div>
    </div>
  );
}
