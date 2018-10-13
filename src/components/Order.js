import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const food = this.props.foods[key];
    const count = this.props.order[key];
    const isAvailable = food.status === "available";
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {food ? food.name : "food"} is no longer available
        </li>
      );
    }
    return (
      <li key={key}>
        {count}
        lbs {food.name}
        {formatPrice(count * food.price)}
      </li>
    );
  };
  render() {
    const orderId = Object.keys(this.props.order);
    const total = orderId.reduce((prevTotal, key) => {
      const food = this.props.foods[key];
      const count = this.props.order[key];
      const isAvailable = food && food.status === "available";
      if (isAvailable) {
        return prevTotal + count * food.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderId.map(this.renderOrder)}</ul>
        <div className="total" />
        <div className="total">
          <strong>
            Total:
            {formatPrice(total)}
          </strong>
        </div>
      </div>
    );
  }
}
export default Order;
