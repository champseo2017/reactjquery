import React, { Component } from 'react';

import Menu from './Menu';
import Content from './Content';
export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Content />
      </div>
    );
  }
}
