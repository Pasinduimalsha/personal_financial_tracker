
import { createContext ,useState,useContext, useEffect} from 'react';

export const GlobalContext = createContext();

// Creating a provider
export  const GlobalContextProvider = ({ children }) => {
   
  const [expenses, setExpenses] = useState([]);

   //ADDING EXPENSES TO THE EXPENSES STATE
const addExpenses = async (expense) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {  
      //console.log("Adding expense:", expense);
      setExpenses(prevExpenses => [...prevExpenses, expense]); // Append the new expense to the existing array
      
      resolve({ status: 200, message: "Expense added successfully" });  
    }, 1000);
  });      
};

useEffect(()=>{
 // console.log("Current expenses:", expenses);
},[expenses])




  
  return (
    <GlobalContext.Provider value={{ expenses , setExpenses,addExpenses}}>
      {children}
    </GlobalContext.Provider>
  );
};


export const useGlobalContext = () =>{
  return useContext(GlobalContext);
}
