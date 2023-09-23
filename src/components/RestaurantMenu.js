import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { IMAGE_URL } from "../utils/constants";
import MenuLoader from "./MenuLoader";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  let { menuId } = useParams();

  const restaurant = useRestaurantMenu(menuId);
  const restaurantInfo = restaurant[0]?.card?.card.info;
  const restaurantMenu = restaurant[2]?.groupedCard.cardGroupMap.REGULAR.cards;
  const dispatch = useDispatch();

  const handleAddItem = (cardItem) => {
    dispatch(addItem(cardItem));
  };

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
              <h2 className="font-bold my-4">
                {card.card.card.title}
                {menuCards?.length ? `(${menuCards?.length})` : ""}
              </h2>
              <>
                {menuCards?.map((menuCard) => {
                  const card = menuCard.card.info;

                  return (
                    <div
                      key={card.id}
                      className="flex justify-between border my-2 p-2 rounded-md shadow-md gap-2"
                    >
                      <div className="w-4/5">
                        <h3 className="font-semibold">{card.name}</h3>
                        <p className="text-sm">
                          ₹{card.price / 100 || card.defaultPrice / 100}
                        </p>
                        <small>{card.description}</small>
                      </div>
                      <div className="w-1/5 ">
                        <img
                          className="w-full rounded-t-md h-24 object-cover"
                          src={`${IMAGE_URL}${card.imageId}`}
                          alt={card.name}
                        />
                        <button
                          className="p-2 bg-green-300 font-bold w-full rounded-b-md shadow-md"
                          onClick={() => handleAddItem(card)}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  );
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
