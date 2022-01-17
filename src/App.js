import "./App.css";
import { FirstNameInputField } from "./stories/InputField.stories";
import { LastNameInputField } from "./stories/InputField.stories";
import { LoginButton } from "./stories/Button.stories";
import { Large } from "./stories/Button.stories";

const App = () => {
  return (
    <div className='App'>
      <LoginButton {...LoginButton.args} />
      <Large {...Large.args} />
    </div>
  );
}

export default App;
