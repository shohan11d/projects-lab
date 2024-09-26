import { Button } from './assets/styled';

export function Friend({ friend, onAdd, selected }) {
  return (
    <div className="container">
      <div className="tab">
        <div className="avater">
          <img src="" alt="" />
        </div>
        <div>
          <h3>{friend.name}</h3>
          <p>Lorem, ipsum dolor.</p>
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
