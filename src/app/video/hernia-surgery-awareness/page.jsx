"use client";
import { useEffect, useRef } from "react";

export default function VideoHerniaAwareness() {
  const videoRef = useRef(null);

  useEffect(() => {
    const playOnInteraction = () => {
      videoRef.current.play().catch(() => {});
      window.removeEventListener("click", playOnInteraction);
    };
    window.addEventListener("click", playOnInteraction);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
        <source
          src="https://drshaziawaghoo.com/vedio1.mp4"
          type="video/mp4"
        />
    </div>
  );
}
