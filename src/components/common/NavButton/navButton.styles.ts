import styled from '@emotion/styled';

type ButtonProps = {
  variant: string;
  size?: string;
}

export const StyledLink = styled.a<ButtonProps>`
  border-radius: 6px;
  color: white;
  padding: 13px 55px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  margin: 2px 20px;
  transition-duration: 0.4s;
  cursor: pointer;
  width: 100px;
  box-shadow: 4px 4px 10px 1px black;
  background-image: ${(props) => (props.variant === 'default' ? 'linear-gradient(#4d4d4d, #5e5e5e)' : 'none' )};
  border: 1px solid #FFFFFF;
  &: hover {
    color: #c018d6;
    border-radius: 10px;
    border: 1px solid #c018d6;
  }
`;