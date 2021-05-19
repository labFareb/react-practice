import React from "react";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // The use of refs is now opinionatedly restricted to a few situations
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    console.log("Going to Store");
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`)
  }

  doNothing() {

  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          onChange={this.doNothing}
          value={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
