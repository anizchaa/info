import React from "react";
import Card from "./components/Card";
import CardList from "./components/CardList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/users?fbclid=IwAR3NqQybTN8XGhIvKceDoJ4iNsuq9FAtm11cVpgKJPbhtUYhS_ogQpsdYEY"
    )
      .then((response) => response.json())
      .then((user) => this.setState({ users: user }));
  }
  render() {
    return <CardList datas={this.state.users} />;
  }
}
export default App;
