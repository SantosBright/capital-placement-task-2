import DashboardMain from "./DashboardMain";
import Sidebar from "./Sidebar";
import "./styles.css";

type Props = {};

const ApplicationDashboard = (props: Props) => {
  return (
    <div className="application-dashboard">
      <Sidebar />
      <DashboardMain></DashboardMain>
    </div>
  );
};

export default ApplicationDashboard;
