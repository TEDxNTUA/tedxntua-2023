import React from "react";
import { Grid, Typography, Modal, Button, Box} from "@mui/material";
import * as partnerStyles from "../styles/partner.module.css"
import { StaticImage } from "gatsby-plugin-image";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Partner = ({trigger}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 return(
    <>
    <Button onClick={handleOpen} className={partnerStyles.button}>
        <StaticImage src="../images/example.jpg"/> 
        <span className={partnerStyles.learnMore}>Learn More</span>
    </Button>
    <Modal open={open} onclose={handleClose}>
        <div className={partnerStyles.modalContainer}>
          <div className={partnerStyles.modal}>
            <div className={partnerStyles.modalDetails}>
              <StaticImage src="../images/example.jpg"/> 
              <Typography variant="h4" component="h2" textAlign="center" sx={{color:"white"}}>ΜΠΟΜΑΤ</Typography>
              <Typography sx={{ mt: 2, color:"white" }} textAlign="center">
                McKinsey is a global management consulting firm committed to helping organizations accelerate sustainable and inclusive growth. 
                We work with clients across the private, public, and social sectors to solve complex problems and create positive change for all their stakeholders. 
                We combine bold strategies and transformative technologies to help organizations innovate more sustainably, achieve lasting gains in performance, and build workforces that will thrive for this generation and the next. Our firm is designed to operate as one, united by a strong set of values, including a deep commitment to diversity, and making positive social impact through our work and the way we run our firm. Our consultants include medical doctors, engineers, designers, data scientists, business managers, civil servants, entrepreneurs, and research scientists.
                They join McKinsey for the opportunity to apply their talents to complex, important challenges.
              </Typography>
            </div>
            <div className={partnerStyles.buttonContainer}>
              <Button variant="contained" style={{backgroundColor:"#F06427"}} href="http://bomat.gr/" className={partnerStyles.button}>WEBSITE</Button>
              <Button variant="contained" style={{backgroundColor:"#F06427"}} href="http://bomat.gr/" className={partnerStyles.button}>Career Site</Button>
            </div>
            
          </div>
        </div>
    </Modal>   
    </>
 );
};