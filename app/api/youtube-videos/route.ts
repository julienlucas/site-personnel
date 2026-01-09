import { NextResponse } from "next/server";

export async function GET() {
  try {
    const videos = await getYouTubeVideos();
    return NextResponse.json(videos);
  } catch (error) {
    console.error("Erreur lors de la récupération des vidéos:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des vidéos" },
      { status: 500 }
    );
  }
}

async function getYouTubeVideos() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return [];
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&type=video&maxResults=3`
    );

    if (response.ok) {
      const data = await response.json();
      return (
        data.items?.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.medium.url,
          publishedAt: item.snippet.publishedAt,
        })) || []
      );
    }
  } catch (error) {
    console.error("Erreur YouTube:", error);
  }

  return [];
}

