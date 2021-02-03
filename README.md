# Typing Game

## Info

- You are building a typing game
- You will be using JavaScript to complete this project

## Objectives

- Create two keyboards (include space bar): - First keyboard, lowercase keys, numbers and special characters accessed without shift - Second, keys accessed while holding down the shift key - Exclude keys like tab, delete, shift, command, ctl, caps, option/alt & enter
- The lowercase keyboard should be the only one displayed when the page loads. Write code to hide the uppercase keyboard when the page loads.
- Write code to set up keyboard toggling:
  - While the shift key is held down, hide the lowercase keyboard and show the uppercase one
  - When the shift key is released, show the lowercase keyboard and hide the uppercase one
- When keys are pressed, they should be highlighted in the browser.
  - Hint: the letters should be matched with the corresponding ascii code. 
  - The id value of the key in the html corresponds to the ASCII character code that you can access in the keyboard listener. For example, ascii value 65 is A, and 97 is a. 
  - Here's a complete list of [ACSII codes](https://www.ascii-code.com/).
- Display each sentence at the top of the page, one sentence at a time. Once the sentence has been completed, the next in line should appear. 
- If you need an array of starter sentences, check [resources](#Resources):

- Display the currently expected to the user
- For each sentence, show a visual "log" of right/wrong character inputs for each of the following:
  - If the correct key is pressed
  - If the correct key is not pressed
- At the end of each sentence, clear out the feedback div
- The user's words per minute should be calculated and displayed on the screen when you reach the end of the last sentence.
  - Can be calculated by: `numberOfWords / minutes - 2 - numberOfMistakes`
    - For number of words, you can just count how many words make up the sentences you were given and hard code that value. (Or since you're a coder, find a way to NOT have to do that)
- Once the game is over, show the user their score. Then provide a way for the user to play again.

## Hints

- Special values to keep track of:
  - Which sentence the user is on
  - Which letter of that sentence the user is on
- You'll compare each keystroke against the expected letter of the sentence. When you reach the end of a sentence, move on to the next one (unless the game is over).

## BONUS

- Find a way to highlight the currently expected letter in the on-screen sentence that should be typed next
  - One way, is to create a div that highlights the currently expected letter, and moves down the sentence at a fixed number of pixels
    - Remember to reset it back to the beginning of the sentence when you move to the next sentence

## Resources

- Starter HTML keys

```
<div class="container">
          <div class="row title">
            <h1 class="col">Type-Faster Master</h1>
          </div>

          <div class="row row-cols-1 justify-content-center prompt-container">
            <div class="col-6">
              <p class="instructions">Welcome to Type-Faster Master!
                <br>Type the sentences in the input box.
                <br>Click the button to begin!
              </p>
              <p class="col sentenceP"></p>
              <p class="col feedbackP">Begin</p>
            </div>
          </div>

          <div class="row justify-content-center my-1">
            <div class="col-8 typing text-center"><input type="text" class="form-control" placeholder="Message"></div>
          </div>

          <div class="row targetKey justify-content-center py-1">
            <button class="col-4 feedbackBtn btn btn-primary">Start</button>
          </div>

          <div class="row row-cols-1 justify-content-center text-center keyboard-container" id="keyboard-lower-container">
            <div class="col keys-row">
              <span class="key" id="96">`</span>
              <span class="key" id="49">1</span>
              <span class="key" id="50">2</span>
              <span class="key" id="51">3</span>
              <span class="key" id="52">4</span>
              <span class="key" id="53">5</span>
              <span class="key" id="54">6</span>
              <span class="key" id="55">7</span>
              <span class="key" id="56">8</span>
              <span class="key" id="57">9</span>
              <span class="key" id="48">0</span>
              <span class="key" id="45">-</span>
              <span class="key" id="61">=</span>
          </div>
          <div class="col keys-row">
              <span class="key" id="113">q</span>
              <span class="key" id="119">w</span>
              <span class="key" id="101">e</span>
              <span class="key" id="114">r</span>
              <span class="key" id="116">t</span>
              <span class="key" id="121">y</span>
              <span class="key" id="117">u</span>
              <span class="key" id="105">i</span>
              <span class="key" id="111">o</span>
              <span class="key" id="112">p</span>
              <span class="key" id="91">[</span>
              <span class="key" id="93">]</span>
              <span class="key" id="92">\</span>
          </div>
          <div class="col keys-row">
              <span class="key" id="97">a</span>
              <span class="key" id="115">s</span>
              <span class="key" id="100">d</span>
              <span class="key" id="102">f</span>
              <span class="key" id="103">g</span>
              <span class="key" id="104">h</span>
              <span class="key" id="106">j</span>
              <span class="key" id="107">k</span>
              <span class="key" id="108">l</span>
              <span class="key" id="59">;</span>
              <span class="key" id="39">'</span>
          </div>
          <div class="col keys-row">
              <span class="key" id="122">z</span>
              <span class="key" id="120">x</span>
              <span class="key" id="99">c</span>
              <span class="key" id="118">v</span>
              <span class="key" id="98">b</span>
              <span class="key" id="110">n</span>
              <span class="key" id="109">m</span>
              <span class="key" id="44">,</span>
              <span class="key" id="46">.</span>
              <span class="key" id="47">/</span>
          </div>
          <div class="col keys-row space">
              <span class="key" id="32">Space</span>
          </div>

        </div>

        <div class="row row-cols-1 justify-content-center text-center keyboard-container" id="keyboard-upper-container">
            <div class="col keys-row">
                <span class="key" id="126">~</span>
                <span class="key" id="33">!</span>
                <span class="key" id="64">@</span>
                <span class="key" id="35">#</span>
                <span class="key" id="36">$</span>
                <span class="key" id="37">%</span>
                <span class="key" id="94">^</span>
                <span class="key" id="38">&</span>
                <span class="key" id="42">*</span>
                <span class="key" id="40">(</span>
                <span class="key" id="41">)</span>
                <span class="key" id="95">_</span>
                <span class="key" id="43">+</span>
            </div>
            <div class="col keys-row">
                <span class="key" id="81">Q</span>
                <span class="key" id="87">W</span>
                <span class="key" id="69">E</span>
                <span class="key" id="82">R</span>
                <span class="key" id="84">T</span>
                <span class="key" id="89">Y</span>
                <span class="key" id="85">U</span>
                <span class="key" id="73">I</span>
                <span class="key" id="79">O</span>
                <span class="key" id="80">P</span>
                <span class="key" id="123">{</span>
                <span class="key" id="125">}</span>
                <span class="key" id="124">|</span>
            </div>
            <div class="col keys-row">
                <span class="key" id="65">A</span>
                <span class="key" id="83">S</span>
                <span class="key" id="68">D</span>
                <span class="key" id="70">F</span>
                <span class="key" id="71">G</span>
                <span class="key" id="72">H</span>
                <span class="key" id="74">J</span>
                <span class="key" id="75">K</span>
                <span class="key" id="76">L</span>
                <span class="key" id="58">:</span>
                <span class="key" id="34">"</span>
            </div>
            <div class="col keys-row">
                <span class="key" id="90">Z</span>
                <span class="key" id="88">X</span>
                <span class="key" id="67">C</span>
                <span class="key" id="86">V</span>
                <span class="key" id="66">B</span>
                <span class="key" id="78">N</span>
                <span class="key" id="77">M</span>
                <span class="key" id="60">&#60</span>
                <span class="key" id="62">&#62</span>
                <span class="key" id="63">?</span>
            </div>
            <div class="col keys-row space">
                <span class="key" id="32">Space</span>
            </div>
        </div>
      </div>
```

- Starter sentences:

```
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
```
