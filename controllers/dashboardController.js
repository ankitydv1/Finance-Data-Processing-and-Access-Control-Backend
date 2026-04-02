
const Record = require('../models/Record');

exports.summary = async (req,res)=>{
  const records = await Record.find({isDeleted:false});

  let inc=0,exp=0,monthly={};

  records.forEach(r=>{
    const m = new Date(r.date).getMonth();
    if(!monthly[m]) monthly[m]={inc:0,exp:0};

    if(r.type==='income'){
      inc+=r.amount;
      monthly[m].inc+=r.amount;
    } else {
      exp+=r.amount;
      monthly[m].exp+=r.amount;
    }
  });

  res.json({totalIncome:inc,totalExpense:exp,netBalance:inc-exp,monthly});
};
