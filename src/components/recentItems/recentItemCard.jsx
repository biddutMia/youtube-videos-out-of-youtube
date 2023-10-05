import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const RecentItemCard = ({url}) => {
  return (
    <div>
      <Card>
        <CardMedia sx={{ height: 140 }} image={url} />
      </Card>
    </div>
  );
};

export default RecentItemCard;
