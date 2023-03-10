import * as React from "react";
import {Modal, Button} from "@mui/material";
import * as partnerStyles from "../styles/partner.module.css";
import * as partnersStyles from "../styles/partners.module.css";
import * as Styles from "../styles/main.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage , getImage} from "gatsby-plugin-image";


export const Partner = ({bio,careerUrl , image , name, websiteUrl}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  var bioText;
  if(bio){
    bioText = documentToReactComponents(JSON.parse(bio));
  }
  const myImage = getImage(image);
 return(
    <>
    <Button onClick={handleOpen} className={partnerStyles.button}>
        <GatsbyImage className={partnerStyles.image} image={myImage} alt={ name }/> 
        <span className={`${partnerStyles.learnMore} ${Styles.textShadowPrimary}`}>Learn More</span>
        <div className={partnerStyles.imageBorder}>
        </div>
    </Button>
    <Modal open={open} onClose={handleClose}>
        <div className={partnerStyles.modalContainer}>
          <div className={partnerStyles.modal}>
            <div className={partnersStyles.modal}>
              <span onClick={handleClose} className={partnerStyles.closeButton}>
                &times;
              </span>
              <GatsbyImage className={partnerStyles.image} image={myImage} alt={ name }/>  
              <h2  className={`${Styles.textShadowPrimary} ${partnerStyles.title}`}>{name}</h2>
              <h5>{bioText}</h5>
            </div>
            <div className={partnerStyles.linkButtons}>
              {websiteUrl&& <Button variant="contained" style={{backgroundColor:"#F06427"}} href={websiteUrl} >WEBSITE</Button>}
              {careerUrl&& <Button variant="contained" style={{backgroundColor:"#F06427"}} href={careerUrl} >Career Site</Button>}
            </div> 
          </div>
        </div>
    </Modal>       
    </>
 );
};