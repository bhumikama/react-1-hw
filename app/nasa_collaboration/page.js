"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = "EeSfTBChJ8VYja2AH2LetV3iDAGAaAd7hT14qCfZ";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

const RoverPhoto = ({ date, src, roverName }) => {
  return (
    <div>
      <p>Date {date}</p>
      <p>{roverName}</p>
      <img className={styles.nasaPicOfTheDayImg} src={src} />
    </div>
  );
};
export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };

    const fetchDailyImages = async () => {
      const dailyImgApiData = await fetch(NASA_URLs.astronomyPicOfTheDay);
      const dailyImgResponse = await dailyImgApiData.json();
      setDailyImg(dailyImgResponse);
    };

    fetchRoverPhotos();
    fetchDailyImages();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          <div className={styles.astronomyContainer}>
            <h3>{dailyImg.title}</h3>
            <div className={styles.astronomyPic}>
              <img src={dailyImg.url}></img>
              <p>{dailyImg.explanation}</p>
            </div>
          </div>
        </section>
        <section className="card">
          <h2>Rover Photos</h2>

          {roverPhoto?.photos?.length ? (
            <div className={styles.planetContainer}>
              {roverPhoto.photos.map((item) => (
                <RoverPhoto
                  src={item.img_src}
                  date={item.earth_date}
                  roverName={item.rover.name}
                />
              ))}
            </div>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
