import SingleCandidate from "../SingleCandidate";

type Props = {};

const CandidateList = (props: Props) => {
  return (
    <div className="candidate-list">
      <SingleCandidate />
      <SingleCandidate />
      <SingleCandidate />
      <SingleCandidate selected />
      <SingleCandidate />
      <SingleCandidate />
      <SingleCandidate />
      <SingleCandidate />
      <SingleCandidate />
      <SingleCandidate />
    </div>
  );
};

export default CandidateList;
