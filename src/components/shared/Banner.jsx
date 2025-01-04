import banner from '../../assets/Models/1.jpg'
const Banner = () => {
    return (
        <div className="flex flex-col sm:flex-row py-5  ">

            <div className="w-full sm:w-1/2 flex justify-center items-center py-10 sm:py-0 ">
                <div className="text-gray-500">
                    <div className="flex items-center gap-2">
                        <p className="w-8 md:w-11 h-[2px] bg-gray-900"></p>
                        <p className="uppercase fjalla-one-regular font-medium text-sm md:text-base">our bestsellers</p>

                    </div>
                    <h1 className="uppercase text-3xl sm:py-3 lg:text-5xl leading-relaxed text-black font-bold">Latest Arrivals</h1>

                    <div className="flex items-center gap-2">
                        <p className="uppercase font-semibold text-sm sm:text-base">shop Now </p>
                        <p className="w-8 md:w-11 h-[2px] bg-gray-900"></p>

                    </div>

                </div>
            </div>

            <img className='w-full sm:w-1/2 rounded-lg' src={banner} alt="" />


        </div>
    );
};

export default Banner;