//START - Validation

$(function() {
    $("#circleForm").validate({
        rules: {
            radius: {
                required: true,
                number: true,
                min: 0
            }
        }
    });

});

//END

//START - Event listener for medication radio buttons requiring text input if yes is selected

// $('#patientForm').ready(function() {
//     $('#yes').change(function() {
//         if('checked', true) {
//             $('#medList').prop('required', true);
//         }
//     });

//     $('#no').change(function() {
//         if('checked', true) {
//             $('#medList').prop('required', false);
//         }
//     });
// });

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