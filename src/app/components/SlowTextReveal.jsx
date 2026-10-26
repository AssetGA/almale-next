export default function SlowTextReveal({ text }) {
  return (
    <div className="min-h-[10vh] bg-white flex items-end justify-center pb-20">
      <h2 className="text-center">{text}</h2>
    </div>
  );
}
