'use strict';
const axios = require('axios')
module.exports.testaxios = async event => {
  const { data } = await axios.get('https://randomuser.me/api/')
  const { results } = data
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Serverless Node modules',
        results
      },
      null,
      2
    ),
  };
};
