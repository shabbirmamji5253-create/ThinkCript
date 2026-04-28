export default function MediaRenderer({ item, className = "", controls = false, autoPlay = false }) {
  if (item.type === "video") {
    return (
      <video
        className={className}
        src={item.media}
        poster={item.poster}
        muted
        loop
        playsInline
        preload="metadata"
        controls={controls}
        autoPlay={autoPlay}
        onMouseEnter={(event) => event.currentTarget.play()?.catch(() => {})}
        onMouseLeave={(event) => {
          if (!controls) event.currentTarget.pause();
        }}
      />
    );
  }

  return (
    <img
      className={className}
      src={item.media}
      alt={item.title}
      loading="lazy"
      decoding="async"
    />
  );
}
