import React from 'react';

export default class Test1 extends React.Component {
  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    fetch(`http://localhost:17172/login`,
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(result=> {
      console.log('result:', result.json);
      //this.setState({items:result.json()});
    });
  }
  render() {
    return (
      <div className="col-lg-12 text-center">
        <h1>Test1</h1>
        <p className="lead"></p>

      </div>
    );
  }
}
