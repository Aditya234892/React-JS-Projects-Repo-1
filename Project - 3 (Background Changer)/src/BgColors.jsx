const BgColors = ({ setColor, setDisplayOfColorsDiv, displayColorsDiv }) => {
    return (
        <div className='fixed bg-white bottom-16 px-10 rounded-xl flex flex-wrap justify-center h-12 items-center gap-x-11'  style={{display: displayColorsDiv}}>
            <div className='flex flex-wrap justify-center w-full h-10 items-center gap-x-11'>
            <button className='border-2 border-red-700 px-6 py-1 bg-red-700 text-white rounded-3xl' onClick={() => setColor("red")}>Red</button>
            <button className='border-2 border-green-700 px-6 py-1 bg-green-700 text-white rounded-3xl' onClick={() => setColor("green")}>Green</button>
            <button className='border-2 border-pink-700 px-6 py-1 bg-pink-700 text-white rounded-3xl' onClick={() => setColor("pink")}>Pink</button>
            <button className='border-2 border-purple-700 px-6 py-1 bg-purple-700 text-white rounded-3xl' onClick={() => setColor("purple")}>Purple</button>
            <button className='border-2 border-yellow-700 px-6 py-1 bg-yellow-700 text-white rounded-3xl' onClick={() => setColor("#FFDB58")}>Mustard</button>
            <button className='border-2 border-violet-700 px-6 py-1 bg-violet-700 text-white rounded-3xl' onClick={() => setColor("violet")}>Violet</button>
            <button className='bg-slate-500 px-5 py-1 rounded-xl text-white' onClick={ () => {setDisplayOfColorsDiv("none"); setColor("#262525")}}>Go Back!!</button>
            </div>
        </div>
    )
}

export default BgColors;