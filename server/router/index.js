const { detailsCtrl } = require('../controllers/postgres/detailsCtrl');
const { hoursCtrl } = require('../controllers/postgres/hoursCtrl');
const { miscCtrl } = require('../controllers/postgres/miscCtrl');
const { resCtrl } = require('../controllers/postgres/resCtrl');
const router = require('express').Router();

router.route('/details')
  .get(detailsCtrl.get)
  .post(detailsCtrl.post)
  .put(detailsCtrl.put)
  .delete(detailsCtrl.delete);

router.route('/hours')
  .get(hoursCtrl.get)
  .post(hoursCtrl.post)
  .put(hoursCtrl.put)
  .delete(hoursCtrl.delete);

router.route('/misc')
  .get(miscCtrl.get)
  .post(miscCtrl.post)
  .put(miscCtrl.put)
  .delete(miscCtrl.delete);

// router.route('/restaurants')
//   .get(resCtrl.get)
//   .post(resCtrl.post);

module.exports.router = router;
