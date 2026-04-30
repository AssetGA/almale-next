export default async function sitemap() {
  // Video data - in a real app, this might come from a database or API
  const videoData = [
    {
      id: "1",
      title: "Alma`le best cooper cookware set",
      description:
        "It showcases an unboxing experience of Alma'le's premium copper cookware, highlighting how quality kitchenware can make cooking more enjoyable and efficient.",
      duration: 270,
      viewCount: 1000,
      publicationDate: "2023-10-01T00:00:00+00:00",
    },
    {
      id: "2",
      title: "Набор медной посуды Alma`le",
      description: "Готовка на медной посуде с поваром из Казахстана",
      duration: 80,
      viewCount: 500,
      publicationDate: "2023-10-01T00:00:00+00:00",
    },
    {
      id: "3",
      title: "Utensil set of cupper cookware of Alma`le",
      description: "Cooking Kazakh national food in a copper saucepan",
      duration: 167,
      viewCount: 750,
      publicationDate: "2023-10-01T00:00:00+00:00",
    },
  ];

  // Create sitemap entries for each video
  return videoData.map((video) => ({
    url: "https://www.alma-le.com/",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
    // Add video data
    videos: [
      {
        title: video.title,
        description: video.description,
        thumbnail_loc: `${
          process.env.NEXT_PUBLIC_SITE_URL + "/video/" + video.id + ".mp4"
        }`,
        content_loc: `${
          process.env.NEXT_PUBLIC_SITE_URL + "/video/" + video.id + ".mp4"
        }`,
        duration: video.duration,
        publication_date: video.publicationDate,
        family_friendly: "yes",
        view_count: video.viewCount,
        uploader: {
          name: "Alma Le",
          info: "https://www.alma-le.com",
        },
      },
    ],
  }));
}
