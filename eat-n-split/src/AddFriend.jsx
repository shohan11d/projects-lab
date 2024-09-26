import { Input } from './assets/styled';

export function AddFriend() {
  return (
    <div style={{ borderRadius: '10px' }}>
      <div className="add">
        <label htmlFor=""> 🧑‍🤝‍🧑 Friend Name</label>
        <Input />
      </div>
      <div className="add">
        <label htmlFor="">🌄 Image URL</label>
        <Input />
      </div>
    </div>
  );
}
