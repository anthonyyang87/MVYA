import Button from '@material-ui/core/Button';
import { useState, React } from 'react';
import { Modal } from 'react-bootstrap';
import ComboBox from './comboBox';
import RangeSlider from './slider';
import SimpleRating from './rating';
import AutoCompleteTags from './autoCompleteTags';
export default function BrowseByCategoryAndFilters(){
   const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button id="browseCategory" variant="contained" color="primary" onClick={handleShow}>
        Categories and Filters
     </Button>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Categories and Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* insert category droplist here */}
          <div className="App-categories-filter-item">
           <ComboBox boxName="Category" options={categoryOptions}/>
          </div>
          <div className="App-categories-filter-item">
             <RangeSlider sliderName="Price Range" />
          </div>
          <div className="App-categories-filter-item">
            <SimpleRating />
          </div>  
          <div className="App-categories-filter-item">
            <AutoCompleteTags tagOptions={tagOptions} type="Search"/>
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

//Sample Test Input Options
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