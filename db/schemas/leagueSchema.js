const Schema = require('mongoose').Schema
const teamSchema = require('./teamSchema')

const leagueSchema = new Schema({
  name: String,
  location: String,
  sport: String,
  logourl: String,
  adult: String,
  numOfDivisions: Number,
  teams:[teamSchema]
})

module.exports = leagueSchema