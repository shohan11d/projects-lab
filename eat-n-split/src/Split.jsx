import { useState } from 'react';
import { Input, Button } from './assets/styled';

export function Split({ selected, onSplit, setSelected }) {
  const [bill, setBill] = useState('');
  const [myBill, setMyBill] = useState('');

  const [option, setOption] = useState('you');
  const friendsBill = bill - myBill;

  function billSplit() {
    if (!bill || !myBill) return;
    option === 'you' ? onSplit(-friendsBill) : onSplit(myBill);
    setSelected('');
  }
  return (
    <div className="split">
      <h3>SPLIT A BILL WITH {selected.name}</h3>
      <div style={{ display: 'grid', rowGap: '10px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <label>💰 Bill value</label>
          <Input value={bill} onChange={(e) => setBill(+e.target.value)} />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <label>🕴️ Your expanse</label>
          <Input value={myBill} onChange={(e) => setMyBill(+e.target.value)} />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <label>🧑‍🤝‍🧑 {selected.name}s expanse</label>

          <input className="input" value={friendsBill} type="number" disabled />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <label>💰 Who is paying the bill</label>
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            className="option"
            name=""
            id=""
          >
            <option value="you">you</option>
            <option value="friend">friend</option>
          </select>
        </div>
        <div style={{ textAlign: 'right' }}>
          <Button onClick={billSplit}>Split Bill</Button>
        </div>
      </div>
    </div>
  );
}
