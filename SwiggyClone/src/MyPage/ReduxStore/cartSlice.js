import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[],
    },
    // for modify our cart we have to make reducers function
    reducers: {
        addItem: (state,action) => {
            state.items.unshift(action.payload);
        },
        removeItem: (state,action) =>{//which data(argument) i would pass in reamoveItem that will came into my action(parameter)
            state.items = state.items.filter((item)=>item.id !== action.payload);
            // console.log(action);
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