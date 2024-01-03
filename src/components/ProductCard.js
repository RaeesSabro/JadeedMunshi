import {Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ProductCard({icon,title, bodyContent, onReadMore}) {
    const contentStyle = {
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        alignSelf: 'stretch',
        display: '-webkit-box',
        overflow: 'hidden',
      };
    return (
        <Card className='text-center'>
            <Card.Body>
                <FontAwesomeIcon className="icon" icon={icon} />
                <Card.Title> {title}</Card.Title>
                <Card.Text style={contentStyle}>
                    {bodyContent}
                </Card.Text>
                <Button variant="link" onClick={onReadMore}>
                    Read More
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;