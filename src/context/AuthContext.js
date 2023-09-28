import createDataContext from "./createDataContext";
import axiosInstance from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../utils/navigationService";

const authReducer = (state, action) => {
  switch (action.type) {
    case "auth":
      return {
        ...state,
        signedIn: true,
      };
    case "singup":
      return {
        ...state,
        signedIn: true,
        token: action.payload,
        errorMessage: "",
      };
    case "add_error":
      return {
        ...state,
        signedIn: true,
        errorMessage: action.payload,
      };
    case "clean_error":
      return {
        ...state,
        signedIn: false,
        errorMessage: "",
      };
    default:
      return state;
  }
};

const signUp = (dispatch) => async (email, password) => {
  try {
    const response = await axiosInstance.post("/signup", { email, password });

    if ((response.data.status = 200)) {
      dispatch({ type: "signup", payload: response.data.token });
      await AsyncStorage.setItem("token", response.data.token);
      navigate("Main");
    }
  } catch (err) {
    dispatch({ type: "add_error", payload: err.message });
  }
};
const signIn = (dispatch) => async (email, password) => {
  try {
    const response = await axiosInstance.post("/signIn", { email, password });

    if ((response.data.status = 200)) {
      dispatch({ type: "signIn", payload: response.data.token });
      await AsyncStorage.setItem("token", response.data.token);
      navigate("Main");
    }
  } catch (err) {
    dispatch({ type: "add_error", payload: err.message });
  }
};

const cleanError = (dispatch) => () => {
  dispatch({ type: "clean_error" });
};

const tryLocalisgnIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signIn", payload: token });
    navigate("Main");
  } else {
    navigate("SignUp");
  }
};

const signOut = (dispatch) => () => {
  return { email, password };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, cleanError, tryLocalisgnIn },
  { token: null, isSignedIn: false, errorMessage: "" }
);
