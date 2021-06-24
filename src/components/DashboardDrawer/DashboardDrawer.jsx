import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

function DashboardDrawer() {
  return (
    <>
      <List>
        {["Dashboard", "Shop Details", "Inventroy", "Sales", "Reports"].map(
          (item, indx) => (
            <ListItem button key={indx}>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          )
        )}
      </List>
    </>
  );
}

export default DashboardDrawer;
