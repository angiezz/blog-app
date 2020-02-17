import ajax from '../../utils/ajax';

export function getBlogList({ offset, limit, tags, catalog_id, order }) {
  return ajax({
    method: 'GET',
    url: '/api/blog',
    data: {
      offset,
      limit,
      tags,
      catalog_id,
      order,
    },
  }).then((res) => {
    return res;
  }, (errMsg) => {
    console.log('err===', errMsg);
  });
}

export function getBlogDetail(id) {
  return ajax({
    method: 'GET',
    url: `/api/blog/${id}`,
  }).then((res) => {
    return res;
  });
}

export function getArchives({ year }) {
  return ajax({
    method: 'GET',
    url: `/api/archive/${year}`,
  }).then((res) => {
    return res;
  }, (errMsg) => {
    console.log('err===', errMsg);
  });
}

