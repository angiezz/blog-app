import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

import { imageRequire } from '../../utils/universalRequire';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';

import { GithubIcon } from './svg/svgIcons';
import '../../utils/ajax';


export default class App extends Component {

  render() {
    return (
      <div>
        <SideBar />
        <div className="main">
          <Header />
          <div className="autopagerize_page_element" >
            <div className="content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};
