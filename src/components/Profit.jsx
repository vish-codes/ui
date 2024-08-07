import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import theme from "./theme";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import { green } from "@mui/material/colors";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Grid } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Profit() {
  const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "#ffffff",
  }));

  const ProfitTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
  }));

  const percentage = 70;
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "10px",
        marginTop: "10px",
        "& > :not(style)": {
          m: 1,
          width: 350,
          height: 190,
        },
      }}
    >
      <StyledPaper
        elevation={3}
        sx={{ backgroundColor: theme.palette.custom.main, width: "100%" }}
      >
        <Grid container spacing={18}>
          <Grid item xs={6}>
            <ProfitTypography variant="subtitle2" gutterBottom>
              Net Profit
            </ProfitTypography>
            <Typography variant="h3" gutterBottom>
              $6759.25
            </Typography>
            <Typography variant="body2" color={green[500]}>
              <ArrowDropUpIcon /> 3%
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: "#ffffff",
                pathColor: "#3f51b5",
                
              })}
            />
            <Typography variant="caption" display="block" gutterBottom>
              * The values have been rounded off.
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
}