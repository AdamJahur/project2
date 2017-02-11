/*

[Color Switcher Script]

Project: BizLinks - Material Design Agency and Business Template
Version: 1.1
Author : themelooks.com

*/

(function ($) {
	"use strict"; // this function is executed in strict mode
	
	$(document).ready(function () {
        $('#open-switcher').on('click', function (){
            $('#open-switcher').css("display", "none");
            $('#demo-colors').animate({ 'left': '0px' }, 200, 'linear', function(){
                $('#close-switcher').fadeIn(200);
            });
        });

        $('#close-switcher').on('click', function (){
            $('#close-switcher').css("display", "none");
            $('#demo-colors').animate({ 'left': '-202px' }, 200, 'linear', function(){
                $('#open-switcher').fadeIn(200);
            });
        });

        $('#mainColors li').on('click', function () {
            $('#mainColorScheme').attr('href', $(this).attr('data-path'));
            $(this).addClass('active').siblings().removeClass('active');
        });
	});
})(jQuery);