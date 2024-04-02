
import {  useState } from "react";
import { useGlobalContext } from "../../Components/Context/ExpenseContext";
// import DatePicker from "react-datepicker";
import { collection, addDoc, serverTimestamp} from 'firebase/firestore';
import { db } from "../../Firebase/Firebase";



const IncomeForm = () => {
   
  const {addExpenses,expenses} = useGlobalContext();

  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
   // date: '',
    category: '',
    description: '',
});

  //ADDING EXPENNSES TO THE FIREBASE DATABASE
  
  
  const addData = () => {
    addDoc(collection(db, "income"), {
      title: inputState.title,
      amount: inputState.amount,
      category: inputState.category,
      description: inputState.description,
      createdAt: serverTimestamp()
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      // Assuming you want to clear the input fields after adding data
      setInputState({
        title: '',
        amount: '',
        category: '',
        description: '',
      });
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}



const inputHadle = (e) =>{
   const {name,value} = e.target;
    setInputState({...inputState,[name]:value});
  }

const handleSubmit = e => {
   e.preventDefault();
   addExpenses(inputState);
   addData(inputState);
   setInputState({
    title: '',
    amount: '',
    //date: '',
    category: '',
    description: '',
})
// console.log(addExpenses);

   
}



 
return (
  <div className ="mt-8 sm: mx-auto sm: w-full sm:max-w-md">
    <div className=" text-[black] m-3"  style={{border: '1px  black',borderRadius: '10px', padding : "10px"}}>
      <input type="text" 
      name= "title"
      placeholder="Expense Title" 
      onChange={inputHadle} 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black
       dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
      />
    </div >
    <div className=" text-[black] m-3"  style={{border: '1px  black',borderRadius: '10px', padding : "10px"}}>
      <input type="text" name="amount" placeholder="Enter amount" onChange={inputHadle}
       class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text- dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
    </div>
     <div>
            {/* <DatePicker 
              id='date'
              placeholderText='Enter A Date'
              selected="date"
              dateFormat="dd/MM/yyyy"
              onChange={(date) => {
                setInputState({...inputState, date: date})
              }}
            /> */}
          </div>
    <div>
    <form className="max-w-sm mx-auton flex items-center justify-center"   style={{border: '1px  black',borderRadius: '10px', padding : "10px"}}> 
          {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-600 flex items-center justify-center ">category</label> */}
         <select required name="category"  onChange={inputHadle} className="block mb-2 text-sm font-medium text-gray-600 p-2"    style={{border: '1px  black',borderRadius: '10px', padding : "10px",backgroundColor : "#c5bebe"}}>
        <option value="">Category</option>
        <option value="education">Education</option>
        <option value="rental">Rental</option>
        <option value="health">Health</option>
      </select>
      </form>
    </div>
    <div className=" text-[black] m-3"  style={{border: '1px  black',borderRadius: '10px', padding : "10px"}}>
      <textarea placeholder="Enter Description" onChange={inputHadle} name="description"    style={{border: '1px  black',borderRadius: '10px', padding : "10px",backgroundColor : "#585757"}}></textarea>
    </div>
    <div className="flex items-center justify-center">
      <button type="submit" onClick={handleSubmit}
      className="text-white bg-[#436850] hover:bg-[#0d5526] focus:ring-4 focus:outline-none focus:ring-[#010a04] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition duration-200 ease-in-out" 
       >Submit</button>
    </div>

  </div>
)
}

export default IncomeForm;
