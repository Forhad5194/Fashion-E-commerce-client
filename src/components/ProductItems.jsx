/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItems = ({item }) => {
        const {_id, image, name, price } = item;

        const {currency} = useContext(ShopContext)




    return (
        <Link className="text-gray-700 cursor-pointer " to={`/product/${_id}`}>
                
                <div className="overflow-hidden rounded-lg">
                        <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt="" />
                </div>
                <p className="pt-3 pb-1 text-sm">{name}</p>
                <p className="text-sm font-medium">{currency} {price}</p>
        </Link>
    );
};

export default ProductItems;