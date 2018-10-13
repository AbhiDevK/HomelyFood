import React from "react";

class AddFishForm extends React.Component {
  //create all the refs
  nameref = React.createRef();
  priceref = React.createRef();
  statusref = React.createRef();
  descref = React.createRef();
  imageref = React.createRef();

  createFood = e => {
    //1. Prevent the form from submit
    e.preventDefault();
    //2. Create a Food Object
    const food = {
      name: this.nameref.value.value,
      price: parseFloat(this.priceref.value.value),
      status: this.statusref.value.value,
      desc: this.descref.value.value,
      image: this.imageref.value.value
    };
    this.props.addFood(food);
    // Refresh the form
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFood}>
        <input name="name" ref={this.nameref} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceref}
          type="text"
          placeholder="Price"
        />
        <select
          name="status"
          ref={this.statusref}
          type="text"
          placeholder="Status"
        >
          <option value="avialable">Fresh!</option>
          <option value="unavialable">Sold Out</option>
        </select>
        <textarea placeholder="Desc" ref={this.descref} />
        <input
          name="image"
          ref={this.imageref}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ ADD FOOD</button>
      </form>
    );
  }
}
export default AddFishForm;
