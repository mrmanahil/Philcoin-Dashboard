import logo from "./logo.svg";
import "./App.css";
import useToggleDrawer from "@core/hooks/useToggleDrawer";
import Drawer from "@core/components/apps/example/components/Drawer";
import TableHeader from "@core/components/apps/example/components/TableHeader";

function App() {
  const { serviceId, isDrawerOpen, handleDrawer } = useToggleDrawer();

  return (
    <>
      <TableHeader
        value={""}
        handleFilter={() => {}}
        toggle={() => handleDrawer(null)}
      />

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Drawer
        open={isDrawerOpen}
        serviceId={serviceId}
        toggle={() => handleDrawer(null)}
      />
    </>
  );
}

export default App;
