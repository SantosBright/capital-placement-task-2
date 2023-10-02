import { ReactComponent as SettingsIcon } from "../../images/icons/settings.svg";
import { ReactComponent as HomeIcon } from "../../images/icons/home.svg";
import { ReactComponent as UserGroupIcon } from "../../images/icons/user-group.svg";
import { ReactComponent as CalendarCheckIcon } from "../../images/icons/calendar-check.svg";
import { ReactComponent as ShareIcon } from "../../images/icons/share.svg";
import { ReactComponent as FileIcon } from "../../images/icons/file.svg";
import { ReactComponent as NoteBookIcon } from "../../images/icons/note-book.svg";
import { ReactComponent as HeartIcon } from "../../images/icons/heart.svg";
import { ReactComponent as ArrowLeftIcon } from "../../images/icons/arrow-left.svg";
import "./styles.css";

type Props = {};

const SideNav = (props: Props) => {
  return (
    <div className="side-nav">
      <div>
        <div className="frame">
          <div>
            {/* <img src="" alt="" /> */}
          </div>
        </div>
        <button className="nav-item">
          <HomeIcon />
        </button>
        <button className="nav-item">
          <UserGroupIcon />
        </button>
        <button className="nav-item">
          <CalendarCheckIcon />
        </button>
        <button className="nav-item active">
          <ShareIcon />
        </button>
        <button className="nav-item">
          <FileIcon />
        </button>
        <button className="nav-item">
          <NoteBookIcon />
        </button>
        <button className="nav-item">
          <HeartIcon />
        </button>
        <button className="nav-item">
          <ArrowLeftIcon />
        </button>
      </div>
      <div>
        <button className="nav-item">
          <SettingsIcon />
        </button>
        <button className="nav-item logo-cont">
          <div className="logo">AS</div>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
