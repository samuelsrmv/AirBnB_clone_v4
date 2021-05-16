$(document).ready(function(){

  console.log("Se ejecuta 1");

  let amenitiesList = [];

  $("input[type=checkbox]").change(function() {

      console.log("check")
      let dataId = $(this).attr("data-name");
      console.log(dataId);
      if ($(this).is(":checked")) {
          amenitiesList.push(dataId);
      }
      else {
          let myIndex = amenitiesList.indexOf(dataId);
          amenitiesList.splice(myIndex, 1);
      }

      $(".amenities > h4").text(amenitiesList);
  });
});
const url = "http://0.0.0.0:5001/api/v1/status/";
$.getJSON(url, function(data){
  console.log("si entro", data, data.status);
  if (data.status === 'OK') {
      $("#api_status").addClass("available");
  } else {
      $("#api_status").removeClass("available");
  }
});

$.ajax({url: "http://0.0.0.0:5001/api/v1/places_search/", console.log("aquiiiiii"), success: function(result){
    
    for (stiven of data) {
      $('section.places').append('<article>hola stiven</article>')
      console.log(data)
    }
  }});