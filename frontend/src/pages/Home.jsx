import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../commponents/Spinner'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import BookTable from '../commponents/Home/BookTable'
import BookCards from '../commponents/Home/BookCards'

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType , setShowType] = useState('table'); 


  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {

        setBooks(response.data.data)

        setLoading(false)
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      })
  }, []);
  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4' >
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' 
        onClick={() => {setShowType('table')  }}>
          Table
        </button>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' 
        onClick={() => {setShowType('card')  }}>
        Card  
        </button>

      </div>
      <div className='flex justify-between item-center'>
        <h1 className='text-3xl my-8'>book List  </h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="texk-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (<Spinner />) : showType  === "table" ?    (<BookTable books={books}  /> )  : (<BookCards books={books}  /> )  }

    </div>
  )
}

export default Home
