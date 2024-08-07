import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

export default function NestedList() {
  return (
    <List
      sx={{
        width: {xs:260, sm:350},
        bgcolor: "#2c2c3d",
        marginLeft: {xs:"12px",sm:"30px"},
        height: 351,
        borderRadius: "6px",
        color: "#ffffff",
        display: "flex",
        flexWrap:{sx: "wrap", lg: "nowrap"},
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "10px",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemIcon>
          <GpsFixedIcon sx={{ color: "#ff5722", fontSize: "2.5rem" }} />
        </ListItemIcon>
        <ListItemText primary="Goals" />
        <Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "#757575", // Icon background color
              width: 32,
              height: 32,
            }}
          >
            <KeyboardArrowRightIcon sx={{ color: "white" }} />
          </Box>
        </Button>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LunchDiningIcon sx={{ color: "#01579b", fontSize: "2.5rem" }} />
        </ListItemIcon>
        <ListItemText primary="Popular Dishes" />
        <Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "#757575", // Icon background color
              width: 32,
              height: 32,
            }}
          >
            <KeyboardArrowRightIcon sx={{ color: "white" }} />
          </Box>
        </Button>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <RoomServiceIcon sx={{ color: "#00bcd4", fontSize: "2.5rem" }} />
        </ListItemIcon>
        <ListItemText primary="Menus" />
        <Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "#757575", // Icon background color
              width: 32,
              height: 32,
            }}
          >
            <KeyboardArrowRightIcon sx={{ color: "white" }} />
          </Box>
        </Button>
      </ListItemButton>
    </List>
  );
}
