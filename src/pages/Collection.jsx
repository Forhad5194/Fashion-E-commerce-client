import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { MdArrowDropDown } from "react-icons/md";
import Title from "../components/shared/Title";
import ProductItems from "../components/ProductItems";



const Collection = () => {

    const { products ,slowSearch ,search } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false)
    const [filterProduts, setFilterProduts] = useState([])
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [sortType, setSortType] = useState('relavent')


    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {

            setCategory(prev => prev.filter(item => item !== e.target.value))

        } else {
            setCategory(prev => [...prev, e.target.value])
        }
    }

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value))

        } else {
            setSubCategory(prev => [...prev, e.target.value])
        }
    }


    const applyFilter = () => {
        let productCopy = products.slice();

        if(slowSearch && search){
                productCopy =productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }




        if (category.length > 0) {
            productCopy = productCopy.filter(item => category.includes(item.category))

        }
        if(subCategory.length > 0) {
            productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
        }



        setFilterProduts(productCopy)
    }

    const sortProduct = () => {
        let fpCopy = products.slice();

        switch(sortType) {
            case "low-high" :
                setFilterProduts( fpCopy.sort((a,b) =>(a.price - b.price)))
                break;
            case "high-low" :
                setFilterProduts( fpCopy.sort((a,b) =>(b.price - a.price)))
                break;


                default : 
                applyFilter()
                break;


        }
    }




    useEffect(() => {
        sortProduct()
    } , [sortType])






useEffect(() => {
        applyFilter()
    } , [category,subCategory, slowSearch , search])




    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
            {/* Filter part Start */}
            <div className="min-w-60">
                <p onClick={() => setShowFilter(!showFilter)} className="my-2 flex items-center gap-2 cursor-pointer text-xl">FILTER

                    <MdArrowDropDown className={`h-3 sm:hidden ${showFilter ? "totate-90" : ""}`} />
                </p>


                <div className={`border border-gray-600 pl-5 py-3 mt-6 rounded-lg ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className="mb-3 text-sm font-medium">Categories</p>
                    <div className="flex flex-col text-sm gap-2 font-light text-gray-700">
                        <p className=" flex gap-2">
                            <input className="w-3" value={'Men'} type="checkbox" onChange={toggleCategory} /> Men
                        </p>
                        <p className=" flex gap-2">
                            <input className="w-3" value={'Women'} type="checkbox" onChange={toggleCategory} /> Women
                        </p>
                        <p className=" flex gap-2">
                            <input className="w-3" value={'Kids'} type="checkbox" onChange={toggleCategory} /> Kids
                        </p>

                    </div>
                </div>
                {/* SubCatagory Start  */}
                <div className={`border border-gray-600 pl-5 py-3 mt-6 rounded-lg ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className="mb-3 text-sm font-medium">TYPE</p>
                    <div className="flex flex-col text-sm gap-2 font-light text-gray-700">
                        <p className=" flex gap-2">
                            <input className="w-3" value={'Topwear'} type="checkbox" onChange={toggleSubCategory} /> Topwearn
                        </p>
                        <p className=" flex gap-2">
                            <input className="w-3" value={'Bottomwear'} type="checkbox" onChange={toggleSubCategory} /> Bottomwear
                        </p>
                        <p className=" flex gap-2">
                            <input className="w-3" value={'Winterwear'} type="checkbox" onChange={toggleSubCategory} /> Winterwear
                        </p>
                    </div>
                </div>
                {/* SubCatagory End  */}
            </div>
            {/* Filter part End */}

            {/* Collection part start  */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4 ">
                    <Title title1={'ALL'} title2={'COLLECTIONS'} />
                    <select onChange={(e)=>setSortType(e.target.value)} className="border-2 rounded-lg border-gray-300 px-4 text-center text-sm">
                        <option value="relavent">Sort by price : Relavent</option>
                        <option value="low-high">Sort by price : Low to High</option>
                        <option value="high-low">Sort by price : High to Low</option>

                    </select>

                </div>



                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 ">
                    {
                        filterProduts.map((item, index) => (
                            <ProductItems key={index} item={item} />
                        ))
                    }

                </div>

            </div>
            {/* Collection part  End  */}
        </div>
    );
};

export default Collection;