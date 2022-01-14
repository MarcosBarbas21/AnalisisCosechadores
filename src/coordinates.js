const fs = require('fs');
const getCoordinates = (where , to ) => {
  const data = JSON.parse(fs.readFileSync(where));
  const featuresLength = data['features'].length;
  let coordinates = data['features'][featuresLength-1]['geometry']['coordinates'];
  for (let i = 0; i < coordinates.length; i++){
    coordinates[i].pop([2]);
  }
  let data2 = JSON.stringify(coordinates);
  fs.writeFileSync(to,data2);
};
module.exports = getCoordinates;