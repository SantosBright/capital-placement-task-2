import { useState } from "react";
import { ReactComponent as ArrowLeftIcon } from "../../../images/icons/arrow-down.svg";

type Props = {};

const SelectFilter = (props: Props) => {
  const [hide, setHide] = useState(true);

  const toggleHide = () => setHide((prev) => !prev);

  return (
    <>
      {!hide && <div className="select-overlay"></div>}
      <div className="select-filter" onClick={toggleHide}>
        <div className="role">
          <div>SIP</div>
        </div>
        <div className="selected-text">
          <h4>Opportunity Browsing</h4>
          <h4>2325</h4>
        </div>
        <div className="arrow-down">
          <ArrowLeftIcon />
        </div>
        <div className={`select-modal ${hide && "hide"}`}>
          <div className="modal-option" onClick={toggleHide}>
            Applied
            <div className="count">12</div>
          </div>
          <div className="modal-option" onClick={toggleHide}>
            Shortlisted
            <div className="count">9</div>
          </div>
          <div className="modal-option" onClick={toggleHide}>
            Video Interview
            <div className="count">0</div>
          </div>
          <div className="modal-option" onClick={toggleHide}>
            Group Interview
            <div className="count">9</div>
          </div>
          <div className="modal-option" onClick={toggleHide}>
            Placement
            <div className="count">6</div>
          </div>
          <div className="modal-option" onClick={toggleHide}>
            Invisible Storage
            <div className="count">1</div>
          </div>
          <div className="modal-option" onClick={toggleHide}>
            Hired
            <div className="count">0</div>
          </div>
          <div className="modal-option" onClick={toggleHide}>
            Invisible Video Stage
            <div className="count">0</div>
          </div>
          <div className="modal-option" onClick={toggleHide}>
            Withdrawn
            <div className="count">1</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectFilter;
