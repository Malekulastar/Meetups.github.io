import NewMeetUpForm from "../components/Layout/meetup/NewMeetUpForm";
import {useHistory} from 'react-router-dom';
function NewMeetUp(){
    const History=useHistory();
    function addmeetupHandler(meetupData){
        
        fetch('https://react-meetup-aca88-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type':'application/json'
            }
        }
        )
        .then(()=>
        {
            History.replace('/');
        })
    }
    return <section>
        <h1>Add NewMeetUp Form</h1>
        <NewMeetUpForm  addmeetData={addmeetupHandler}/>
    </section>
}


export default NewMeetUp;