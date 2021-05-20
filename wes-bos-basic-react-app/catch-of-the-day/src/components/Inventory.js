import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
// import Login from "./Login";

class Inventory extends React.Component {

  // authenticate = provider => {
  //   alert(provider);
  // }

  render() {
    // return <Login authenticate = {this.authenticate}/>;
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map((key) => {
          return (
            <EditFishForm
              key={key}
              index={key}
              fish={this.props.fishes[key]}
              updateFish={this.props.updateFish}
              deleteFish={this.props.deleteFish}
            />
          );
        })}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;