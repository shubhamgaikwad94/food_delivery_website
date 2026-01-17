import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { addItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cards({ name, image, id, price, type }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addItem({
        id,
        name,
        image,
        price,
        type,
        qty: 1,
      })
    );

    toast.success("Item added to cart 🛒", {
      position: "top-right",
      autoClose: 1500,
    });
  };

  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300">
      
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="text-2xl font-semibold">{name}</div>

      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-green-500">
          ₹{price}
        </div>

        <div className="flex items-center gap-1 text-green-500 font-semibold text-lg">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>

      <button
        className="w-full p-3 rounded-lg text-white bg-green-500 hover:bg-green-700 transition-all"
        onClick={handleAdd}
      >
        Add to dish
      </button>


      <ToastContainer />
    </div>
  );
}

export default Cards;
