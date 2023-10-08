import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[],
    },
    // for modify our cart we have to make reducers function
    reducers: {
        addItem: (state,action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})
export const {addItem,removeItem,clearCart} = cartSlice.actions;  
export default cartSlice.reducer;

// inside cartslice what happenings
// cartSlice ={
//     actions:{
//         addItem,
//         removeItem,
//         clearCart,
//     },
//     reducer: reducers
// }