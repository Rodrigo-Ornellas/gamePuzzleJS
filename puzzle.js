// Rod Ornellas - JS Developer - www.rodster.website
// ============================================
var shuffledImages = [];  // ARRAY with the current position of the IMAGES after SHUFFLED
var orgImages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var clickedIMG;
var blankIMGposition;

var saida;
var movecount = 0;

function start()
{
  document.getElementById("shuffleBtn").addEventListener("click", shuffle, false);
  document.getElementById("resetBtn").addEventListener("click", reset, false);
  // document.getElementByTagName("h1").addEventListener("click", setvar, false);

  var clickedIMG0 = document.getElementById("i0");
  clickedIMG0.addEventListener("click", function(){main(clickedIMG0)}, false);

  var clickedIMG1 = document.getElementById("i1");
  clickedIMG1.addEventListener("click", function(){main(clickedIMG1)}, false);
  var clickedIMG2 = document.getElementById("i2");
  clickedIMG2.addEventListener("click", function(){main(clickedIMG2)}, false);
  var clickedIMG3 = document.getElementById("i3");
  clickedIMG3.addEventListener("click", function(){main(clickedIMG3)}, false);
  var clickedIMG4 = document.getElementById("i4");
  clickedIMG4.addEventListener("click", function(){main(clickedIMG4)}, false);
  var clickedIMG5 = document.getElementById("i5");
  clickedIMG5.addEventListener("click", function(){main(clickedIMG5)}, false);
  var clickedIMG6 = document.getElementById("i6");
  clickedIMG6.addEventListener("click", function(){main(clickedIMG6)}, false);
  var clickedIMG7 = document.getElementById("i7");
  clickedIMG7.addEventListener("click", function(){main(clickedIMG7)}, false);
  var clickedIMG8 = document.getElementById("i8");
  clickedIMG8.addEventListener("click", function(){main(clickedIMG8)}, false);
  var clickedIMG9 = document.getElementById("i9");
  clickedIMG9.addEventListener("click", function(){main(clickedIMG9)}, false);
  var clickedIMG10 = document.getElementById("i10");
  clickedIMG10.addEventListener("click", function(){main(clickedIMG10)}, false);
  var clickedIMG11 = document.getElementById("i11");
  clickedIMG11.addEventListener("click", function(){main(clickedIMG11)}, false);
  var clickedIMG12 = document.getElementById("i12");
  clickedIMG12.addEventListener("click", function(){main(clickedIMG12)}, false);
  var clickedIMG13 = document.getElementById("i13");
  clickedIMG13.addEventListener("click", function(){main(clickedIMG13)}, false);
  var clickedIMG14 = document.getElementById("i14");
  clickedIMG14.addEventListener("click", function(){main(clickedIMG14)}, false);
  var clickedIMG15 = document.getElementById("i15");
  clickedIMG15.addEventListener("click", function(){main(clickedIMG15)}, false);

  // clickedIMG = document.querySelectorAll('img');
  // clickedIMG.addEventListener("click", moveIMG, false);
  // console.log(clickedIMG);

  saida = document.getElementById("result");


}


