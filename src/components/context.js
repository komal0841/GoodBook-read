import React, { useContext, useReducer, useEffect, useState } from 'react';
import reducer from '../reducer';
import axios from 'axios';
//contect creation
let API = 'http://hn.algolia.com/api/v1/search?';

const initialState = {
  query: '',
  searchApplied: false,
  nbPages: 0,
  page: 0,
  hits: [],
  selectedBook: null,
};

const AppContext = React.createContext();

//create provider

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState(10);
  console.log(state.query);

  const fetchApiData = async (url) => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      console.log(data);
      dispatch({
        type: 'GET_BOOK',
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // to add the post
  const searchPost = (searchQuery) => {
    dispatch({ type: 'ADD_POST', payload: searchQuery });
  };
  const handelApplySearch = (e) => {
    e.preventDefault();
    dispatch({ type: 'APPLY_SEARCH' });
    fetchApiData(
      `${API}query=${state.query}&page=${state.page}&hitsPerPage=${count}`
    );
    searchPost(state.query);
  };
  const handelClearSearch = () => {
    dispatch({ type: 'CLEAR_SEARCH' });
    searchPost('');
  };

  const decPage = () => {
    dispatch({
      type: 'PREVI_PAGE',
      
    });
  };
  const inPage = () => {
    dispatch({
      type: 'NEXT_PAGE',
    });
    
  
  };
 
  useEffect(() => {
    const url = state.searchApplied
      ? `${API}query=${state.query}&page=${state.page}&hitsPerPage=${count}`
      : `${API}page=${state.page}`;

    fetchApiData(url);
  }, [state.page, state.searchApplied,  count]);

  return (
    <AppContext.Provider
      value={{
        ...state,
       
        searchPost,
        handelApplySearch,
        handelClearSearch,
        decPage,
        inPage,
       
        count,
        setCount,
        // itemPerPage   
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//create custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
