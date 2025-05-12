import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

function YouTube() {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <div className="relative">
            {!showPlayer ? (
                <button
                    onClick={() => setShowPlayer(true)}
                    className="group relative w-[460px] h-[240px] max-sm:w-[320px] max-sm:h-[168px] overflow-hidden rounded-lg shadow-md"
                    aria-label="Воспроизвести видео"
                >

                    <img
                        src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                        alt="Превью видео"
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />


                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform transition-all group-hover:scale-110">
                            <svg
                                className="w-8 h-8 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </button>
            ) : (
                <div className="w-[460px] h-[240px] max-sm:w-[320px] max-sm:h-[168px] rounded-lg overflow-hidden">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        width="100%"
                        height="100%"
                        controls={true}
                        playing={true}
                    />
                </div>
            )}
        </div>
    );
}

export default YouTube;