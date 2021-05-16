$(document).ready(function () {
  console.log('Se ejecuta 1');

  const amenitiesList = [];

  $("input[type=checkbox]").change(function() {

    console.log("check")
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
const url = 'http://0.0.0.0:5001/api/v1/status/';
$.getJSON(url, function (data) {
  console.log('si entro', data, data.status);
  if (data.status === 'OK') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});
