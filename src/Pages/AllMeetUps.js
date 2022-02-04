import Meetuplist from "../components/Layout/meetup/Meetuplist.js";
import {useState,useEffect} from 'react';
// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];

function AllMeetUp(){
  const [isLoading,setIsLoading]=useState(false);

  const[loadedMeetups,setloadedMeetups]=useState([]);

  useEffect(()=>{

setIsLoading(true);

    fetch('https://react-meetup-aca88-default-rtdb.firebaseio.com/meetups.json')
  .then(response=>response.json()
  )
  .then((data) => {
     const meetups=[];
    
    for(const key in data){
      let meetup={
        id:key,
       ...data[key]
      };
      meetups.push(meetup);
    }
    setIsLoading(false);
    console.log(meetups);
    // setloadedMeetups(meetups);
    setloadedMeetups(meetups);
    console.log('hii'+JSON.stringify(data));
  });
  },[]);
  

  if(isLoading){
    return(
     <section>
       <p>
         Loading...........
       </p>
     </section>
    );
  }
  
    return <section>
    <h1>All MeetUps Page</h1>
    <Meetuplist meetup={loadedMeetups}/>
    </section>
}


export default AllMeetUp;