import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

//CSS
import './App.css';

function App() {
  const [depositForm, setDepositForm] = useState(false);
  const [whithdrawForm, setWhithdrawForm] = useState(false);
  
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, whithdrawMoney } = bindActionCreators(actionCreators, dispatch)

  //Deposit Logic
  const handleDeposit = () =>{
    setDepositForm(true)
    setWhithdrawForm(false)
  }

  const depositAmount = (e) => {
    const amount = Number(e.target[0].value)
    if(amount === 0){
      e.preventDefault()
      setDepositForm(true)
      alert("Insira um valor!")
    } else {
      depositMoney(amount)
      e.preventDefault()
      setDepositForm(false)
    }
  }


  //Whithdraw Logic
  const handleWhithdraw = () =>{
    if(account === 0 ){
      alert("Saldo zerado, você não pode realizar saques!")
    } else {
      setWhithdrawForm(true)
    }
    setDepositForm(false)
  }

  const whithdrawAmount = (e) => {
    const amount = Number(e.target[0].value)
    if(amount === 0){
      e.preventDefault()
      setWhithdrawForm(true)
      alert("Insira um valor!")

    } else if(amount > account){
      e.preventDefault()
      setWhithdrawForm(true)
      alert("Valor desejado maior que o saldo. Operação cancelada!")

    } else {
      whithdrawMoney(amount)
      e.preventDefault()
      setWhithdrawForm(false)

    }

  }

  

  return (
    <div>
      <h1>{account}</h1>
      <button className='deposit' onClick={handleDeposit}> Depositar </button>
      <button className='whithdraw' onClick={handleWhithdraw}> Sacar </button>
      <br />
      {
        depositForm
        ? 
          <form onSubmit={depositAmount} className='form'>
            <label>Depositar quanto?</label>
            <input type="number" name="cash" placeholder='R$100,00' />
            <br />
            <button className='confirm' type="submit">Confirmar Depósito</button>
          </form>
        : null
      }
      {
        whithdrawForm
        ? 
          <form onSubmit={whithdrawAmount} className='form'>
            <label>Sacar quanto?</label>
            <input type="number" name="cash" placeholder='R$100,00' />
            <br />
            <button className='confirm' type="submit">Confirmar Saque</button>
          </form>
        : null
      }
    </div>
  );
}

export default App;
