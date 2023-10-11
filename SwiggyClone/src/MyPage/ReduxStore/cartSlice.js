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
            console.log(item);
            if (item) {
                item.quantity = item.quantity  + 1;
              } else {
                state.items.unshift(action.payload);
              }

        },
        removeItem: (state,action) =>{//which data(argument) i would pass in reamoveItem that will came into my action(parameter)
            state.items = state.items.filter((item)=>item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})

export default cartSlice.reducer;// it will be import in store

export const {addItem,removeItem,clearCart} = cartSlice.actions; // it will be import at where we want to use their features  

// inside cartslice what happenings
// cartSlice ={
//     actions:{
//         addItem,
//         removeItem,
//         clearCart,
//     },
//     reducer: reducers
// }