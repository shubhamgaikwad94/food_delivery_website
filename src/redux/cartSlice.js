import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    
    name:"cart",
    
    initialState: {
    items: [],   
  },
    reducers:{
        addItem:(state,action)=>{
           let existItem=state.items.find((item)=>item.id===action.payload.id)
           if(existItem){
           existItem.qty += 1;

           }
           else{
         state.items.push(action.payload)
           }
           
        },
       removeItem: (state, action) => {
       state.items = state.items.filter(
      (item) => item.id !== action.payload
  );
},
incrementQty:(state,action)=>{
    const existItem = state.items.find(
  (item) => item.id === action.payload);
    if (existItem) {
  existItem.qty += 1;
}

},

decrementQty:(state,action)=>{
    const existItem = state.items.find(
  (item) => item.id === action.payload);
    if (existItem && existItem.qty>1) {
  existItem.qty -= 1;
}

}


    }

})

export const { addItem,removeItem,incrementQty,decrementQty} = cartSlice.actions;
export default cartSlice.reducer;