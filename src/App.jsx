// import React, { useEffect } from 'react'
import { useState, useEffect } from 'react';
function App() {

const [theme, setTheme] = useState("");

useEffect(()=>{
  document.body.className=theme
},[theme])

const mode = () => {
  theme === "darktheme" ? setTheme ("lighttheme"):setTheme("darktheme")
}
useEffect(() => {

 document.body.className=theme
}, [theme]);

  return (
    <>

    <div className= " w-full">
      {
        theme=== "darktheme"?
      
      <button className='border-4 border-red-300 bg-red-500 p-1 rounded-md mt-7 ml-11 shadow-sm shadow-slate-300 hover:bg-red-300 hover:border-red-500 transition-all hover:scale-90' onClick={mode}>
        Enable Light Theme</button>
        :
        <button className='border-4 border-red-300 bg-red-500 p-1 rounded-md mt-7 ml-11 shadow-sm shadow-slate-300 hover:bg-red-300 hover:border-red-500 transition-all hover:scale-90' onClick={mode}>
        Enable Dark Theme</button>

}
        <div className="text flex flex-col justify-center text-center  ">
        <h1 className='py-2 font-semibold text-2xl'>BOOKFOLIO</h1>
        <i className='text-gray-500'>Lorem ipsum dolor sit amet consectetur</i>
        </div>
        <div className="imgs flex justify-center mt-10">
        <div className="imge1">
          <img src="./src/img'/book1.png" alt="" className="book1 w-60" />
        </div>
        <div className="imge1">
          <img src="./src/img'/book2.png" alt="" className="book1 w-60" />
        </div>
        <div className="imge1">
          <img src="./src/img'/book3.png" alt="" className="book1 w-60" />
        </div>
        </div>
    </div>


    </>
  )
}

export default App
