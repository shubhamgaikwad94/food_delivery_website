import  categories  from "../Category";
import  Cards  from "../components/Cards";
import {food_items} from "../food";
import Navbar from "../components/Navbar";
import React,{useContext} from 'react';
import {dataContext} from '../context/UserContext';
import { ImCross } from "react-icons/im";
import Card2 from "../components/Card2"
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";


function Home() {
  
let {cate,setCate,input,showCart,setShowCart}=useContext(dataContext)
  function filter(category){
    if(category==="all"){
      setCate(food_items)
    }else{
     let newList=food_items.filter((item)=>(item.food_category===category))
     setCate(newList)
    }
  }


  let items = useSelector(state => state.cart.items);
  let Subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)
  let deliveryFee=20;
  let taxes=Subtotal*0.5/100;
  let total = Math.floor(Subtotal + deliveryFee + taxes);


  return (
    <div className="bg-slate-200 w-full min-h-screen">
    <Navbar/>
    {input === "" && (
  <div className="flex flex-wrap justify-center items-center gap-6 w-full">
    {categories.map((item) => (
      <div
        key={item.name}
        className="w-[140px] h-[120px] bg-white flex flex-col gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-300 cursor-pointer transition-all duration-200 items-center"
        onClick={() => filter(item.name)}
      >
        {item.icon}
        {item.name}
      </div>
    ))}
  </div>
)}


<div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
  {cate.length > 0 ? (
   cate.map((item) => (
      <Cards
        key={item.id}
        id={item.id} 
        name={item.food_name}
        image={item.food_image}
        price={item.price}
        type={item.food_type}
      />
    ))
  ) : (
    <p className="text-xl text-gray-500">No food found</p>
  )}
</div>

<div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl  transition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full "}`}>
  <header className="w-[100%] flex justify-between items-center p-5">
    <span className="text-green-400 text-[18px] font-semibold">Order items</span>
    <ImCross className="text-green-400 text-[18px] font-semibold w-[15px] h-[15px] cursor-pointer hover:text-gray-600"onClick={()=>setShowCart(false)}/>
  </header>
  {items.length>0?<>
<div className="w-full mt-9 flex flex-col gap-8 ">
  {items.map((item)=>(
    <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty}/>
  ))}
</div>
<div className="w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-2 p-8 border-b-2"> 
<div className="w-full flex justify-between items-center">
     <span className="text-lg text-gray-600 font-semibold" >Subtotal </span>
     <span className="text-green-400 font text-lg"> Rs {Subtotal}</span> </div>

<div className="w-full flex justify-between items-center">
     <span className="text-lg text-gray-600 font-semibold" >Delivery Fee </span>
     <span className="text-green-500 font text-lg"> Rs {deliveryFee}</span> </div>

<div className="w-full flex justify-between items-center">
     <span className="text-lg text-gray-600 font-semibold" >Taxes </span>
     <span className="text-green-500 font text-lg"> Rs {taxes}</span> </div>


</div>

<div className="w-full flex justify-between items-center p-9 ">
     <span className="text-2xl text-gray-600 font-semibold" >Total </span>
     <span className="text-green-500 font text-2xl"> Rs {total}/-</span> </div>


<button className="w-[80%] p-3 rounded-lg text-white bg-green-500 hover:bg-green-700 transition-all" onClick={()=>{
  toast.success("Order Placed")
}}>Place Order </button>
</>:
<div className="text-center text-2xl text-green-500 font-semibold p-5"> Empty Cart</div>}
  
</div>


    </div>
  );
}

export default Home;
