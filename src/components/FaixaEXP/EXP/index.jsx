import CountUp from "react-countup";

export function Exp({ time, text, plus, complement }) {
  return (
    <div className="w-56 text-center text-sm space-y-2 text-white">
      <div className="flex justify-center gap-2">
        <p className="text-5xl font-bold text-violet-700">{plus}</p>
        <CountUp
          className="text-5xl font-bold text-violet-700"
          end={time}
          duration={3.75}
        />
        <p className="text-5xl font-bold text-violet-700"> {complement}</p>
      </div>
      <p className="text-white">{text}</p>
    </div>
  );
}
