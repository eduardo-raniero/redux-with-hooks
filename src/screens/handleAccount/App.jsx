import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index'

//Custom Alerts
import swal from 'sweetalert';

//CSS
import './App.css';

function App() {
  const [depositForm, setDepositForm] = useState(false);
  const [whithdrawForm, setWhithdrawForm] = useState(false);
  const [disabledOperations, setDisabledOperations] = useState(false);
  
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, whithdrawMoney } = bindActionCreators(actionCreators, dispatch)

  //Deposit Logic
  const handleDeposit = () =>{
    setDepositForm(true)
    setWhithdrawForm(false)
    setDisabledOperations(true)
  }

  const depositAmount = (e) => {
    const amount = Number(e.target[0].value)
    if(amount === 0){
      e.preventDefault()
      setDepositForm(true)
      swal("Ops!", "Insira algum valor!", "error")
    } else {
      depositMoney(amount)
      e.preventDefault()
      setDepositForm(false)
      setDisabledOperations(false)
      swal("Pronto!","Operação bem sucedida!", "success")

    }
  }


  //Whithdraw Logic
  const handleWhithdraw = () =>{
    if(account === 0 ){
      swal("Erro","Saldo zerado, você não pode realizar saques!", "error")
      setDisabledOperations(false)
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
      swal("Ops!", "Insira algum valor!", "error")

    } else if(amount > account){
      e.preventDefault()
      setWhithdrawForm(true)
      swal("Operação cancelada", `Valor desejado maior que seu saldo. Saque um valor igual ou inferior a ${account}`, "error")

    } else {
      whithdrawMoney(amount)
      e.preventDefault()
      setWhithdrawForm(false)
      setDisabledOperations(false)
      swal("Pronto!","Operação bem sucedida!", "success")


    }

  }

  

  return (
    <>
      <div>
      <h1>{account}</h1>
      <button className='deposit' onClick={handleDeposit} disabled={disabledOperations}> Depositar </button>
      <button className='whithdraw' onClick={handleWhithdraw} disabled={disabledOperations}> Sacar </button>
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
    </>
  );
}

export default App;
