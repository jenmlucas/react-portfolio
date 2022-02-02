import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    display: {
      display: "flex",
      flexDirection: "row"
    }
})

export default function Portfolio(props) {
    const classes = useStyles();
  return (
    <div  className={classes.display}>
    {props.project.map(item => (
    <Card sx={{ maxWidth: 345 }} key={item.title}>
    <CardMedia
      component="img"
      height="200"
      image={item.image}
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
      <Button size="small" href={item.githubLink} target="_blank">GitHub</Button>
      <Button size="small" href={item.deployedLink} target="_blank">Deployed</Button>
    </CardActions>
  </Card>
  ))}
  </div>
)
}


