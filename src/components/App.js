import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFoods from "../sample-fishes";
import Food from "./Food";
import base from "../base";

class App extends React.Component {
  state = {
    foods: {},
    order: {}
  };
  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.storeId}/foods`, {
      context: this,
      state: "foods"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFood = food => {
    //1. Take a copy of the Existing state
    const foods = { ...this.state.foods };
    //2. Add new food to that Foods
    foods[`food${Date.now()}`] = food;
    //3. Set the new Fishes object to state
    this.setState({ foods });
  };

  loadSampleFoods = () => {
    this.setState({ foods: sampleFoods });
  };

  addToOrder = key => {
    //1. Take a copy of the state
    const order = { ...this.state.order };
    //2. Either add to the Order or update the number in our order
    order[key] = order[key] + 1 || 1;
    //3. Call setState to update our state object
    this.setState({ order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Taste that never fades Away" />
          <ul className="fishes">
            {Object.keys(this.state.foods).map(key => (
              <Food
                details={this.state.foods[key]}
                key={key}
                index={key} //send the key separately to access them in other components
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order foods={this.state.foods} order={this.state.order} />
        <Inventory
          addFood={this.addFood}
          loadSampleFoods={this.loadSampleFoods}
        />
      </div>
    );
  }
}

export default App;
