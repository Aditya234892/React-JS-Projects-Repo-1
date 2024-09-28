const Quote = (props) => {
    return(
        <>
        <div className="w-full relative top-16 px-24 py-10 text-center font-serif font-semibold ">
            <div className="bg-[#202938] text-white p-10 rounded-xl hover:scale-110 hover:bg-blue-600 duration-500 tecursor-pointer">
                <h1 className="text-3xl mb-4">{props.quote}
                </h1>
                <p className="font-sans text-slate-400 text-lg">{props.author}</p>
            </div>
        </div>
        </>
    );
}

export default Quote;