import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[],
    },
    // for modify our cart we have to make reducers function
    reducers: {
        addItem: (state,action) => {
            const {itemNo} = action.payload; 
            const item = state.items.find((item) => item.itemNo === itemNo);
            // if item has already present in stor don't be push again else push 
            if (item) {
                // item.quantity = item.quantity  + 1;
                // console.log(item)
            } 
            else {
                state.items.unshift(action.payload);
            }
        },
        increaseItem:(state,action) => {
            const item = state.items.find((item) => item.itemNo === action.payload);
            if (item) {
                let currPrice = item.price/item.quantity;
                item.quantity = item.quantity + 1;
                item.price = currPrice*item.quantity;
              }
        },
        decreaseItem: (state,action) =>{//which data(argument) i would pass in reamoveItem that will came into my action(parameter)
            const item = state.items.find((item) => item.itemNo === action.payload);
            if(item.quantity > 1){
                let currPrice = item.price/item.quantity;
                item.quantity = item.quantity - 1;
                item.price = currPrice*item.quantity;
            }
            else{
                state.items = state.items.filter((item)=>item.itemNo !== action.payload);
            }    
           
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})

export default cartSlice.reducer;// it will be import in store

export const {addItem,increaseItem,decreaseItem,clearCart} = cartSlice.actions; // it will be import at where we want to use their features  

// inside cartslice what happenings
// cartSlice ={
//     actions:{
//         addItem,
//         removeItem,
//         clearCart,
//     },
//     reducer: reducers
// }