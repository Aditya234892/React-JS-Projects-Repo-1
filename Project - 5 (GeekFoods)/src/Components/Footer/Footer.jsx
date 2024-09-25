const Footer = () => {

    return (
      <div className="w-full bg-pink-100 h-[50vh] p-8 flex justify-center items-center">
        <div className="w-2/4 flex flex-col justify-center items-center p-10 gap-7">
            <div className="flex justify-center items-center gap-4">
                <i className = " cursor-pointer fa-solid fa-bowl-food text-3xl text-blue-800 hover:text-green-500 cur"></i>
                <p className="cursor-pointer hover:text-green-800 text-3xl text-blue-900 font-semibold">GeekFoods</p>
            </div>

            <p className="w-3/4 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit magnam accusantium error at</p>

            <ul className="flex w-2/4 gap-16 justify-center items-center">
                <li className="cursor-pointer hover:text-gray-500">About</li>
                <li className="cursor-pointer hover:text-gray-500">Careers</li>
                <li className="cursor-pointer hover:text-gray-500">History</li>
                <li className="cursor-pointer hover:text-gray-500">Services</li>
                <li className="cursor-pointer hover:text-gray-500">Projects</li>
                <li className="cursor-pointer hover:text-gray-500">Blog</li>
            </ul>

            <ul className="flex w-2/4 gap-8 justify-center items-center text-xl">
                <li className="cursor-pointer hover:text-gray-500"><i class="fa-brands fa-facebook"></i></li>
                <li className="cursor-pointer hover:text-gray-500"><i class="fa-brands fa-instagram"></i></li>
                <li className="cursor-pointer hover:text-gray-500"><i class="fa-brands fa-x-twitter"></i></li>
                <li className="cursor-pointer hover:text-gray-500"><i class="fa-brands fa-github"></i></li>
                <li className="cursor-pointer hover:text-gray-500"><i class="fa-brands fa-linkedin"></i></li>
            </ul>
        </div>
      </div>  
    );
}

export default Footer;