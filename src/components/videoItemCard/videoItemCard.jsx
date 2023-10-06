import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const VideoItemCard = ({ videos, channelTitle }) => {
  const url = videos.thumbnails.default.url;

  return (
    <div>
      <Card>
        <CardMedia sx={{ height: 140 }} image={url} />
      </Card>
    </div>
  );
};

export default VideoItemCard;
