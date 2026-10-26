export default function LazyYouTube({ video }) {
  return (
    <div className="relative h-56 w-full">
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <img
          src={video.img}
          alt={video.title}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </a>
    </div>
  );
}
