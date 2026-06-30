import React, { useEffect, useState } from 'react';
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    const totalCourses = 42;
    const available = 3;
    const [done, setDone] = useState(false);

    return (
        <div className="mt-5">
            <div className="mockup-browser pointer-events-none bg-[image:var(--bg-glow)] w-[97%] mx-auto border border-base-content py-3">

                <div className="grid text-sm ml-10  ">
                    <div
                        className="inline-block font-mono text-[11.5px] tracking-[1.5px] bg-[var(--muted)] text-[var(--text)] border border-[var(--border)] rounded-[20px] pl-3.5 py-1.5 mb-6.5 w-60">
                        <span>
                            One hub. Every

                            <span className="text-rotate ml-2">
                                <span>
                                    <span className="bg-teal-400 text-teal-800 px-2 rounded-full ">language.</span>
                                    <span className="bg-green-400 text-green-800 px-2 rounded-full">level.</span>
                                    <span className="bg-blue-400 text-blue-800 px-2  rounded-full">Challenge.</span>
                                </span>
                            </span>
                        </span>
                    </div>


                </div>
                <h1 className="font-sans font-bold text-[clamp(32px,6vw,60px)] leading-[1.12] tracking-[-1.8px] mb-6.5 mx-10">
                    Explained so a kid gets it.
                    <br />
                    <span className="font-serif font-medium italic text-slate-300">
                        Deep enough a pro keeps it.
                    </span>
                </h1>
                <div className=" mx-10 mt-12 items-start">

                    {/* Terminal */}
                    <div>
                        <div className="bg-base-content border border-base-300 rounded-xl overflow-hidden shadow-2xl h-full">

                            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-base-300">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />

                                <span className="ml-2 font-mono text-[11px] text-slate-500">
                                    hub — zsh
                                </span>
                            </div>

                            <div className="p-5 font-mono text-[13px] min-h-[120px]">
                                <div>
                                    <span className="text-green-400">
                                        guest@hub
                                    </span>

                                    <span className="text-slate-500">
                                        :~${" "}
                                    </span>

                                    <TypeAnimation
                                        sequence={[
                                            "learn --path=fullstack --level=pro",
                                            () => setDone(true),
                                        ]}
                                        speed={65}
                                        cursor={true}
                                        repeat={0}
                                        className="inline"
                                    />
                                </div>

                                {done && (
                                    <div className="mt-3">
                                        <div className="text-green-300 text-[12px] leading-8">
                                            ✓ {totalCourses} topics catalogued
                                        </div>

                                        <div className="text-green-300 text-[12px] leading-8">
                                            ✓ {available} ready to read now
                                        </div>

                                        <div className="text-slate-500 text-[12px] leading-8">
                                            # scroll for the full map
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    <div>
                        <div className="bg-base-content mt-4 border border-base-300 border-l-[3px] border-l-yellow-400 rounded-r-xl rounded-l-sm p-7 h-full flex flex-col justify-center">
                            <p className="font-serif text-[17px] font-medium leading-[1.55] text-slate-200 mb-4">
                                "If a five-year-old and a senior engineer both read
                                the same paragraph and both walk away understanding
                                it — that's the only bar this hub has to clear."
                            </p>

                            <span className="font-mono text-[11px] text-slate-500">
                                — the one rule every course is written under
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;