import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';

@inject('PostStore')
@observer
class Post extends Component {
  componentWillMount() {
    const { id } = this.props.params;
    this.props.PostStore.getBlogDetail(id);
  }
  render() {
    const blogDetail = toJS(this.props.PostStore.blogDetail);

    return (
      <div>
        <div className="post-page">
          <div className="post animated fadeInDown">
            <div className="post-title">
              <h3>
                <a>{blogDetail.title}</a>
              </h3>
            </div>
            <div className="post-content">{blogDetail.content}</div>
            <div className="post-footer">
              <div className="meta">
                <div className="info">
                  <i className="fa fa-sun-o" />
                  <span className="date">{blogDetail.updated_at}</span>
                  <i className="fa fa-comment-o" />
                  <a href="/post/2015-05-22#disqus_thread">Comments</a>
                  <i className="fa fa-tag" />
                  <a href="/tags/App" className="tag">
                    &nbsp;{blogDetail.tags}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="share">
            <div className="weibo">
              <a href="javascript:void((function(s,d,e){try{}catch(e){}var f='http://service.weibo.com/share/share.php?',u=d.location.href,p=['url=',e(u),'&amp;title=',e(d.title),'&amp;appkey=2924220432'].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=620,height=450,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent)){setTimeout(a,0)}else{a()}})(screen,document,encodeURIComponent));"
                className="fa fa-weibo"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.wrappedComponent.propTypes = {
  PostStore: PropTypes.object.isRequired,
};

export default Post;
