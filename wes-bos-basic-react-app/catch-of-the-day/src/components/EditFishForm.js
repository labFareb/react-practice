import React from "react";

class EditFishForm extends React.Component {
  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    console.log(updatedFish);
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input type="text" onChange={this.handleChange} name="name" value = {this.props.fish.name} />
        <input type="text" onChange={this.handleChange} name="price" value = {this.props.fish.price} />
        <select type="text" onChange={this.handleChange} name="status" value = {this.props.fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" onChange={this.handleChange} name="desc" value = {this.props.fish.desc} />
        <input type="text" onChange={this.handleChange} name="image" value = {this.props.fish.image} />
        <button
          onClick={() => {
            this.props.deleteFish(this.props.index);
            console.log("Removed Fish");
          }}
        >
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
