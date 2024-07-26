import React from 'react'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from "../commponents/Spinner"
import axios from 'axios'
import BackButton from '../commponents/backButton'
import { useParams } from 'react-router-dom'

const EditeBook = () => {
  const [title, setTitle] = useState('');
  const [author , setAuthor] = useState('');
  const [publishYear , setPublishYear] = useState('');
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(title,author,publishYear)

 useEffect(()=>{
  setLoading(true)
  
 axios
 .get(`http://localhost:5555/books/${id}`)
 .then((response) => {
   setTitle( response.data.title)
   setAuthor( response.data.author)
   setPublishYear( response.data.publishYear)
   setLoading(false)
})  
.catch((error )=>{
   console.log(error);
   alert("error accured")
   setLoading(false)
})


 },[])

  const handleEditBook = () => {
    const data = {
      title,
     author,
     publishYear, 
   } ;
   setLoading(true)
   axios
   .put(`http://localhost:5555/books/${id}` , data)
   .then(() => {
       setLoading(false);
       navigate("/");
   })
   .catch((error)=>{
     console.log(error);
     setLoading(false)
   });
     
    
  };
 
  
return (
    <div className='p-4'>
       <BackButton/>
       <h1 className='text-3xl my-4'>Edit Book</h1>
       {loading ? (<Spinner/>) : ""}
       <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto' >
          <div className='my-4'>
             <lable className="text-xl mr-4 text-gray-500" > title</lable>
             <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full' />
          </div>
          <div className='my-4'>
             <lable className="text-xl mr-4 text-gray-500" > author</lable>
             <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full' />
          </div>
          <div className='my-4'>
             <lable className="text-xl mr-4 text-gray-500" > publishYear</lable>
             <input type="text" value={publishYear} onChange={(e) => setPublishYear(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full' />
          </div>
          <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook} >
            Save

          </button>
       </div>
    </div>
  )
}

export default EditeBook;
