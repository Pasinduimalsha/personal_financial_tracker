
import { useGlobalContext } from '../../Components/Context/ExpenseContext';
import IncomeItem from '../../Components/IncomeItem/IncomeItem';
import styled from 'styled-components'
import { useEffect } from 'react';
import getDataFromCollection from '../../Utils/dataFetch/getDataFromCollection';
import { useState } from 'react';
import IncomeForm from './IncomeForm';


function Income() {
  console.log('Income component');
  const {expenses} = useGlobalContext();

  
  console.log(expenses);
  //GET DATA FORM DATABASE Using useState
  const [income, setIncome] = useState([]);
  
  //GET DATA FORM DATABASE
  //  useEffect(() => {
  //   getDataFromCollection('income',setIncome); 
  //  }, [expenses]);
   const handleCheckUpClick = () => {
  
    getDataFromCollection('income',setIncome); 
   
  };
   
   console.log('income component data',income);
    return (
        <ExpencesStyled className='main sm:px-12 sm:ml-3  md:px-[120px] px-5 pr-1 pb-[120px] pt-[100px] w-full h-screen overflow-y-scroll z-0 relative flex flex-col items-center bg-[#12372A]  opacity-90'>
            
                <h1 className='titlel flex flex-col items-center font-bold text-6xl transition duration-500 ease-in-out pb-5 mb-4 '>Income</h1>
                

                <div className="expenses-content">
                  {/* Left side */}
                   <div className=
                   "form-container">
                     <IncomeForm/>
                   </div >
                   {/* Right Side */} 
                   <div className='expenses-list  flex flex-col items-center justify-between'>
                   {income.map(({title,amount,category,description} ,index)=>{
                     
                     return <IncomeItem key={index} title={title} description={description} amount={amount}  category={category} />
                  }
                  )}
                   </div>
                    
                    {/* <IncomeItem/> */}
                </div>
                <button className="check-up-btn" onClick={handleCheckUpClick}>View</button>
        </ExpencesStyled>
    )
}

export default Income;


const ExpencesStyled = styled.div`
    .main{
      display: flex;
      flex-direction: coloumn;
        
    }
    
    .expenses-content{
        display: flex;
        flex-direction: column;
        gap: 30px;
        background-color: #12372A; 
        opacity: 300%;
        
       
        .form-container{
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 40px 70px 40px 70px;
            border-radius: 20px;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
       }
      .expenses-list{

            padding: 10px;
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
            opacity: 300%;
            border-radius: 20px;
            background-color: #585757; 
            margin-bottom: 20px;
            margin-top: 20px;
      }

    
      .check-up-btn {

position: fixed;
bottom: 20px;
right: 20px;
width: 300px;
height: 100px;
background-color: #585757;
color: #2e1c1c;
border: none;
border-radius: 20px;
cursor: pointer;
font-size: 50px;
display: flex;
align-items: center;
justify-content: center;
z-index: 1000;
transition: transform 0.3s ease;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
font-weight: 700;
}

.check-up-btn:hover {
transform: translateY(-5px) scale(1.05);
}

.check-up-btn:active {
transform: translateY(0) scale(1);
}
.titlel{
  display: inline-block;
    padding: 15px;
    color: #585757;
    font-size: 70px;
    font-weight: 500;
    letter-spacing: 4px;
    word-spacing: 5px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    text-transform: uppercase;
    backdrop-filter: blur(15px);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    word-wrap: break-word;
}
  
`;