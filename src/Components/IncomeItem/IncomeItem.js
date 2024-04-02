import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MessageIcon from '@mui/icons-material/Message';
// import DeleteIcon from '@mui/icons-material/Delete';
import RedditIcon from '@mui/icons-material/Reddit';
import styled from 'styled-components'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DeleteComponent from '../../Utils/dataFetch/DeleteDayaFromCollection';
import { useState } from 'react';

function limitWords(text, limit) {
  const words = text.split('');
  if (words.length > limit) {
    return words.slice(0, limit).join('') + '..';
    
  }
  return text;
 
}


const IncomeItem = ({

  title,
  amount,
 // date,
  category,
  description,
  onDelete
  

}) => {
  const amountString = amount.toString(); 
  const [limitedAmount, setLimitedAmount] = useState(limitWords(amountString, 4)); 
  const [limitedDescription, setLimitedDescription] = useState(limitWords(description, 4));
  
  const handleDelete = () => {
    // Call the onDelete function passed from the parent component
    onDelete();
  };

 return (
  <ExpencesStyled1  >
 {/*  */}
<div className="expenses-list w-80">
  <div className='Image'>
  <RedditIcon/>
  </div>
  <div className='expence-data'>
    <div className='title font-bold text-2xl text-white opacity-60'>
      {title} 
    </div>
    <div className='data'>
        <div className='const'>
            <p className='constl font-[700] text-lg ' title={amountString}><MonetizationOnIcon/> RS : <span>{limitedAmount}</span></p>
            
        </div>
        <div className='date'>
        <CalendarMonthIcon/>
        <p className='font-[700] text-lg'>12</p>
          </div>  
        <div className='description'>
        <MessageIcon />
        <p className='font-[700] text-lg' title={description}>{limitedDescription}</p>
        </div>
    </div>
  </div>
  <div className='delete'>
  <DeleteComponent onDelete={handleDelete}/>
  </div>
</div>
                         
  </ExpencesStyled1> 
  
 )

}


const ExpencesStyled1 = styled.div`
      .expenses-list{
        display: flex;
        flex-direction: row;
         align-items: center;
        justify-content: space-between;
        gap: 10px;
        background-color: #585757;
        margin-bottom: 20px;
        border-radius: 20px;
         
      }
      .expence-data{
        display: flex;
        flex-direction: column;
      }
      .data{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
      }

     .description{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-top: 4px;   
     
      
     }

     .title{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: black;
     }
     
  
`;
export default IncomeItem

