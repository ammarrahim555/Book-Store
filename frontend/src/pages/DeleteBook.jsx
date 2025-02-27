import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from "../commponents/Spinner"
import axios from 'axios'
import BackButton from '../commponents/backButton'
import { useParams } from 'react-router-dom'

const DeleteBook = () => {
  const [loading , setLoading] = useState(false);
 const navigate = useNavigate()
 const {id} = useParams()
const handleDeletebook = () => {
setLoading(true);
axios
.delete(`http://localhost:5555/books/${id}`)
.then(()=>{
  setLoading(false)
  navigate("/");
}) 
.catch((error)=>{
    console.log(error);
    setLoading(false);
    alert("an error accured");
    navigate("/");
})  


}

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4' > Delete Book  </h1>
      {loading ? (<Spinner/>) : ""}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto' >
        <h3 className='text-2xl' >are you sur you want delete this book  </h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeletebook}  > yes, delete this</button>

      </div>

    </div>
  )
}

export default DeleteBook
