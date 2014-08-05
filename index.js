var async = require('async')
var google_geocoding = require('google-geocoding');
var timezoner = require('timezoner');

module.exports = function isuckattimezones(args, callback) {
  var localTime = new Date()
  var places

  if (args[0].indexOf(':') !== -1) {
    var t = args[0].split(':')
    localTime.setHours(t[0])
    localTime.setMinutes(t[1])
    places = args.slice(1)
  }
  else {
    places = args
  }

  var localTimezone = localTime.toString().split(' ')[6].replace(/[()]/g, '')

  var times = { local : formatTime(localTime) + ' ' + localTimezone }

  async.eachSeries(places, getTime, done)

  function done(err) {
    if (err) { throw err }
    callback(times)
  }

  function getTime(place, callback) {
    google_geocoding.geocode(place, gotLocation)
    function gotLocation(err, location) {
      if (err) { return callback(err) }
      timezoner.getTimeZone(location.lat, location.lng, gotTimezone)
    }
    function gotTimezone(err, timezone) {
      if (err) { return callback(err) }
      var remoteTimezone = ''
      timezone.timeZoneName.split(' ').forEach(function(word) {
        remoteTimezone += word[0]
      })
      var remoteTime = new Date(localTime)
      remoteTime.setSeconds(localTime.getSeconds() + timezone.rawOffset)
      times[place] = formatTime(remoteTime) + ' ' + remoteTimezone
      callback()
    }
  }
}

function formatTime(time) {
  var day = time.getDate()
  var hours = ('0' + time.getHours()).slice(-2)
  var minutes = ('0' + time.getMinutes()).slice(-2)
  return 'D' + day + 'T' + hours + ':' + minutes
}
