import Mock from 'mockjs';

export const getList = () => {
  return new Promise(resolve => {
    resolve(Mock.mock({
      'list|10-20': [{
        'id': '@id',
        'name': '@cname'
      }]
    }));
  });
};
