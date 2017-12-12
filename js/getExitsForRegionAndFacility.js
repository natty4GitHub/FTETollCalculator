function getExitsForRegionAndFacility(regionName, facilityName, getExitUrl){
console.log(regionName);
console.log(facilityName);
console.log(getExitUrl);
var data = {
  	"region" : regionName,
  	"facility" : facilityName
};
console.log(data);

let exits = this;
 axios.post(getExitUrl,data)
      .then(function (response) {
          console.log(response);
          if(response.status == 200){
              this.exitData = response.data.content;
      //console.log(regionData);
    //  this.setState({ someKey: respose.data.content });
    }
  }.bind(this))
  .catch(function (error) {
    console.log(error);
  });
      console.log("-- scopeTesting --");
      console.log(this.exitData);
       exits = JSON.parse(this.exitData);
     console.log(exits);
    return exits;
  }
