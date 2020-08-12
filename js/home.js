home = {

  init : function() {
    home.getImages();
  },


  getImages: function() {

    var clientId = "LmZGosL2rcEb6jE3aJPU9DKQO3l7LK38niviI-SMg4s";
    var baseUrl = "https://api.unsplash.com/photos";
    var limit = 10;
    var request = "";
    var xhttp = new XMLHttpRequest();
    var page = parseInt(document.getElementById("btnShowMore").value);

    request = baseUrl + "?client_id="+ clientId + "&page=" + page + "&per_page=" + limit;

    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {     
       var imagesArray = JSON.parse(this.responseText);
       page++;
       home.loadImages(imagesArray, page);
     }

   };
   xhttp.open("GET", request, true);
   xhttp.send();
 },

 loadImages: function(imagesArray, page) {

   var image = "";

   imagesArray.forEach(x => {
    image += '<img src="' + x.urls.small + '">';
    console.log(x.urls.small);
  });

   document.getElementById("grid").innerHTML += image;
   document.getElementById("btnShowMore").value = page;
 }

};