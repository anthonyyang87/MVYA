import Button from '@material-ui/core/Button';
import { useState, React } from 'react';
import { Modal } from 'react-bootstrap';
import ComboBox from './comboBox';
import RangeSlider from './slider';
import SimpleRating from './rating';
import AutoCompleteTags from './autoCompleteTags';
import FreeSolo from './freeSolo';
import MultilineTextFields from './textArea';
import TextField from '@material-ui/core/TextField';
import FileInput from './fileInput';
export default function CreateReview(){
   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button id="createReview" variant="contained" 
      color="secondary" style={{backgroundColor: '#0277BD', color: '#FFFFFF'}} onClick={handleShow}>
        Review A Product
     </Button>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Review a Product </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {/* user input */}
          <div className="App-list-item">
            <TextField id="outlined-basic" label="Product Name" variant="outlined" />
          </div>
          <div className="App-list-item">
            <FreeSolo brandOptions={brandOptions} />
          </div>  
          <div className="App-list-item">
           <ComboBox boxName="Category" options={categoryOptions}/>
          </div>
          <div className="App-list-item">
             <RangeSlider sliderName="Price Range" />
          </div>
          <div className="App-list-item">
            <SimpleRating />
          </div>  
          <div className="App-list-item">
            <AutoCompleteTags tagOptions={tagOptions} type="Review"/>
          </div>  
          <div className="App-list-item">
            <MultilineTextFields />
          </div>
          <div className="App-list-item">
            <FileInput/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary">Apply</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const categoryOptions = [
  { label: "Electroncis"}, 
  { label: "Home Appliances"}, 
  { label: "Computer"},
  { label: "School Stuff"}
]; 

const tagOptions = [
  { label: "Nike" }, 
  { label: "Adidas"},
  { label: "Apple"}, 
  { label: "Samsung"}
]; 

const brandOptions = [
  { label: "Nike" }, 
  { label: "Adidas"},  
  { label: "Apple"}, 
  { label: "Samsung"}
]; 