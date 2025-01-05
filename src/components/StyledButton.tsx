import styled from 'styled-components';

/**
 * A styled button component with dynamic color.
 */
const StyledButton = styled.button<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? 'blue' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  border: 2px solid blue;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? 'darkblue' : 'lightgray')};
  }
`;

export default StyledButton;
