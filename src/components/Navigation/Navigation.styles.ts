import { styled } from "@mui/material/styles";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AdjustIcon from "@mui/icons-material/Adjust";

//create navbar logo / name to accept either text or image
export const NavLogo = styled("div")(({ theme }) => ({
  color: theme.colors.blueLight,
  width: "100%",
}));

export const NavbarTypography = styled(Typography)(
  ({ id, title, variant, theme }) => ({
    variant: variant,
    id: id,
    title: title,
    display: "flex",
    textTransform: "uppercase",
    fontWeight: "bold",
    width: "max-content",
  })
);

export const PrimaryButton = styled(Button)(
  ({ id, title, variant, theme }) => ({
    variant: variant,
    id: id,
    title: title,
    color: theme.colors.blueLight,
  })
);

export const SecondaryButton = styled(Button)(
  ({ id, title, variant, theme }) => ({
    variant: variant,
    id: id,
    title: title,
    textTransform: "uppercase",
    color: theme.colors.greenDark,
    fontSize: "0.7rem",
  })
);
