import React,{useState} from 'react'

const Search = ({getQuery}) => {

  const [serchText,setSerchText] = useState('')

  const onChange = (q)=> {
    setSerchText(q)
    getQuery(q)
  }

  return (
    <div className='search'>
      <form action="">
         <input 
         type='text' 
         className='form-control' 
         placeholder='Поиск ...' 
         onChange={(e)=>onChange(e.target.value)}
         value ={serchText}
         autoFocus
         />
      </form>
    </div>
  )
}

export default Search
