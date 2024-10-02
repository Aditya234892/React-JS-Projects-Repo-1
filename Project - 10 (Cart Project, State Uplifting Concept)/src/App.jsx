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

  const getRemove = (price, val) => {
    setCount(count - val);
    setTotal(total - price * count);
  };

  const handleClearCart = () => {
    setCount(0);
    setTotal(0);
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
          {count > 0 ? (
            <div className="w-3/5 flex flex-col items-center justify-center mt-8 gap-4">
              {phones.map((phone) => {
                return (
                  <Cart
                    key={phone.name} // Added a unique key
                    name={phone.name}
                    image={phone.image}
                    price={phone.price}
                    getIncrement={getIncrement}
                    getDecerment={getDecerment}
                    getRemove={getRemove}
                  />
                );
              })}
            </div>
          ) : (
            <div className="m-auto mt-6 w-3/5 flex justify-center text-2xl text-slate-500">
              <h1>Is Currently empty</h1>
            </div>
          )}
        </div>

        {count > 0 && (
          <div className="w-3/5 h-[10vh] m-auto mt-11 border-t-2 border-slate-600 py-4 px-7 flex flex-col items-center gap-2">
            <div className="w-full text-3xl font-semibold flex justify-between">
              <h1 className="text-blue-950">Total:</h1>
              <h1 className="text-white bg-indigo-700 py-1 px-4 flex justify-center items-center rounded-lg text-2xl">
                $ {total}
              </h1>
            </div>
            <button
              className="bg-indigo-400 w-28 text-blue-950 font-semibold text-lg rounded-md hover:bg-blue-950 hover:text-white duration-500"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
