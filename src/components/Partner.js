import React from "react";
import { Grid, Typography, useMediaQuery,Card,CardMedia, Modal, Button, Box} from "@mui/material";
import * as partnerStyles from "../styles/partner.module.css"
import { StaticImage } from "gatsby-plugin-image";

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#212529',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Partner = ({trigger}) => {

 return(
    <>
    <Button onClick={trigger} className={partnerStyles.button}>
        <StaticImage src="../images/example.jpg"/> 
        <span className={partnerStyles.learnMore}>Learn More</span>
    </Button>        
    </>
 );
};