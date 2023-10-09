import { Stack, Grid, Typography, Box, Button } from "@mui/material";
import ItemCard from "../recentAndFavoriteItemCard/RecentAndFavoriteItemCard";
import { useStoreActions, useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";
import ContentCheck from "../contentCheck/contentCheck";

const FavoriteItems = () => {
  const state = useStoreState((state) => state);
  const {
    favorites: { clearFavorites },
  } = useStoreActions((actions) => actions);

  const {
    playLists: { data },
    favorites: { items },
  } = state;

  return (
    <div>
      <Box>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography variant="overline" sx={{ fontWeight: "800" }}>
            <span style={{ color: "red", fontSize: "17px" }}>Favorite</span>{" "}
            Playlists
          </Typography>
          <div>
            <Button variant="contained" size="small" onClick={clearFavorites}>
              clear favorite items
            </Button>
          </div>
        </Stack>
      </Box>

      {items.length == 0 && (
        <ContentCheck content="There are no favorite items" />
      )}

      <Grid container sx={{ marginBottom: "20px" }} spacing={1}>
        {items.length != 0 &&
          items.map((item, i) => {
            const favoritePlayLists = data[item];

            const url = favoritePlayLists.playListThumbnalis.default.url;

            return (
              <Grid item md={3} key={i}>
                <Link to={`/player/${item}`}>
                  <ItemCard url={url} />
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default FavoriteItems;
