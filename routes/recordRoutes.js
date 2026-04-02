/**
 * @swagger
 * /records:
 *   get:
 *     summary: Get all records
 *     responses:
 *       200:
 *         description: Success
 */

const router = require('express').Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const ctrl = require('../controllers/recordController');

router.get('/', auth, ctrl.getRecords);
router.post('/', auth, role('admin'), ctrl.create);
router.delete('/:id', auth, role('admin'), ctrl.delete);

module.exports = router;
