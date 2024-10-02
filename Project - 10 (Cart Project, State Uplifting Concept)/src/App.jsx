import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import phones from "./assets/data";

function App() {
  const [count, setCount] = useState(phones.length);
  const [total, setTotal] = useState(
    phones.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0)
  );

  const getIncrement = (val) => {
    setCount(count + 1);
    setTotal((preVal) => preVal + val);
  };

  const getDecerment = (val) => {
    if (count > 0) setCount(count - 1);
    setTotal(total - val);
  };

  return (
    <>
      <div className="w-full h-[100vh]">
        <div className="w-full fixed top-0 left-0">
          <div className="w-full h-16 bg-blue-800 flex text-4xl items-center justify-center gap-x-[50%]">
            <h1 className="text-white">Your Cart</h1>
            <div className="relative">
              <p>🛒</p>
              <p className="w-6 h-6 bg-slate-500 absolute rounded-[50%] top-[-8px] left-[-8px] text-white text-base flex items-center justify-center">
                {count}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-20">
          <h1 className="text-5xl text-blue-950 font-bold">YOUR BAG</h1>
          <div className="border-2w-3/5 flex flex-col items-center justify-center mt-8 gap-4">
            {phones.map((phone) => {
              return (
                <Cart
                  name={phone.name}
                  image={phone.image}
                  price={phone.price}
                  getIncrement={getIncrement}
                  getDecerment={getDecerment}
                />
              );
            })}
          </div>
        </div>
        {total > 0 ? (
          <div className="w-3/5 h-[10vh] m-auto mt-11 border-t-2 border-slate-600 py-4 px-7 text-3xl font-semibold flex justify-between">
            <h1 className="text-blue-950">Total:</h1>
            <h1 className="text-white bg-indigo-700 py-1 px-4 flex justify-center items-center rounded-lg text-2xl">
              $ {total}
            </h1>
          </div>
        ) : (
          <div className="m-auto w-3/5 flex justify-center text-2xl text-slate-500">
            <h1>Is Currently empty</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
