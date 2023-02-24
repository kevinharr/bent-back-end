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

  const index = async (req, res) => {
    try {
      const bents = await Bent.findAll()
      res.status(200).json (bents)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  const update = async (req, res) => {
    try {
      const bent = await Bent.findByPk(req.params.id)
        bent.set(req.body)
        await bent.save()
      
      res.status(200).json(bent)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  const deleteBent = async (req, res) => {
    try {
      const bent = await Bent.findByPk(req.params.id)
      await bent.destroy()
      res.status(200).json(bent)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  

  module.exports = {
    createBent,
    index,
    update,
    delete: deleteBent
  }