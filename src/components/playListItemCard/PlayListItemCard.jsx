import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Box, Button, CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

const PlayListItemCard = ({
  title = "this is title",
  description,
  thumbnail,
  channelTitle,
  playListId,
}) => {
  const {
    medium: { url, height },
  } = thumbnail;

  const { addToRecent } = useStoreActions((actions) => actions.recent);

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={url}
        alt="green iguana"
        height={height}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title?.length > 40 ? title.slice(1, 40) + "..." : title}
        </Typography>
        <Typography variant="caption">{channelTitle}</Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Stack direction="row" sx={{ m: "10px" }}>
        <Button
          variant="contained"
          color="info"
          to={`/player/${playListId}`}
          component={RouterLink}
          onClick={() => addToRecent(playListId)}
        >
          add to play
        </Button>
      </Stack>
    </Card>
  );
};

export default PlayListItemCard;
