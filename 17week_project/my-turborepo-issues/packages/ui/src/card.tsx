import { JSX } from "react/jsx-runtime";

import React from "react";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div className="border border-slate-300 p-8 bg-white rounded-xl bg-[#ededed]">
      <h1 className="border-b border-slate-300 pb-2 text-xl"> {title}</h1>
      <div>{children}</div>
    </div>
  );
}