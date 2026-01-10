"use client";

import React, { useState } from "react";
import { programs } from "./programs";

export default function Home() {
  const [copiedId, setCopiedId] = useState(null);

  const copyCode = async (id, code) => {
    await navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-y-auto scrollbar-hide">
      {/* 🔹 Container */}
      <div className="max-w-5xl mx-auto p-6 sm:p-6 px-4 sm:px-6 space-y-8">

        {/* 🔹 ALL PROGRAMS */}
        {programs.map((prog) => (
          <div
            key={prog.id}
            className="bg-zinc-900 p-5 sm:p-5 rounded-xl border border-gray-800"
          >
            {/* Header */}
            <div className="flex sm:flex-row flex-col gap-3 sm:gap-0 justify-between items-start sm:items-center mb-3">
              <h2 className="text-sm text-gray-300">
                {prog.title}
              </h2>

              <button
                onClick={() => copyCode(prog.id, prog.code)}
                className={`flex items-center gap-1 px-3 py-1 text-xs rounded transition-all duration-300 w-fit
                  ${
                    copiedId === prog.id
                      ? "bg-green-600 scale-105"
                      : "bg-blue-600 hover:bg-blue-700"
                  }
                `}
              >
                {copiedId === prog.id ? (
                  <>
                    <span className="text-sm">✓</span>
                    <span>Copied</span>
                  </>
                ) : (
                  "Copy"
                )}
              </button>
            </div>

            {/* Code */}
            <textarea
              readOnly
              defaultValue={prog.code}
              className={`
                w-full 
                bg-black 
                text-green-400 
                p-4 
                rounded 
                resize-none 
                outline-none 
                border 
                border-gray-700
                ${prog.height}
                sm:${prog.height}
                h-48 sm:h-auto
              `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
