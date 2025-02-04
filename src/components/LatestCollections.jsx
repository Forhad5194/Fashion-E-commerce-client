import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./shared/Title";
import ProductItems from "./ProductItems";

const LatestCollections = () => {

    const { products } = useContext(ShopContext) || {};

    const [latestProduct , setLatestProduct] = useState([])

    useEffect(()=> {
        setLatestProduct(products.slice(0,10))
    } , [])



    return (
        <div className="my-10">
            <div className=" text-center py-8  text-3xl">
                <Title title1={'Latest '}  title2={'Collections'}/>
                <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5">
                    {
                        latestProduct.map(( item , index  )=>(
                            <ProductItems key={index} item={item} />
                        ))
                    }
            </div>






        </div>
    );
};

export default LatestCollections;