import { Box,useMediaQuery } from "@mui/material";
import getDataFromCollection from '../../Utils/dataFetch/getDataFromCollection';
import { useState } from 'react';
import { useEffect ,useRef} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
 
ChartJS.register(ArcElement, Tooltip, Legend);

const gridTemplateLargeScreens = `
"a a a a b b"
"a a a a c c"
"a a a a d d"
"a a a a e e"
"a a a a f f"
"g g h h i i"
"g g h h k k"
"m j j o l l"
"n j j p q r"
`;
 
const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "c"
  "d"
  "e"
  "f"
  "g"
  "g"
  "h"
  "h"
  "i"
  "j"
  "j"
`;



const Dashboard = () => {

//GET DATA FORM DATABASE Using useState
 const [expense_D, setExpense_D] = useState([]);
 const [income_D, setIncome_D] = useState([]);
 
 
 //GET DATA FORM DATABASE
  useEffect(() => {
   getDataFromCollection('expenses',setExpense_D); 
  }, []);
  useEffect(() => {
    getDataFromCollection('income',setIncome_D); 
   }, []);
  
  const totalExpenses = () => {
    // Use reduce() to sum up all amounts
    const total = expense_D.reduce((accumulator, expense) => {
       
        const amount = parseFloat(expense.amount); 
        return accumulator + amount;
    }, 0); 

    return total;
}

  const total = totalExpenses();
  
  
  const totalIncome = () => {
    // Use reduce() to sum up all amounts
    const total_1 = income_D.reduce((accumulator, income) => {
       
        const amount = parseFloat(income.amount); 
        return accumulator + amount;
    }, 0); 

    return total_1;
}

  const total_1 = totalIncome();
  
  //Last Updated expenses
  const lastUpdatedExpense = expense_D.length > 0 ? expense_D[expense_D.length-1] : null;
  const lastUpdatedPrice = lastUpdatedExpense ? lastUpdatedExpense.amount : null;
  const lastUpdatedTitle = lastUpdatedExpense ? lastUpdatedExpense.title : null;

 console.log('last updated expense',lastUpdatedExpense);


 //Last Updated expenses
 const lastUpdatedIncome = income_D.length > 0 ? income_D[income_D.length-1] : null;
 const lastUpdatedIncomePrice = lastUpdatedIncome ? lastUpdatedIncome.amount : null;
 const lastUpdatedIncomeTitle = lastUpdatedIncome ? lastUpdatedIncome.title : null;

 const totalBalance = total_1 - total;
  const isAboveMediumScreens = useMediaQuery("(min-width: 1000px)");

  
  
  //GTE MIN MAX INCOMES
  const minMaxIncome = () => {
    if (income_D.length === 0) {
        return { min: 0, max: 0 };
    }

    // Initialize min and max with the first income amount
    let min = parseFloat(income_D[0].amount);
    let max = parseFloat(income_D[0].amount);

    // Iterate through the rest of the income items to find min and max
    for (let i = 1; i < income_D.length; i++) {
        const amount = parseFloat(income_D[i].amount);
        if (amount < min) {
            min = amount;
        }
        if (amount > max) {
            max = amount;
        }
    }

    return { min, max };
}

// Call the function to get the min and max values
const { min: minIncome, max: maxIncome } = minMaxIncome();

  console.log('min income', minIncome);
  console.log('max income', maxIncome);

  //GTE MIN MAX EXPENSES
  const minMaxExpenses = () => {
    if (expense_D.length === 0) {
        return { min: 0, max: 0 };
    }

    // Initialize min and max with the first expense amount
    let min = parseFloat(expense_D[0].amount);
    let max = parseFloat(expense_D[0].amount);

    // Iterate through the rest of the expense items to find min and max
    for (let i = 1; i < expense_D.length; i++) {
        const amount = parseFloat(expense_D[i].amount);
        if (amount < min) {
            min = amount;
        }
        if (amount > max) {
            max = amount;
        }
    }

    return { min, max };
}

// Call the function to get the min and max values
const { min: minExpense, max: maxExpense } = minMaxExpenses();
  
  console.log('min expense', minExpense);
  console.log('max expense', maxExpense);

  const data = {
    labels: ['totalExpenses', 'totalIncome', 'Balance', 'maxExpense', 'maxIncome', 'minExpense', 'minIncome'],
    
    datasets: [
      {
        label: 'Transections Values ',
        data: [total_1, total, totalBalance, maxExpense, maxIncome, minExpense, minIncome],
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(207, 173, 138, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          '#40ff96',
        ],
        borderWidth: 1,
      },
    ],
    plugins: {
      datalabels: {
        color: '#f8ecec', 
        font: {
          size: 70, 
          weight: 'bold', 
        },
      },
    },
  };
  
   
  
  return (
   
    <div className='sm:px-12 sm:ml-3  md:px-[120px] px-5 pr-1 pb-[120px] pt-[100px] w-full h-screen overflow-y-scroll z-0 relative bg-[#12372A]  '>
      
      <h1 style={{ margin: "0",
      fontWeight: "bold" ,
      fontSize: "26px" ,
      color: "#585757",
      borderRadius: "15px",
      backdropFilter: "blur(15px)",
      boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
      padding: "10px"
}}>
  <span style={{
      border: "1px solid #585757",
      padding: "15px",
      display: "inline-block",
      borderRadius: "15px",
      textTransform: "uppercase",
      letterSpacing: "1px",
      wordSpacing: "5px",
      boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(15px)",
      fontSize: "30px",
      fontWeight: "700",
      color: "#585757",
      wordWrap: "break-word"
    }}>All Transactions</span>
</h1>


       <Box 
      width="100%"
      height="100vh"
      display="grid"
      gap="1.5rem"
      
      className="drop-shadow-header-shadow  "
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(6, minmax(170px, 1fr))",
              gridTemplateRows: "repeat(9, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridTemplateColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      } 

    >
    

     <Box sx={{ gridArea: "a",backgroundColor: "#436850",borderRadius: "20px",paddingTop: "20px",paddingBottom: "20px"}} className="flex items-center justify-center">
       
     <Doughnut data={data} />

     </Box>
     <Box sx={{ gridArea: "b", backgroundColor: "#436850", borderRadius: "20px", display: "flex", alignItems: "center" , transition: "transform 0.3s ease",}}>
      <h1 style={{ margin: "0", marginLeft: "10px",fontWeight: "bold",color: "#8ea07e",fontSize: "30px" }} className="... flex items-center justify-evenly">Recent Updated Expense</h1>
     </Box>

      <Box sx={{ gridArea: "c", backgroundColor: "#436850", borderRadius: "20px", display: "flex", alignItems: "center" }}>
        <div  className="flex flex-row justify-between" style={{ width: "100%" }}>
          <h1  style={{ margin: "0", color: "#e30022",marginLeft: "40px", fontSize:"30px" ,fontWeight: "700"}}>{lastUpdatedTitle}</h1>
          <h1 style={{ margin: "0",  color: "#e30022" ,marginRight: "40px", fontSize:"30px" ,fontWeight: "700"}}>{lastUpdatedPrice}</h1>
        </div> 
      </Box>

      <Box sx={{ gridArea: "d", backgroundColor: "#436850", borderRadius: "20px", display: "flex", alignItems: "center" }}>
      <h1 style={{ margin: "0", marginLeft: "20px",fontWeight: "bold",color: "#8ea07e",fontSize: "30px" }} className="... flex items-center justify-evenly">Recent Updated Income</h1>
     </Box>
      <Box  sx={{ gridArea: "e", backgroundColor: "#436850",borderRadius: "20px",display: "flex", alignItems: "center"}}>
      <div className=" flex flex-row justify-between" style={{ width: "100%" }}>
          <h1 style={{ margin: "0", color: "lightgreen",marginLeft: "40px", fontSize:"30px" ,fontWeight: "700" }}>{lastUpdatedIncomeTitle}</h1>
          <h1 style={{ margin: "0",  color: "lightgreen" ,marginRight: "40px", fontSize:"30px" ,fontWeight: "700"}}>{lastUpdatedIncomePrice}</h1>
        </div>
  
      </Box>
      <Box sx={{ gridArea: "f", backgroundColor: "#436850",borderRadius: "20px",display: "flex", alignItems: "center"}}>
      <div className=" flex flex-row justify-between"style={{ width: "100%" }}>
      <h1 style={{margin: "0",  color: "#8ea07e" ,marginLeft: "20px", fontSize:"30px" ,fontWeight: "bold"}}>Min</h1>
          <h1 style={{ margin: "0", fontWeight: "bold",color: "#8ea07e",fontSize: "30px" }}>Salary</h1>
          <h1 style={{margin: "0",  color: "#8ea07e" ,marginRight: "20px", fontSize:"30px" ,fontWeight: "bold"}}>Max</h1>
        </div>
      </Box>
      <Box sx={{ gridArea: "i", backgroundColor: "#436850",borderRadius: "20px",display: "flex", alignItems: "center"}}>
      <div className=" flex flex-row justify-between"style={{ width: "100%" }}>
           <h1  style={{ margin: "0",  color: "#ADBC9F" ,marginLeft: "40px", fontSize:"30px" ,fontWeight: "700"}}>{minIncome}</h1>
          <h1  style={{ margin: "0",  color: "#ADBC9F" ,marginRight: "40px", fontSize:"30px" ,fontWeight: "700"}}>{maxIncome}</h1>

      </div>
      </Box>
      <Box sx={{ gridArea: "k", backgroundColor: "#436850" ,borderRadius: "20px",display: "flex", alignItems: "center"}}>
      <div className=" flex flex-row justify-between" style={{ width: "100%" }}>
      <h1 style={{ margin: "0",  color: "#8ea07e" ,marginLeft: "20px", fontSize:"30px" ,fontWeight: "bold" }}>Min</h1>
          <h1 style={{margin: "0", fontWeight: "bold",color: "#8ea07e",fontSize: "30px" }}>Expense</h1>
          <h1 style={{margin: "0",  color: "#8ea07e" ,marginRight: "20px", fontSize:"30px" ,fontWeight: "bold" }}>Max</h1>
        </div>
      </Box>

         <Box sx={{ gridArea: "l", backgroundColor: "#436850",borderRadius: "20px",display: "flex", alignItems: "center" }}>
      <div className=" flex flex-row justify-between"style={{ width: "100%" }}>
           <h1  style={{ margin: "0",  color: "#ADBC9F" ,marginLeft: "40px", fontSize:"30px" ,fontWeight: "700"}}>{minExpense}</h1>
          <h1  style={{ margin: "0",  color: "#ADBC9F" ,marginRight: "40px", fontSize:"30px" ,fontWeight: "700"}}>{maxExpense}</h1>
   
     

      </div>
      </Box>

      <Box sx={{ gridArea: "g", backgroundColor: "#436850",borderRadius: "20px",display: "flex", flexDirection: "column", alignItems: "center",justifyContent:"center" }}>
      <div className=" flex flex-col justify-between items-center">
          <h1  style={{ margin: "0", color: "#8ea07e",fontSize:"45px" ,fontWeight: "700"}} class="flex items-center justify-evenly">Total Income</h1>  
          <h1  style={{ margin: "0", marginLeft: "20px",color: "lightgreen",fontSize:"40px" ,fontWeight: "700"}} class="flex items-center justify-evenly">{total_1}</h1>
        </div>

      </Box>
      {/* //TOTAL EXPENSES BOX */}
      <Box sx={{ gridArea: "h", backgroundColor: "#436850" ,borderRadius: "20px",display: "flex", flexDirection: "column", alignItems: "center",justifyContent:"center"}}>
      <div className=" flex flex-col justify-between items-center">
          <h1 style={{ margin: "0",color: "#8ea07e",fontSize:"45px" ,fontWeight: "700"}} class="flex items-center justify-evenly">Total Expenses</h1>
          
          <h1  style={{ margin: "0", marginLeft: "20px",color: "#e30022",fontSize:"40px" ,fontWeight: "700"}} class="flex items-center justify-evenly">{total}</h1>
        </div>
      </Box>
      <Box sx={{ gridArea: "j", backgroundColor: "#436850",borderRadius: "20px",display: "flex", flexDirection: "column", alignItems: "center",justifyContent:"center"}}>
      <div className=" flex flex-col justify-between items-center">
          <h1 style={{ margin: "0", marginLeft: "20px",color: "#8ea07e",fontSize:"45px" ,fontWeight: "700"}} class="flex items-center justify-evenly">Total Balance</h1>
          
          <h1 style={{ margin: "0", marginLeft: "20px",color: "lightgreen",fontSize:"40px" ,fontWeight: "700" }} class="... flex items-center justify-evenly">{totalBalance}</h1>
        </div>
      </Box>
    
    </Box>
    </div>
   
 
  );
};


export default Dashboard;

