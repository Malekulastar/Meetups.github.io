import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props ){
  
  const [modalIsOpen, setmodalIsOpen ]=useState(false);

  function deleteHandle(){
    setmodalIsOpen(true);
  }
  function closeModalHandler(){
    setmodalIsOpen(false);
  }
   return(
    <div className='card' style={{}} >
    <h2>{props.text}</h2>
    <div className='actions'>
    <button onClick={deleteHandle} className='btn'>Delete</button>
    </div>
    {modalIsOpen &&< Modal  onCancel={closeModalHandler}  onConfirm={closeModalHandler}/>}
    {modalIsOpen && <Backdrop onClick ={ closeModalHandler } />}
    
    
  </div>  
   
    );

}

export default Todo;