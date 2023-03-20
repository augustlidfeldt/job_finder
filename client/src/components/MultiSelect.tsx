import { Typography } from "@mui/material";
import React, { useState, ChangeEvent } from "react";
import Select, { ActionMeta, MultiValue } from "react-select";

type Props = {
  [key: string]: any;
};

export const MultiSelect: React.FC<Props> = ({ selectorProps }: Props) => {
  let options = selectorProps.options.map((opt: any) => {
    return { value: opt.toString().toLowerCase(), label: opt };
  });

  return (
    <div className="multiselector" style={{ width: "240px" }}>
      <Typography
        style={{ padding: "10px 20px", alignSelf: "start" }}
        variant="h6"
      >
        {`${selectorProps.name}`}
      </Typography>

      <Select
        className="selector"
        name={selectorProps.name}
        value={selectorProps.selectedOption}
        defaultValue={selectorProps.selectedOption}
        onChange={(newValue: MultiValue<any>) =>
          selectorProps.handleChange(newValue, selectorProps.name)
        }
        options={options}
        isMulti={true}
      />
    </div>
  );
};
