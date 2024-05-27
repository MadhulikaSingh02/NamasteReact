import { useState } from "react";
export default User = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);

  function incrementValue() {
    //Increment Value by 2 to understand update function
    if (count < 10) {
      setCount((count) => count + 1);
      //setCount((counter) => counter + 1);
    } else {
      setCount(3);
    }
  }
  return (
    <div className="user-card">
      <h4>Name:{name}</h4>
      <h4>Location: Kelowna, Canada</h4>
      <h4>Software Developer</h4>
      <h4>Counter {count}</h4>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Increment-{count}
      </button>
    </div>
  );
};
