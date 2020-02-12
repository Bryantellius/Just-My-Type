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
    let presses = 0;

    $(document).keypress(function(e){
        target = e.which;
        $('#'+event.keyCode).addClass('pressed');
        presses++;
        
    });
    
    $(document).keyup(function(){
    $('.key').removeClass('pressed');
    if(presses>=sentEnd){
        whichSent++;
        $('#sentence').text(sentences[whichSent]);
        presses=0;
    }else if(whichSent>sentences.length){
        
        $('#sentence').text('Game Over');
    }
    console.log('Sentence: ' +whichSent+ ' Length: ' + sentEnd + ' Presses: ' + presses);
    });

// Adds sentences to div#sentence
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let whichSent = 0;
    let sentEnd = sentences[whichSent].length;
    
    
    $('#sentence').text(sentences[0]);
    
