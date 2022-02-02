import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import { positions } from '@mui/system';


const useStyles = makeStyles({
    display: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
    sizing: {
      marginTop: 50,
      width: 600
    },
    title: {
      textAlign: "center"
    },
    photo: {
      height: 400
    }
})

export default function Portfolio(props) {
    const classes = useStyles();
  return (
    <div  className={classes.display}>
    {props.project.map(item => (
    <Card key={item.title} className={classes.sizing}>
    <CardMedia className={classes.photo}
      component="img"
      height="200"
      image={item.image}
      alt =""
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" className={classes.title}>
       {item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" className={classes.title}>
       {item.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href={item.githubLink} target="_blank" >GitHub</Button>
      <Button size="small" href={item.deployedLink} target="_blank" >Deployed</Button>
    </CardActions>
  </Card>
  ))}
  </div>
)
}


