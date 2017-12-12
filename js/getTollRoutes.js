function getTollRoutes(startRegionName,
  startFacilityName,
  startExitName,
  endRegionName,
  endFacilityName,
  endExitName,
  axleCount,
  getTollRoutesUrl){
console.log(startRegionName);
console.log(startFacilityName);
console.log(startExitName);
console.log(endRegionName);
console.log(endFacilityName);
console.log(endExitName);
console.log(axleCount);
console.log(getTollRoutesUrl);
var data = {
  "source" :{
"region" : startRegionName,
"facility" : startFacilityName,
"exit" : startExitName
},

"destination" :{
  "region" : endRegionName,
  "facility" : endFacilityName,
  "exit" : endExitName
},

"axlecount" : axleCount
};
console.log(data);

let tollRoutesData = this;
 axios.post(getTollRoutesUrl,data)
      .then(function (response) {
          console.log(response);
          if(response.status == 200){
              this.tollRoutesData = response.data.content;
      //console.log(regionData);
    //  this.setState({ someKey: respose.data.content });
    }
  }.bind(this))
  .catch(function (error) {
    console.log(error);
  });
      console.log("-- Qualified Exits scopeTesting --");
      console.log(this.tollRoutesData);
       tollRoutesData = JSON.parse(this.tollRoutesData);
     console.log(tollRoutesData);
    return tollRoutesData;
  }
