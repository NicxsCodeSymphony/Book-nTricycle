
import { Link } from 'react-router-dom';

const UpdateButton = ({ person, page }) => {

  let pages = page

  if(page === "teacher"){
    pages = page
  }

  if(page === "student"){
    pages = page
  }

  return (
    <Link className="btn btn-warning updateBTN" to={`/${pages}/${person}`}>Update</Link>
);

  
};
export default UpdateButton;