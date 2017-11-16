function categories (state=[], action) {
  switch (action.type) {
    case "CREATE_CATEGORY":
      console.log(" CREATE_CATEGORY Reducer ");
      break;

    case "UPDATE_CATEGORY":
      console.log(" UPDATE_CATEGORY Reducer ");
      break;

    case "DELETE_CATEGORY":
      console.log(" DELETE_CATEGORY Reducer ");
      break;

    default:
      console.log("default state in categories ", state);
      return state;
  }
};

export default categories;