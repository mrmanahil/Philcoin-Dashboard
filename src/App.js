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
import { SidebarProvider } from "@core/context/SidebarContext";
import { AuthProvider } from "context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <SidebarProvider>
            <DrawerProvider>
              <Toaster position="top-right" reverseOrder={false} />
              <MainNavigation />
            </DrawerProvider>
          </SidebarProvider>
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
