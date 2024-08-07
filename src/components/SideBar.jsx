import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import theme from "./theme";
import PixIcon from "@mui/icons-material/Pix";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function SideBar() {
  return (
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.custom.main, width: "80px" , display:{xs: "none", lg:"block"}}}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: { md: "290vh", lg: "214vh" },
              pt: 2,
              pb: 2,
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
              }}
            >
              <IconButton sx={{ color: "#3f51b5" }}>
                <PixIcon />
              </IconButton>
              <IconButton sx={{ color: "#3f51b5" }}>
                <HomeIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <AnalyticsIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <AssignmentTurnedInIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <AccountBalanceWalletIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <ShoppingBagIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0, color: "white" }}>
                <ExitToAppIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}
export default SideBar;
