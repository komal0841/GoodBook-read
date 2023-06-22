const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_BOOK':
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case 'ADD_POST':
      return {
        ...state,
        query: action.payload,
      };
    case 'APPLY_SEARCH':
      return {
        ...state,
        searchApplied: true,
      };
    case 'CLEAR_SEARCH':
      return {
        ...state,
        searchApplied: false,
      };
    case 'NEXT_PAGE':
      let pageNumInc = state.page + 1;
      if (pageNumInc >= state.nbPages) {
        pageNumInc = 0;
      }
      return {
        ...state,
        page: pageNumInc,
      };
    case 'PREVI_PAGE':
      let pageNum = state.page - 1;
      if (pageNum <= 0) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum,
      };
     
     
  }
  return state;
};

export default reducer;
