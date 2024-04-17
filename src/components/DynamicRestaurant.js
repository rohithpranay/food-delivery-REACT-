import { useEffect, useState } from "react";
import { Dyn_Res_api_URL } from "../utils/constants";
import Shimmer from "./shimmer";

const DynamicRes = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const response = await fetch(Dyn_Res_api_URL);
    const jsonData = await response.json();
    setResInfo(jsonData);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      .card;
  console.log(itemCards);
  return (
    <div>
      <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(",")}</h2>
        <h2>{costForTwoMessage}</h2>
      </div>
      <div className="menu-items">
        <ul>
          {itemCards.map((item) => (
            <li>{item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DynamicRes;
