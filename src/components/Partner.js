import React from "react";
import { Grid, Typography, Modal, Button, Box} from "@mui/material";
import * as partnerStyles from "../styles/partner.module.css";
import * as partnersStyles from "../styles/partners.module.css";
import { StaticImage } from "gatsby-plugin-image";
import * as Styles from "../styles/main.module.css";


export const Partner = ({trigger}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 return(
    <>
    <Button onClick={handleOpen} className={partnerStyles.button}>
        <StaticImage className={partnerStyles.image} src="../images/example.jpg"/> 
        <span className={`${partnerStyles.learnMore} ${Styles.textShadowPrimary}`}>Learn More</span>
    </Button>
    <Modal open={open} onClose={handleClose}>
        <div className={partnerStyles.modalContainer}>
          <div className={partnerStyles.modal}>
            <div className={partnersStyles.modal}>
              <span onClick={handleClose} className={partnerStyles.closeButton}>
                &times;
              </span>
              <StaticImage  src="../images/example.jpg"/> 
              <h2  className={`${Styles.textShadowPrimary} ${partnerStyles.title}`}>ΜΠΟΜΑΤ</h2>
              <h5>
                McKinsey is a global management consulting firm committed to helping organizations accelerate sustainable and inclusive growth. 
                We work with clients across the private, public, and social sectors to solve complex problems and create positive change for all their stakeholders. 
                We combine bold strategies and transformative technologies to help organizations innovate more sustainably, achieve lasting gains in performance, and build workforces that will thrive for this generation and the next. Our firm is designed to operate as one, united by a strong set of values, including a deep commitment to diversity, and making positive social impact through our work and the way we run our firm. Our consultants include medical doctors, engineers, designers, data scientists, business managers, civil servants, entrepreneurs, and research scientists.
                They join McKinsey for the opportunity to apply their talents to complex, important challenges.
              </h5>
            </div>
            <div className={partnerStyles.linkButtons}>
              <Button variant="contained" style={{backgroundColor:"#F06427"}} href="http://bomat.gr/" >WEBSITE</Button>
              <Button variant="contained" style={{backgroundColor:"#F06427"}} href="http://bomat.gr/" >Career Site</Button>
            </div> 
          </div>
        </div>
    </Modal>       
    </>
 );
};