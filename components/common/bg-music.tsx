"use client";
import {
  Music,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function BgMusic() {
  const playlist = useMemo(
    () => [
      "/music/this-life.mp3",
      "/music/we-are.mp3",
      "/music/shine.mp3",
      "/music/mortals.mp3",
      "/music/iris.mp3",
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [muted, setMuted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const nextSong = useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % playlist.length),
    [playlist.length]
  );

  const prevSong = useCallback(
    () =>
      setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length),
    [playlist.length]
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = playlist[currentIndex];
    audio.load();
    audio.volume = 0.5;
    audio.muted = muted;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const onClick = () => {
          audio.play();
          document.removeEventListener("click", onClick);
        };
        document.addEventListener("click", onClick);
      });
    }

    const handleEnded = () => nextSong();
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [playlist, currentIndex, muted, nextSong]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <>
      <audio ref={audioRef} loop={false} preload="auto" />

      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-50 bg-background/30 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/20 rounded-full p-3 hover:scale-110 transition"
          title="เปิดเครื่องเล่นเพลง"
        >
          <Music className="w-5 h-5 text-primary" />
        </button>
      ) : (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-background/20 backdrop-blur-2xl border border-white/30 shadow-lg shadow-black/20 rounded-full px-4 py-2 transition-all">
          <button
            onClick={prevSong}
            title="Previous Song"
            className="hover:scale-110 transition text-foreground/80 hover:text-foreground"
          >
            <SkipBack className="w-5 h-5" />
          </button>
          <button
            onClick={toggleMute}
            title="Mute/Unmute"
            className="hover:scale-110 transition text-foreground/80 hover:text-foreground"
          >
            {muted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={nextSong}
            title="Next Song"
            className="hover:scale-110 transition text-foreground/80 hover:text-foreground"
          >
            <SkipForward className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            title="ซ่อนแผงควบคุม"
            className="hover:scale-110 transition text-foreground/80 hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
}
