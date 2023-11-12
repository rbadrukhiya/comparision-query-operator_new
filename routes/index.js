var express = require('express');
var router = express.Router();  
var user = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/adddata',async function(req, res, next) {
  try{
          var data = await user.create(req.body)
          res.status(201).json({
            status:'success',
            data
          })
  }
  catch(err)
  {
    res.status(401).json({
      status:'alert'
    })
  }
});

router.get('/getdata',async function(req, res, next) {
  try{
          // var data = await user.find()
          var data = await user.find({city:{$eq:'surat'}})
          // var data = await user.find({city:'surat'})
          // var data = await user.find({products:{$gt:20}})
          // var data = await user.find({products:{$gte:20}})
          // var data = await user.find({products:{$lt:20}})
          // var data = await user.find({products:{$lte:20}})
          // var data = await user.find({city:{$ne:'surat'}})
          // var data = await user.find({products:{$nin:[ 12, 18,20 ]}})
          // var data = await user.find({city:'surat',name:'abc'})
          // var data = await user.find({products:{$exists:true}})
          // var data = await user.find({products:{$exists:false}})
          // var data = await user.find({city : {$regex : /^s/} })
          // var data = await user.find({$and:[{city:'gandhinagar'},{products:{$lt:20}}]})
          // var data = await user.find({$or:[{city:'gandhinagar'},{products:{$eq:20}}]})
          // var data = await user.find({'products':{$not:{$eq:52}}})
          // var data = await user.find({$nor:[{'products':{$eq:52}},{"city":'gandhinagar'}]})
          // var data = await user.find({products:({$gt:20})}).count()
          // var data = await user.find({products:({$gt:1})}).sort({products:1})
          // var data = await user.find({products:({$gt:1})}).sort({products:-1})
          // var data = await user.find().limit(4)
          // var data = await user.find().limit(4).skip(2)



    // projection   

    // var data = await user.find({},{products:1})
    // var data = await user.find({},{products:1 , _id:0})

          console.log(data);
          res.status(201).json({
            status:'success',
            data
          })
  } 
  catch(err)
  {
    res.status(401).json({
      status:'alert',
      err
    })
  }
});

//  agreation 
router.get('/get',async function(req, res, next) {
  try{

      // var data = await user.count({city : 'surat'})
      // var data = await user.count({city : 'gandhinagar'})
      
          res.status(201).json({
            status:'success',
            data
          })
  } 
  catch(err)
  {
    res.status(401).json({
      status:'alert',
      err
    })
  }
});



module.exports = router;
