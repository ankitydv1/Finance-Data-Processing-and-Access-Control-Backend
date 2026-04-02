
const Record = require('../models/Record');

exports.getRecords = async (req,res)=>{
  const {page=1,limit=10,type,category,search} = req.query;
  const q = { isDeleted:false };

  if(type) q.type = type;
  if(category) q.category = category;
  if(search) q.category = { $regex: search, $options: 'i' };

  const data = await Record.find(q)
    .skip((page-1)*limit)
    .limit(parseInt(limit));

  res.json(data);
};

exports.create = async (req,res)=>{
  if(req.body.amount <= 0){
    return res.status(400).json({msg:"Invalid amount"});
  }
  res.json(await Record.create(req.body));
};

exports.delete = async (req,res)=>{
  await Record.findByIdAndUpdate(req.params.id,{isDeleted:true});
  res.json({msg:"Soft deleted"});
};
