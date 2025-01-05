import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { GoSearch } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";


const SearchBar = () => {

    const { search, setSearch, slowSearch, setSlowSearch } = useContext(ShopContext)
    const [visible , setVisible] = useState(false)

    const location = useLocation()

    useEffect(()=>{
                if (location.pathname.includes("collection")) {
                    setVisible(true)
                } else {
                    setVisible(false)
                }
    },[location])



    return slowSearch && visible ?  (
        <div className=" bg-white text-center rounded-lg">
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 w-3/4 rounded-lg sm:w-1/2">
                <input value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 outline-none bg-inherit text-sm" type="text" placeholder="Searching" />
                <GoSearch className="w-4" />
            </div>
            <IoCloseOutline  onClick={()=>setSlowSearch(false)} className="w-7 h-10 inline cursor-pointer" />

        </div>
    ) : null
};

export default SearchBar;