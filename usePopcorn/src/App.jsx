import { useEffect, useState } from 'react';
import './App.css';

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState('EUR');
  const [to, setTo] = useState('USD');
  const [output, setOutput] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function () {
      if (input === 0) return;
      setIsLoading(true);
      const fetchData = async () => {
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${input}&from=${from}&to=${to}`
        );
        const data = await response.json();
        setOutput(data.rates[to]);
        setIsLoading(false);
      };
      fetchData();
    },
    [input, from, to]
  );
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(+e.target.value)}
      />
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        disabled={isLoading}
      > 
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {output} {to}
      </p>
    </div>
  );
}
