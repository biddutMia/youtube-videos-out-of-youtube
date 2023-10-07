import { Stack, Grid, Typography, Box, Button } from "@mui/material";
import ItemCard from "../recentAndFavoriteItemCard/RecentAndFavoriteItemCard";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Link } from "react-router-dom";
import ContentCheck from "../contentCheck/contentCheck";

const RecentItems = () => {
  const state = useStoreState((state) => state);
  const { clearRecents } = useStoreActions((actions) => actions.recents);

  const {
    playLists: { data },
    recents: { items },
  } = state;

  return (
    <div>
      <Box>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography variant="overline" sx={{ fontWeight: "800" }}>
            <span style={{ color: "red", fontSize: "17px" }}>Recent</span>{" "}
            Playlists
          </Typography>
          <Button variant="contained" size="small" onClick={clearRecents}>
            clear recent items
          </Button>
        </Stack>
      </Box>

      {items.length == 0 && (
        <ContentCheck content="There are no recent items" />
      )}

      <Grid container sx={{ marginBottom: "20px" }} spacing={1}>
        {items.length != 0 &&
          items.map((item, i) => {
            const recentPlayLists = data[item];

            const url = recentPlayLists?.playListThumbnalis?.default?.url;

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

export default RecentItems;
