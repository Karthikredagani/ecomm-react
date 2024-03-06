import React from 'react'

export default function App1(props) {
    App1.defaultPnrops = {name: "cathy", age: 20};
  return (
    <div>Hello{props.name},you are{props.age}</div>
  );
}
