import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function Portfolio(props) {
  
  return (
      {props.projects.map(item => (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="200"
      img= ""
      alt =""
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       {item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {item.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href={item.githubLink} target="blank">GitHub</Button>
      <Button size="small" href={item.deployedLink} target="blank">Deployed</Button>
    </CardActions>
  </Card>
  ))}
);
}


