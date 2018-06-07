const express = require('express')
const router = express.Router({ mergeParams: true })
const League = require('../models/League')
const Team = require('../models/Team')

/* GET listing. */

router.get('/', (req, res, next) => {

  // use homeworkID to find Homework assignment
  League.findById(req.params.leagueId)
    .then((league) => {
      const teams = league.teams
      res.render('team/index', {
        teams
      })
    })

  // take the comments and apply them to a 
  // hbs file
})

// NEW Route
router.get('/new', (req, res) => {
  res.render('team/new', {
    leagueId: req.params.leagueId
  })
})

// CREATE Route
router.post('/', (req, res) => {

  // make comment req.body
  const team = new Team(req.body)

  // get homework assignment by the id
  League.findById(req.params.leagueId)
    .then((showLeague) => {

      // push new comment to comments
      showLeague.teams.push(team)

      // save the homework assignment
      return showLeague.save()
    })
    .then(() => {

      // redirect to comments
      res.redirect(`/League/${req.params.leagueId}/team`)
    })
})

// DELETE Route
router.delete('/:id', (req, res) => {

})

module.exports = router