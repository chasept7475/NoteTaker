var Cloudant = require('cloudant')

var credentials;
// Check if we are in BlueMix or localhost
if(process.env.VCAP_SERVICES) {
  // On BlueMix read connection settings from
  // VCAP_SERVICES environment variable
  var env = JSON.parse(process.env.VCAP_SERVICES);
  credentials = env['cloudantNoSQLDB'][0]['credentials'];
} else {
  // On localhost just hardcode the connection details
  credentials = { "username": "f1e28869-50c1-40af-a8c3-492433c5ebe4-bluemix", "password": "e30b2ac107d4db88451a0dff372f0448c7227c876f2d4415690d4c9340f3d617" }
}