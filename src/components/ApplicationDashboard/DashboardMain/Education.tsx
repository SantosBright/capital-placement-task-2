import { ReactComponent as BuildingIcon } from "../../../images/icons/building.svg";

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="info-card">
      <h4 className="section-title">Education</h4>
      <div className="info-details">
        <div className="icons">
          <BuildingIcon />
        </div>
        <div>
          <h5>Bachelor in Biochemistry</h5>
          <h5 className="education-location-date">
            <span>King Saud University</span> | <span>Saudi Arabia</span> |
            <span>Jan 2022</span>-<span>Jan 2023</span>
          </h5>
        </div>
      </div>
      <div className="info-details">
        <div className="icons">
          <BuildingIcon />
        </div>
        <div>
          <h5>Bachelor in Biochemistry</h5>
          <h5 className="education-location-date">
            <span>King Saud University</span> | <span>Saudi Arabia</span> |
            <span>Jan 2022</span>-<span>Jan 2023</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Education;
