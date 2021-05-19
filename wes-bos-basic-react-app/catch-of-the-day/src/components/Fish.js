import React from "react";
import PropTypes from 'prop-types';
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  static PropTypes = {
    details: PropTypes.shape({
      image: PropTypes.image,
      name: PropTypes.name,
      desc: PropTypes.desc,
      status: PropTypes.status,
      price: PropTypes.price,
    }),
    addToOrder: PropTypes.func
  }
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? "Add to Order" : "Sold Out"}
        </button>
      </li>
    );
  }
}

export default Fish;
