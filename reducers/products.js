function products (state=[], action) {
  switch (action.type) {
    case "CREATE_PRODUCT":
      console.log(" CREATE_PRODUCT Reducer ");
      break;

    case "UPDATE_PRODUCT":
      console.log(" UPDATE_PRODUCT Reducer ");
      break;

    case "DELETE_PRODUCT":
      console.log(" DELETE_PRODUCT Reducer ");
      break;

    default:
      console.log("default state in products ", state);
      return state;
  }
};

export default products;