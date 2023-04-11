import * as React from "react";
import { Container, Row } from "reactstrap";
import { isMobile } from "react-device-detect";

import Member from "../components/Member";
import DissapearingText from "../components/DissapearringText";

import * as styles from "../styles/main.module.css";
import * as teamLayoutStyles from "../styles/teamLayout.module.css";

const AboutTeamLayout = ({ teamName, members }) => {
    
    const [active, setActive] = React.useState({});
    // const max = (!isMobile) ? 3:4;
    const max = 4;

    const memberComponents = members.map(member => {
        
        return (
            <Member
            key={ member.id }
            imageData={ member.image }
            name={ member.name }
            linkedInUrl={ member.linkedInUrl }
            onMouseEnter={(!isMobile) ? () => setActive( { id: member.id, order: member.order } ):null}
            onMouseLeave={(!isMobile) ? () => setActive({}):null}
            className={`
            ${(active.id === member.id) && teamLayoutStyles.scale}
            ${((member.order < active.order) && ((member.order < max && active.order <= max) || (member.order > max && active.order > max))) ? teamLayoutStyles.rotateRight:""}
            `}

            />
        );
    });

    return (
        <Container className={teamLayoutStyles.container}>
            <Row className={teamLayoutStyles.row}>
                { memberComponents.slice(0, max) }
            </Row>
            <DissapearingText
            className={ `${teamLayoutStyles.teamName}`}
            text={`${teamName} TEAM`}
            />
            <Row className={teamLayoutStyles.row}>
                { memberComponents.slice(max) }
            </Row>
        </Container>
    );
}

export default AboutTeamLayout;