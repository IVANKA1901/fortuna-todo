import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 100px;
  gap: 50px;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 17px;
  text-align: center;
  padding: 15px;
  outline: none;
  border: double 0;
  background: #252525;
  border-radius: 67px;
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  background: linear-gradient(
    330.28deg,
    #2cfff2 100%,
    #2cfff2 100%,
    #2cfff2 100%
  );
  color: #2cfff2;
  &::placeholder {
    color: #2cfff2;
    opacity: 0.6;
  }
  &:focus-within {
    background: linear-gradient(
      330.28deg,
      #2cfff2 0%,
      #1e78ff 30.73%,
      #ff54a6 55.73%,
      #ff6e1d 79.17%,
      #ff3e3e 100%
    );
  }
  &:hover {
    background: linear-gradient(
      330.28deg,
      #2cfff2 0%,
      #1e78ff 30.73%,
      #ff54a6 55.73%,
      #ff6e1d 79.17%,
      #ff3e3e 100%
    );
  }
`;

export const AddButton = styled.button`
  background-color: rgb(82 163 112);
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0px -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0px 1px 2px, rgba(44, 187, 99, 0.15) 0px 2px 4px,
    rgba(44, 187, 99, 0.15) 0px 4px 8px, rgba(44, 187, 99, 0.15) 0px 8px 16px,
    rgba(44, 187, 99, 0.15) 0px 16px 32px;
  /* color: green; */
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 35px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms ease 0s;
  border: 0px;
  font-weight: 600;
  font-size: 16px;
  user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;
