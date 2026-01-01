import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import logo from "../img.png"; // ✅ local PNG

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 24px;
  margin-left: 25px;
`;

const HeaderBar = ({ handleDrawer }) => {
  return (
    <Header position="fixed" elevation={0}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* ✅ PNG image */}
        <img src={logo} alt="Fundoo Logo" style={{ width: 30 }} />

        <Heading variant="h6">FundooApp</Heading>
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
