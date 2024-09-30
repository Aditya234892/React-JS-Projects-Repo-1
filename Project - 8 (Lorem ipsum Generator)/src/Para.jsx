import rtArray from './assets/data';
import { useEffect, useState } from 'react';
const Paragraphs = ({length}) => {
    const [limitedArray, setLimitedArray] = useState([]);
    useEffect(()=>{setLimitedArray(rtArray.slice(0, length))}, [length]);
    return (
        <div className='text-white text-lg w-full px-16 flex flex-col gap-4'>
        {
          limitedArray.map((Obj) => {
            return (
              <p key={Obj.id}>{Obj.id}{")"} {Obj.text}</p>
            );
          })    
        }
      </div>   
    );
}

export default Paragraphs;