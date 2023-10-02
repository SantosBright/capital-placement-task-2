import { ReactComponent as PlayCircleIcon } from "../../../images/icons/play-circle.svg";
import videoImg from "../../../images/video.jpeg";

type IType =
  | "Short Answer"
  | "Video"
  | "Number"
  | "Mutiple choice"
  | "Dropdown";

type Props = {
  type: IType;
};

const renderAnswers = (type: IType) => {
  switch (type) {
    case "Video":
      return (
        <div className="video">
          <img src={videoImg} alt="video" />
          <div className="overlay">
            <button>
              <PlayCircleIcon />
            </button>
          </div>
        </div>
      );

    case "Mutiple choice":
      return (
        <div className="mutiple-choices">
          <div className="choice-badge">New York</div>
          <div className="choice-badge">New York</div>
          <div className="choice-badge">New York</div>
          <div className="choice-badge">New York</div>
        </div>
      );

    default:
      return (
        <div className="answer-text">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      );
  }
};

const Question = ({ type }: Props) => {
  return (
    <div className="question">
      <div className="data-type">
        <div></div>
      </div>
      <div>
        <div className="data-type-tag">{type}</div>
        <h4 className="question-title">
          What regions within Saudi Arabia are you available to pursue a
          traineeship opportunity? You may select multiple options that apply
        </h4>
        {renderAnswers(type)}
      </div>
    </div>
  );
};

export default Question;
