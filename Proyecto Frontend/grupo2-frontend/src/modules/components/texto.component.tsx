"use client";

import React, { useEffect, useRef, useState } from "react";

interface Props {
  title: string;
  date: string;
  description: string;
  isLast?: boolean;
}

export default function Texto({ title, date, description, isLast }: Props) {
  const achievementProperties = useRef<HTMLDivElement>(null);
  const [spanHeight, setSpanHeight] = useState(0);

  useEffect(() => {
    if (achievementProperties.current) {
      const currentHeight = achievementProperties.current.clientHeight;
      setSpanHeight(currentHeight);
    }
  }, []);

  return (
    <article className="flex gap-5 mt-5" ref={achievementProperties}>
      <div className="flex items-center justify-center h-1 w-1 bg-amber-400 p-2 rounded-full relative ml-5">
        <span
          style={{
            height: `${spanHeight + 10}px`,
            bottom: `-${spanHeight + 10}px`,
          }}
          className={`${isLast ? "hidden" : ""} border-r border-neutral-700 w-[1px] absolute`}
        ></span>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-black font-semibold">{title}</h2>
        <span className="text-black">{date}</span>
        <p className="text-black">{description}</p>
      </div>
    </article>
  );
}
