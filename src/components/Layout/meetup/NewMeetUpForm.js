import Card from "../../ui/Card";
import classes from './NewMeetUpForm.module.css';
import { useRef } from 'react';
function NewMeetUpForm(props){
    const titleInputRef= useRef();
    const urlInputRef= useRef();
    const addInputRef= useRef();
    const desInputRef= useRef();
    
    function submitHandler(event){
       event.preventDefault();
       const title=titleInputRef.current.value;
       const url=urlInputRef.current.value;
       const add=addInputRef.current.value;
       const des=desInputRef.current.value;
       
       
       const meetupData={
           title:title,
           image:url,
           Add:add,
           Des:des
       };
       //alert(meetupData);
       props.addmeetData(meetupData);

    }
return <Card>
    <form className={classes.form} onSubmit= {submitHandler} >
    <div className={classes.control}>
    <label htmlFor="title">Meetup Title</label>
    <input type="text" id="title" required  ref={titleInputRef}/>
    </div>

    <div className={classes.control}>
    <label htmlFor="image">Meetup Image</label>
    <input type="url" id="image" required   ref={urlInputRef}/>
    </div>

    <div className={classes.control}>
    <label htmlFor="address"> Address</label>
    <input type="text" id="address" required  ref={addInputRef} />
    </div>

    <div className={classes.control}>
    <label htmlFor="description">Description</label>
    <textarea type="text" id="description" required  rows="5"  ref={desInputRef} />
    </div>
    <div className={classes.actions}>
    <button>Add Meetup</button>
    </div>
    </form>
</Card>
}
export default NewMeetUpForm;