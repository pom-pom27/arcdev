import { cloneElement, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  useScrollTrigger,
  Toolbar,
  AppBar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import useTabIndex from "../utils/useTabIndex";

function Header() {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [selectedTabIndex, setSelectedTabIndex] = useTabIndex();

  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  const tabSwitchHandler = (ev, idx) => setSelectedTabIndex(idx);

  const handleClick = (ev) => {
    setAnchorEl(ev.currentTarget);
    setIsOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  const handleCloseMenuItem = (ev, idx) => {
    setSelectedTabIndex(1);
    setSelectedMenuItem(idx);
    handleClose();
  };
  const menuItems = [
    { name: "Services", route: "/services" },
    { name: "Mobile App", route: "/mobile-app" },
    { name: "Website", route: "/website" },
    { name: "Custom Software", route: "/custom-software" },
  ];
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              className={styles.logoContainer}
              component={Link}
              to="/"
              disableRipple
              onClick={() => setSelectedTabIndex(0)}
            >
              <img src={logo} className={styles.logo} alt="company logo" />
            </Button>
            <Tabs
              indicatorColor="primary"
              onChange={tabSwitchHandler}
              value={selectedTabIndex}
              className={styles.tabContainer}
            >
              <Tab
                component={Link}
                to="/"
                className={styles.itemTab}
                label="Home"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? true : undefined}
                component={Link}
                onMouseOver={(ev) => handleClick(ev)}
                to="/services"
                className={styles.itemTab}
                label="Services"
              />
              <Tab
                component={Link}
                to="/the-revolution"
                className={styles.itemTab}
                label="The Revolution"
              />
              <Tab
                component={Link}
                to="/about"
                className={styles.itemTab}
                label="About Us"
              />
              <Tab
                component={Link}
                to="/contact"
                className={styles.itemTab}
                label="Contact Us"
              />
              <Button
                variant="contained"
                component={Link}
                to="/estimate"
                className={styles.estimateButton}
                color="secondary"
              >
                Free Estimate
              </Button>

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                elevation={0}
                keepMounted
                open={isOpen}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                classes={{ paper: styles.menu }}
              >
                {menuItems.map((menu, idx) => (
                  <MenuItem
                    component={Link}
                    to={menu.route}
                    selected={
                      selectedMenuItem === idx && selectedTabIndex === 1
                    }
                    classes={{ root: styles.menuItem }}
                    onClick={(ev) => handleCloseMenuItem(ev, idx)}
                  >
                    {menu.name}
                  </MenuItem>
                ))}
              </Menu>
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={styles.toolbarMargin} />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: { ...theme.mixins.toolbar, marginBottom: "1em" },
  logo: { height: "8em" },
  tabContainer: { marginLeft: "auto", marginRight: 24 },
  itemTab: {
    ...theme.typography.tab,
    minWidth: 10,
    minHeight: 10,
    marginLeft: 25,
  },
  estimateButton: {
    borderRadius: 30,
    marginLeft: 10,
    fontFamily: "Pacifico",
    fontSize: "1rem",
    textTransform: "none",
    height: 40,
  },
  logoContainer: {
    padding: 0,
    "&:hover": { backgroundColor: "transparent" },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": { opacity: 1 },
  },
}));

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default Header;
