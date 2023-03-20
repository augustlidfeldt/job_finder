import React, { useEffect, useState } from "react";
import FunnelIcon from "@mui/icons-material/FilterAlt";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { MultiSelect } from "./MultiSelect";
import RangeSlider from "./RangeSlider";

const iconStyle = {
  margin: "20px",
  scale: "150%",
  opacity: "30%",
  borderRadius: "50%",
  border: "1px black solid",
};

type Props = {
  [key: string]: any;
};

const selectorProps: Props = {
  options: ["Finance", "Food Processing"],
};

function SideBar() {
  const [open, setOpen] = useState(true);
  const [allJobs, setAllJobs] = useState({});

  useEffect(() => {
    async function getAllJobs() {
      const res = await fetch("http://localhost:5000/jobs/detailed");
      const data = await res.json();
      setAllJobs(data);
      console.log(data);
    }
    getAllJobs();
  }, [1]);

  return (
    <div>
      {open ? (
        <div className="sidebar closed">
          <FunnelIcon
            style={iconStyle}
            onClick={() => setOpen(false)}
          ></FunnelIcon>
        </div>
      ) : (
        <div className="sidebar open">
          <KeyboardArrowLeftIcon
            style={{ ...iconStyle, alignSelf: "end" }}
            onClick={() => setOpen(true)}
          ></KeyboardArrowLeftIcon>
          <p>Select country</p>

          <MultiSelect
            name="industry"
            selectorProps={selectorProps}
          ></MultiSelect>
          <RangeSlider></RangeSlider>
        </div>
      )}
    </div>
  );
}

export default SideBar;
