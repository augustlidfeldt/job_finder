import React, { useEffect, useState } from "react";
import FunnelIcon from "@mui/icons-material/FilterAlt";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { MultiSelect } from "./MultiSelect";
import { Typography } from "@mui/material";

const iconStyle = {
  margin: "20px",
  scale: "150%",
  opacity: "90%",
  borderRadius: "50%",
  color: "white",
  padding: 0,
};

type Props = {
  [key: string]: any;
};

const selectorProps: Props = {
  options: ["Finance", "Food Processing"],
  name: "Industry",
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
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        {open ? (
          <>
            <KeyboardArrowLeftIcon
              style={{ ...iconStyle, alignSelf: "end" }}
              onClick={() => setOpen(false)}
            />

            <MultiSelect
              name="industry"
              selectorProps={selectorProps}
              style={{ width: "240px" }}
            />
          </>
        ) : (
          <FunnelIcon style={iconStyle} onClick={() => setOpen(true)} />
        )}
      </div>
    </div>
  );
}

export default SideBar;
