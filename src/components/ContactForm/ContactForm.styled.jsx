import styled from 'styled-components';

export const FormBox = styled.form`
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid black; */
  width: 300px;
  height: 250px;
  padding: 15px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  input {
    font-size: 22px;
    display: block;
    width: 280px;
    height: 25px;
    margin-bottom: 10px;
    margin-top: 5px;
  }

  button {
    width: 290px;
    height: 40px;
    border: 1px solid grey;
    background-color: #5b7fa6;
    color: white;
    text-align: center;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    cursor: pointer;
  }
`;
