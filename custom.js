
$(document).ready(function() {

// my elements
    var details = $('details');
    var close = $('.close');
    var figure = $('figure');

// starting state
    $(details).hide();
    $(close).hide();
    jQuery.data(document.body, "detailState", 'closed');

    // show details
    $(figure).click(function(event) {

        if (jQuery.data(document.body, "detailState") == "closed") {
            jQuery.data(document.body, "detailState", 'open');
            $(this).hide();
            $(this).parent().find(details).show();
            $(this).parent().find(close).show();

        } else {

            jQuery.data(document.body, "detailState", 'closed');
            $(this).closest('figure').show();
            $(this).closest('details').hide();
            $(this).closest('close').hide();
        }

        event.preventDefault();
    });


    // hide details
    $(close).click(function(event) {

        if (jQuery.data(document.body, "detailState") == "open") {
            jQuery.data(document.body, "detailState", 'close');
            $(this).parent().find('figure').show();
            $(this).parent().find('details').hide();
            $(this).hide();
        }

        event.preventDefault();
    });


});