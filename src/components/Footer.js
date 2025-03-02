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
 import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
 
 import { useLocaleContext } from "../contexts/LanguageContext";
 import { usePrevEventsData } from "../hooks";

import * as footerStyles from "../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const {locale } = useLocaleContext();
    const items = usePrevEventsData(locale);

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);

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
                <a href={item.url}>
                    <GatsbyImage image={image} alt={`${item.year}`} className={footerStyles.carouselImage} />
                    <CarouselCaption className={`${footerStyles.carouselCaption}`} captionHeader={item.year} captionText='' />
                </a>
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
                    Find us on social media
                </h4>
                <div className={footerStyles.socialContainer}>
                    <a href="https://www.instagram.com/tedxntua/">
                        <i className="fa fa-instagram fa-3x"></i>
                    </a>
                    <a href="https://www.facebook.com/tedxntua/">
                        <i className="fa fa-facebook fa-3x"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/tedxntua/">
                        <i className="fa fa-linkedin fa-3x"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCVtjgrrBdSPZERmdso2o0dw/featured">
                        <i className="fa fa-youtube fa-3x"></i>
                    </a>
                    <a href="https://www.tiktok.com/@tedxntua">
                        <FontAwesomeIcon icon={faTiktok} size="3x" />
                    </a>
                </div>
                {/* <h4>
                    Newsletter
                </h4> */}
            </Col>
            <Col md={{size: 4}} className={footerStyles.footerCol}>
                <h4>
                    More stuff from Us
                </h4>
                <div className={footerStyles.actionContainer}>
                    <a href="https://blog.tedxntua.com/">
                        <StaticImage src="../images/blog.png" alt="Blog" className={footerStyles.actionImage} />
                    </a>
                    <div className={footerStyles.actionBorder}>
                        <h4>Blog</h4>
                    </div>
                </div>
                <div className={footerStyles.actionContainer}>
                    <a href="https://www.youtube.com/watch?v=IzTNuWGnKrs&list=PLd7-PjFC85gxOG7Ou-H_DjIFGLHpPYqy2">
                        <StaticImage src="../images/dialogues.png" alt="Dialogues"  className={footerStyles.actionImage} />
                    </a>
                    <div className={footerStyles.actionBorder}>
                        <h4>Dialogues</h4>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Footer;
