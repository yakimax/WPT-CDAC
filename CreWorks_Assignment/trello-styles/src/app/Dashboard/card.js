import { Button } from 'react-bootstrap' ;
import Card from 'react-bootstrap/Card' ;



export default function Customcard(props) {
    return (
        <>
            <Card style={{padding:"10px"}}>
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button style={{width:"4rem"}}>
                    {props.priority}
                </Button>
                <Card.Text style={{color:"grey"}}>
                    {props.date}
                </Card.Text>
                <Card.Text>
                    1 hr ago
                </Card.Text>
            </Card>
        </>
    ) ;
}