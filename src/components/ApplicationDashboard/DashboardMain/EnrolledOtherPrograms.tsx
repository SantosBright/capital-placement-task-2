import { ReactComponent as SwatchesPaleteIcon } from "../../../images/icons/swatches-palete.svg";

type Props = {};

const EnrolledOtherPrograms = (props: Props) => {
  return (
    <div className="enrolled-other-programs">
      <h4 className="section-title">Enrolled Other Programs</h4>
      <div className="programs">
        <div className="icon">
          <SwatchesPaleteIcon />
        </div>
        <div className="info">
          <div>
            <h5>Misk Traineeship</h5>
            <h5>Currently At Video Task</h5>
          </div>
          <div className="status active">Active</div>
        </div>
      </div>
      <div className="programs">
        <div className="icon">
          <SwatchesPaleteIcon />
        </div>
        <div className="info">
          <div>
            <h5>Misk Traineeship</h5>
            <h5>Currently At Video Task</h5>
          </div>
          <div className="status disqualified">Disqualified</div>
        </div>
      </div>
      <div className="programs">
        <div className="icon">
          <SwatchesPaleteIcon />
        </div>
        <div className="info">
          <div>
            <h5>Misk Traineeship</h5>
            <h5>Currently At Video Task</h5>
          </div>
          <div className="status disqualified">Disqualified</div>
        </div>
      </div>
      <div className="programs">
        <div className="icon">
          <SwatchesPaleteIcon />
        </div>
        <div className="info">
          <div>
            <h5>Misk Traineeship</h5>
            <h5>Currently At Video Task</h5>
          </div>
          <div className="status active">Active</div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledOtherPrograms;
