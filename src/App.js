import "./assets/fontawesome/index.css";
import "./assets/css/ayub.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/dataTables.bootstrap4.min.css";
import "./assets/css/responsive.css";
import "./assets/css/slick-theme.css";
import "./assets/css/slick.css";
import "./App.css";

import { Provider } from "react-redux";
import { store } from "./store";
import { DrawerProvider } from "@core/context/DrawerContext";
import MainNavigation from "@core/MainNavigation";

function App() {
  return (
    <>
      <Provider store={store}>
        <DrawerProvider>
          <MainNavigation />
        </DrawerProvider>
      </Provider>
    </>
  );
}

export default App;
