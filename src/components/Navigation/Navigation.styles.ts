import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const NavLogo = styled("div")(({ theme }) => ({
  color: theme.colors.blueLight,
  width: "100%",
  cursor: "pointer",
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

export const StickersButton = styled("div")(({ theme }) => ({
  color: theme.colors.blueLight,
}));
