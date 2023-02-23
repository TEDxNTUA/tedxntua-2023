import * as React from "react";
import {
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
 } from "reactstrap";
 import { Link } from "gatsby";
 import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
 
 import { usePrevEventsData } from "../hooks";

import * as styles from "../styles/main.module.css";
import * as footerStyles from "../styles/footer.module.css";


const Footer = () => {
    
    const items = usePrevEventsData();

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    // var animating;
    // const setAnimating = (val) => animating = val;

    const onExiting = () => setAnimating(true);
    const onExited = () => setAnimating(false);
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(prevIndex);
    };
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item, index) => {
        const image = getImage(item.image);
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={index}
                onExiting={onExiting}
                onExited={onExited}
            >
                <GatsbyImage image={image} alt={`${item.year}`} className={footerStyles.carouselImage} />
                <CarouselCaption className={`${styles.textShadowPrimary} ${footerStyles.carouselCaption}`} captionHeader={item.year} />
            </CarouselItem>
        );
    });

    return (
        <Row className={footerStyles.footerContainer}>
            <Col md={{size: 4}} className={footerStyles.footerCol}>
                <h4>
                    Previous Events
                </h4>
                <div className={footerStyles.carouselContainer}>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </div>
            </Col>
            <Col md={{size: 4}} className={footerStyles.footerCol}>
                <h4>
                    Find us on social
                </h4>
                <div className={footerStyles.socialContainer}>
                    <Link to="https://www.instagram.com/tedxntua/">
                        <i className="fa fa-instagram fa-3x"></i>
                    </Link>
                    <Link to="https://www.facebook.com/tedxntua/">
                        <i className="fa fa-facebook fa-3x"></i>
                    </Link>
                    <Link to="https://www.facebook.com/tedxntua/">
                        <i className="fa fa-linkedin fa-3x"></i>
                    </Link>
                    <Link to="https://www.youtube.com/channel/UCVtjgrrBdSPZERmdso2o0dw/featured">
                        <i className="fa fa-youtube fa-3x"></i>
                    </Link>
                </div>
                <h4>
                    Newsletter
                </h4>
            </Col>
            <Col md={{size: 4}} className={footerStyles.footerCol}>
                <h4>
                    More stuff from Us
                </h4>
                <div className={footerStyles.actionContainer}>
                    <Link to="https://blog.tedxntua.com/">
                        <StaticImage src="../images/blog.png" alt="Blog" className={footerStyles.actionImage} />
                    </Link>
                    <div className={footerStyles.actionBorder}>
                        <h4 className={styles.textShadowPrimary}>Blog</h4>
                    </div>
                </div>
                <div className={footerStyles.actionContainer}>
                    <Link to="https://www.youtube.com/watch?v=IzTNuWGnKrs&list=PLd7-PjFC85gxOG7Ou-H_DjIFGLHpPYqy2">
                        <StaticImage src="../images/dialogues.png" alt="Dialogues"  className={footerStyles.actionImage} />
                    </Link>
                    <div className={footerStyles.actionBorder}>
                        <h4 className={styles.textShadowPrimary}>Dialogues</h4>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Footer;