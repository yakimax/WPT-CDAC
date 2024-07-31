'use client'
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import img1 from 'import/app/imgs/vecteezy_3d-hand-holding-credit-card-isolated-on-background-business_8879479.png'
import Modal from 'react-bootstrap/Modal' ;
import card from 'import/app/Dashboard/card'
import Customcard from 'import/app/Dashboard/card';



function Dashboard() {
  const [userName, setUsername] = useState('') ;  
  const [show, setShow] = useState(false) ;
  const handleClose = () => setShow(false) ;
  const handleShow = () => setShow(true) ;


  useEffect(()=>{

  })

  return (
    <div style={{ backgroundColor: "#EBEBEB", color: "black", paddingTop: "10px",width:"100%" }}>
      <Container fluid="true" style={{paddingLeft:"5px",paddingRight:"5px"}}>
        <Row >

          <Col xl={2} >
            <Card style={{height:"100vh",backgroundColor:"white"}}>
            <Stack gap={0}>
              <div className="p-2"><Card.Img/><Card.Title><i class="bi bi-person-circle"></i>{userName}</Card.Title></div>
              <div className="p-2"> 
                <Button style={{ fontSize: "15px", backgroundColor: "white", border: "none", color: "black" }} variant="primary">
                  <i class="bi bi-bell-fill">  </i>
                </Button>
                <Button style={{ fontSize: "15px", backgroundColor: "white", border: "none", color: "black" }} variant="primary">
                  <i class="bi bi-brightness-high">  </i>
                </Button>
                <Button style={{ fontSize: "15px", backgroundColor: "white", border: "none", color: "black" }} variant="primary">
                  <i class="bi bi-chevron-double-right">  </i>
                </Button>
                <Button style={{ fontSize: "10px", backgroundColor: "#EBEBEB", border: "none", color: "black" }} variant="primary">
                  LogOut
                </Button>
              </div>
              <div className="p-2">
                <Button style={{ fontSize: "15px", backgroundColor: "white", border: "none", color: "black" }} variant="primary">
                  <i class="bi bi-house">    </i>&nbsp;&nbsp;Home
                </Button>
              </div>
              <div className="p-2">
                <Button style={{ fontSize: "15px", backgroundColor: "white", border: "none", color: "black" }} variant="primary">
                  <i class="bi bi-kanban">   </i>&nbsp;&nbsp;Boards
                </Button>
              </div>
              <div className="p-2">
                <Button style={{ fontSize: "15px", backgroundColor: "white", border: "none", color: "black" }} variant="primary">
                  <i class="bi bi-gear"></i>&nbsp;&nbsp;Setting
                </Button>
              </div>
              <div className="p-2">
                <Button style={{ fontSize: "15px", backgroundColor: "white", border: "none", color: "black" }} variant="primary">
                  <i class="bi bi-people-fill">  </i>&nbsp;&nbsp;Team
                </Button>
              </div>
              <div className="p-2">
                <Button style={{ fontSize: "15px", backgroundColor: "white", border: "none", color: "black" }} variant="primary">
                  <i class="bi bi-graph-up">  </i>&nbsp;&nbsp;Analytics
                </Button>
              </div>
              <div className="p-2">
                <Button style={{ backgroundColor: "#3B2AA0", float: "right" }}>
                  Create new Task <i class="bi bi-plus-circle-fill"> </i>
                </Button>
              </div>
            </Stack>
                <Button style={{ fontSize: "10px", backgroundColor: "#EBEBEB", border: "none", color: "black",margin:"10px 10px 30px 10px"}} variant='primary'>
                <Row><Col sm={1} style={{fontSize:"25px"}}><i class="bi bi-download"></i></Col><Col><Card.Title style={{fontSize:"14px"}}>Download the app</Card.Title><Card.Text>Get the full experience</Card.Text></Col></Row>
                </Button>
            </Card>
          </Col>

          <Col xl={10}>

            <Row style={{ height: "10vh" }}>
              <Col >
                <h1>Good Morning,{userName}!</h1>
              </Col>
              <Col >
                <Button style={{ float: "right", fontSize: "15px", backgroundColor: "#EBEBEB", border: "none", color: "black" }} variant="primary">
                  Help & feedback&nbsp;<i class="bi bi-question-circle">  </i>
                </Button>
              </Col>
            </Row>


            <Row style={{ height: "19vh" }}>
              <Col>
                <Card style={{ display: "flex", flexDirection: "column" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <div>
                    <Card.Body style={{ fontSize: "10px" }}>
                      <Card.Title  style={{ fontSize: "15px" }}>Introduction tags</Card.Title>
                      Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.</Card.Body>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ display: "flex", flexDirection: "column" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <div>
                    <Card.Body style={{ fontSize: "10px" }}>
                      <Card.Title  style={{ fontSize: "15px" }}>Share Notes Instantly</Card.Title>
                      Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.</Card.Body>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card style={{ display: "flex", flexDirection: "column" }}>
                  <Card.Img variant="top" src={img1}/>
                  <div>
                    <Card.Body style={{ fontSize: "10px" }}>
                      <Card.Title style={{ fontSize: "15px" }}>Access Anywhere</Card.Title>
                      Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.</Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>


            <Row style={{ alignItems: "right", height: "6vh", backgroundColor: "#EBEBEB" }}>
              <Col style={{ display: "flex", justifyContent: "center", backgroundColor: "#EBEBEB", float: "left" }}>
                <Form.Control
                  placeholder="Search" style={{ backgroundColor: "white" }}
                />
                <Button style={{ fontSize: "15px", float: "right", backgroundColor: "white", border: "none", color: "black" }} variant="primary">
                  <i class="bi bi-search">  </i>
                </Button>
              </Col>
              <Col >
                <Button style={{ fontSize: "15px", backgroundColor: "#EBEBEB", border: "none", color: "black" }} variant="primary">
                  <i class="bi bi-calendar4">  </i>Calender view&nbsp;
                </Button>
              </Col>
              <Col >
                <Button style={{ fontSize: "15px", backgroundColor: "#EBEBEB", border: "none", color: "black" }} variant="primary">
                  <i class="bi bi-stars">  </i>Automation&nbsp;
                </Button>
              </Col>
              <Col >
                <Button style={{ fontSize: "15px", float: "right", backgroundColor: "#EBEBEB", border: "none", color: "black" }} variant="primary">
                  <i class="bi bi-funnel">  </i>Filter&nbsp;
                </Button>
              </Col>
              <Col >
                <Button style={{ fontSize: "15px", float: "right", backgroundColor: "#EBEBEB", border: "none", color: "black" }} variant="primary">
                  <i class="bi bi-share">  </i>Share&nbsp;
                </Button>
              </Col>
              <Col>
                <Button style={{ backgroundColor: "#3B2AA0", float: "right" }}>
                  Create new <i class="bi bi-plus-circle-fill"> </i>
                </Button>
              </Col>
            </Row>


            <Row style={{ height: "50%",paddingTop:"10px" }}>
              
              <Card>
                <Row>
                <Col>
                  <Card.Title style={{fontSize:"18px",marginTop:"1rem"}}>To do&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-filter-right"></i>
                  </Card.Title>
                  <Customcard title={"title"} text = {" some text"} date = {"tmonday"} priority = {"high"} description={"Hello there our first todo task priority id  "}/>
                  <Button onClick={handleShow}  style={{ backgroundColor: "#3B2AA0", fontSize:"16px" }}>
                    Add new&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus"></i>
                  </Button>
                </Col>
                <Col>
                  <Card.Title style={{fontSize:"18px",marginTop:"1rem"}}>In progress&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-filter-right"></i>
                  </Card.Title>
                  <Button onClick={handleShow}  style={{ backgroundColor: "#3B2AA0", fontSize:"16px" }}>
                    Add new&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus"></i>
                  </Button>
                </Col>
                <Col>
                  <Card.Title style={{fontSize:"18px",marginTop:"1rem"}}>Under review&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-filter-right"></i>
                  </Card.Title>
                  <Button onClick={handleShow}  style={{ backgroundColor: "#3B2AA0", fontSize:"16px" }}>
                    Add new&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus"></i>
                  </Button>
                </Col>
                <Col>
                  <Card.Title style={{fontSize:"18px",marginTop:"1rem"}}>Finished&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-filter-right"></i>
                  </Card.Title>
                  <Button onClick={handleShow} style={{ backgroundColor: "#3B2AA0", fontSize:"16px" }}>
                    Add new&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-plus"></i>
                  </Button>
                </Col>
                </Row>
              </Card>
            </Row>


          </Col>

        </Row>

      </Container>

      <Modal show={show} onHide={handleClose}>
        <div style={{display:"flex",flexDirection:"row"}}>
          <Button onClick={handleClose} style={{margin: "10px 0rem 0rem 0rem",backgroundColor:"white",border:"none",color:"black"}} variant='primary'><i class="bi bi-x" style={{fontSize:"30px"}}>  </i></Button>
          <i class="bi bi-chevron-expand" style={{fontSize:"26px",margin: "16px 0rem 0rem 1rem"}}></i>
          <Button style={{margin: "1rem 0rem 0rem 11rem",background:"#EBEBEB",border:"none",color : "black"}} variant="primary"> 
          Share&nbsp;
          <i class="bi bi-share">  </i>
          </Button>
          <Button  style={{margin: "1rem 0rem 0rem 1rem",background:"#EBEBEB",border:"none",color : "black"}} variant="primary">
          Favourite&nbsp;  
          <i class="bi bi-star">  </i> 
          </Button>
        </div>
        <hr></hr>
        <Modal.Body>
        <Modal.Title style={{color :"grey",fontSize:"40px"}}>Title</Modal.Title>
          <Form>
            <Form.Group style={{display:"flex",flexDirection:"row"}} className="mb-3" controlId="exampleForm.ControlInput1">
            <i class="bi bi-brightness-high" style={{fontSize:"23px"}}></i>
              <Form.Label style={{fontSize:"20px"}}>Status</Form.Label>
              <Form.Select className="form-control border-0 shadow-none">
                <option>Not Selected</option>
                <option>To do</option>
                <option>In progress</option>
                <option>Under review</option>
                <option>Finished</option>
            </Form.Select>
            </Form.Group>
            <Form.Group style={{display:"flex",flexDirection:"row"}} className="mb-3" controlId="exampleForm.ControlInput1">
            <i class="bi bi-exclamation-diamond"  style={{fontSize:"23px"}}></i>
              <Form.Label style={{fontSize:"20px"}}>Priority</Form.Label>
              <Form.Select   className="form-control border-0 shadow-none">
                <option>Not Selected</option>
                <option>Urgent</option>
                <option>Medium</option>
                <option>Low</option>
              </Form.Select>
            </Form.Group>
            <Form.Group style={{display:"flex",flexDirection:"row"}} className="mb-3" controlId="exampleForm.ControlInput1">
            <i class="bi bi-calendar4" style={{fontSize:"23px"}}></i>
              <Form.Label style={{fontSize:"20px"}}>Deadline</Form.Label>
              <Form.Select   className="form-control border-0 shadow-none">
                <option>Not Selected</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" style={{display:"flex",flexDirection:"row"}} controlId="exampleForm.ControlInput1">
            <i class="bi bi-pencil" style={{fontSize:"23px"}}></i>
              <Form.Label style={{fontSize:"20px"}} >Description</Form.Label>
              <Form.Control className="form-control border-0 shadow-none"
                type="text"
                placeholder="Not Selected"
                autoFocus
              />
            </Form.Group>
            <Button variant="primary" style={{background:"#EBEBEB",border:"none",color : "black"}} onClick={handleClose}>
              <i class="bi bi-plus-lg" style={{fontStyle:"normal",backgroundColor:"white",color: "black"}}> Add custom property</i>
            </Button>
            <Form.Group 
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              style={{marginTop:"10px"}}
            >
              <Form.Control placeholder='Start writing, or drag your own files here.' className="border-0 shadow-none" as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" style={{background:"#EBEBEB",border:"none",color : "black"}} onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 

    </div>
  )
}

export default Dashboard ;