import { useEffect } from "react";
import { useAppDispatch } from "./redux/hook";
import { onAuthStateChanged } from "firebase/auth";
import { setLoading, setUser } from "./redux/feature/user/userSlice";
import { auth } from "./firebase/firebase.config";
import Layout from "./layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      <Layout />
    </>
  );
}

export default App;
