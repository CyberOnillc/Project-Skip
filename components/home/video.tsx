'use client'
import { Play, PlayCircle } from "lucide-react";
import React, { useRef } from 'react';

const VideoPlayer = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current?.paused) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
    };

    return (
        <div className="relative overflow-hidden rounded-3xl text-center bg-gray-400 flex-1">
            <video ref={videoRef} controls={videoRef.current?.paused ? false : true} className="w-full">
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#7F56D9] to-[#21B573] text-white rounded-full p-4"
                onClick={handlePlay}
            >
                {/* You can use an SVG or any other custom play icon */}
                <Play ></Play>
            </button>
        </div>
    );
};

export default VideoPlayer;