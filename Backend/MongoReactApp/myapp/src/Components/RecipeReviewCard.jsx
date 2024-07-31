import * as React from 'react' ;
import { styled } from '@mui/material/styles' ;
import Card from '@mui/material/Card' ;
import CardHeader from '@mui/material/CardHeader' ;
import CardMedia from '@mui/material/CardMedia' ;
import CardActions from '@mui/material/CardActions' ;
import IconButton from '@mui/material/IconButton' ;
import FavoriteIcon from '@mui/icons-material/Favorite' ;
import ShareIcon from '@mui/icons-material/Share' ;
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';

 

export default function RecipeReviewCard(props) {
  let price = "For : Rs."+props.price ;
  return (
    <Card sx={{ width: 250,maxHeight: 390 }} style={{margin:'20px 20px 20px 20px'}} >
      <CardHeader
        title={props.name}
        subheader= {price}
      />
      <CardMedia
        component="img"
        height="170"
        image={props.url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>  
      </CardActions>
    </Card>
  ) ;
}
