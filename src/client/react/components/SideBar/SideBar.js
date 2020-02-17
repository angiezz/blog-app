import React, { PureComponent, Suspense } from 'react';
// import { GithubIcon } from '../../svg/svgIcons';

const logo = '';


export default class SideBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sidebar animated fadeInDown">
        <div className="logo-title">
          <div className="title">
            <img src={logo} className="logo-img" />
            <h3 title="">
              <a href="/">Angie</a>
            </h3>
            <div className="description">
              <p>coding.</p>
            </div>
          </div>
        </div>
        <ul className="social-links">
          <li>
            <a href="https://weibo.com/u/2859002440?nick=%E5%B0%8F%E8%B5%B5Angie">
              <i className="fa fa-weibo" />
              weibo
            </a>
          </li>
          <li>
            <a href="https://github.com/angiezz">
              <i className="fa fa-github" />
              github
            </a>
          </li>
        </ul>
        <div className="footer">
          <div className="by_farbox">
            Copyright © 2019 Angie · 苏ICP备19029468号-1
          </div>
        </div>
      </div>
    );
  }
}
