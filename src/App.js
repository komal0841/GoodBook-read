import React from 'react';
import Navbar from './components/Navbar';
import SearchBar  from './components/SearchBar';
import Books from './components/Books';
import Pagination from './components/Pagination';


export default function App() {
 
  return (
    <>
   
     <Navbar />
     <SearchBar />
     <Books />
     <Pagination />
    </>
  )
}
