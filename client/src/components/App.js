import React from 'react';

class App extends React.Component {
  async componentWillMount() {
    const { data } = await axios.get('/api/name');
    this.setState({ ...data });
  }

  render() {
   return <div>{ this.state ? `${this.state.firstName} ${this.state.lastName}` : null }</div>;
  }
}

export default App;
