import ApplicationDashboard from "./components/ApplicationDashboard";
import SideNav from "./components/layout/SideNav";
import "./styles/App.css";

function App() {
  return (
    <div className="dashboard">
      <SideNav />
      <ApplicationDashboard />
    </div>
  );
}

export default App;
