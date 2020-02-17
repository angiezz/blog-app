/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { PureComponent, Suspense } from 'react';
import { Link, IndexLink } from 'react-router';

import { imageRequire } from '../../../../utils/universalRequire';
const logo = imageRequire('logo.png');
// const universalRequire = require('path').resolve(__dirname, '/src/utils/universalRequire');


export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.logo = logo;
  }
  componentDidMount() {
    console.log('universalRequire =====', imageRequire);
    // console.log('imageRequire ====', imageRequire('/src/images/logo.png'));
  }
  goBack () {
    window.history.go(-1);
  }

  render () {
    return (
      <div className="page-top animated fadeInDown">
        <div className="nav">
          <li>
            <IndexLink to="/" activeClassName="current">首页</IndexLink>
          </li>
          <li>
            <Link to="/about" activeClassName="current">关于</Link>
          </li>
          <li>
            <Link to="/archives" activeClassName="current">归档</Link>
          </li>
          <li>
            <Link to="/links" activeClassName="current">友链</Link>
          </li>
        </div>
        <div className="information">
          <div className="back_btn">
            <li>
              <a onClick={this.goBack.bind(this)} className="fa fa-chevron-left" />
            </li>
          </div>
          <div className="avatar"><img src={this.logo} /></div>
        </div>
      </div>
    );
  }
}
