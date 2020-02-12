// Event listeners for shift key up or down, shows upper keyboard
    $(document).keydown(function(e){
        if(event.keyCode==16){
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
            event.preventDefault();
        }
    });
    $(document).keyup(function(e){
        if(event.keyCode==16){
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
            event.preventDefault();
        }
    });

//Event listeners for keys pressed, highlights each key when pressed
    let target;

    $(document).keypress(function(e){
        target = e.which;
        $('#'+event.keyCode).addClass('pressed');
        return target;
        
    });
    
    $(document).keyup(function(){
    $('.key').removeClass('pressed');
    });



