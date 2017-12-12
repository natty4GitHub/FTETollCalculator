function loadRegion(getRegionsUrl){
//var getRegions = "http://192.168.1.141:9991/regions"
console.log(getRegionsUrl);
let regionData = this;
 axios.get(getRegionsUrl)
      .then(function(response){
        if(response.status == 200){
            this.someData = response.data.content;
        }
      }.bind(this))
      .catch(function(error){
        console.log(error);
      });
      console.log("-- scopeTesting --");
      console.log(this.someData);
       regionData = this.someData;
      //  console.log(regionData.someData);
    //console.log(regionData);
    return regionData;
  }
