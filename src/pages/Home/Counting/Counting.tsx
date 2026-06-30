import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type CounterProps = {
  end: number;
  start: boolean;
  suffix?: string;
};

function Counter({
  end,
  start,
  suffix = "",
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const step = end / 60;

    const timer = setInterval(() => {
      current += step;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end, start]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

const Counting = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      value: 42,
      label: "topics mapped",
    },
    {
      value: 12,
      label: "categories",
    },
    {
      value: 320,
      label: "chapters written",
    },
    {
      value: 180,
      label: "hours of reading",
      suffix: "h",
    },
  ];

  return (
    <section
      ref={ref}
      className="border-y border-accent-content bg-base-content my-4 "
    >
      <div className="">
        <div className="my-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center rounded-xl p-2 bg-base-content shadow-sm"
            >
              <div className="font-serif text-[clamp(30px,5vw,44px)] font-semibold leading-none">
                <Counter
                  end={s.value}
                  start={inView}
                  suffix={s.suffix ?? ""}
                />
              </div>

              <div className="font-mono text-[11px] text-slate-500 mt-3 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counting;