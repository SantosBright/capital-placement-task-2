import { ReactComponent as FilterIcon } from "../../../images/icons/filter.svg";
import { ReactComponent as WarningCircleIcon } from "../../../images/icons/warning-circle.svg";
import { ReactComponent as SearchIcon } from "../../../images/icons/search.svg";

type Props = {};

const SearchFilter = (props: Props) => {
  return (
    <div className="search-filter">
      <div className="input-container">
        <label htmlFor="">
          <SearchIcon />
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search by name, edu, exp or #tag"
        />
        <span className="warning-icon">
          <WarningCircleIcon />
        </span>
      </div>
      <button>
        <FilterIcon />
      </button>
    </div>
  );
};

export default SearchFilter;
