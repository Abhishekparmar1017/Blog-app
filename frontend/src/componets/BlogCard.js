import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box, Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BlogCard({
  title,
  description,
  image,
  username,
  time,
  id,
  isUser,
}) {
  return (
    <Card
      sx={{
        width: "40%",
        margin: "auto",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #CCC",
        ":hover:": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      {isUser && (
        <Box display={"flex"}>
          <IconButton sx={{ marginLeft: "auto" }}>
            <EditIcon />
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </IconButton>
        </Box>
      )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {username}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={title}
        subheader={time}
      />
      <CardMedia component="img" height="194" image={image} alt="blog image" />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          Title:{title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {description}
        </Typography>
        <Button
          sx={{ borderRadius: 3, marginTop: 3 }}
          variant="contained"
          color="primary"
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}
