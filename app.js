// Global variables
let presses = 0;
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 
'Too ato too nOt enot one totA not anot tOO aNot', 
'oat itain oat tain nate eate tea anne inant nean', 
'itant eate anot eat nato inate eat anot tain eat', 
'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let whichSent = 0;
let sentEnd = sentences[whichSent].length;
let targetLet;
let score;
const numberOfWords = 54;
let seconds = 0;
let minutes;
let numberOfMistakes = 0;
let isPlaying = true;

// Adds sentences to div#sentence
$('#sentence').text(sentences[0]);
displayTarget();


// Playing the game
$(document).ready(function(){
    alert('Welcome to Type-Faster, Master!\nType through the sentences with speed and accuracy.\n\nTime will start as soon as you click "Ok."')
})
setInterval(startClock, 1000);
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
    // Start keypress listener
    $(document).keypress(function(e){
        target = e.which;
        $('#'+event.keyCode).addClass('pressed');
        // $('#yellow-block').css('left', '+=17.5px');
        displayFeedback(target);
        presses++;
        if(whichSent>sentences.length-1){
            gameOver();
            return;
        } else if(presses>=sentEnd){
            whichSent++;
            $('#sentence').text(sentences[whichSent]);
            $('#feedback').empty('span');
            // $('#yellow-block').css('left', '142px');
            presses=0;
        }else if(isPlaying===true){
            displayTarget();
        }
        });
    // End keypress listener
    
    // Start keyup listener
    $(document).keyup(function(){
    $('.key').removeClass('pressed');
    if(presses>=sentEnd){
        whichSent++;
        $('#sentence').text(sentences[whichSent]);
        $('#feedback').empty('span');
        // $('#yellow-block').css('left', '142px');
        presses=0;
        displayTarget();
        }
    }); 
    
    
    // End keyup listener
// Playing the game/

// Keeps track of time
function startClock(){
    seconds++;
}
// Checks for correct key
function correctKey(target){
    if(asciiTarget===target){
        return true;
    }else{
        return false;
    }
}

// Displays feedback
function displayFeedback(){
    if(correctKey(target)){
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
    }else{
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        numberOfMistakes++;
    }
};

// Displays target value in div#target-letter
function displayTarget(){
    findTarget();
    if(!(targetLet===undefined)){
        $('#target-letter').text("'" + targetLet + "'");
    }
    // highlight();
}

// Highlights target letter
// function highlight(){
    
// }

// Finds target letter from array sentences
function findTarget(){
    targetLet = sentences[whichSent].substring(presses, presses+1);
    asciiTarget = targetLet.charCodeAt();
}

// Game over
function gameOver(){
    isPlaying = false;
    clearInterval(startClock);
    minutes = Math.floor(seconds*0.0166667);
    score = (numberOfWords/minutes) - (2 * numberOfMistakes);
    $('#yellow-block').css('background-color', 'white');
    $('#sentence').text('');
    $('#feedback').text('');
    $('#target-letter').text('Game Over, ' + 'Score: ' + score);
}