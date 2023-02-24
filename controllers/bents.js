const { Bent } = require('../models')

async function createBent(req, res) {
  try {
    req.body.profileId = req.user.profile.id
    const bent = await Bent.create(req.body)
    res.status(200).json(bent)
    } catch (error) {
    res.status(500).json({ err: error })
    }
  }
  
  module.exports = {
    createBent,
  }