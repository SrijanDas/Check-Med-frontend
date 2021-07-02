import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";
import FeedbackIcon from "@material-ui/icons/Feedback";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeIcon from "@material-ui/icons/Home";
import PublishIcon from "@material-ui/icons/Publish";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useSelector } from "react-redux";

function Sidebar({ toggleDrawer }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        {[
          "Home",
          "Upload Prescription",
          isAuthenticated ? "Dashboard" : "Login",
        ].map((text, index) => (
          <ListItem component={Link} to={text.toLowerCase()} button key={text}>
            <ListItemIcon>
              {index === 0 ? (
                <HomeIcon />
              ) : index === 1 ? (
                <PublishIcon />
              ) : index === 2 ? (
                isAuthenticated ? (
                  <DashboardIcon />
                ) : (
                  <VpnKeyIcon />
                )
              ) : (
                ""
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["About", "Contact", "Feedback"].map((text, index) => (
          <ListItem component={Link} to={text.toLowerCase()} button key={text}>
            <ListItemIcon>
              {index === 0 ? <InfoIcon /> : ""}
              {index === 1 ? <PermPhoneMsgIcon /> : ""}
              {index === 2 ? <FeedbackIcon /> : ""}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
}

export default Sidebar;
