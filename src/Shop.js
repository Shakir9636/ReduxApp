import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

function Shop() {
  const balance = useSelector(state => state.amount)
  const dispatch  = useDispatch();
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div>
      <h1>Diposit/Widhdraw money</h1>
        <button className="btn btn-primary" onClick={()=>withdrawMoney(100)}>-</button>
                        Update balance { balance }
        <button className="btn btn-primary" onClick={()=>depositMoney(100)}>+</button>
    </div>
  )
}

export default Shop
