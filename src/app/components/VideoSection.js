import { getDictionary } from "../[lang]/dictionaries";
import LazyYouTube from "../components/LazyYouTube.jsx";
import { videos } from "../utils/api.js";

const VideoSection = async ({ lang }) => {
  const t = await getDictionary(lang);

  return (
    <section className="bg-gradient-to-r from-blue-100 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className="text-2xl font-extrabold text-center text-gray-800 mb-10"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          {t.video.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <LazyYouTube video={video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
