export function Video({ url }) {
  console.log("url", url);
  return (
    <video width="320" height="240" controls preload="none">
      <source src={url} type="video/mp4" />
      <track src={url} kind="subtitles" srcLang="en" label="English" />
      Your browser does not support the video tag.
    </video>
  );
}
