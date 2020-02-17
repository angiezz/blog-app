import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class BlogList extends PureComponent {
  transformTime (timestamp = +new Date()) {
    if (timestamp) {
      var time = new Date(timestamp);
      var y = time.getFullYear(); //getFullYear方法以四位数字返回年份
      var M = time.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
      var d = time.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
      var h = time.getHours(); // getHours方法返回 Date 对象的小时 (0 ~ 23)
      var m = time.getMinutes(); // getMinutes方法返回 Date 对象的分钟 (0 ~ 59)
      var s = time.getSeconds(); // getSeconds方法返回 Date 对象的秒数 (0 ~ 59)
      return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
    } else {
      return '';
    }
  }

  render () {
    const { blogList } = this.props;
    console.log('blogList===>', blogList)
    return (
      <div>
        {
          blogList.map((item, index) => (
            <div className="post animated fadeInDown" key={index}>
              <div className="post-title">
                <h3>
                  <Link to={`/post/${item.id}`} >{item.title}</Link>
                </h3>
              </div>
              <div className="post-content">
                <div className="p_part"><p>{item.content}</p></div>
              </div>
              <div className="post-footer">
                <div className="meta">
                  <div className="info">
                    <i className="fa fa-sun-o" />
                    <span className="date">{this.transformTime(item.created_at)}</span>
                    <i className="fa fa-comment-o" />
                    <a href="">{item.tags}</a>
                    <i className="fa fa-tag" />
                    <a href="/tags/App" className="tag">&nbsp;js</a>
                    <a href="/tags/Evernote" className="tag">&nbsp;react</a>
                    <a href="/tags/Mac" className="tag">&nbsp;node</a>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>);
  }
}
