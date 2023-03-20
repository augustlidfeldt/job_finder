import React, { useState } from "react";
import { Grid, Button, TextField, InputAdornment } from "@mui/material";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { MuiRail, MuiHandle, MuiTrack, MuiTick } from "./components";
import BarChart from "./BarChart";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);

const RangeSlider = () => {

  const data = [];
  for (let i = 0; i < 500; i++) {
    data.push(Math.floor(Math.random() * 91));
  }

  const sortedData = data.slice().sort((a, b) => a - b);
  const range = [sortedData[0], sortedData[sortedData.length - 1]];

  const [domain, setDomain] = useState(range);
  const [update, setUpdate] = useState(range);
  const [values, setValues] = useState(range);
  const [inputValues, setInputValues] = useState(range);

  return (
    <Grid container>
      <Grid item xs={12}>
        <div style={{ margin: "10%", height: 120, width: "80%" }}>
          <BarChart
            data={data}
            highlight={update}
            domain={domain}
          />
          <Slider
            mode={1}
            step={5}
            domain={domain}
            rootStyle={{
              position: "relative",
              width: "100%"
            }}
            onUpdate={(update) => { setUpdate(update); setInputValues(update) }
            }
            onChange={(values) => setValues(values)}
            values={values}
          >
            <Handles>
              {({ handles, getHandleProps }) => (
                <div className="slider-handles">
                  {handles.map((handle) => (
                    <MuiHandle
                      key={handle.id}
                      handle={handle}
                      domain={domain}
                      getHandleProps={getHandleProps}
                    />
                  ))}
                </div>
              )}
            </Handles>
            <Tracks left={false} right={false}>
              {({ tracks, getTrackProps }) => (
                <div className="slider-tracks">
                  {tracks.map(({ id, source, target }) => (
                    <MuiTrack
                      key={id}
                      source={source}
                      target={target}
                      getTrackProps={getTrackProps}
                    />
                  ))}
                </div>
              )}
            </Tracks>
          </Slider>
          <Grid
            container
            alignItems="center"
            justify="space-around"
            style={{ marginTop: "88px" }}
          >
            <Grid item xs={4} style={{ textAlign: "right" }}>
              <TextField
                variant="outlined"
                label="starting price"
                value={inputValues[0]}
                onChange={(evt) => {
                  const value = evt.target.value;
                  const newState = [value, inputValues[1]];
                  setInputValues(newState);
                  if (value && value >= domain[0]) {
                    setValues(newState);
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={4} style={{ textAlign: "center" }}>
              —
            </Grid>
            <Grid item xs={4} style={{ textAlign: "left" }}>
              <TextField
                variant="outlined"
                label="max price"
                value={inputValues[1]}
                onChange={(evt) => {
                  const value = evt.target.value;
                  const newState = [inputValues[0], value];
                  setInputValues(newState);
                  if (value && value <= domain[1] && value >= values[0]) {
                    setValues(newState);
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
          <Button
            style={{ marginTop: "3%", marginBottom: "3%" }}
            onClick={() => {
              setValues(domain);
              setUpdate(domain);
              setInputValues(domain);
            }}
          >
            Reset
          </Button>
        </div>
      </Grid>
    </Grid>
  );

}

export default RangeSlider;
