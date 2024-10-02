import { useState } from "react";

const Cart = (props) => {
    const [count, setCount] = useState(1);
    
    const handleIncrement = () => {
        setCount(count + 1);
        props.getIncrement(props.price);
    }

    const handleDecrement = () => {
        if(count > 0){ 
            setCount(count - 1);
            props.getDecerment(props.price);
        }
    }

    const handleRemove = () => {
        setCount(0);
        props.getRemove(props.price, count);
    }

    if(count>0){
    return(
        <div className="flex gap gap-x-96 w-full">
            <div className="w-3/5 flex">
                <div className="w-28">
                    <img src={props.image} alt="phone image" className=""/>
                </div>

                <div className="w-98 flex flex-col gap-1 p-2">
                    <h1 className="text-3xl font-bold">{props.name}</h1>
                    <p>$ {props.price}</p>
                    <button className="bg-blue-700 text-white text-start rounded-lg hover:text-blue-600 hover:bg-white duration-300 p-1 w-fit font-semibold" onClick={handleRemove}>Remove</button>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center text-xl">
            <button className="text-blue-900" onClick={handleIncrement}><i class="fa-solid fa-angle-up"></i></button>
            <p>{count}</p>
            {count>0 && <button className="text-blue-900" onClick={handleDecrement}><i class="fa-solid fa-angle-down"></i></button>}
            </div>
        </div>
    );
}
else{
    return <></>
}
}

export default Cart;