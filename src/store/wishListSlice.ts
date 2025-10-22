import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fakePropertyWithAgency } from "../dev-data/properites";
import type { RootState } from "../store";
import type { PropertyWithAgency } from "../types/property";
import type { WishList } from "../types/WishList";

const initialState: WishList = {
    items: fakePropertyWithAgency,
}
const cartSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        addItemtoWishList(state, action: PayloadAction<PropertyWithAgency>) {
            const newItem = action.payload;
            state.items.push(newItem);
        },
        delItemFromWishList(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
        }

    }

})
// Action creators
export const {
    addItemtoWishList,
    delItemFromWishList,
} = cartSlice.actions;
// export reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;

// selectors


// get all cart items
export const getWishList = (state: RootState): PropertyWithAgency[] => state.wishList.items;

