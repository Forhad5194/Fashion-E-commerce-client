/* eslint-disable react/prop-types */

const Title = ({title1 , title2}) => {
    return (
        <div className="inline-flex gap-2 items-center mb-2">
            <p className="text-gray-600">{title1} <span className="text-black font-bold">{title2}</span></p>
            <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-500"></p>
            
        </div>
    );
};

export default Title;