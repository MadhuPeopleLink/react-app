function products (state = [], action) {
  console.log("product state ", state);
  
  switch (action.type) {
    case 'LIST_PRODUCT':
      console.log("list product ", state);
      break;

    case 'CREATE_PRODUCT':
      console.log("careate product ", state);
      break;

    case 'UPDATE_PRODUCT':
      console.log("update product ", state);
      break;    

    case 'VIEW_PRODUCT':
      console.log("view product ", state);
      break;    

    case 'DELETE_PRODUCT':
      console.log("delete product ", state);
      break;
    
    default:
      console.log("default product ", state);
      return state;
  }
};

export default products;