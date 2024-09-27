import { useState } from 'react';
import { Button } from './assets/styled';

export function AddFriend({ setData }) {
  const [newFriend, setNewFriend] = useState('');
  const [imageId, setImageId] = useState(5);
  const [ImageURL, setImageURL] = useState(
    `https://i.pravatar.cc/150?img=5`
  );
  function handleADDED() {
    setImageId((imageId) => imageId + 1);
    setData((data) => [
      ...data,
      { name: newFriend, balance: 0, image: `https://i.pravatar.cc/150?img=${imageId+1}` },
    ]);
  }

  return (
    <div className="bad" style={{ borderRadius: '10px' }}>
      <div className="add">
        <label htmlFor=""> 🧑‍🤝‍🧑 Friend Name</label>
        <input
          className="input"
          value={newFriend}
          type="text"
          onChange={(e) => setNewFriend(e.target.value)}
        />
      </div>
      <div className="add">
        <label htmlFor="">🌄 Image URL</label>
        <input
          className="input"
          value={ImageURL}
          placeholder="https://i.pravatar.cc/300"
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}
      >
        <Button onClick={handleADDED}>ADD</Button>
      </div>
    </div>
  );
}
