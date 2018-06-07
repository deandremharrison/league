const Schema = require('mongoose').Schema
const teamSchema = require('./teamSchema')

const leagueSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: String,
  sport: String,
  adult: Boolean,
  numOfDivisions: Number,
  teams: [ teamSchema ]
})

module.exports = leagueSchema