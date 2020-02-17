import React, { Component } from "react";
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import { Link } from 'react-router';

@inject("ArchivesStore")
@observer
class Archives extends Component {
  componentWillMount() {
    this.props.ArchivesStore.getArchivesList();
  }

  renderArchivesList(item) {
    const archiveList = item.rows || [];
    return (
      archiveList.map((rowitem) => {
        return (
          <ul className="listing">
            <div className="listing-item">
              <div className="listing-post">
                <Link to={`/post/${rowitem.id}`} >{rowitem.title}</Link>
                <div className="post-time"><span className="date">{rowitem.created_at}</span> </div>
              </div>
            </div>
          </ul>
        );
      })
    );
  }

  render() {
    const archivesList = toJS(this.props.ArchivesStore.archivesList);
    return (
      <span className="archive animated fadeInDown">
        <ul className="list-with-title">
          <div className="listing-title">2019</div>
          {
            archivesList.map((item) => {
              return this.renderArchivesList(item);
            })
          }
        </ul>
      </span>
    );
  }
}

Archives.wrappedComponent.propTypes = {
  ArchivesStore: PropTypes.object.isRequired,
};

export default Archives;
