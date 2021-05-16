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

    const myRequest = new Request("http://0.0.0.0:5001/api/v1/status/");
    console.log("Este es mi request:", myRequest);
});
