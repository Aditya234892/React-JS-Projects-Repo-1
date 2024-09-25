import DetailsCard from "./DetailsCard";
import ObjArray from "../../assets/details";

const Hero = () => {

    return (
        <>
        <div className="w-full h-[100vh]" style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className="translate-y-56 translate-x-36 w-[38vw] flex flex-col gap-6 p-6 shadow-lg shadow-red-700 rounded-lg">
                <h1 className="text-5xl text-center font-bold">Let Us Find Your <br /> <span className="text-red-600"> Forever Food. </span></h1>
                <p className="text-center text-xl text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci velit atque odit modi dolorem cupiditate deserunt.</p>
                <div className="flex justify-start gap-4 text-sm font-semibold">
                    <button className="bg-red-600 px-14 text-white py-3 rounded-md  active:bg-white active:text-red-600 active:scale-75 duration-700 ">Search Now</button>
                    <button className="bg-white px-14 text-red-600 py-3 rounded-md active:bg-red-600 active:text-white active:scale-75 duration-700 ">Know More</button>
                </div>
            </div>
        </div>
        <div className="w-full flex mt-10  p-8">
            <div className="w-full h-[80vh] relative top-20 left-16" style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
            </div>
            <div className="bg-pink-50 flex justify-center items-center h-[100vh]">
                <div className="flex flex-col justify-center items-start w-4/5 gap-6 pl-10">
                    <h1 className="font-bold text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                    <button className="px-12 py-2 bg-indigo-600 text-white rounded-md border-solid border-2 border-indigo-600 hover:bg-white hover:text-indigo-600">Get in Touch</button>
                </div>
            </div>
        </div>

        <div className="w-full  p-16 mt-4">
            <div className="w-full p-5 flex justify-center flex-wrap gap-20">        
                {
                    ObjArray.map((Obj) => {
                        return <DetailsCard image = {Obj.image} desc = {Obj.desc} name = {Obj.name} role = {Obj.role}/>;
                    })
                }
            </div>
        </div>
        </>
    );
}

export default Hero;