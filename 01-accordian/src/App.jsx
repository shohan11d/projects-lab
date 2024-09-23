import { useState } from 'react';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <div className="app">
      {faqs.map((item, index) => (
        <Question
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          key={index}
          title={item.title}
          text={item.text}
          index={index}
        />
      ))}
    </div>
  );
}

function Question({ title, text, index, isOpen, setIsOpen }) {
  const status = index === isOpen;
  function handleClick() {
    setIsOpen(() => (status ? null : index));
  }

  return (
    <div className={`accordion ${status ? 'open' : ''}`} onClick={() => handleClick(index)}>
      <div className='item'>
        <span className={status ? 'green' : ''}>{index < 9 ? `0${index + 1}` : index + 1}</span>
        <h4 className={`${status ? 'green' : ''}`}>{title}</h4>
        <span>{status ? '-' : '+'}</span>
      {status ? <div className='content-box'>{text}</div> : null}
      </div>
    </div>
  );
}
export default App;
