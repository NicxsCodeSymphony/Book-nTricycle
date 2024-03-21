import '../style/home.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useDeleteData from '../backend/delete';

const BookHeading = () => {

  const { deleteData } = useDeleteData("http://localhost:1002/bookings")
  const lastPart = window.location.href.split("/").pop();

  const history = useHistory();


  const [, fourthFromRight] = window.location.href.split('/').reverse();

  function back(){
   if(fourthFromRight == 'book'){
   if(window.confirm('Are you sure you want to log out?')){
    history.push('/');
   }
   }

   if(fourthFromRight == 'payment'){
        deleteData(lastPart)
        history.goBack()
   }
  }

    return (
       <div className="heading">
        <button onClick={back}>Back</button>
         <h1>Book'n Tricycle</h1>
         <h5>S</h5>
       </div>
    )
}

export default BookHeading;