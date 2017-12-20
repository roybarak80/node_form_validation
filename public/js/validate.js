$(document).ready(function () {



    toastr.options = {
        "debug": false,
        "positionClass": "toast-top-full-width",
        "onclick": null,
        "fadeIn": 300,
        "fadeOut": 100,
        "timeOut": 5000,
        "extendedTimeOut": 1000
    };

    jQuery.validator.addMethod("intlTelNumber", function(value, element) {
        return this.optional(element) || $(element).intlTelInput("isValidNumber");
    }, function(){if(toastr.warning("Warning")){console.log(3434); toastr.clear(getLastToast()); } });

    var options = {
        autoPlaceholder: true,
        preferredCountries: ['il']
    };

    $("#phone").intlTelInput(options);

    $('#foo').click(function() {
        $("#form").validate({
            rules: {
                "name": {
                    //required: true,
                    //minlength: 5
                },
                "email": {
                    required: true,
                    // email: true
                },"phone": {
                   // required: true,      // field is mandatory
                    //intlTelNumber: true  // must contain a valid phone number
                },"textarea": {
                    // required: true,      // field is mandatory
                    //intlTelNumber: true  // must contain a valid phone number
                }


            },
            messages: {

                "email": {
                    required: function () {
                        toastr.warning("Warning")
                    },
                    email: "Email is invalid"
                }
            }

        });
        if ($('#form').valid()){


            var data={
                email: $('input[name="email"]').val(),
                phone: $('input[name="phone"]').val(),
                textarea: $('textarea').val(),
                select :$('#exampleFormControlSelect1').val()
                //add other properties similarly
            }


            $.post({

                data: data,

                url: 'http://localhost:3000/endpoint',
                success: function(data) {

                    toastr.success("YYEESSSSSSS");


                }
            });
        }

        return false;
    });

});

