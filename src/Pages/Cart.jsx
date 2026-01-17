import { useSelector } from "react-redux";
import Card2 from "../components/Card2";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const Subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const deliveryFee = 20;
  const taxes = Math.floor(Subtotal * 0.005);
  const total = Subtotal + deliveryFee + taxes;

  return (
    <div className="bg-slate-200 min-h-screen">
      <Navbar />

      {items.length > 0 ? (
        <>
          <div className="w-full mt-9 flex flex-col gap-8 p-5">
            {items.map((item) => (
              <Card2
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}
              />
            ))}
          </div>

          <div className="w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-2 p-8 border-b-2 bg-white">
            <div className="flex justify-between">
              <span className="text-lg font-semibold">Subtotal</span>
              <span className="text-green-500">Rs {Subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg font-semibold">Delivery Fee</span>
              <span className="text-green-500">Rs {deliveryFee}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg font-semibold">Taxes</span>
              <span className="text-green-500">Rs {taxes}</span>
            </div>
          </div>

          <div className="flex justify-between items-center p-9 bg-white">
            <span className="text-2xl font-semibold">Total</span>
            <span className="text-green-600 text-2xl font-bold">
              ₹ {total}/-
            </span>
          </div>

          <div className="flex flex-col gap-4 items-center pb-10 bg-white">
           <button
              className="w-[80%] p-3 rounded-lg text-white bg-green-500 hover:bg-green-700 transition-all"
              onClick={() => toast.success("Order Placed")}
            >
              Place Order
            </button>
        
            <div className="flex justify-center">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-green-500 rounded hover:bg-gray-300"
            >
              Back
            </button>
          </div>

          </div>
        </>
      ) : (
        <>
          <div className="text-center text-2xl text-green-500 font-semibold p-10">
            Empty Cart
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-green-500 rounded hover:bg-gray-300"
            >
              Back
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
