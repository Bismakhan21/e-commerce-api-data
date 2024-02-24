import { configureStore } from "@reduxjs/toolkit";
import user_data_slice from "./slice/user_data_slice";

const store = configureStore({
    reducer:{
        
        user_data: user_data_slice,
        
    }

})

export {store}