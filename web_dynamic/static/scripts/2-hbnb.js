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


    $.get("http://0.0.0.0:5001/api/v1/status/", function(data){
        console.log(data, data.body, data.status);
        if (data === 200) {
            $("#api_status").addClass("available");
        } else {
            $("#api_status").removeClass("available");
        }
    });
});
