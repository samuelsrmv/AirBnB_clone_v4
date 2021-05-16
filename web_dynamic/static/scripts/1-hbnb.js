$(document).ready(function(){

    console.log("Se ejecuta 1");

    let amenitiesList = {};

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
