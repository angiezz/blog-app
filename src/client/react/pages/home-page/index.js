import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import BlogList from './BlogList';

@inject("HomeStore")
@observer
class Home extends Component {

  render() {
    return (
      <div className="home-page">
        <BlogList blogList={this.props.HomeStore.blogList.slice()} />
        {
          this.props.HomeStore.blogList.slice().length >= 3 ? (
            <div className="pagination">
              <ul className="clearfix">
                <li className="next pagbuttons"><a role="navigation" href="/page/2/" className="btn">下一页</a></li>
              </ul>
            </div>
          ) : ''
        }
      </div>
    );
  }
}


Home.wrappedComponent.propTypes = {
  HomeStore: PropTypes.object.isRequired,
};
export default Home;
