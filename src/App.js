import './App.css';
import Table from './Components/Table';
import Header from './Components/Header';
import Form from './Components/Form';
import Search from './Components/search';
import { useState } from 'react';



function App() {
  const transaction = [
    {
        date: "14/04/2024",
        description: "Withdraw",
        category: "Salary",
        amount: "3000"
    },
    {
        date: "14/04/2024",
        description: "Deposit",
        category: "Income",
        amount: "50000"
    },
    {
        date: "16/04/2024",
        description: "Business",
        category: "Expenditure",
        amount: "5000"
    }
      ]


      const [data, setData] = useState(transaction)
      const [searchData, setSearchData] = useState("")

      function handleSearch (e){
        setSearchData(e.target.value)}

        const newData = data.filter((transaction) => {
          if(searchData.length > 0)
          {
          return transaction.description.toLowerCase().includes(searchData.toLowerCase())
        } else{
          return true
        }
        })
        
      function handleNewData (formData) {
        setData([...data, formData])
      }


  return (
    <div className='container'>
  
    <Header/>
    <Search searchBar={handleSearch}/>
    <Form handleNewData={handleNewData}/>
    <Table transaction={newData}/>

    
    </div>
  );
}

export default App;