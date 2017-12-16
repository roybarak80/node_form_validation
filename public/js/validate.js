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

    $("#form").validate({
        rules: {
            "name": {
                //required: true,
                //minlength: 5
            },
            "email": {
                //required: true,
                // email: true
            },"phone": {
                required: true,      // field is mandatory
                intlTelNumber: true  // must contain a valid phone number
            }

        },
        messages: {
            "name": {
                required: function(){toastr.warning("Warning")} ,
                name : "fddfd"
            },
            "email": {
                required: function(){toastr.warning("Warning")} ,
                email: "Email is invalid"
            }

        },

        submitHandler: function (form) { // for demo

            function toJSONString( form ) {
                var obj = {};
                var elements = form.querySelectorAll( "input, select, textarea" );
                for( var i = 0; i < elements.length; ++i ) {
                    var element = elements[i];
                    var name = element.name;
                    var value = element.value;

                    if( name ) {
                        obj[ name ] = value;
                    }
                }

                $.ajax({
                    type: "POST",
                    url: '/post-feedback',
                    data: obj,
                    success: function( data ){
                        toastr.success("YYEESSSSSSS");
                    },
                    error: function( jqXhr, textStatus, errorThrown ){
                        console.log( errorThrown );
                    }

                });



            }
            toJSONString( form );
            return false; // for demo
        }
    });

});

