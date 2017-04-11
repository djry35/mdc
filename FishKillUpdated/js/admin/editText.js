$('span').bind('click', function() {
        $(this).attr('contentEditable', true);
        $(this).attr('focus', true);
    }).blur(
        function() {
            $(this).attr('contentEditable', false);
            $(this).attr('focus', false);
        });