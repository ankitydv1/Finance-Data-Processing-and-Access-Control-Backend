/**
 * @swagger
 * /dashboard/summary:
 *   get:
 *     summary: Get dashboard summary
 *     responses:
 *       200:
 *         description: Summary data
 */
const router = require('express').Router();
const auth = require('../middleware/auth');
const ctrl = require('../controllers/dashboardController');

router.get('/summary', auth, ctrl.summary);

module.exports = router;
