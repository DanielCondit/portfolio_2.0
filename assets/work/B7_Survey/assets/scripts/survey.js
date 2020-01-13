function CreateSurvey() {
    if ($("#surveyForm").valid()) {

        var myURL = "https://itec3650-danielcondit.c9users.io/B7_Survey/restapi.php/surveyor/";

        var myMethod = "POST";

        var service;
        if (document.getElementById("dineIn").checked) {
            service = document.getElementById("dineIn").value;
        }
        if (document.getElementById("takeOut").checked) {
            service = document.getElementById("takeOut").value;
        }

        var foodQual;
        if (document.getElementById("excellentFood").selected) {
            foodQual = document.getElementById("excellentFood").value;
        }
        if (document.getElementById("goodFood").selected) {
            foodQual = document.getElementById("goodFood").value;
        }
        if (document.getElementById("avgFood").selected) {
            foodQual = document.getElementById("avgFood").value;
        }
        if (document.getElementById("badFood").selected) {
            foodQual = document.getElementById("badFood").value;
        }

        var serviceQual;
        if (document.getElementById("excellentService").selected) {
            serviceQual = document.getElementById("excellentService").value;
        }
        if (document.getElementById("goodService").selected) {
            serviceQual = document.getElementById("goodService").value;
        }
        if (document.getElementById("avgService").selected) {
            serviceQual = document.getElementById("avgService").value;
        }
        if (document.getElementById("badService").selected) {
            serviceQual = document.getElementById("badService").value;
        }

        var orderQual;
        if (document.getElementById("excellentOrder").selected) {
            orderQual = document.getElementById("excellentOrder").value;
        }
        if (document.getElementById("goodOrder").selected) {
            orderQual = document.getElementById("goodOrder").value;
        }
        if (document.getElementById("avgOrder").selected) {
            orderQual = document.getElementById("avgOrder").value;
        }
        if (document.getElementById("badOrder").selected) {
            orderQual = document.getElementById("badOrder").value;
        }

        var speedQual;
        if (document.getElementById("excellentSpeed").selected) {
            speedQual = document.getElementById("excellentSpeed").value;
        }
        if (document.getElementById("goodSpeed").selected) {
            speedQual = document.getElementById("goodSpeed").value;
        }
        if (document.getElementById("avgSpeed").selected) {
            speedQual = document.getElementById("avgSpeed").value;
        }
        if (document.getElementById("badSpeed").selected) {
            speedQual = document.getElementById("badSpeed").value;
        }

        var overallQual;
        if (document.getElementById("excellentOverall").selected) {
            overallQual = document.getElementById("excellentOverall").value;
        }
        if (document.getElementById("goodOverall").selected) {
            overallQual = document.getElementById("goodOverall").value;
        }
        if (document.getElementById("avgOverall").selected) {
            overallQual = document.getElementById("avgOverall").value;
        }
        if (document.getElementById("badOverall").selected) {
            overallQual = document.getElementById("badOverall").value;
        }

        var myData = {};
        myData.Name = document.getElementById("name").value;
        myData.Age = document.getElementById("age").value;
        myData.Email = document.getElementById("email").value;
        myData.DateVisited = document.getElementById("date").value;
        myData.DineInTakeOut = service;
        myData.FoodQuality = foodQual;
        myData.ServiceQuality = serviceQual;
        myData.OrderAccuracy = orderQual;
        myData.SpeedOfService = speedQual;
        myData.OverallExperience = overallQual;
        myData.Comments = document.getElementById("myComments").value;

        $.ajax({
                method: myMethod,
                data: myData,
                url: myURL,
                asynch: false
            })

            .done(function(msg) {
                alert(msg);
            });
    }
}