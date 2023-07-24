import { useEffect } from "react";
import { useAppDispatch } from "./redux/hook";
import { onAuthStateChanged } from "firebase/auth";
import { setLoading, setUser } from "./redux/feature/user/userSlice";
import { auth } from "./firebase/firebase.config";
import Layout from "./layout/Layout";

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
      <Layout />
    </>
  );
}

export default App;
