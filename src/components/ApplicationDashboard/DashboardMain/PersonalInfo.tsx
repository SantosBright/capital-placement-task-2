import { ReactComponent as UserCircleIcon } from "../../../images/icons/user-circle.svg";
import { ReactComponent as UserSquareIcon } from "../../../images/icons/user-sqaure.svg";
import { ReactComponent as UserIcon } from "../../../images/icons/user.svg";
import { ReactComponent as CalendarEventIcon } from "../../../images/icons/calendar-event.svg";

type Props = {};

const PersonalInfo = (props: Props) => {
  return (
    <div className="personal-info">
      <h4 className="section-title">Personal Information</h4>
      <div className="details-card">
        <div className="detail">
          <div className="detail-icon">
            <UserCircleIcon />
          </div>
          <div>
            <h5>Nationality</h5>
            <h5 className="value">Sri Lankan</h5>
          </div>
        </div>
        <div className="detail">
          <div className="detail-icon">
            <UserSquareIcon />
          </div>
          <div>
            <h5>National ID</h5>
            <h5 className="value">0000000000</h5>
          </div>
        </div>
        <div className="detail">
          <div className="detail-icon">
            <UserIcon />
          </div>
          <div>
            <h5>Gender</h5>
            <h5 className="value">Female</h5>
          </div>
        </div>
        <div className="detail">
          <div className="detail-icon">
            <CalendarEventIcon />
          </div>
          <div>
            <h5>Date of Birth</h5>
            <h5 className="value">00-00-0000</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
