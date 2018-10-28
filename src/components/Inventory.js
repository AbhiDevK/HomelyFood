import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="Inventory">
        <h2>Inventory!!!</h2>
        <AddFishForm addFood={this.props.addFood} />
        <button onClick={this.props.loadSampleFoods}>Load Sample Foods</button>
      </div>
    );
  }
}
export default Inventory;
