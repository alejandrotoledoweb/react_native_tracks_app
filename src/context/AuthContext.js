import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "auth":
      return {
        ...state,
        signedIn: true,
      };
    default:
      return state;
  }
};

export default { Provider, Context } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
