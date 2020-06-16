const router = require('express').Router();
const db = require('../models');


router.get('/workouts', async (req,res)=>{
    const data = await db.find();
    res.json(data)
});

router.put('/workouts/:id', async (req,res)=>{
    const data = await db.findByIdAndUpdate(req.params.id, {$push:{exercises: req.body}})
    res.json(data)
});

router.post('/workouts', async (req, res)=>{
    const data = await db.create(req.body);
    res.json(data)
})

router.get("/workouts/range", async(req,res)=>{
    const data = await db.find();
    res.json(data)
})

module.exports = router;