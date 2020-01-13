//START - Validation Rules

$(function() {
    $("#patientForm").validate({
        rules: {
            fName: {
                required: true,
                lettersonly: true,
                maxlength: 30
            },
            mInitial: {
                lettersonly: true,
                maxlength: 30
            },
            lName: {
                required: true,
                lettersonly: true,
                rangelength: [2, 30]
            },
            email: {
                required: true,
                email: true,
            },
            sex: {
                required: true,
            },
            dob: {
                required: true,
            },
            height: {
                required: true,
                rangelength: [2, 2]
            },
            weight: {
                required: true,
                rangelength: [2, 3]
            },
            phoneNum: {
                required: true,
                number: true,
                rangelength: [10, 10]
            },
            maritalStat: {
                required: true,
            },
            addr: {
                required: true,
            },
            city: {
                required: true,
                lettersonly: true
            },
            state: {
                required: true,
            },
            zip: {
                required: true,
                number: true,
                rangelength: [5, 9]
            },
            takingMed: {
                required: true,
            },
            medList: {
                maxlength: 1000
            }
        }
    });

});

//END

//START - Event listener for medication radio buttons requiring text input if yes is selected

$('#patientForm').ready(function() {
    $('#yes').change(function() {
        if ('checked', true) {
            $('#medList').prop('required', true);
        }
    });

    $('#no').change(function() {
        if ('checked', true) {
            $('#medList').prop('required', false);
        }
    });
});

//END

//START - Custom error messages for validation

$.extend($.validator.messages, {
    required: "Required",
    minlength: "Invalid Entry",
    maxlength: "Invalid Entry",
    lettersonly: "Invalid Entry",
    number: "Invalid Entry",
    rangelength: "Invalid Entry",
    email: "Invalid Email"
});

//END
