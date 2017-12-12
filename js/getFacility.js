
function getFacility(rName, getFacilityUrl){
//var getFacilityUrl = "http://192.168.1.141:9991/facility" ;
/*var data = {
  params:
  {
    regionName:rName
  }
};*/
/*console.log(rName);
console.log(getFacilityurl);*/
var data = "regionName=".concat(rName);
let facilityData = this;
//var someData;
/*$this=$(this);
var xyz = $.post(getFacilityurl,data).done(function(result){
 console.log(result);
   $this.someData = $.parseJSON(result.content);
});*/
 var xyz = axios.post(getFacilityurl,data)
      .then(function (response) {
      // console.log(response);
          if(response.status == 200){
              this.someData = response.data.content;
        console.log(this.someData);
      //  return this.someData;
    //  this.setState({ someKey: respose.data.content });
    }
  }.bind(this))
  .catch(function (error) {
   console.log(error);
});
    /*  console.log("-- scopeTesting --");*/
  //      console.log(xyz);
      //console.log("result: "+ this.someData);
    //  facilityData = JSON.parse(this.someData);


     return this.someData;
  }
