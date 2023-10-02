import Question from "./Question";

type Props = {};

const AdditionalQuestions = (props: Props) => {
  return (
    <div className="additional-questions">
      <div className="header">
        <h4 className="section-title">Additional Questions</h4>
        <div className="sort-filter">Sort</div>
      </div>
      <Question type="Short Answer" />
      <Question type="Video" />
      <Question type="Number" />
      <Question type="Mutiple choice" />
      <Question type="Dropdown" />
    </div>
  );
};

export default AdditionalQuestions;
