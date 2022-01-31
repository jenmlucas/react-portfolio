import React from "react";
import placeholder from "../../assets/images/me/placeholder.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function About() {

  return (
    <Card  Box sx={{ display: 'flex', ml: 20, mr: 20 }}>
      <CardMedia
        component="img"
        height="400"
        image={placeholder}
        alt="me"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" Box sx={{ textAlign: 'center', m: 3 }}>
            About Me
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, atqui nominati disputationi eu vel, vel
            nulla iudico conclusionemque id. Eu vix nostro minimum. Sea quis
            atomorum ad, ut lorem sapientem hendrerit mei. Qui tale platonem eu,
            tamquam periculis rationibus pro ne. Cum purto dolores ad, cu falli
            delectus disputationi mea. An vis graeci commodo, mei at sale iusto
            complectitur. Dicit integre qui ut, his ut dolorum mediocrem. Option
            volumus eum in, vidit democritum disputationi vel cu. Consul soleat
            pri id, id decore ignota nec. Sit vitae deseruisse ea, qui cu inermis
            apeirian dissentiunt. Odio molestie corrumpit mea et, libris equidem
            temporibus in nec. Est tota ferri et. Elit eligendi ei quo. Esse
            vituperata vel at, offendit maiestatis ne vix, qui dicunt impetus at.
            Has nibh doming mnesarchum an, erat graeci sed et. His latine ancillae
            ad, has vero virtute volumus ad. Mei prima omittam patrioque no, eu
            vel omittam sapientem, pro an illud assum. Autem accusam qui eu, id
            partem audire quaerendum sed. Ei vel falli volumus disputando, ut eius
            ignota nostrum has. Est cu veri probo ubique, no probo error mollis
            pri, quo falli tacimates at. Vix modus audiam scaevola no, eos ex
            vitae quaestio qualisque.
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="https://github.com/jenmlucas" target= "blank" size="small">Github</Button>
          <Button href="https://www.linkedin.com/in/jennifer-lucas-478599218/" target= "blank" size="small">LinkedIN</Button>
        </CardActions>
      </Card>
  );
}

export default About;
