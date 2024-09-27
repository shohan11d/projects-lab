import { Button } from './assets/styled';

export function Friend({ friend, onAdd, selected }) {
  return (
    <div className="container">
      <div className={friend === selected ? 'tab' : 'lab'}>
        <div className="avater">
          <img src="" alt="" />
        </div>
        <div>
          <h3>{friend.name}</h3>
          {friend.balance > 0
            ? `You owe ${friend.name} ${friend.balance}$`
            : `${friend.name} owes you ${friend.balance}$`}
        </div>
        <div>
          <Button onClick={() => onAdd(friend)}>
            {selected === friend ? 'close' : 'select'}
          </Button>
        </div>
      </div>
    </div>
  );
}
