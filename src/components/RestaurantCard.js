import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h5>{cuisines.slice(0, 3).join(",")}</h5>
      <h6>{locality}</h6>
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
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
