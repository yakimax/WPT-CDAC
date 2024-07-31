"use client";
import {useState} from 'react' ;
import Modal from 'react-bootstrap/Modal' ;
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button' ;
import Form from 'react-bootstrap/Form' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import 'bootstrap-icons/font/bootstrap-icons.css' ;


function Modalele() {
  const [show, setShow] = useState(true) ;
  return (
    <div> 
      <Modal show={show} onHide={handleClose}>
        <div style={{display:"flex",flexDirection:"row"}}>
          <CloseButton style={{margin: "23px 0rem 0rem 1rem"}}/>
          <i class="bi bi-chevron-expand" style={{fontSize:"26px",margin: "16px 0rem 0rem 1rem"}}></i>
          <Button class="bi bi-share" style={{margin: "1rem 0rem 0rem 11rem",background:"#EBEBEB",border:"none",color : "black"}} variant="primary"> 
          Share&nbsp;
          <i class="bi bi-share">  </i>
          </Button>
          <Button class="bi bi-share" style={{margin: "1rem 0rem 0rem 1rem",background:"#EBEBEB",border:"none",color : "black"}} variant="primary">
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

export default Modalele ;