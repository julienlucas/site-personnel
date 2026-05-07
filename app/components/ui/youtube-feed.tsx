interface Video {
  id: string;
  title: string;
  published: string;
  thumb: string;
}

const CHANNEL_ID = "UCeMpUl1Y-1pPHbHLR9A-FBg";

async function isShort(id: string): Promise<boolean> {
  try {
    const res = await fetch(`https://www.youtube.com/shorts/${id}`, {
      method: "HEAD",
      redirect: "follow",
      next: { revalidate: 86400 },
    });
    // YouTube redirects /shorts/<id> -> /watch?v=<id> for non-shorts.
    // If the final URL still contains "/shorts/", it's a real Short.
    return res.url.includes("/shorts/");
  } catch {
    return false;
  }
}

async function fetchVideos(limit = 6): Promise<Video[]> {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];
    const xml = await res.text();

    // Pull up to 15 candidates so we have enough headroom after filtering Shorts.
    const entries = xml.split("<entry>").slice(1, 16);
    const candidates: Video[] = entries.map((chunk) => {
      const id = chunk.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1] ?? "";
      const title = (chunk.match(/<title>([^<]+)<\/title>/)?.[1] ?? "")
        .replace(/&amp;/g, "&")
        .replace(/&#39;/g, "'")
        .replace(/&quot;/g, '"');
      const published = chunk.match(/<published>([^<]+)<\/published>/)?.[1] ?? "";
      return {
        id,
        title,
        published,
        thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      };
    });

    // Probe each candidate in parallel to detect Shorts.
    const flags = await Promise.all(candidates.map((v) => isShort(v.id)));
    const longForm = candidates.filter((_, i) => !flags[i]);

    return longForm.slice(0, limit);
  } catch {
    return [];
  }
}

function fmtDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d
    .toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" })
    .replace(".", "")
    .toUpperCase();
}

export default async function YoutubeFeed() {
  const videos = await fetchVideos(6);

  if (!videos.length) {
    return (
      <p style={{ fontFamily: "var(--font-sora), Sora, system-ui, sans-serif", fontSize: 12, color: "var(--p-g-4)" }}>
        Impossible de charger les vidéos pour le moment.
      </p>
    );
  }

  return (
    <div className="yt-grid">
      {videos.map((v) => (
        <a
          key={v.id}
          className="yt-card"
          href={`https://www.youtube.com/watch?v=${v.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="yt-thumb">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={v.thumb} alt={v.title} loading="lazy" />
          </div>
          <span className="yt-meta">{fmtDate(v.published)}</span>
          <h3 className="yt-title">{v.title}</h3>
        </a>
      ))}
    </div>
  );
}
