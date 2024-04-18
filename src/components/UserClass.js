import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Construcfttor");
  }
  componentDidMount() {
    console.log("YESSSS");
  }

  render() {
    console.log("REN DER");
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>
          count:{this.state.count}
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            increaseCount
          </button>
        </h2>
        <h2>Name: {name}</h2>
        <h2>Contact: pranayrohith@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
