import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routing";
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "./firebaseConfig"
import { UserAuthProvider } from "./context/useAuthContext";

interface AppProps{}
initializeApp(firebaseConfig);
 const App:React.FunctionComponent<AppProps>=(props)=>{
return(
  <UserAuthProvider>
      <RouterProvider router={router} />
    </UserAuthProvider>
)
 }
export default App;

