function categories (state=[], action) {
  switch (action.type) {
    case 'LIST_CATEGORY':
      console.log("list category ", state.category);
      break;

    case 'CREATE_CATEGORY':
      console.log("careate category ", state.category);
      break;

    case 'UPDATE_CATEGORY':
      console.log("update category ", state.category);
      break;    

    case 'VIEW_CATEGORY':
      console.log("view category ", state.category);
      break;    

    case 'DELETE_Category':
      console.log("delete category ", state.category);
      break;
    
    default:
      console.log("default category ", state.categories);
      return state;
  }
};

export default categories;