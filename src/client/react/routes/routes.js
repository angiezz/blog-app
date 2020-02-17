import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';

import HomePage from '../pages/home-page/index';
import AboutPage from '../pages/about-page/index';
import ArchivesPage from '../pages/archives-page/index';
import LinksPage from '../pages/links-page/index';
import PostPage from '../pages/post-page/index';

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/archives" component={ArchivesPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/links" component={LinksPage} />
    <Route path="/post/:id" component={PostPage} />
  </Route>
);

export default routes;
