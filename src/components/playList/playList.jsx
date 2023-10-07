import { useStoreState } from "easy-peasy";
import PlayListItemCard from "../playListItemCard/PlayListItemCard";
import { Box, Grid, ListItem, Stack, Typography, Button } from "@mui/material";

const PlayList = () => {
  const {
    playLists: { data },
  } = useStoreState((state) => state);

  return (
    <Box>
      <Box>
        <Stack>
          <Typography variant="overline" sx={{ fontWeight: "800" }}>
            <span style={{ color: "red", fontSize: "17px" }}>
              Youtube video
            </span>{" "}
            Playlists
          </Typography>
        </Stack>
      </Box>

      <Grid container spacing={2}>
        {Object.keys(data).length != 0
          ? Object.values(data).map((item, i) => {
              const {
                playListTitle,
                playListDescription,
                playListThumbnalis,
                channelTitle,
                playListId,
              } = item;
              return (
                <Grid item md={4} key={i}>
                  <PlayListItemCard
                    title={playListTitle}
                    description={playListDescription}
                    thumbnail={playListThumbnalis}
                    channelTitle={channelTitle}
                    playListId={playListId}
                  />
                </Grid>
              );
            })
          : ""}
      </Grid>
    </Box>
  );
};

export default PlayList;
