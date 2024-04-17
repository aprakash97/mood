'use client';
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {

  return (
    <div className="w-screen h-screen bg-black flex justify-center
    items-center text-white">
      <div className="w-full max-w-[650px] mx-auto">
        <h1 className="mb-4 text-6xl ">The Best Journal App</h1>
        <p className="text-2xl text-white/70 mb-4">Tracking your mood based on the AI</p>


        <div>
          <Link href="/journal">
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
