import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const CardComponent: React.FC<any> = ({ avatar, name, login, bio }: any) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar src={avatar} />}
          title={name === null ? "-" : name}
          subheader={`@${login}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {bio === null ? "Don't have bio" : bio}
          </Typography>
        </CardContent>
      </Card>{" "}
    </>
  );
};

export default CardComponent;
