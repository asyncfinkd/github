import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Lists: React.FC<any> = ({ data }: any) => {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {data.map((item: any) => {
          return (
            <>
              <ListItem
                alignItems="flex-start"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.location.href = item.html_url;
                }}
              >
                <ListItemAvatar>
                  <Avatar alt={item.owner.login} src={item.owner.avatar_url} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <React.Fragment>{item.description}</React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>
    </>
  );
};

export default Lists;
