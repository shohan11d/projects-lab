import { Button } from './assets/styled';

export function Friend({ friend, onAdd, selected }) {
  return (
    <div className="container">
      <div className={friend === selected ? 'tab' : 'lab'}>
        <div className="avater">
          <img src={friend.image} className="img" alt="" />
        </div>
        <div>
          <h3>{friend.name}</h3>
          {/* {friend.balance > 0 ? (
            <p className="red">
              `You owe ${friend.name} ${friend.balance}$`
            </p>
          ) : (
            <p className="green">
              {friend.name} owes you ${friend.balance}
            </p>
          )} */}
          {friend.balance > 0 && (
            <p className="red">
              You owe {friend.name} {Math.abs(friend.balance)}$
            </p>
          )}
          {friend.balance < 0 && (
            <p className="green">
              {friend.name} owes you {Math.abs(friend.balance)}$
            </p>
          )}
          {friend.balance === 0 && <p className="">You guys are even</p>}
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
