import { NextResponse } from "next/server";

export async function GET() {
  try {
    const stats = {
      instagram: await getInstagramFollowers(),
      tiktok: await getTikTokFollowers(),
      linkedin: await getLinkedInFollowers(),
      youtube: await getYouTubeSubscribers(),
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Erreur lors de la récupération des stats:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des statistiques" },
      { status: 500 }
    );
  }
}

async function getInstagramFollowers(): Promise<number> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!accessToken) {
    return 1950;
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me?fields=followers_count&access_token=${accessToken}`
    );
    if (response.ok) {
      const data = await response.json();
      return data.followers_count || 8200;
    }
  } catch (error) {
    console.error("Erreur Instagram:", error);
  }
  return 1950;
}

async function getTikTokFollowers(): Promise<number> {
  const accessToken = process.env.TIKTOK_ACCESS_TOKEN;
  if (!accessToken) {
    return 3800;
  }

  try {
    const response = await fetch(
      `https://open.tiktokapis.com/v2/user/info/?fields=followers_count`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data.data?.user?.followers_count || 15300;
    }
  } catch (error) {
    console.error("Erreur TikTok:", error);
  }
  return 3800;
}

async function getLinkedInFollowers(): Promise<number> {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  if (!accessToken) {
    return 13000;
  }

  try {
    const response = await fetch(
      `https://api.linkedin.com/v2/networkSizes/edge=CompanyFollowedByMember`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data.firstDegreeSize || 10500;
    }
  } catch (error) {
    console.error("Erreur LinkedIn:", error);
  }
  return 13000;
}

async function getYouTubeSubscribers(): Promise<number> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return 11400;
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
    );
    if (response.ok) {
      const data = await response.json();
      return parseInt(data.items?.[0]?.statistics?.subscriberCount || "0");
    }
  } catch (error) {
    console.error("Erreur YouTube:", error);
  }
  return 11400;
}

