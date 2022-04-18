import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Projets from "../../pages/Projets";

function NavBar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemButton component="a" href="/apropos">
            <ListItemText primary="À propos" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="/competences">
            <ListItemText primary="Compétences" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="/projets">
            <ListItemText primary="Projets" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="/contact">
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <div class="topbar">
        <div class="drawer-mobile">
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <span
                  class="iconify icon-drawer"
                  data-icon="bytesize:menu"
                ></span>
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
        <div class="topbar-logo">
          <div class="logo-title">
            <Link to="/">Florian.</Link>
          </div>
        </div>
        <div class="topbar-nav">
          <ul>
            <li>
              <Link to="/apropos" class="link">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/competences" class="link">
                Compétences
              </Link>
            </li>
            <li>
              <Link to="/projets" class="link">
                Projets
              </Link>
            </li>
            <li>
              <a href="/#contact">
                <button>Contact</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
