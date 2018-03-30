import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getNewName = this.getNewName.bind(this);
  }

  componentWillMount() {
    this.getNewName();
  }

  async getNewName() {
    const { data } = await axios.get('/api/name');
    this.setState({ ...data });
  }

  render() {
   return (
      <div>
        { this.state ? `${this.state.firstName} ${this.state.lastName}` : null }
        <button onClick={this.getNewName}>GET IT</button>
      </div>
   );
  }
}

export default App;
