import userImg from "../../../images/user.jpeg";
import { ReactComponent as CloseIcon } from "../../../images/icons/close.svg";
import { ReactComponent as AddCircleIcon } from "../../../images/icons/add-circle.svg";
import { ReactComponent as PlayIcon } from "../../../images/icons/play.svg";

type Props = {};

const CandidateInfo = (props: Props) => {
  return (
    <div className="candidate-info">
      <div className="user-image">
        <img src={userImg} alt="user" />
        <div className="play-icon">
          <PlayIcon />
        </div>
      </div>
      <div className="main-info">
        <div>
          <div className="name-tags">
            <h4 className="name">Aaliyah Sanderson</h4>
            <div className="badges">
              <div className="badge">New York</div>
              <div className="badge">Marketing</div>
              <div className="badge">London</div>
            </div>
          </div>
          <h6 className="other-info">
            <span>Saudi Arabia</span> |<span>aaliyahs@gmail.com</span> |
            <span>+00 000 000 0000</span>
          </h6>
          <div className="tags">
            <div className="tag">
              #top_candidate
              <button>
                <CloseIcon />
              </button>
            </div>
            <div className="tag">
              #marketing_june
              <button>
                <CloseIcon />
              </button>
            </div>
            <button className="add-btn">
              <AddCircleIcon />
              <span>Add tag</span>
            </button>
          </div>
        </div>
      </div>
      <div className="score-date">
        <div className="overall-score">
          <h5>Overall Score</h5>
          <div className="badge">7</div>
        </div>
        <h6>Applied on 12 June 2023</h6>
      </div>
    </div>
  );
};

export default CandidateInfo;
