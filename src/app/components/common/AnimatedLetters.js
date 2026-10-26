export default function AnimatedLetters({ text, elemClass }) {
  return (
    <h1 className={elemClass} style={{ fontFamily: "Montserrat-Bold" }}>
      {text}
    </h1>
  );
}
