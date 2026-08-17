"use client";
import { useEffect } from "react";
export default function Error({reset}:{error:Error & {digest?:string};reset:()=>void}){useEffect(()=>{},[]);return <div className="container-k flex min-h-[65vh] flex-col items-center justify-center text-center"><p className="text-xs uppercase tracking-[.25em] text-pink-300">Something went wrong</p><h1 className="mt-4 text-3xl font-semibold">Please try again.</h1><button onClick={()=>reset()} className="pink-button mt-7 rounded-xl px-5 py-3 font-semibold">Retry</button></div>}
