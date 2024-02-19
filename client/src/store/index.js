import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pizzaSlice from "./pizzaSlice";
import cartSlice from "./cartSlice";
import registerSlice from "./registerSlice";
import loginSlice from "./loginSlice";
import orderSlice from "./orderSlice";
import orderFetchSlice from "./orderFetchSlice";
import addPizzaSlice from "./addPizzaSlice";
import getPizzaByIdSlice from "./getPizzaByIdSlice";
import updatePizzaSlice from "./updatePizzaSlice";
import allOrderSlice from './getAllOrder'
import getAllUserList from "./getAllUserList";
import getUserByIdSlice from "./getUserByIdSlice";
const rootReducer = combineReducers({
    pizza: pizzaSlice,
    cart: cartSlice,
    register: registerSlice,
    login: loginSlice,
    order: orderSlice,
    orderUser: orderFetchSlice,
    addPizza: addPizzaSlice,
    getPizzaById: getPizzaByIdSlice,
    updatePizzaById: updatePizzaSlice,
    allOrder: allOrderSlice,
    allUser: getAllUserList,
    getUserById: getUserByIdSlice

})




const store = configureStore(
    {
        reducer: rootReducer
    }

)


export default store;