import styles from "@/components/destination/destination.module.css";
export const PlanetCard = ({
  name,
  description,
  thumbnail,
  isSelected,
  onButtonClick,
}) => {
  return (
    <div className={styles.planetCard}>
      <img
        className={styles.planetThumbnail}
        src={thumbnail}
        alt={`image of ${name}`}
      />
      <div className={styles.planetDescription}>
        <h2>
          {name}
          {isSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button
        className="roundButton"
        onClick={() => onButtonClick(name)}
      >
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
};
