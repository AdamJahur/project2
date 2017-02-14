/*

[Core Script]

Project: PopForms - Material Design Modal Forms
Version: 1.1
Author : themelooks.com

*/

(function ($) {
	"use strict"; // this function is executed in strict mode
	
	$(document).ready(function () {
		/* -------------------------------------------------------------------------*
		 * FORM VALIDATION
		 * -------------------------------------------------------------------------*/
		// var loginForm = $('#loginForm');
		
		// if ( loginForm.length ) {
		// 	loginForm.validate({
		// 		rules: {
  //                   loginUsername: "required",
		// 			loginPassword: "required"
		// 		},
		// 		errorPlacement: function (error, element) {
		// 			return true;
		// 		}
		// 	});
		// }
        
        var signupForm = $('#signupForm');
		
		if ( signupForm.length ) {
			signupForm.validate({
				rules: {
                    singupName: "required",
                    singupUsername: "required",
					singupEmail: {
						required: true,
						email: true
					},
					singupPassword: "required",
                    singupPasswordAgain: {
                        equalTo: "#singupPassword"
                    }
				},
				errorPlacement: function (error, element) {
					return true;
				}
			});
		}
        
        var forgotForm = $('#forgotForm');
		
		if ( forgotForm.length ) {
			forgotForm.validate({
				rules: {
					forgotEmail: {
						required: true,
						email: true
					}
				},
				errorPlacement: function (error, element) {
					return true;
				}
			});
		}
        
        var subscribeForm = $('#subscribeForm');
		
		if ( subscribeForm.length ) {
			subscribeForm.validate({
				rules: {
					subscribeEmail: {
						required: true,
						email: true
					}
				},
				errorPlacement: function (error, element) {
					return true;
				}
			});
		}
        
        var contactForm = $('#contactForm');
		
		if ( contactForm.length ) {
			contactForm.validate({
				rules: {
                    contactName: "required",
					contactEmail: {
						required: true,
						email: true
					},
                    contactSubject: "required",
                    contactMessage: "required"
				},
				errorPlacement: function (error, element) {
					return true;
				}
			});
		}

		/* -------------------------------------------------------------------------*
		 * BACKGROUND IMAGE
		 * -------------------------------------------------------------------------*/
        $('[data-img-src]').each(function () {
            var imgValue = $(this).data('img-src');
            $(this).css('background-image', 'url(' + imgValue + ')');
        });
	});
})(jQuery);