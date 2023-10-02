import AdditionalQuestions from "./AdditionalQuestions";
import CandidateInfo from "./CandidateInfo";
import Education from "./Education";
import EnrolledOtherPrograms from "./EnrolledOtherPrograms";
import PersonalInfo from "./PersonalInfo";
import Resume from "./Resume";
import Tabs from "./Tabs";
import WorkExperience from "./WorkExperience";
import "./styles/index.css";

type Props = {};

const DashboardMain = (props: Props) => {
  return (
    <main>
      <CandidateInfo />
      <Tabs />
      <PersonalInfo />
      <Education />
      <WorkExperience />
      <Resume />
      <AdditionalQuestions />
      <EnrolledOtherPrograms />
    </main>
  );
};

export default DashboardMain;
