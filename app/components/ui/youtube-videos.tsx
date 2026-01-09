"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

export default function YouTubeVideos() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch("/api/youtube-videos");
        if (response.ok) {
          const data = await response.json();
          setVideos(data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des vidéos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <section className="max-w-[1100px] mx-auto mt-24 px-4 md:px-8">
        <h2 className="mb-8 text-3xl font-bold text-black dark:text-zinc-50">
          Dernières vidéos
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group cursor-pointer overflow-hidden rounded-lg bg-zinc-100 transition-transform dark:bg-zinc-900 animate-pulse"
            >
              <div className="aspect-video"></div>
              <div className="p-4">
                <div className="h-4 rounded mb-2"></div>
                <div className="h-3 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (videos.length === 0) {
    return (
      <section className="max-w-[1100px] mx-auto mt-24 px-4 md:px-8">
        <h2 className="mb-8 text-3xl font-bold text-black dark:text-zinc-50">
          Dernières vidéos
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group cursor-pointer overflow-hidden rounded-lg bg-zinc-100 transition-transform dark:bg-zinc-900"
            >
              <div className="aspect-video bg-zinc-300 dark:bg-zinc-700"></div>
              <div className="p-4">
                <h3 className="font-semibold text-black">
                  Titre de la vidéo {i}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Description de la vidéo...
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-[1100px] mx-auto mt-24 px-4 md:px-8">
      <h2 className="mb-8 text-3xl font-bold text-black dark:text-zinc-50">
        Dernières vidéos
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer overflow-hidden rounded-lg bg-zinc-100 transition-transform dark:bg-zinc-900"
          >
            <div className="relative aspect-video bg-zinc-300 dark:bg-zinc-700">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-black dark:text-zinc-50 line-clamp-2">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                {video.description || "Aucune description disponible"}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

