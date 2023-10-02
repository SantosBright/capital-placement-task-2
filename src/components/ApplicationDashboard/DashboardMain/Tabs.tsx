import { ReactComponent as ArrowRightIcon } from "../../../images/icons/arrow-right.svg";

type Props = {};

const Tabs = (props: Props) => {
  return (
    <div className="content-tabs">
      <main>
        <button className="tab active">Profile</button>
        <button className="tab">Video</button>
        <button className="tab">Evaluation</button>
        <button className="tab">Placement</button>
        <button className="tab">Compliance</button>
        <button className="tab">Notes</button>
      </main>
      <button className="next-btn">
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default Tabs;
