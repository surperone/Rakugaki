/**
*
* FSS - Full Screen Sliding Website Plugin
* URL: http://www.codecanyon.net/user/skyplugins
* Version: 1.1
* Author: Sky Plugins
* Author URL: http://www.codecanyon.net/user/skyplugins
*
* Modified by Art Chen (http://rakugaki.me)
* ChangeLog:
* 1. Removed autoplay feature
* 2. Removed dynamic ajax loading
*
*/

(function($) {
    /**
     * Preloads an array of images.
     *
     * Example usage;
     *
     * $(['images/music.png',
     *    'images/download.png',
     *    'images/favorites.png',
     *    'images/ideas.png',
     *    'images/charts.png']).preload();
     */
    $.fn.preload = function() {
        this.each(function() {
            var img = new Image();
            img.src = this;
        });
    }

    $.fn.fss = function(options) {
        
        // Default settings for the plug-in
        var settings = {
            homeButton: '.home-button',
            prevButton: '.prev-button',
            nextButton: '.next-button',
            transition: 'vertical-slide',
            transitionSpeed: 500,
            easing: 'swing',
            enableKeyboardNavigation: true
        };

        // Merge options with the default settings
        if (options) {
            $.extend(settings, options);
        }

        // Support for multiple sliders
        if (this.length > 1) {
            this.each(function() {
                $(this).fss(options)
            });
            return this;
        }

        // jQuery caches
        var self = this;
        var slider = $(this);
        var slideContainer = slider.children('div.slides');
        var slides = slideContainer.children('div.slide');

        // Indicates whether the intro animation is played yet
        var introAnimationPlayed = false;

        // Interval id for cross-fade
        var intervalID = 0;
        
        // Number of slides
        var numItems = slides.length;

        // The main initialization function
        var init = function() {

            // Initialize the full screen
            initFullScreen();

            // Get the dimensions of the slider
            height = $(window).height();
            width = $(window).width();

            slider.css({
                height: height,
                width: width,
                position: 'relative',
                overflow: 'hidden'
            });

            // Change position type for the container
            slideContainer.css('position', 'absolute');

            // Set the width, height and overflow type of the slides
            slides.css({
                position: 'relative',
                width: width,
                height: height,
                overflow: 'auto'
            });

            if (settings.transition == 'horizontal-slide') {
                // Custom settings for the horizontal transition
                slideContainer.css('width', numItems * width);
                slides.css('float', 'left');
            }

            // Initialize the keyboard navigation
            initKeyboardNavigation();

            // Initialize the address plugin
            initAddressPlugin();

            // Initialize the special anchors
            initSpecialAnchors(slider);

            // Initialize the previous, next, home buttons
            initSpecialButtons(slider);
            
        }


        // Initializes the address plugin
        var initAddressPlugin = function() {

            $.address.init(function(event) {
                $.address.autoUpdate(false);
            }).change(function(event) {

                var id = event.value;

                // Prepare the address to be handled for IE 7.x
                if (isIE7()) {
                    // Remove the prefix
                    if (id.indexOf('#') != -1) {
                        id = id.split('#')[1];
                    } else if (id.indexOf('/') != -1) {
                        id = id.split('/')[1];
                    }
                } else {
                    // Remove the prefix
                    id = event.value.substring(1);
                }

                // Go to home if the id is null
                if (id != '' && typeof(id) != 'undefined') {
                    // Check the type of the target, it could be a slide or
                    // an anchor inside a slide.
                    if (slides.filter('#' + id).size() > 0) {
                        self.selectById(id);
                    } else {
                        // Go to first slide
                        self.gotoHome();
                    }
                } else {
                    // Go to first slide
                    self.gotoHome();
                }

            });

        }

        // Initializes the fullscreen mode
        var initFullScreen = function() {

            // Update the html and body css
            $('html, body').css({
                margin: 0,
                padding: 0,
                overflow: 'hidden'
            });

            // Change to overflow type to 'auto' for IE 7+
            if (isIE7()) {
                // Update the html and body css
                $('html, body').css({
                    overflow: 'auto'
                });
            }

            // The resize listener for the main window
            $(window).resize(function() {
                // Get the dimensions of the window
                height = $(window).height();
                width = $(window).width();

                // Update the slider frame and slide dimensions.
                slider.css({
                    width: width,
                    height: height
                });
                slides.css({
                    width: width,
                    height: height
                });

                // Get the current slide's index
                var currentSlideIndex = getCurrentSlide().index();

                // Update the container position if necessary
                if (currentSlideIndex != -1) {
                    if (settings.transition == 'horizontal-slide') {
                        slideContainer.css({
                            width: numItems * width
                        });
                        slider.stop().scrollLeft(currentSlideIndex * width);
                    } else if (settings.transition == 'vertical-slide') {
                        slider.stop().scrollTop(currentSlideIndex * height);
                    }
                }
            });

        }


        // Returns true if the current browser version is IE 7.X
        function isIE7() {

            if (parseFloat(navigator.appVersion.split('MSIE')[1]) == 7) {
                return true;
            }

            return false;

        }


        // Initializes the special anchors within the given jQuery context
        var initSpecialAnchors = function(context) {

            context.find('.special-anchor').not('.prev-button, .next-button, .home-button').click(function(evt) {
                // Get the hyperlink
                var href = $(this).attr('href');

                // It should be done this way for IE 7.X
                if (isIE7()) {
                    href = href.split('#')[1];
                }

                href = href.replace(/^#/, '')

                // Update the address
                $.address.value(href);
                $.address.update();

                return false;
            });

        }

        // Initializes the previous, next, home buttons
        var initSpecialButtons = function(context) {

            // Bind the click event to the home button
            $(settings.homeButton + ".special-anchor").bind("click", function(event) {
                self.gotoHome();
            });
            
            $( settings.prevButton + ".special-anchor").bind("click", function(event){
                self.selectPrevious();
            });
            
            $(settings.nextButton + ".special-anchor").bind("click", function(event){
                self.selectNext();
            });
        }

        // Initializes the keyboard navigation
        var initKeyboardNavigation = function() {

            if (settings.enableKeyboardNavigation) {
                $(document).keydown(function(event) {
                    // Check the source of the event
                    var checkModal = function(){
                        var isModalVisible = false;
                        $('.md-modal').each(function(){
                            if ($(this).css("visibility") == "visible"){
                                isModalVisible = true;
                            }
                        });
                        return !isModalVisible;
                    } 
                    if (event.target.type !== 'textarea' &&
                        event.target.type !== 'text' &&
                        checkModal()
                       ) { 

                        // The keycode needs to be checked this way for cross-browser compatibility
                        var keyCode = event.keyCode || event.which;

                        switch (keyCode) {
                            case 38: // Up arrow
                                self.selectPrevious();
                                break;
                            case 40: // Down arrow
                                self.selectNext();
                                break;
                            default:
                                break;
                        }
                    }
                });
            }

        }

        // Selects the slide with the given id
        this.selectById  = function(id, callback) {

            var index = slides.filter("#" + id).index();
            selectByIndex(index, callback);

        }

        // Goes to the first slide
        this.gotoHome = function(callback) {

            $.address.value(slides.eq(0).attr('id'));
            $.address.update();

            if (callback) {
                callback();
            }

        }


        // Selects the next slide
        this.selectNext = function(callback) {

            // Get the index for the current slide
            var index = getCurrentSlide().index();

            // Return back to first index if the last index has been reached
            if (++index == numItems) {
                index = 0;
            }

            $.address.value(slides.eq(index).attr('id'));
            $.address.update();

            if (callback) {
                callback();
            }

        }


        // Selects the previous slide
        this.selectPrevious = function(callback) {

            // Get the index for the current slide
            var index = getCurrentSlide().index();

            // Go to last index if the first index has been reached
            if (--index < 0) {
                index = numItems - 1;
            }

            $.address.value(slides.eq(index).attr('id'));
            $.address.update();

            if (callback) {
                callback();
            }

        }


        // Selects the slide at the given index
        var selectByIndex = function(index, callback) {

            // Get the current slide
            var current = getCurrentSlide();

            // Check to see if it is already selected
            if (index != current.index() && index != -1) {

                // Clear interval to make sure the manually selected slide stays
                // enough time before passing to the next slide.
                clearInterval(intervalID);

                // Remove .current class from the previous slide and add it to the new slide
                getPrevSlide().removeClass('prev');
                current.removeClass('current').addClass('prev');
                slides.eq(index).addClass('current');
                

                // Check to see if it's the first page visit (This avoids the animations at startups)
                if (!introAnimationPlayed) {
                    var speedBuffer = settings.transitionSpeed;
                    settings.transitionSpeed = 0;
                    introAnimationPlayed = true;
                }

                // Call appropriate transition function
                switch (settings.transition) {
                    case 'vertical-slide': // Slide vertically to the current slide
                        slideVertical(callback);
                        break;
                    default:
                    case 'none':
                    case 'horizontal-slide': // Slide horizontally to the current slide
                        slideHorizontal(callback);
                        break;
                }

                // Set it back to the original value
		if (typeof(speedBuffer) != 'undefined') {
                    settings.transitionSpeed = speedBuffer;
		}

            } else {
                // Call the callback function if there is any
                if (callback) {
                    callback();
                }
            }

        }


        // Horizontal slide
        var slideHorizontal = function(callback) {

            // Stop the previous animation and immediately start the new one
            slider.stop().animate({
                scrollLeft: getCurrentSlide().index() * width
            }, settings.transitionSpeed, settings.easing, function() {

                // Call the callback function if there is any
                if (callback) {
                    callback();
                }
            });

        }


        // Vertical slide
        var slideVertical = function(callback) {

            // Stop the previous animation and immediately start the new one
            slider.stop().animate({
                scrollTop: getCurrentSlide().index() * height
            }, settings.transitionSpeed, settings.easing, function() {

                // Call the callback function if there is any
                if (callback) {
                    callback();
                }
            });

        }


        // Returns the current slide
        var getCurrentSlide = function() {

            return slides.filter('div.current');

        }


        // Returns the previous slide
        var getPrevSlide = function() {

            return slides.filter('div.prev');

        }


        

        init();
        
        return this;
        
    };
})(jQuery);