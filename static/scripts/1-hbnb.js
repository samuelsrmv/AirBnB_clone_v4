document.addEventListener("DOMContentLoaded", myCode(), false);

function myCode() {

    let amenitiesList = [];

    $("input[name=checkbox]").change(function() {

        let dataId = $(this).atrr("data-id");
        if ($(this).is(":checked")) {
            amenitiesList.push(dataId);
        }
        else if ($(this).is(":unchecked")) {
            let myIndex = amenitiesList.indexOf(dataId);
            amenitiesList.splice(myIndex, dataId);
        }
        console.log(amenitiesList)
    });

    $("#id-h4").text(amenitiesList);
}
