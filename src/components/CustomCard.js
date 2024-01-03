import {Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function CustomCard({icon,title, bodyContent, linkText, linkUrl}) {
    return (
        <Card className='text-center'>
            <Card.Body>
                <FontAwesomeIcon className="icon" icon={icon} />
                <Card.Title> {title}</Card.Title>
                <Card.Text>
                    {bodyContent}
                </Card.Text>
                {linkText && linkUrl && (
                    <Button variant="primary" href={linkUrl} target="_blank" className="card-link">
                    {linkText}
                  </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default CustomCard;