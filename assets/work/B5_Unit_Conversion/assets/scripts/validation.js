//START - Validation

$(function() {
    $("#myForm").validate({
        rules: {
            FromValue: {
                required: true,
            },
            FromUnits: {
                required: true,
            },
            ToUnits: {
                required: true,
            }
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