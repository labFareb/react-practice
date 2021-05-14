import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weirdCount: 0,
      followCount: 0,
      approveCount: 0,
    };
  }

  render() {
    return (
      <div class="card">
        {/* Add a background image */}
        <h2>{this.props.title}</h2>
        <p>Image Courtesy - {this.props.imageProvider}</p>
        <p>{this.props.cardDetails || "Default text that will appear when there is no props for this card"}</p>
        <div className="actions">
          <button onClick={this.handleApprove}>👍</button>
          <p id="approveCount">{this.state.approveCount}</p>
          <button onClick={this.handleWeird}>👽</button>
          <p id="weirdCount">{this.state.weirdCount}</p>
          <button onClick={this.handleFollow}>Follow</button>
          <p id="followCount">{this.state.followCount}</p>
        </div>
      </div>
    );
  }

  handleApprove = () => {
    this.setState({
      approveCount: this.state.approveCount + 1,
    });
  };

  handleWeird = () => {
    this.setState({
      weirdCount: this.state.weirdCount + 1,
    });
  };

  handleFollow = () => {
    this.setState({
      followCount: this.state.followCount + 1,
    });
  };
}

export default Card;
