import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({id, title, image, price, onClick}) {
  return (
    <Card sx={{ maxWidth: 345, }}  onClick={onClick}>
      <CardMedia
        sx={{ height: 300 , width: 300, margin: '10px',}}
        image={image}
        id ={id}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">Product Details</Button>
        
      </CardActions>
    </Card>
  );
}
