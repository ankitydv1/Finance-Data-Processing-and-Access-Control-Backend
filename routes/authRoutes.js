/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register user
 *     responses:
 *       200:
 *         description: User created
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     responses:
 *       200:
 *         description: Token returned
 */

const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

router.post('/register', async(req,res)=>{
  const hash = await bcrypt.hash(req.body.password,10);
  const user = await User.create({...req.body,password:hash});
  res.json(user);
});

router.post('/login', async(req,res)=>{
  const user = await User.findOne({email:req.body.email});
  const ok = await bcrypt.compare(req.body.password,user.password);
  if(!ok) return res.status(400).json({msg:"Invalid"});
  const token = jwt.sign({id:user._id,role:user.role}, process.env.JWT_SECRET);
  res.json({token});
});

module.exports = router;
