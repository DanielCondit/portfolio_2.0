function CreatePatient() {
    if ($("#NewPatientRegistration").valid()) {

        var myURL = "https://itec3650-danielcondit.c9users.io/B6_Patient/restapi.php/patient/";

        var myMethod = "POST";

        var sex;
        if (document.getElementById("male").checked) {
            sex = document.getElementById("male").value;
        }
        if (document.getElementById("female").checked) {
            sex = document.getElementById("female").value;
        }

        var meds;
        if (document.getElementById("yes").selected) {
            meds = document.getElementById("yes").value;
        }
        if (document.getElementById("no").selected) {
            meds = document.getElementById("no").value;
        }

        var myData = {};
        myData.FirstName = document.getElementById("fName").value;
        myData.MiddleName = document.getElementById("mInitial").value;
        myData.LastName = document.getElementById("lName").value;
        myData.Email = document.getElementById("email").value;
        myData.Sex = sex;
        myData.Birthday = document.getElementById("dob").value;
        myData.Height = document.getElementById("height").value;
        myData.Weight = document.getElementById("weight").value;
        myData.Phone = document.getElementById("phoneNum").value;
        myData.MaritalStat = document.getElementById("maritalStat").value;
        myData.Address = document.getElementById("addr").value;
        myData.City = document.getElementById("city").value;
        myData.State = document.getElementById("state").value;
        myData.Zip = document.getElementById("zip").value;
        myData.Meds = meds;
        myData.MedList = document.getElementById("medList").value;

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