import NavBar from "./NavbarPanel";
import { Outlet } from "react-router-dom";
import{Provider} from  "react-redux";
import store from "../store/store";

const RootLayOut = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />

        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
}
 
export default RootLayOut;