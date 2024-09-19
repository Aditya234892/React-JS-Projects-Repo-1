import { useState } from 'react'

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

          <div className='fixed bg-white bottom-16 px-10 rounded-xl flex flex-wrap justify-center h-12 items-center gap-x-11'  style={{display: displayColorsDiv}}>
            <div className='flex flex-wrap justify-center w-full h-10 items-center gap-x-11'>
            <button className='border-2 border-red-700 px-6 py-1 bg-red-700 text-white rounded-3xl' onClick={() => setColor("red")}>Red</button>
            <button className='border-2 border-grenn-700 px-6 py-1 bg-green-700 text-white rounded-3xl' onClick={() => setColor("green")}>Green</button>
            <button className='border-2 border-pink-700 px-6 py-1 bg-pink-700 text-white rounded-3xl' onClick={() => setColor("pink")}>Pink</button>
            <button className='border-2 border-purple-700 px-6 py-1 bg-purple-700 text-white rounded-3xl' onClick={() => setColor("purple")}>Purple</button>
            <button className='border-2 border-yellow-700 px-6 py-1 bg-yellow-700 text-white rounded-3xl' onClick={() => setColor("#FFDB58")}>Mustard</button>
            <button className='border-2 border-violet-700 px-6 py-1 bg-violet-700 text-white rounded-3xl' onClick={() => setColor("violet")}>Violet</button>
            <button className='bg-slate-500 px-5 py-1 rounded-xl text-white' onClick={ () => {setDisplayOfColorsDiv("none"); setColor("#262525")}}>Go Back!!</button>
          </div>
        </div>

        <div className='fixed bg-white bottom-16 px-10 rounded-xl flex flex-wrap justify-center h-12 items-center gap-x-11' style={{display: displayImgDiv}}>
          <button className='bg-red-200 px-5 py-1 rounded-3xl text-red-950' onClick={() => {setBgImage(
            {backgroundImage: `url("https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}
          )}}>LandScapes</button>
          <button className='bg-purple-200 px-5 py-1 rounded-3xl text-purple-950'  onClick={() => {setBgImage(
            {backgroundImage: `url("https://images.unsplash.com/photo-1612916628677-475f676a6adf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}
          )}}>SuperHero</button>
          <button className='bg-blue-200 px-5 py-1 rounded-3xl text-blue-950'  onClick={() => {setBgImage(
            {backgroundImage: `url("https://images.unsplash.com/photo-1531986627054-7f294d095acd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}
          )}}>Cars</button>
          <button className='bg-green-200 px-5 py-1 rounded-3xl text-green-950'  onClick={() => {setBgImage(
            {backgroundImage: `url("https://plus.unsplash.com/premium_photo-1664300792059-863ccfe55932?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}
          )}}>Forest</button>
          <button className='bg-orange-200 px-5 py-1 rounded-3xl text-orange-950'  onClick={() => {setBgImage(
            {backgroundImage: `url("https://images.unsplash.com/photo-1641302109095-da46fffa3d75?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}
          )}}>Cartoons</button>
          <button className='bg-cyan-200 px-5 py-1 rounded-3xl text-cyan-950'  onClick={() => {setBgImage(
            {backgroundImage: `url("https://images.unsplash.com/photo-1488215545351-57e673dc3789?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}
          )}}>WaterFall</button>
          <button className='bg-slate-500 px-5 py-1 rounded-xl text-white' onClick={() => {setDisplayOfImgDiv("none"); setBgImage({backgroundImage: `url("")`})}}>Go Back!!</button>
        </div>

      </div>
    </>
  )
}

export default App
