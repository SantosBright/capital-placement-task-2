import { ReactComponent as FileDownloadIcon } from "../../../images/icons/file-download.svg";
import { ReactComponent as EyeIcon } from "../../../images/icons/eye.svg";

type Props = {};

const Resume = (props: Props) => {
  return (
    <div className="resume">
      <div className="header">
        <h4 className="section-title">Resume</h4>
        <div className="actions">
          <button>
            <EyeIcon />
          </button>
          <button>
            <FileDownloadIcon />
          </button>
        </div>
      </div>
      <div className="pdf-preview"></div>
    </div>
  );
};

export default Resume;
