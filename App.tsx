import { JSX, useState } from "react";
import "./App.css";

function App() {
  let [use, setUser] = useState(["kim"]);

  return (
    <div>
      <h4>안녕하십니까</h4>
      <Profile name="철수" age="20"></Profile>
    </div>
  );
}
function Profile(props: { name: string; age: string }): JSX.Element {
  return <div>프로필입니다</div>;
}
export default App;
