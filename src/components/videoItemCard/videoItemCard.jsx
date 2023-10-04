import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const VideoItemCard = ({ videos }) => {
  const {
    thumbnails: { default: defaultThumbnails },
  } = videos;

  const { height, url, width } = defaultThumbnails;

  return (
    <div>
      <Card>
          <CardMedia sx={{ height: 140 }} image={url} />
      </Card>
    </div>
  );
};

export default VideoItemCard;
