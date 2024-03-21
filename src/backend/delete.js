import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const DeleteButton = ({ onClick }) => {
  const handleDeleteClick = () => {
    onClick();
  };

  return (
    <button onClick={handleDeleteClick}>
      Delete
    </button>
  );
};

const useDeleteData = (url) => {
  const [data, setData] = useState(null);
  const history = useHistory();

  const deleteData = (id, data, callback) => {
      fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })
      .then(() => {
        if (data && data.id === id) {
          callback(null);
        }
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
    }

  return { setData, deleteData };
};

export default useDeleteData;
