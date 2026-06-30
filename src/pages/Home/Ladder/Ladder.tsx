import React from "react";

type Rung = {
    key: string;
    title: string;
    plain: string;
};

const RUNGS: Rung[] = [
    {
        key: "observe",
        title: "Observe",
        plain:
            "Start with intuition. Learn what the topic does, why it exists, and where it is used in the real world.",
    },
    {
        key: "understand",
        title: "Understand",
        plain:
            "Build the mental model. Break concepts into small pieces and connect them together.",
    },
    {
        key: "practice",
        title: "Practice",
        plain:
            "Apply the ideas through examples, exercises, and guided projects.",
    },
    {
        key: "master",
        title: "Master",
        plain:
            "Optimize, scale, and solve real-world problems confidently.",
    },
];

const Ladder = () => {
    return (
        <section
            id="path"
            className="py-10 border-b border-[var(--border)] w-max-[1200px] px-10"
        >
            <div className="container mx-auto px-4">
                {/* Eyebrow */}
                <span className="font-mono text-[13px] text-sky-400 tracking-wide">
          // the learning path
                </span>

                {/* Title */}
                <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                    Four rungs. Every topic climbs the same one.
                </h2>

                {/* Subtitle */}
                <p className="mt-5 max-w-3xl text-[14px] leading-7 text-[var(--muted)]">
                    Whatever you pick below — Python or Kubernetes,
                    HTML or System Design — it sits on this same
                    ladder. Know your rung, know what to expect.
                </p>

                {/* Ladder */}
                <div className="mt-14 flex flex-col">
                    {RUNGS.map((r, i) => (
                        <div
                            key={r.key}
                            className="relative flex gap-5 pb-10"
                        >
                            {/* Number */}
                            <div
                                className="
                  relative z-10
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-full
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  font-mono text-sm
                  text-sky-400
                "
                            >
                                {i + 1}
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="mb-1 text-lg font-bold">
                                    {r.title}
                                </h3>

                                <p className="max-w-[460px] text-[13.5px] leading-7 text-[var(--muted)]">
                                    {r.plain}
                                </p>
                            </div>

                            {/* Connector */}
                            {i < RUNGS.length - 1 && (
                                <div
                                    className="
                    absolute
                    left-[19px]
                    top-10
                    bottom-0
                    w-[1.5px]
                    bg-[var(--border)]
                  "
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ladder;