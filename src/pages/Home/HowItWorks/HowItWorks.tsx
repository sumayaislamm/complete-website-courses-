import React from "react";

type Step = {
  num: string;
  title: string;
  desc: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Pick a topic",
    desc: "Choose anything you want to learn — from HTML and Python to Kubernetes and System Design.",
  },
  {
    num: "02",
    title: "Find your level",
    desc: "Every topic follows the same learning ladder, so you always know where to start.",
  },
  {
    num: "03",
    title: "Learn deeply",
    desc: "Read explanations designed to be simple enough for beginners and useful enough for professionals.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-5 border-b border-[var(--border)] bg-[var(--bg-soft)]"
    >
      <div className="container mx-auto px-24 ">
        {/* Eyebrow */}
        <span className="font-mono text-[13px] text-sky-400 tracking-wide">
          // how it works
        </span>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-5xl font-bold">
          Three steps, no fluff
        </h2>

        {/* Cards */}
        <div className="grid grid-rows-3 gap-4 mt-10 px-10">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="
                h-full
                rounded-xl
                border border-[var(--border)]
                bg-[var(--surface)]
                p-7
              "
            >
              {/* Number */}
              <div className="font-mono text-[13px] text-sky-400 mb-4">
                {step.num}
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-bold mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[13.5px] leading-7 text-[var(--muted)]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;