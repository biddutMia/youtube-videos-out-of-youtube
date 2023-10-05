import { Stack, Grid, Typography, Box } from "@mui/material";
import RecentItemCard from "./recentItemCard";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Link } from "react-router-dom";

const RecentItems = () => {
  const state = useStoreState((state) => state);
  const { clearRecent } = useStoreActions((actions) => actions.recent);

  const {
    playList: { data },
    recent: { items },
  } = state;

  return (
    <div>
      <Box>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography variant="overline">Recent Playlists</Typography>
          <Typography variant="button" onClick={clearRecent}>
            Reset
          </Typography>
        </Stack>
      </Box>

      <Grid container sx={{ marginBottom: "20px" }} spacing={1}>
        {items.map((item, i) => {
          const recentPlayLists = data[item];

          const {
            playListThumbnalis: {
              default: { url },
            },
          } = recentPlayLists;

          return (
            <Grid item md={3} key={i}>
              <Link to={`/player/${item}`}>
                <RecentItemCard url={url} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default RecentItems;
