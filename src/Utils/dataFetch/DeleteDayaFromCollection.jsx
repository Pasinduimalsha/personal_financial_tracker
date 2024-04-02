import DeleteIcon from '@mui/icons-material/Delete';
// import { db } from "../../Firebase/Firebase";
// DeleteComponent.js


const DeleteComponent = ({ onDelete }) => {
  const handleDelete = () => {
    onDelete(); // Trigger the onDelete function passed from the parent component
    // You can also add additional logic here if needed before deletion
  };

  return (
    <button onClick={handleDelete}>
     <DeleteIcon/>
    </button>
  );
};

export default DeleteComponent;



