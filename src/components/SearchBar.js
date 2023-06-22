import React from 'react';
import '../App.css';
import { useGlobalContext } from './context';

export default function SearchBar() {
  const { query, searchPost, handelApplySearch, handelClearSearch } = useGlobalContext();

  return (
    <>
      <div className='App'>
        <form onSubmit={(e)=>handelApplySearch(e, query)}>
          <input
            type='text'
            placeholder='search..'
            value={query}
            onChange={(e) => searchPost(e.target.value)}
            
          ></input>

          <button type='submit'>Apply</button>
          <button onClick ={handelClearSearch}>Clear</button>
        </form>
      </div>
    </>
  );
}
