import { Checkbox } from "antd";
import "./styles.css";

type Props = {
  selected?: boolean;
};

const SingleCandidate = ({ selected }: Props) => {
  return (
    <div className={`single-candidate ${selected && "selected"}`}>
      <Checkbox />
      <div className="content">
        <div className="profile-frame">FR</div>
        <div className="info">
          <h4 className="name">Frances R. Kostka</h4>
          <h5 className="location">Saudi Arabia</h5>
          <div className="field-date">
            <div className="field">
              <h6>
                Bachelor in Information Technology security security security
                security
              </h6>
            </div>
            <span className="date">(2023 - 2023)</span>
          </div>
          <div className="tags">
            <div className="tag">#top_candidate</div>
            <div className="tag">#top_candidate</div>
          </div>
          <div className="badges">
            <div className="badge">New York</div>
            <div className="badge">Marketing</div>
            <div className="badge">London</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCandidate;
