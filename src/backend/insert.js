import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getDatabase, ref, push } from "firebase/database";
import database from "./firebase";




export const InsertButton = ({ onClick }) => {
    
    const history = useHistory();

    const handleInsertClick = () => {
      onClick();
    };

    return (
        <button onClick={handleInsertClick}>Insert</button>
    )    
}

export const handleInsert = (data, setData) => {
    const db = getDatabase();
    const newDataRef = ref(db, "commuters"); // Replace "your_collection_name" with the name of your collection in Firebase Realtime Database
    push(newDataRef, data)
      .then(() => {
        setData(prevData => ({
          ...prevData,
          people: [...(prevData.people || []), data]
        }));
      })
      .catch(err => {
        console.error("Failed to insert:", err);
        throw err;
      });
  };
  

export default InsertButton