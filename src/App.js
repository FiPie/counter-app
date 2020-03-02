import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  /*Here we also have App's component local state 
  which is completely invisible to other components */
  state = {
    counters: [
      { id: 1, value: 0, imgUrl: "" },
      { id: 2, value: 1, imgUrl: "" },
      { id: 3, value: 0, imgUrl: "" },
      { id: 4, value: 0, imgUrl: "" },
      { id: 5, value: 0, imgUrl: "" },
      { id: 6, value: 0, imgUrl: "" }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
    this.state.counters.map(c => {
      /*TODO: fix? I know the ids might repeat here but it's only a demo so chillax*/
      c.id = Math.floor(Math.random() * (+1084 - 1)) + 1;
      c.imgUrl = "https://picsum.photos/id/" + c.id + "/40/40";
      return c;
    });
    /*We asign below imgUrls to each counter from photostock 
    picsum, accordingly to seed on counter.id */
  }
  componentDidMount() {
    //Ajax Call
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    console.log("handleIncrement called");

    /*using the spread operator ... we're cloning the existing counter array */
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  getImages = () => {
    console.log("getImages called");
    const counters = this.state.counters.map(c => {
      c.imgUrl = "https://picsum.photos/30";
      return c;
    });
    this.setState({ counters: counters });
  };

  /*Since the state of id is in this component, the handling
   of the onDelete event rised from Counter component happens 
   here*/
  handleDelete = counterId => {
    // console.log("onDelete Event Handler Called", counterId);
    /*We create a new array with counter and filter away the one
     with id matching the one to be deleted */
    const counters = this.state.counters.filter(c => c.id !== counterId);
    /*We set the state.counters array with our modified array 
    effectively overwriting it*/
    this.setState({ counters: counters });
  };
  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