function main(clicked)
{
  // SHUFFLE if it HAS NOT been shuffled by the user
  if (shuffledImages.length == 0)
  {
    shuffle();
    saida.innerHTML = "The image has been shuffled for you to start playing!";
  }


    // this SWITCH provides the IMAGES that can be CLICKED
      var selected = clicked.id;
      switch(blankIMGposition)
      {
        // only 2 options of MOVING
        case 0:
          clickables=[1,4];
          break;
        case 3:
            clickables=[2,7];
          break;
        case 12:
            clickables=[8,13];
          break;
        case 15:
            clickables=[11,14];
          break;

        // only 3 options of MOVING
        case 1:
            clickables=[0,2,5];
          break;
        case 2:
            clickables=[1,3,6];
          break;
        case 4:
            clickables=[0,8,5];
          break;
        case 7:
            clickables=[3,11,6];
          break;
        case 8:
            clickables=[4,12,9];
          break;
        case 11:
            clickables=[7,15,10];
          break;
        case 13:
            clickables=[12,14,9];
          break;
        case 14:
            clickables=[13,15,10];
          break;

        // all 4 options of MOVING
        case 5:
            clickables=[1,4,6,9];
          break;
        case 6:
            clickables=[2,10,5,7];
          break;
        case 9:
            clickables=[13,5,8,10];
          break;
        case 10:
            clickables=[9,11,6,14];
          break;
      }

      // Transforms the IMAGE ID into an INTERGER and INDEX of the ARRAY
      var index = parseInt(String(clicked.id).substr(1));

      // Executes the EXCHANGE between the IMAGES = MOVING THE IMAGE
      if (clickables.includes(index))
      {
        blank = shuffledImages[blankIMGposition];
        image = shuffledImages[index];

        shuffledImages[blankIMGposition] = image;
        shuffledImages[index] = blank;
        setIMAGES(shuffledImages);

        // ADDS another MOVE TO THE USER COUNT
        movecount = movecount + 1;

        // SEND MESSAGE OF MOVES TO USER
        saida.innerHTML = "You have made " + movecount + " so far.";

        // CHECKS IF THE USER HAS REACHED THE END OF THE PUZZLE
        checkEND();
      }
      else
      {
        // saida.innerHTML = "This image cannot be moved! Try again.";
      }

} // END OF MAIN FUNCTION

// ONLY FOR TESTING
// function setvar()
// {
//     shuffledImages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// }

// CHECKS if the user has REACHED THE END
function checkEND()
{

  var testEND = 0;
  // COMPARES THE CURRENT ARRAY WITH THE ORIGINAL ARRAY TO SEE IF THE USER HAS SOLVED THE PUZZLE
  for(i=0; i<16; i++)
  {
        if (orgImages[i] == shuffledImages[i])
        {
            testEND = testEND + 1;
        }
  }

  // IF THE USER HAS ALL 16 IMAGES IN THE CORRECT POSITION THE PROGRAM ENDS AND RESETS
  if (testEND == 16)
  {
    saida.innerHTML = "Congratulations!!! You did it in " + movecount + " moves.";
    movecount = 0;
    shuffledImages = [];
  }
} // END OF CHECKEND FUNCTION


// THIS IS THE RESET FUNCTION FOR THE BUTTON
function reset()
{
  setIMAGES(orgImages);
  shuffledImages = [];
  saida.innerHTML = "";
  movecount = 0;
}  // END OF RESET FUNCTION


// FUMCTION WITH the RAMDOM to shuffle the IMAGES
function shuffle()
{
      var pos = 0;

      // 1. Original ARRAY
      var originalImages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


      // 2. SHUFFLE once and indicate the position to GRAB a number from the ARRAY
      for (i=0; i<16; i++)
      {
        // shuffleString = originalImages[i] + "-" + shuffleString
        pos = Math.floor(Math.random() *  originalImages.length);

        shuffledImages[i] = originalImages[pos];
        originalImages.splice(pos, 1);

      }

      // 3. SET the IMAGES on the DISPLAY according to the SHUFFLEDIMAGES ARRAY
      setIMAGES(shuffledImages);

      // 4. RESET display of messages
      saida.innerHTML = "The game is ON!! Good luck.";

      // 5. RESET moveCOUNT
      movecount = 0;

} // END OF SHUFFLE FUNCTION


  // organizes the images according to the passed ARRAY
function setIMAGES( arrayImages)
{
  for (i = 0; i<16; i++)
  {
    if (arrayImages[i] == 15)
    {
      imgname = document.getElementById( "i"+i );
      imgname.setAttribute( "src", "images/blank.jpg");
      blankIMGposition = i;
    }
    else
    {
      imgname = document.getElementById( "i"+i );
      imgname.setAttribute( "src", "images/" + arrayImages[i] + ".jpg");
      imgname.setAttribute( "alt", arrayImages[i] + ".jpg");
    }
}
} // END OF SETIMAGES FUNCTION



// WAIT TO LOAD THE PAGE
window.addEventListener("load", start, false);
