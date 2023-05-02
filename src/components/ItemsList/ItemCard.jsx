import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ width: 345, height: 400 }}>
      <CardMedia sx={{ height: 160 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          style={{ height: 100 }}
          color="text.secondary"
        >
          {item.description}
        </Typography>
        <Typography variant="body2" style={{ height: 5 }} color="primary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions style={{ height: 50 }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button variant="contained" size="small">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
