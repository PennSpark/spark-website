export default function NumberCard({
  number,
  label,
  color,
}: {
  number: string;
  label: string;
  color: string;
}) {
  return (
    <div
      className="
            w-50 h-50 pb-2 gap-2
            bg-white 
            border-black border-3
            rounded-[40px] 
            shadow-lg
            flex flex-col items-center justify-center
            font-sans
            hover:scale-105
            transition-transform duration-300
          "
    >
      {/* The large number */}
      <span id={color} className="text-[96px]">
        {number}
      </span>

      {/* The label text */}
      <div
        id="hanken"
        className="
              text-lg 
              font-medium 
              text-black
            "
      >
        {label}
      </div>
    </div>
  );
}
