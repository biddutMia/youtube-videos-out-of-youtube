import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Box, Button, CardActionArea } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

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

  const {
    playLists: { clearPlayListItem },
    favorites: { removeOneFavoriteItem, toggleFavoriteItem },
    recents: { addToRecent, removeOneRecentItem },
  } = useStoreActions((actions) => actions);

  const { items: favoritesItems } = useStoreState((state) => state.favorites);

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
      <Stack
        direction="row"
        justifyContent={"space-between"}
        sx={{ m: "10px" }}
      >
        <Button
          variant="contained"
          color="info"
          to={`/player/${playListId}`}
          component={RouterLink}
          onClick={() => addToRecent(playListId)}
          size="small"
        >
          play video
        </Button>
        <Box sx={{ marginTop: "5px" }}>
          {!favoritesItems.includes(playListId) ? (
            <FavoriteBorderIcon
              onClick={() => toggleFavoriteItem(playListId)}
              sx={{ fontSize: "20px " }}
            />
          ) : (
            <FavoriteIcon
              onClick={() => toggleFavoriteItem(playListId)}
              sx={{ fontSize: "20px " }}
            />
          )}
          <DeleteIcon
            sx={{ fontSize: "20px ", marginLeft: "2px" }}
            onClick={() => {
              clearPlayListItem(playListId);
              removeOneRecentItem(playListId);
              removeOneFavoriteItem(playListId);
            }}
          />
        </Box>
      </Stack>
    </Card>
  );
};

export default PlayListItemCard;
