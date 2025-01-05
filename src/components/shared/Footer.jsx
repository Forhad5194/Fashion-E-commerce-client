
const Footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] my-10 mt-40 gap-14 text-sm">
                <div>
                    <h2 className='text-3xl  font-bold text-orange-400 mb-5'>FreshThreads.</h2>
                    <p className="w-full md:w-2/3 text-gray-500">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div>
                    <p className="text-xl font-bold mb-5">COMPANY</p>
                    <ul className="flex flex-col  text-gray-500" >
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-bold mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col  text-gray-500" >
                        <li>+1-212-456-7890</li>
                        <li>FreshThreads@gmail.com</li>
                    </ul>
                </div>

            </div>
            <div>
                <hr />
                <p className="text-center py-5 text-sm ">Copyright 2025 © FreshThreads - All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;