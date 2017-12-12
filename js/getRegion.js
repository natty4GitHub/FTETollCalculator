function getRegion(getRegionsUrl){
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
      console.log("-- scope-Region-Testing --");
      console.log(this.someData);
       regionData = this.someData;
    return regionData;
  }
