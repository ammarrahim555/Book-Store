import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import Spinner from "../commponents/Spinner"
import BackButton from '../commponents/backButton'
import { useParams } from 'react-router-dom'

const ShowBook = () => {
  const [books, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(books)
  

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      })
  }, [])
  console.log(books)

  return (
    <div className='p-4' >
      <BackButton />
      <h1 className='text-3xl my-4' > show book  </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='felx flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'  > id</span>
            <span>{books._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'  > title</span>
            <span>{books.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'  >author</span>
            <span>{books.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'  >publish yrar</span>
            <span>{books.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'  >created time</span>
            <span>{new Date(books.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'  >update Last time</span>
            <span>{new Date(books.updatedAt).toString()} </span>
          </div>
        </div>





      )}
    </div>
  )
}

export default ShowBook
