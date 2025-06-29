import React from "react";
import VideoPage from "../../../components/VideoPage";
import { getDictionary } from "../../dictionaries";

async function page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <>
      <VideoPage />
    </>
  );
}

export default page;
