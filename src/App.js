import React,{useState,useEffect} from 'react'
import './App.css';
import Header from './components/ui/Header'
import axios from 'axios'
import Characters from './components/ui/Characters'
import Search from './components/ui/Search'

const App = () => {
  
  const [items,setItems] = useState([])
  const [isLoading,setLoading] = useState(true)
  const [query,setQuery] = useState('')


  // получение данных
  
   useEffect(()=>{
    const fetchItems = async () => {
      setLoading(true)
       const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
   
       setItems(result.data)
       setLoading(false)
    }
    fetchItems()
   },[query])


  return (
    <div className="container">
     <Header />
     <Search getQuery={(q)=>setQuery(q)} />
     <Characters isLoading={isLoading} items ={items} />
    </div>
  );
}

export default App;
