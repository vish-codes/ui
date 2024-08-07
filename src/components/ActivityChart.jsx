import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { dataset } from "../weather";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

const chartSetting = {
  series: [{ dataKey: "newYork" }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
      fill: "white", 
    },
    [`& .${axisClasses.directionX} .${axisClasses.label}`]: {
      fill: "white", 
    },
  },
};

const StyledButton = styled(Button)(() => ({
  backgroundColor: "#9e9e9e",
  color: "#fff",
  borderRadius: "20px",
  textTransform: "none",
  padding: "6px 16px",
  "&:hover": {
    backgroundColor: "#555",
  },
  '& .MuiButton-endIcon': {
    marginLeft: '4px',
  },
}));

export default function ActivityChart() {
  return (
    <div
      style={{
        maxWidth: 889,
        backgroundColor: "#2c2c3d",
        marginLeft: "14px",
        padding: "8px",
        paddingBotton: "0px",
        borderRadius: "6px",
        width: "67%",
        marginTop:'10px'
      }}
    >
      <Grid container >
        <Grid item xs={6}>
         <h1 style={{ fontWeight: "bold", color: "white",  margin: 0}}>Activity</h1>
        </Grid>
        <Grid item xs={6}  style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <StyledButton variant="contained" endIcon={<ArrowDropDownIcon />}>
          Weekly
        </StyledButton>
        </Grid>
      </Grid>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        {...chartSetting}
      />
    </div>
  );
}
