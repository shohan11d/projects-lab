import { useState } from 'react';
import { Button } from './assets/styled';
import { Friend } from './Friend';
import { AddFriend } from './AddFriend';
import { Split } from './Split';

const init = [
  { name: 'Clark', balance: 7, image: `url` },
  { name: 'Sarah', balance: 20, image: `url` },
  { name: 'Anthony', balance: 0, image: `url` },
];

function App() {
  const [data, setData] = useState(init);
  const [isOpen, setIsOpen] = useState(false);
  // const [isSplitOpen, setIsSplitOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  function handleAdd(value) {
    const tick = value === selected;
    setSelected(() => (tick ? null : value));
    // setSelected(value);
  }

  function handleSplit(value) {
    console.log(value);
    setData(
      data.map((item) =>
        item === selected
          ? { ...item, balance: Math.abs(item.balance + value) }
          : item
      )
    );
  }

  return (
    <div className="contain">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {data.map((friend) => (
          <Friend
            friend={friend}
            key={crypto.randomUUID()}
            onAdd={handleAdd}
            selected={selected}
          />
        ))}
        {isOpen ? <AddFriend /> : ''}
        <Button onClick={() => setIsOpen((isOpen) => !isOpen)}>
          {isOpen ? 'Close' : 'Add friend'}
        </Button>
      </div>
      {selected && (
        <Split
          selected={selected}
          onSplit={handleSplit}
          setSelected={setSelected}
        />
      )}
    </div>
  );
}

export default App;
