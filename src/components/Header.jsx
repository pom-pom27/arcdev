import { cloneElement, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  useScrollTrigger,
  Toolbar,
  AppBar,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const styles = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabSwitchHandler = (ev, idx) => setSelectedIndex(idx);

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img src={logo} className={styles.logo} alt="company logo" />
            <Tabs
              indicatorColor="primary"
              onChange={tabSwitchHandler}
              value={selectedIndex}
              className={styles.tabContainer}
            >
              <Tab
                component={Link}
                to="/"
                className={styles.itemTab}
                label="Home"
              />
              <Tab
                component={Link}
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
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={styles.toolbarMargin} />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: { ...theme.mixins.toolbar, marginBottom: "3em" },
  logo: { height: "7em" },
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
