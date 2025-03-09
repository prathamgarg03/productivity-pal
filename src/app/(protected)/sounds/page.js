"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

// List of sound files
const soundList = [
    { name: "Rain Sounds", file: "/audio/rain.mp3" },
    { name: "White Noise", file: "/sounds/white-noise.mp3" },
    { name: "Forest Ambience", file: "/sounds/forest.mp3" },
    { name: "Cafe Background", file: "/sounds/cafe.mp3" },
];

export default function SoundsPage() {
    const [currentSound, setCurrentSound] = useState(null);
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (!audioRef.current) return;

        const updateProgress = () => {
            const audio = audioRef.current;
            if (audio) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        const interval = setInterval(updateProgress, 500);
        return () => clearInterval(interval);
    }, [isPlaying]);

    const playSound = (sound) => {
        if (currentSound === sound.name) {
            // Toggle play/pause if the same sound is clicked again
            if (audioRef.current.paused) {
                audioRef.current.play();
                setIsPlaying(true);
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        } else {
            if (audioRef.current) {
                audioRef.current.pause(); // Stop any existing audio
            }
            const newAudio = new Audio(sound.file);
            audioRef.current = newAudio;
            setCurrentSound(sound.name);
            setIsPlaying(true);
            setProgress(0);
            newAudio.play();

            newAudio.ontimeupdate = () => {
                setProgress((newAudio.currentTime / newAudio.duration) * 100);
            };

            newAudio.onended = () => {
                setIsPlaying(false);
                setProgress(0);
            };
        }
    };

    const handleSeek = (e) => {
        if (!audioRef.current) return;
        const newTime = (e.nativeEvent.offsetX / e.target.clientWidth) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Focus Sounds</h1>
            <p className="text-gray-600 mb-6">Listen to ambient sounds to improve focus and productivity.</p>

            <div className="space-y-4">
                {soundList.map((sound, index) => (
                    <Card key={index} className="p-4">
                        <CardContent className="flex flex-col space-y-2">
                            <div className="flex justify-between items-center">
                                <p className="text-lg font-medium">{sound.name}</p>

                                {currentSound === sound.name && isPlaying ? (
                                    <Button variant="destructive" onClick={() => playSound(sound)}>
                                        <Pause className="h-5 w-5 mr-2" />
                                        Pause
                                    </Button>
                                ) : (
                                    <Button onClick={() => playSound(sound)}>
                                        <Play className="h-5 w-5 mr-2" />
                                        Play
                                    </Button>
                                )}
                            </div>

                            {currentSound === sound.name && (
                                <div className="relative h-2 bg-gray-200 rounded-md w-full cursor-pointer" onClick={handleSeek}>
                                    <div
                                        className="absolute top-0 left-0 h-2 bg-indigo-500 rounded-md"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
