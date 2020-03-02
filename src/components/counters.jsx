import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  /*A component without its own state is called 'Controlled Component'
  and it recieves all its data from it parent component through 
  props and rises all its event to a parent component that controlls it 
  */
  render() {
    console.log("Counters - Rendered");

    /*Object Deconstructuring - to pick the properties of the props object we're interested in*/
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          /*These attributes are part of the props */
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            /*we can pass the whole counter object with its properties */
          />
        ))}
      </div>
    );
  }
}

export default Counters;
