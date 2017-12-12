function getQualifiedExitsForSourceRegionalFacilityExit(regionName, facilityName, exitName, getQualifiedExitUrl){
console.log(regionName);
console.log(facilityName);
console.log(exitName);
console.log(getQualifiedExitUrl);
var data = {
  	"region" : regionName,
  	"facility" : facilityName,
    "exit" : exitName
};
console.log(data);

let desExits = this;
 axios.post(getQualifiedExitUrl,data)
      .then(function (response) {
          console.log(response);
          if(response.status == 200){
              this.desExitData = response.data.content;
      //console.log(regionData);
    //  this.setState({ someKey: respose.data.content });
    }
  }.bind(this))
  .catch(function (error) {
    console.log(error);
  });
      console.log("-- Qualified Exits scopeTesting --");
      console.log(this.desExitData);
       desExits = JSON.parse(this.desExitData);
     console.log(desExits);
    return desExits;
  }
