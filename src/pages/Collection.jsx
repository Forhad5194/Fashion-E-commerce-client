import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {

    const { products } = useContext(ShopContext);
    console.log(products);







    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
            <h2>This is Collection Page. </h2>
        </div>
    );
};

export default Collection;