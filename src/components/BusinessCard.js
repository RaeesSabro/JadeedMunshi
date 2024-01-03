import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row,Col } from 'react-bootstrap';
function BusinessCard({icon,title}) {
    return (
        <>
        <Row className='businessCard'>
            <Col xs={12} sm={6} md={4}><FontAwesomeIcon className="icon" icon={icon} /></Col>
            <Col xs={12} sm={6} md={8}><Card.Title> {title}</Card.Title></Col>
        </Row>
        </>
    );
}

export default BusinessCard;