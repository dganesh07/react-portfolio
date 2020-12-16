import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const designationStyles = {
    fontSize: '20px'
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons="on"
          variant="scrollable"
        >
          <Tab label="Cove tool" {...a11yProps(0)} />
          <Tab label="Illinois Institute Of technology" {...a11yProps(1)} />
          <Tab label="Freelance" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <span style={designationStyles}>Full Stack Developer, June 2018 - PRESENT</span> <br />
        <a href="https://www.cove.tools/">cove.tool</a>
        <br /><br />
        <span>
          Developed and updated features for the web-based SaaS platform using
          Django-python stack which aided in a more useful and accurate
          optimization of results. Spear headed the integration of React for a
          faster rendering web app, dynamic data display, and an easy to access
          interface with a consistent look and feel.
        </span>
        <br /> <br />
        <span>
          Collaborated with teams for feature ideas, algorithms and technology
          selections, sprint planning, code reviews with git, and deployment
          utilizing AWS ECS and docker images.Documented the existing software
          architecture for new recruits to understand the software’s modules and
          components without digging into the code.
        </span>
        <br /> <br />
        <span>
          Trained new employees (Developers) on the architecture and process
          used at Cove.tool.Implemented automated testing for features using
          pytest to reduce bugs encountered during behavioral testing. Built
          sales admin dashboard and a wide range of tools for internal use
          including npm packages for reusing react components and API code.
        </span>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <span style={designationStyles}>JavaScript Developer, June 2017 - May 2018</span>
        <br /> <br />
        <span>
          Optimized and refined features to aid university wide launch of
          Planon, a global IWMS software tool. Customized the application to
          make it suitable and efficient for back-end users as well as front-end
          staff and faculty.
          <br />
          <span>
            Updated user issue forms using ES6, HTML5, JS validation and DOM
            Manipulation for clear, concise, and responsive UI. Elected
            algorithm for sorting user issues based on priority.
          </span>
        </span>
        <br /> <br />
        <span style={designationStyles}>Tech Administrator, January 2017 – April 2017</span>
        <br /> <br />
        <span>
          Assisted students, faculty, and staff with technology issues by
          providing technical support via Issue tracking system Troubleshooted
          issues via phone calls, emails and face-to-face walk-in consultations.
        </span>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <span style={designationStyles}>UrbanAfriq</span>
        <br/>
        <a href="https://www.urbanafriq.com/">www.urbanafriq.com</a>
        <br />
        <br />
        <span>
          Developed an e-commerce website with Wordpress, jQuery and CSS;
          Customized the website theme and style to meet clients needs. Worked
          with woocommerce and many more Wordpress plugins for product pages.
          Set-up Stripe API for easy payment method and hosted the website using
          goDaddy.
        </span>
      </TabPanel>
    </div>
  );
}
