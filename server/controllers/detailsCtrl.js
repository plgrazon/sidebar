const { Detail } = require('../../db/models');

const detailsCtrl = {
  get: (req, res) => {
    Detail.findAll({ where: {
      rid: req.query.rid
    }})
      .then(data => {
  //     console.log('get details ', data);
        res.status(200).send(data);
      })
      .catch(err => {
        console.log('failed get details ', err);
        res.status(404).send(err);
      })
  },
  // I added the every request below
  post: (req, res) => {
    Detail.create(req.body)
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => {
        console.log('failed to post details ', err);
        res.status(404).send(err);
      })
  },
  put: (req, res) => {
    Details.findOne()
  }
}

module.exports.detailsCtrl = detailsCtrl;
