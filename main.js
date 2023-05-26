const button = document.getElementsByClassName("button-switch");
var arr = [...button];
const body = document.getElementById('body');
const toggle = document.getElementById('toggle-container');
const toggleInput = document.getElementById('three');
const logo = document.querySelector('h1');
const theme = document.querySelector('h2');
const toggleNums = document.querySelectorAll('h3');
const output = document.querySelector('#output');
const outputDiv = document.querySelector('#output-div');
const bigDiv = document.querySelector('.big-div');
const buttons = document.querySelectorAll('.button');
const delButton = document.querySelector('.del');
const reset = document.querySelector('.reset');
const equal = document.querySelector('.equal');





arr.forEach((element, index) => {
  element.addEventListener("click", () => {

    element.style.opacity = "1";
    if (index == 0) {
      body.style.background = '#3A4663';
      toggle.style.background = '#242D44';
      toggle.style.border = '5px solid #242D44'
      logo.style.color = 'white';
      output.style.color = 'white';
      for(let i = 0; i < toggleNums.length; i ++){
        toggleNums[i].style.color = 'white';
      }
      output.style.color = 'white';
      outputDiv.style.background = '#181F33';
      bigDiv.style.background = '#181F33';
      for(let i = 0; i < buttons.length; i++){
        buttons[i].style.background = '#EAE3DC';
        buttons[i].style.color = '#434A59';
        buttons[i].style.boxShadow = 'inset 0px -4px 0px #B3A497';
      }
      delButton.style.background = '#647198';
      delButton.style.color = 'white';
      delButton.style.boxShadow = 'inset 0px -4px 0px #414E73';
      reset.style.background = '#647198';
      reset.style.boxShadow = 'inset 0px -4px 0px #414E73';
      equal.style.background = '#D03F2F';
      equal.style.boxShadow = 'inset 0px -4px 0px #93261A';
    } else if (index == 1) {
      body.style.background = '#E6E6E6';
      body.style.color = '#434A59';
      logo.style.color = '#434A59';
      theme.style.color = '#434A59';
      for(let i = 0; i < toggleNums.length; i ++){
        toggleNums[i].style.color = '#434A59';
      }
      output.style.color = '#434A59';
      toggle.style.background = '#D2CDCD';
      toggle.style.border = ' 5px solid #D2CDCD';
      outputDiv.style.background = '#EEEEEE';
      bigDiv.style.background = '#D2CDCD';
      for(let i = 0; i < buttons.length; i++){
        buttons[i].style.background = '#E5E4E1';
        buttons[i].style.color = '#36362C';
        buttons[i].style.boxShadow = 'inset 0px -4px 0px #A79E91';
      }
      delButton.style.background = '#378187';
      delButton.style.color = 'white';
      delButton.style.boxShadow = 'inset 0px -4px 0px #1B6066';
      reset.style.background = '#378187';
      reset.style.boxShadow = 'inset 0px -4px 0px #1B6066';
      equal.style.background = '#C85402';
      equal.style.boxShadow = 'inset 0px -4px 0px #873901';
    } else {
      body.style.background = '#17062A';
      toggle.style.background = '#1E0936';
      logo.style.color = '#FFE53D';
      theme.style.color = '#FFE53D';
      for(let i = 0; i < toggleNums.length; i ++){
        toggleNums[i].style.color = '#FFE53D';
      }
      output.style.color = '#FFE53D';
      toggle.style.border = '5px solid #1E0936';
      toggleInput.style.backgroundColor = '#00DED0';
      outputDiv.style.background = '#1E0936';
      bigDiv.style.background = '#1E0936';
      for(let i = 0; i < buttons.length; i++){
        buttons[i].style.background = '#331C4D';
        buttons[i].style.color = '#FFE53D';
        buttons[i].style.boxShadow = 'inset 0px -4px 0px #881C9E';
      }
      delButton.style.background = '#56077C';
      delButton.style.color = 'white';
      delButton.style.boxShadow = 'inset 0px -4px 0px #BE15F4';
      reset.style.background = '#56077C';
      reset.style.boxShadow = 'inset 0px -4px 0px #BE15F4';
      equal.style.background = '#00DED0';
      equal.style.boxShadow = 'inset 0px -4px 0px #6CF9F1';
      equal.style.color = '#1A2327';
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});