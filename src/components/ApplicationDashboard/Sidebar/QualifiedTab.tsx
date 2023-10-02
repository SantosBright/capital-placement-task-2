import { Checkbox } from "antd";

type Props = {};

const QualifiedTab = (props: Props) => {
  return (
    <div className="qualified-tabs">
      <button className="checkbox-btn">
        <Checkbox />
      </button>
      <div className="tabs">
        <button className="single-tab selected">
          <span>Qualified</span>
          <span className="badge">247</span>
        </button>
        <button className="single-tab">
          <span>Task</span>
          <span className="badge">25</span>
        </button>
        <button className="single-tab">
          <span>Disqualified</span>
          <span className="badge">78</span>
        </button>
      </div>
    </div>
  );
};

export default QualifiedTab;
