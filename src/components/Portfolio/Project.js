import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Portfolio(props) {
  const { title, description, image, githubLink, deployedLink} = props;

  return (
    // {props.project.map(item => (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="200"
      image={require(`${image}`)}
      alt =""
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href={githubLink} target="_blank">GitHub</Button>
      <Button size="small" href={deployedLink} target="_blank">Deployed</Button>
    </CardActions>
  </Card>
//   ))}
)
}


