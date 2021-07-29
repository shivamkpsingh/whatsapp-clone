export const initialState = {
  user: null,
};

export const actionType = {
  set_User: "set_User",
};

const reducer = (state, action) => {
  console.log(action);
  switch(action.type){
      case actionType.set_User:
          return{
           ...state,
           user:action.user
      };
     default:
         return state
  }
};
export default reducer;