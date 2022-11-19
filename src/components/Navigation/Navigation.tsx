import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItems from "../../menu.json";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import {
  NavLogo,
  NavbarTypography,
  PrimaryButton,
  SecondaryButton,
  StickersButton,
} from "./Navigation.styles";
import { Stack } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const primaryMenuItems = MenuItems.primary[0].items;

//list the title of the primary menu items
const primaryMenuItemsList = primaryMenuItems.map((item) => {
  return item.title;
});
//remove the first item from the list
primaryMenuItemsList.shift();

export default function Navigation({ children }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = React.useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };

  const drawerWidth = 270;

  const navItems = [
    "Stickers",
    "Labels",
    "Create A design",
    "Help me Choose",
    "Reorder",
  ];

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: drawerWidth,
        textTransform: "uppercase",
        fontWeight: 700,
        fontSize: "1rem",
        color: (theme) => theme.colors.blueLight,
      }}
    >
      <Toolbar />
      <List
        sx={{
          justifyContent: "flex-start",
          textTransform: "uppercase",
        }}
      >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
              <ExpandMoreIcon />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ borderWidth: "1px", borderColor: "grey.300" }} />
      </List>
    </Box>
  );

  const dropdownMenu = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "18px",
        top: "40px",
        position: "absolute",
        bgcolor: "white",
        mt: 4,
        borderRadius: 1,
        border: "1px solid #aeebe1",
        width: "max-content",
      }}
    >
      {primaryMenuItemsList.map((item) => (
        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: 700,
            color: (theme) => theme.colors.blueLight,
            textTransform: "uppercase",
            padding: "10px",
          }}
        >
          <Divider orientation="vertical" flexItem />
          {item}
        </Typography>
      ))}
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: "100%",
          boxShadow: "none",
          bgcolor: (theme) => theme.colors.greenLight,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "1rem",
            alignContent: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              color: "grey.500",
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* Navbar Logo/ Title */}
          <NavbarTypography variant="h6" noWrap>
            <NavLogo>Sticker IT</NavLogo>
          </NavbarTypography>
          {/* Big Screen Menu */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
            <List
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                gap: "0.7rem",
                width: "100%",
                alignItems: "center",
              }}
            >
              {/* the primary menu items */}
              <NavbarTypography variant="h5">
                <Box>
                  <PrimaryButton
                    endIcon={<ExpandMoreIcon />}
                    onClick={handleMenu}
                  >
                    Stickers
                    {open && dropdownMenu}
                  </PrimaryButton>
                  <PrimaryButton endIcon={<ExpandMoreIcon />}>
                    Labels
                  </PrimaryButton>
                  <PrimaryButton>Create A design</PrimaryButton>
                  <PrimaryButton endIcon={<ExpandMoreIcon />}>
                    Help me Choose
                  </PrimaryButton>
                  <PrimaryButton>Reorder</PrimaryButton>
                </Box>
              </NavbarTypography>

              {/* the secondary menu items */}
              <NavbarTypography variant="h6">
                <Box
                  sx={{
                    marginLeft: "2rem",
                    color: (theme) => theme.colors.greenDark,
                    fontSize: "0.8rem",
                  }}
                >
                  <SecondaryButton endIcon={<ExpandMoreIcon />}>
                    Support
                  </SecondaryButton>
                  <SecondaryButton endIcon={<ExpandMoreIcon />}>
                    About
                  </SecondaryButton>
                  <SecondaryButton endIcon={<PersonIcon />}></SecondaryButton>
                  <SecondaryButton endIcon={<SearchIcon />}></SecondaryButton>
                  <SecondaryButton
                    endIcon={<ShoppingBagIcon />}
                  ></SecondaryButton>
                </Box>
              </NavbarTypography>
            </List>
          </Box>

          {/* smaller screen menu */}
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              pr: -3,
            }}
          >
            <NavbarTypography variant="h6" noWrap>
              <Button
                sx={{ color: (theme) => theme.colors.greenDark }}
                endIcon={<ShoppingBagIcon />}
              ></Button>
            </NavbarTypography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box> */}
    </Box>
  );
}
