$(document).ready(function () {

    /**
     * Sommaire
     * 1 - Ancre sur le header
     * 2 - Animation du menu
     * 3 - Envoie du formulaire de contact
     * 4 - Lancement fonction menu sticky
     */
    
    /**
     * 1 - Ancre sur le header
     */
    $('.nav-link').anchor({
        transitionDuration: 700
    });
    /**
     * Fin de l'ancre sur le header
     */

    /**
     * 2 - Animation du menu
     */
    $('.post-module').hover(function () {
        $(this).find('.description').stop().animate({
            height: "toggle",
            opacity: "toggle"
        }, 300);
    });
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
    /**
     * Fin de l'animation du menu
     */

    /**
     * 3 - Envoie du formulaire de contact
     */
    $('.formulaire').on('submit', function (e) {
        e.preventDefault();
        var nom = $('#last_name').val()
        var message = $('#textarea1').val()
        var email = $('#email').val()
        var envoiphp = {'nom': nom, 'message': message, 'email': email}
        $.ajax({
            dataType: 'json',
            url: 'send.php',
            type: 'POST',
            data: envoiphp,
            success: function () {
                $('.popup').show();
            }
        })
    })
    /**
     * Fin de l'envoie du formulaire de contact
     */
})

        /**
         * anchor.js - jQuery Plugin
         * Jump to a specific section smoothly
         *
         * @dependencies	jQuery v1.5.0 http://jquery.com
         * @author			Cornel Boppart <cornel@bopp-art.com>
         * @copyright		Author
         
         * @version		1.0.5 (02/11/2014)
         */

        ;
(function ($) {

    window.anchor = {

        /**
         * Default settings
         *
         */
        settings: {
            transitionDuration: 2000,
            transitionTimingFunction: 'swing',
            labels: {
                error: 'Couldn\'t find any section'
            }
        },

        /**
         * Initializes the plugin
         *
         * @param	{object}	options	The plugin options (Merged with default settings)
         * @return	{object}	this	The current element itself
         */
        init: function (options) {
            // Apply merged settings to the current object
            $(this).data('settings', $.extend(anchor.settings, options));

            return this.each(function () {
                var $this = $(this);

                $this.unbind('click').click(function (event) {
                    event.preventDefault();
                    anchor.jumpTo(
                            anchor.getTopOffsetPosition($this),
                            $this.data('settings')
                            );
                });
            });
        },

        /**
         * Gets the top offset position
         *
         * @param	{object}	$object				The root object to get sections position from
         * @return	{int}		topOffsetPosition	The top offset position
         */
        getTopOffsetPosition: function ($object) {
            var href = $object.attr('href'),
                    $section = $($(href).get(0)),
                    documentHeight = $(document).height(),
                    browserHeight = $(window).height();

            if (!$section || $section.length < 1) {
                throw new ReferenceError(anchor.settings.labels.error);
            }

            if (($section.offset().top + browserHeight) > documentHeight) {
                return documentHeight - browserHeight;
            } else {
                return $section.offset().top;
            }
        },

        /**
         * Jumps to the specific position
         *
         * @param	{int}		topOffsetPosition	The top offset position
         * @param	{object}	settings			The object specific settings
         * @return	{void}
         */
        jumpTo: function (topOffsetPosition, settings) {
            var $viewport = $('html, body');

            $viewport.animate(
                    {scrollTop: topOffsetPosition},
                    settings.transitionDuration,
                    settings.transitionTimingFunction
                    );

            // Stop the animation immediately, if a user manually scrolls during the animation.
            $viewport.bind('scroll mousedown DOMMouseScroll mousewheel keyup', function (event) {
                if (event.which > 0 || event.type === 'mousedown' || event.type === 'mousewheel') {
                    $viewport.stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
                }
            });
        }

    };

    $.fn.anchor = function (method) {
        // Method calling logic
        if (anchor[method]) {
            return anchor[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return anchor.init.apply(this, arguments);
        } else {
            return $.error('Method ' + method + ' does not exist on jQuery.anchor');
        }
    };

})(jQuery);


/**
 * 4 - Lancement fonction menu sticky
 */

$(document).ready(menusticky);
$(window).on('resize scroll', menusticky);

function menusticky() {
    if ($(window).scrollTop() > 20) {
        $(".navbar").addClass("sticky");
    } else {
        $(".navbar").removeClass("sticky");
    }
}

/**
 * Fin du lancement fonction menu sticky
 */




/**
 * 5 - Lancement fonction menu mobile
 */


$(document).ready(function () {
    $('#nav-icon').click(function () {
        $('.mobile-menu').toggleClass('nav-open');
        $('#nav-icon').toggleClass('menu_open');
    });
    $('.nav-item').click(function () {
        if ($(document).width() < 768) {
            $('.mobile-menu').toggleClass('nav-open');
            $('#nav-icon').toggleClass('menu_open');
        }
    });
});


/**
 * Fin du lancement fonction menu mobile
 */