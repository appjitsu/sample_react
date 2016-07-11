import React from 'react';
import WebNav from './WebNav.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <WebNav/>

        <div className="container">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
