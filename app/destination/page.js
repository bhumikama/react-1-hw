"use client";

import { useState } from "react";
import { PlanetCard } from "@/components/destination/PlanetCard";
import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetWishlistItem from "@/components/destination/PlanetWishlistItem";

export const Destinations = () => {
  const planetList = [
    {
      name: "Europa",
      description:
        "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
      thumbnail: "/destination/image-europa.png",
    },
    {
      name: "Mars",
      description:
        "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
      thumbnail: "/destination/image-mars.png",
    },
    {
      name: "Moon",
      description:
        "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
      thumbnail: "/destination/image-moon.png",
    },
    {
      name: "Titan",
      description:
        "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
      thumbnail: "/destination/image-titan.png",
    },
  ];
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const onAddOrRemovePlanet = (planet) => {
    if (selectedPlanets.some((p) => p.name === planet.name)) {
      setSelectedPlanets((prevPlanets) =>
        prevPlanets.filter((p) => p.name !== planet.name)
      );
    } else {
      setSelectedPlanets((prevPlanets) => [...prevPlanets, planet]);
    }
  };

  const onAddWishlistItem = (name, thumbnail) => {
    const newCustomPlanet = {
      name: name,
      thumbnail: thumbnail,
    };
    const newPlanetList = [...selectedPlanets, newCustomPlanet];
    setSelectedPlanets(newPlanetList);
  };
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          <p>
            You have
            {selectedPlanets.length > 0 ? selectedPlanets.length : "no planets"}
            in your wishlist
          </p>
          <b>List coming soon after lesson 3!</b>
          <AddWishlistItem onAddWishlistItem={onAddWishlistItem} />
          {selectedPlanets.length > 0 ? <h3>Your current wishlist</h3> : null}

          <div className={styles.wishlistList}>
            {selectedPlanets.map((planet, index) => (
              <PlanetWishlistItem
                key={`planet-${index}`}
                name={planet.name}
                onRemove={() => onAddOrRemovePlanet(planet)}
                thumbnail={planet.thumbnail}
              />
            ))}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {planetList.map((planet, index) => (
            <PlanetCard
              key={`planet-${index}`}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={selectedPlanets.some((p) => p.name === planet.name)}
              onButtonClick={() => onAddOrRemovePlanet(planet)}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
