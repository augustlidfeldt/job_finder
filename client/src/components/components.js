import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";


// Based on Material Design spec:
// Styles by https://github.com/RafeSacks
// https://material.io/design/components/sliders.html#spec
const trackHeight = 2;
const thumbHeight = 12;

// *******************************************************
// RAIL COMPONENT
// *******************************************************

const muiRailStyle = (theme) => ({
  rail: {
    backgroundColor: theme.palette.grey[400],
    width: "100%",
    height: trackHeight,
    position: "absolute",
    pointerEvents: "none",
  },
  railHotspot: {
    // backgroundColor: "green", // for debugging
    width: "100%",
    height: thumbHeight * 2, // Invisible hotspot same size as thumb
    top: thumbHeight * -1,
    position: "absolute",
    cursor: "pointer",
  },
});



// *******************************************************
// HANDLE COMPONENT
// *******************************************************

const muiHandleStyle = (theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    marginLeft: thumbHeight * -0.5,
    marginTop: thumbHeight * -0.5,
    width: thumbHeight,
    height: thumbHeight,
    border: 0,
    borderRadius: "50%", // circle
    // boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
    whiteSpace: "nowrap", // for child display inline-block to work
    position: "absolute",
    zIndex: 2,
    cursor: "pointer",
  },
});

function MuiHandleComponent({
  domain: [min, max],
  handle: { id, value, percent },

  getHandleProps,
}) {
  return (
    <div
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      style={{ left: `${percent}%` }}
      {...getHandleProps(id)}
    />
  );
}

MuiHandleComponent.propTypes = {
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,

  getHandleProps: PropTypes.func.isRequired,
};

export const MuiHandle = (MuiHandleComponent);

// *******************************************************
// TRACK COMPONENT
// *******************************************************

const muiTrackStyle = (theme) => ({
  track: {
    backgroundColor: theme.palette.secondary.main,
    height: trackHeight,
    position: "absolute",
    zIndex: 1,
    pointerEvents: "none",
  },
  trackHotspot: {
    // backgroundColor: "grey", // for debugging
    height: thumbHeight, // Invisible hotspot same size as thumb
    top: thumbHeight * -0.5,
    position: "absolute",
    cursor: "pointer",
  },
});

function MuiTrackComponent({ source, target, getTrackProps }) {
  const left = `${source.percent}%`;
  const width = `${target.percent - source.percent}%`;

  return (
    <Fragment>
      <div style={{ left, width }} />
      <div

        style={{ left, width }}
        {...getTrackProps()}
      />
    </Fragment>
  );
}

MuiTrackComponent.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  target: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,

  getTrackProps: PropTypes.func.isRequired,
};

export const MuiTrack = (MuiTrackComponent);

// *******************************************************
// TICK COMPONENT
// *******************************************************

const muiTickStyle = (theme) => ({
  tick: {
    position: "absolute",
    marginTop: 14,
    width: 1,
    height: 5,
    backgroundColor: theme.palette.grey[400],
  },
  label: {
    position: "absolute",
    marginTop: 22,
    textAlign: "center",
  },
});

export function MuiTickComponent({ tick, count, format }) {
  return (
    <div>
      <div style={{ left: `${tick.percent}%` }} />
      <Typography

        variant="caption"
        style={{
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`,
        }}
      >
        {format(tick.value)}
      </Typography>
    </div>
  );
}

MuiTickComponent.propTypes = {
  tick: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,

  count: PropTypes.number.isRequired,
  format: PropTypes.func.isRequired,
};

MuiTickComponent.defaultProps = {
  format: (d) => d,
};

export const MuiTick = (MuiTickComponent);
