import styled from 'styled-components';
export const Button = styled.button`
  background-color: #ff922b;

  border: none;
  color: #333333;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 10px;
  /* text-align: center; */
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  align-self: end;
  cursor: pointer;
  &:hover {
    background-color: #3e8e41;
  }
`;

export const Input = styled.input.attrs({
  type: 'number',
})`
  padding: 0.5rem 1rem;
  border: 1px solid #ffe8cc;
  border-radius: 4px;
`;
export const Input2 = styled.input.attrs({})`
  padding: 0.5rem 1rem;
  border: 1px solid #ffe8cc;
`;
