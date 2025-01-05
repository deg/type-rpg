import "./App.css";
import CharacterCreator from "./components/CharacterCreator";
import StyledButton from "./components/StyledButton";

/**
 * The main application component.
 *
 * @returns The root JSX element of the application.
 */
function App() {
  return (
    <div className="App">
      <CharacterCreator />
      <StyledButton primary onClick={() => alert("Primary button clicked!")}>
        Primary Button
      </StyledButton>
      <StyledButton onClick={() => alert("Secondary button clicked!")}>
        Secondary Button
      </StyledButton>
    </div>
  );
}

export default App;
