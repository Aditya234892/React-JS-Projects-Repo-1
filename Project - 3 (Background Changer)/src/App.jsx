import { useState } from 'react';
import BgColors from './BgColors';
import BgImgs from './BgImgs';
function App() {
 const [color, setColor] = useState("#262525");
 const [displayColorsDiv, setDisplayOfColorsDiv] = useState("none");
 const [displayImgDiv, setDisplayOfImgDiv] = useState("none");
 const [bgImg, setBgImage] = useState({ backgroundImage: `url("")`})
  return (
    <>
      <div className='w-full h-screen duration- 300 flex justify-center' style={{backgroundColor: color, ...bgImg, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div className='fixed bg-white bottom-16 px-10 rounded-xl flex flex-wrap justify-center h-12 items-center gap-x-11'>
          <div className='flex flex-wrap justify-center w-full h-10 items-center gap-x-11'>
              <button className='bg-slate-500 px-5 py-1 rounded-xl text-white' onClick={() => {setDisplayOfImgDiv("flex")}}>Images</button>
              <button className='bg-slate-500 px-5 py-1 rounded-xl text-white' onClick={() => {setDisplayOfColorsDiv("flex")}}>Colors</button>
          </div>
        </div>

        <BgColors setColor={setColor} setDisplayOfColorsDiv={setDisplayOfColorsDiv} displayColorsDiv = {displayColorsDiv}/>

        <BgImgs setBgImage={setBgImage} setDisplayOfImgDiv={setDisplayOfImgDiv} displayImgDiv={displayImgDiv}/>

      </div>
    </>
  )
}

export default App
