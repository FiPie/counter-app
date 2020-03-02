import React, { Component } from "react";

class Counter extends Component {
  /*Props include data that we give to the component, whereas
  State inlcudes data that is local or private to that component
  so that other components cannot access that state 
  */
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      /*based on the changes in prevProps or prevState we may 
      want to issue an Ajax call to get new data from the server
      */
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmounted");
  }

  render() {
    /*Every React component has a property called props which is 
    a plain JS object that icludes all the attributes that we set*/
    // console.log("props", this.props);
    console.log("Counter - Rendered");

    return (
      <React.Fragment>
        <h4>{this.props.id}</h4>
        <img
          src={this.props.counter.imgUrl}
          alt={"id:" + this.props.counter.id}
        />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() =>
            this.props.onDelete(this.props.counter.id)
          } /*Counter component is rising the event to its parent components */
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  // getImgUrl = () => {
  //   const imgUrl = "https://picsum.photos/30";
  //   this.setState({ imgUrl: imgUrl });
  // };

  getBadgeClasses() {
    /*Changes badge bootstrap class and hence its colour */
    let classes = "badge m-2 badge-";
    /*Depending on the count state value classes is appended accordingly */
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    /*Object destructuring of this.state to pick the count property from state*/
    const { value: count } = this.props.counter;
    /*Depending on count the value displayed on the button is updated */
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
