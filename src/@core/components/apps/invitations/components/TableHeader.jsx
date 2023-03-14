// ** MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// ** Icons Imports
import ExportVariant from "mdi-material-ui/ExportVariant";

import searchIcon from "assets/assets/search-icon.svg";
import filterIcon from "assets/assets/filter-icon.svg";

const TableHeader = (props) => {
  // ** Props
  const { handleFilter, value, toggle } = props;

  return (
    <div className="usm-wraper">
      <div className="cm-filters">
        <form action="" class="usm-search-form">
          <div className="form-group">
            <input type="text" class="form-control" placeholder="Search here" />
            <button>
              <img src={searchIcon} alt="" />
            </button>
          </div>
        </form>
        <div className="usm-filter-box">
          <button>
            <img src={filterIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="add-user-btn">
        <button
          class="add-btn prim-btn"
          data-bs-toggle="modal"
          data-bs-target="#addUserModal"
          onClick={toggle}
        >
          Invite People
        </button>
      </div>
    </div>
  );
};

export default TableHeader;
