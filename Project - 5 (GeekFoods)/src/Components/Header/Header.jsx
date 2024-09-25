const Header = () => {

    return(
        <>
            <div className="w-full h-16 fixed top-0 left-0 bg-[#111828] text-white z-50">
                <ul className="cursor-pointer border-green-300 w-full h-full flex justify-around items-center">
                    <li><div className="flex text-2xl font-semibold justify-center gap-4 items-center"><img src="https://flowbite.com/docs/images/logo.svg" alt="" /> GeekFoods</div></li>

                    <li>
                        <ul className="flex gap-10 font-semibold">
                            <li><a href="" className="hover:text-blue-600 active:text-blue-800">Home</a></li>
                            <li><a href="" className="hover:text-blue-600 active:text-blue-800">Quote</a></li>
                            <li><a href="" className="hover:text-blue-600 active:text-blue-800">Restaurants</a></li>
                            <li><a href="" className="hover:text-blue-600 active:text-blue-800">Foods</a></li>
                            <li><a href="" className="hover:text-blue-600 active:text-blue-800">Contact</a></li>
                        </ul>
                    </li>

                    <li><button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Get Started</button></li>
                </ul>
            </div>
        </>
    );
}

export default Header;