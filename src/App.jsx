import axios from 'axios'
import React from 'react'
import { useState } from 'react'
const App = () => {

// To Use the Data
  const [data, setData] = useState([])



  const getData = async () =>{
    // console.log("Data is here");
    // axios
    const responce = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
    // const data = responce.data
    // console.log(data);
    setData(responce.data)
    // console.log(data);
    
  }

  // Here we are calling data throuugh the Api 

  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-600 text-white font-semibold rounded text-2xl px-6 py-3 active:scale-90'>Get Data</button>
      {/* active selector se apann ek click ka animation dal sakte hai bhai log */}
      <div className='p-5 bg-gray-950 mt-5'>
        {data.map(function(elem,idx){
          // return <h1>Hello</h1>
          return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 roundec mb-3'>
            <img src={elem.download_url} alt="" className='h-40'/>
            {/* download url karne se sabke andar images aa jayegi */}
            <h1>{elem.author}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
