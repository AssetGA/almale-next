import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

const CHANNEL = "https://www.youtube.com/@alma_le";
const INSTAGRAM = "https://www.instagram.com/almale_com/";
const WHATSAPP = "77471204110";

function Poster({ id, title }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg bg-black"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        width={480}
        height={360}
        className="aspect-video w-full object-cover"
      />
      <span className="block px-4 py-3 text-sm font-bold text-white group-hover:text-gray-header">
        {title}
      </span>
    </a>
  );
}

export default function AdLanding({ lang, page }) {
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(page.whatsappText)}`;

  return (
    <article className="px-5 pb-20 pt-8 sm:px-10 lg:px-24">
      <p className="text-sm font-bold text-green-light">{page.kicker}</p>
      <h1
        className="mt-3 max-w-3xl text-3xl font-bold leading-tight"
        style={{ fontFamily: "Montserrat-Bold" }}
      >
        {page.title}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-6">{page.lead}</p>
      <p className="mt-4 text-lg font-bold">{page.price}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <WhatsAppButton href={wa}>{page.whatsapp}</WhatsAppButton>
        <Link
          href={`/${lang}/product`}
          className="rounded-md bg-gray-header px-5 py-3 text-sm font-bold text-black hover:bg-gray-light"
        >
          {page.catalog}
        </Link>
      </div>

      {page.points ? (
        <ul className="mt-8 max-w-2xl space-y-2 text-sm">
          {page.points.map((point) => (
            <li key={point} className="rounded-md bg-gray-header px-4 py-3">
              {point}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {page.videos.map((video) => (
          <Poster key={video.id} id={video.id} title={video.title} />
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <a
          href={CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-green underline"
        >
          {page.channel}
        </a>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-green underline"
        >
          {page.instagram}
        </a>
      </div>
    </article>
  );
}
