import React, { useEffect } from "react";
import styles from "./Result.module.scss";
import { useStateContext } from "../contexts/StateContextProvider";
import Loading from "./Loading";
import Link from "next/link";
import Image from "next/image";
import ReactPlayer from "react-player/lazy";

const Result = ({ loading, currentPath, results, getResults, searchTerm }) => {
  const { setSearchTerm, count, imageResult, setCount } = useStateContext();
  console.log(currentPath);
  console.log(results, "as result");

  useEffect(() => {
    if (currentPath === "videos") {
      console.log("running...");
      getResults(`/search/q=${searchTerm} videos`);
    } else {
      getResults(`/${currentPath}/q=${searchTerm}&num=20`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, currentPath]);

  if (loading) return <Loading />;

  const searchDisplay = (
    <section className={styles.searchDisplay}>
      {results?.map(({ link, title, description }, index) => (
        <div className={styles.mapedDiv} key={index}>
          <a href={link} target="_blank" rel="noreferrer">
            <p className={styles.linkParagraph}>
              {link.length > 30 ? link.substring(0, 50) : link}
            </p>
            <p className={styles.titleParagraph}>{title}</p>
          </a>
          <p className={styles.descParagraph}>
            {description?.substring(0, 250)}
          </p>
        </div>
      ))}
    </section>
  );

  const newsDisplay = (
    <section className={styles.newsDisplay}>
      {results?.map(({ links, id, source, title }, index) => (
        <div className={styles.mapedDiv} key={id}>
          <a href={links?.[0].href} target="_blank" rel="noreferrer">
            <p className={styles.titleParagraph}>{title}</p>
          </a>
          <div className={styles.descParagraph}>
            <a href={source?.href} target="_blank" rel="noreferrer">
              {source?.href}
            </a>
          </div>
        </div>
      ))}
    </section>
  );

  const videoDisplay = (
    <section className={styles.videoDisplay}>
      {results?.map((video, index) => (
        <div className={styles.mapedDiv} key={index}>
          <ReactPlayer
            url={
              video.additional_links?.[0].href.startsWith(
                "https://www.youtube.com"
              ) && video.additional_links?.[0].href
            }
            controls
            width="100%"
            height="100%"
          />
        </div>
      ))}
    </section>
  );

  const imagesDisplay = (
    <section className={styles.imageDisplay}>
      {imageResult?.map(({ image, link: { href, title } }, index) => (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={styles.mapedAnchorImage}
          key={index}
        >
          <div className={styles.imageDiv}>
            {/* <Image src={image?.src} alt={title} layout='fill' /> */}
            <Image
              src={`/api/imageproxy?url=${encodeURIComponent(image?.src)}`}
              alt={title}
              layout="fill"
            />
          </div>
          <p className={styles.imageParagraph}>{title?.substring(0, 50)}</p>
        </a>
      ))}
    </section>
  );

  if (currentPath === "search" && !loading) {
    return searchDisplay;
  } else if (currentPath === "images" && !loading) {
    return imagesDisplay;
  } else if (currentPath === "videos" && !loading) {
    return videoDisplay;
  } else if (currentPath === "news" && !loading) {
    return newsDisplay;
  } else {
    return "ERROR!";
  }

  return (
    <section className={styles.ResultContainer}>
      Result
      <div></div>
    </section>
  );
};

export default Result;
