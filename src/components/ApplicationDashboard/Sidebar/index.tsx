import QualifiedTab from "./QualifiedTab";
import CandidateList from "./CandidateList";
import "./styles.css";
import SearchFilter from "./SearchFilter";
import SelectFilter from "./SelectFilter";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="sidebar">
      <SelectFilter />
      <SearchFilter />
      <QualifiedTab />
      <CandidateList />
    </div>
  );
};

export default Sidebar;
