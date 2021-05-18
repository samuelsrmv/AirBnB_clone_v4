$(document).ready(function(){

  let amenitiesList = [];

  $("input[type=checkbox]").change(function() {

    let dataId = $(this).attr("data-id");
    let dataName = $(this).attr("data-name");
    console.log(dataId);
    if ($(this).is(":checked")) {
        amenitiesList[dataId] = dataName;
    }
    else {
        delete amenitiesList[dataId];
    }

    $(".amenities > h4").text(Object.values(amenitiesList).join(", "));
  });
});
const url = "http://localhost:5001/api/v1/status/";
$.getJSON(url, function(data){

  if (data.status === 'OK') {
      $("#api_status").addClass("available");
  } else {
      $("#api_status").removeClass("available");
  }
});

$.ajax({
  url: "http://localhost:5001/api/v1/places_search/",
  type:"post",
  data: "{}",
  contentType: "application/json",
  success: function(result){
    for (inner of result) {
      console.log("this is my result: ", result);
      console.log("this is each inner: ", inner);
      $('section.places').append(`
      <article>
	  <div class="title_box">
	    <h2> ${inner.name} </h2>
	    <div class="price_by_night">${inner.price_by_night}</div>
	  </div>
	  <div class="information">
	    <div class="max_guest">${inner.max_guest} Guest` + (inner.max_guest !== 1 ? "s" : "") + `</div>
            <div class="number_rooms">${inner.number_rooms} Bedroom` + (inner.number_rooms !== 1 ? "s" : "") + `</div>
            <div class="number_bathrooms">${inner.number_bathrooms} Bathroom` + (inner.number_bathrooms !== 1 ? "s" : "") + `</div>
	  </div>
	  <div class="user">
            <b>Owner:</b>
          </div>
          <div class="description">`)
    }
  }
});


