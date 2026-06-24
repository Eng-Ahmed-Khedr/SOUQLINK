import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    reducers: {
        addToCart: (state, action) => {
            // console.log("Add to Cart");
            // console.log(current(state));
            // state.push(payload.payload);
            console.log(current(state));
            const product = action.payload;
            const exsistingItem = state.find((item) => item.id === product.id);
            if (exsistingItem) {
                exsistingItem.quantity += 1;
            }
            else {
                // product.quantity = 1;
                state.push({ ...product, quantity: 1 });
            }
            console.log(current(state));
            localStorage.setItem("cart", JSON.stringify(current(state)));
            return state;

        },
        editCart: (state, payload) => {
            return state;
        },
        deleteFromCart: (state, payload) => {
            state.splice(payload.payload, 1);
            localStorage.setItem("cart", JSON.stringify(current(state)));
            // console.log("Delete from cart");
            // console.log(current(state));
            return state;
        },
        clearCart: () => {
            return [];
        }
    }
});

export const { addToCart, editCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;