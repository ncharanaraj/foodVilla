import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuLoader from "./MenuLoader";
import ItemCard from "./ItemCard";

const RestaurantMenu = () => {
  let { menuId } = useParams();

  const restaurant = useRestaurantMenu(menuId);
  const restaurantInfo = restaurant[0]?.card?.card.info;
  const restaurantMenu = restaurant[2]?.groupedCard.cardGroupMap.REGULAR.cards;

  return restaurant.length === 0 ? (
    <MenuLoader />
  ) : (
    <div className="max-w-screen-md m-auto my-4" key={restaurantInfo.id}>
      <div className="border-b-2 pb-4">
        <h1 className="font-bold text-lg">{restaurantInfo.name}</h1>
        <p className="italic text-xs">{restaurantInfo.cuisines.join(", ")}</p>
        <p className="text-sm">{restaurantInfo.areaName}</p>
      </div>
      <>
        {restaurantMenu?.map((card, index) => {
          const menuCards = card.card.card.itemCards;
          return (
            <div key={index}>
              {!menuCards?.length ? (
                ""
              ) : (
                <h2 className="font-bold my-4">
                  {card.card.card.title}({menuCards?.length})
                </h2>
              )}

              <>
                {menuCards?.map((menuCard) => {
                  const cardItem = menuCard.card.info;
                  return <ItemCard key={cardItem.id} {...cardItem} />;
                })}
              </>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default RestaurantMenu;
