
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {


    //state creation
    const [principle,setPrinciple] = useState('')
    const [year,setYear] = useState('')
    const [rate,setRate] = useState('')
    const [interest,setInterest] = useState('')
    console.log(principle);
    console.log(rate);
    console.log(year);

    const calculate =(e)=>{
      let output = principle*year*rate/100
      console.log(output);
      setInterest(output)
    }

    const reset =  (e)=> {
      setRate('')
      setYear('')
      setPrinciple('') 
      setInterest('')
    }

  
     
  return (
    <div className="App">
      <header className="App-header">
       <div className="container">
        <div className="head">
          <h1>Simple Interest Calcultor</h1>
          <p>Simple interest is an interest charge that borrowers pay lenders for a loan. 
            It is calculated using the principal only and does not include compounding interest. 
            Simple interest relates not just to certain loans. 
            It's also the type of interest that banks pay customers on their savings accounts.</p>
        </div>

        <div className="card">
          <h3 className='symbol'>&#8377; {interest} </h3>
          <p id='para'>Your Total Simple Interest</p>
        </div>

        <div className="input">
        <TextField id="outlined-basic" label="Principle Amount" variant="outlined"
        onChange={e=>setPrinciple(e.target.value)} value={principle}
        />
     
        <TextField className='tt' id="outlined-basic1" label="Rate of Interest" variant="outlined"
         onChange={e=>setRate(e.target.value)} value={rate}
        />
      
        <TextField className='tt1' id="outlined-basic2" label="Year" variant="outlined"
         onChange={e=>setYear(e.target.value)} value={year}
        />
   
             
        <Button className='bb'
         onClick={calculate}
         variant="contained">Calculate</Button>
        

        <Button className='bb1'
         onClick={reset}
         variant="outlined">Reset</Button>
        </div>

   

       </div>
      </header>
    </div>
  );
}

export default App;
