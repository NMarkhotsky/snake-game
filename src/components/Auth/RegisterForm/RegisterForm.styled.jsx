import styled from 'styled-components';

export const Field = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  background-color: #1f2029;
  border-radius: 4px;
  padding: 0.5em 1em;
`;

export const InputIcon = styled.svg`
  height: 1em;
  width: 1em;
  fill: #ffeba7;
`;

export const InputField = styled.input`
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: #d3d3d3;
`;

export const Title = styled.h4`
  margin-bottom: 1rem;
  font-size: 1.5em;
  font-weight: 500;
  color: #f5f5f5;
`;

export const Button = styled.button`
  margin: 1rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.8em;
  text-transform: uppercase;
  padding: 0.6em 1.2em;
  background-color: #ffeba7;
  color: #5e6681;
  box-shadow: 0 8px 24px 0 rgb(255 235 167 / 20%);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #5e6681;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgb(16 39 112 / 20%);

    cursor: pointer;
  }
`;

export const ButtonLink = styled.span`
  color: #f5f5f5;
  display: block;
  font-size: 0.75em;
  transition: color 0.3s ease-out;

  &:hover {
    color: #ffeba7;
    cursor: pointer;
  }
`;
