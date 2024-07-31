"use client"
import Container from 'react-bootstrap/Container' ;
import Row from 'react-bootstrap/Row' ;
import Col from 'react-bootstrap/Col' ;
import Form from 'react-bootstrap/Form' ;
import Button from 'react-bootstrap/Button' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import {useState} from 'react';


export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handlesubmit = async()=>{

    let user = {
      email:email,
      passsword:password
    }
    console.log(user) ;
    try{
      const response = await fetch('http://localhost:4000/SIGNUP',{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
        'Content-Type':'application/json'
        }
    })
      console.log(await response.json()) ;
    }
    catch(err) {
      console.dir(err) ;
    }
  }
  return (
      <Container style={{display:"flex",marginTop:"15vh",justifyContent: "center",height:"100vh"}}>
      <div style={{boxShadow:"white",borderRadius:"8px",height : "47vh",padding:"30px",width:"30vw",backgroundColor:"white"}}>
      <Form.Text id="passwordHelpBlock" muted style ={{textAlign: "center"}}>
        <strong><h2 style={{color:"dark"}}>Welcome to <a style={{color:"#3B2AA0"}}>Workflo</a>!</h2></strong>
      </Form.Text>
        <Row style={{padding:"10px",justifyContent:"center"}}>
          <Col >
          <Form.Control size="lg"
            type="text"
            id="inputemail"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            aria-describedby="passwordHelpBlock"
            style={{width:"23vw",backgroundColor:"#EBEBEB"}}
          />
          <Form.Control
            size="lg"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            style={{width:"23vw",backgroundColor:"#EBEBEB"}}
          />
          </Col>
        </Row>
        <Row style={{padding:"10px"}}>
          <Col>
            <Button onClick={handlesubmit} style={{width:"23vw",backgroundColor:"#3B2AA0"}}>
            Login
            </Button>
          </Col>
        </Row>
        <Row style={{padding:"10px"}}>
          <Col>
          <Form.Text id="passwordHelpBlock" muted style={{textAlign: "center"}}>
            <p>Already have an account?<a href='' style={{textDecoration:"none"}}>Login</a>.</p>
          </Form.Text>
          </Col>
        </Row>
      </div>
      </Container>
  ) ;
}
