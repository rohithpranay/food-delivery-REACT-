import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h5>{cuisines.join(",")}</h5>
      <h6>{area}</h6>
      <span>
        <h4
          style={
            avgRating >= 4
              ? { backgroundColor: "green", color: "white" }
              : { backgroundColor: "orangered", color: "white" }
          }
        >
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
