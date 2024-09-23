import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(11);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("Aditya");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "12345678900987654321";
    if (charAllowed) str += "!@#$%^&*()_+{}[];':,.<>/?`~";

    console.log(str);

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * (str.length + 1)));
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyToClipBoard = useCallback( () => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {passwordGenerator();}, [length, numberAllowed, charAllowed])

  return (
    <>
      <div className="w-[600px] mx-auto text-purple-500 bg-indigo-950 px-7 py-4 rounded-xl flex flex-col justify-center items-center">
        <h1 className="text-3xl">Password Generator</h1>
        <div className="px-5 py-4 w-full">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="text-orange-600 font-semibold text-lg font- border-none outline-none w-[84%] h-8 rounded-tl-2xl rounded-bl-2xl px-4"
            ref={passRef}
            readOnly
          />
          <button className="px-4 py-1 bg-blue-950 text-purple-400 rounded-tr-xl rounded-br-xl text-lg hover:text-orange-600 transition duration-400 active:scale-50"
          onClick={copyToClipBoard}>
            Copy
          </button>
        </div>
        <div className="w-full flex gap-x-6">
          <div className="w-56 flex gap-3 justify-start ">
            <input
              type="range"
              min={8}
              max={38}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={numberAllowed}
              id="numberInput"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">: Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={charAllowed}
              id="numberInput"
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">: Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
