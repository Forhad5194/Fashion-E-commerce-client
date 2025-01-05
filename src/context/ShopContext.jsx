/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
import { products } from '../assets/frontend_assets/assets.js'

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_free = 10
    const [search , setSearch] = useState('')
    const [slowSearch , setSlowSearch] = useState(false)
 




    const value = {
        products, currency, delivery_free, search, setSearch , slowSearch ,setSlowSearch
    }


    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}



export default ShopContextProvider;