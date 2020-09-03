var portraits = new Array();
portraits[0] = new Image();
portraits[0].src = "client/Assets/pics/portraits/aut.jpg"
portraits[1] = new Image();
portraits[1].src = "client/Assets/pics/portraits/blaze_bed.jpg"
portraits[2] = new Image();
portraits[2].src = "client/Assets/pics/portraits/blaze_bed2.jpg"
portraits[3] = new Image();
portraits[3].src = "client/Assets/pics/portraits/crumb.jpg"
portraits[4] = new Image();
portraits[4].src = "client/Assets/pics/portraits/denver.jpg"
portraits[5] = new Image();
portraits[5].src = "client/Assets/pics/portraits/denver2.jpg"
portraits[6] = new Image();
portraits[6].src = "client/Assets/pics/portraits/dom.jpg"
portraits[7] = new Image();
portraits[7].src = "client/Assets/pics/portraits/jon_field.jpg"
portraits[8] = new Image();
portraits[8].src = "client/Assets/pics/portraits/jon_river.jpg"
portraits[9] = new Image();
portraits[9].src = "client/Assets/pics/portraits/live1.jpg"
portraits[10] = new Image();
portraits[10].src = "client/Assets/pics/portraits/live2.jpg"
portraits[11] = new Image();
portraits[11].src = "client/Assets/pics/portraits/live3.jpg"
portraits[12] = new Image();
portraits[12].src = "client/Assets/pics/portraits/live4.jpg"
portraits[13] = new Image();
portraits[13].src = "client/Assets/pics/portraits/live5.jpg"
portraits[14] = new Image();
portraits[14].src = "client/Assets/pics/portraits/lone_tree.jpg"
portraits[15] = new Image();
portraits[15].src = "client/Assets/pics/portraits/rado1.jpg"
portraits[16] = new Image();
portraits[16].src = "client/Assets/pics/portraits/rado2.jpg"
portraits[17] = new Image();
portraits[17].src = "client/Assets/pics/portraits/rado3.jpg"
portraits[18] = new Image();
portraits[18].src = "client/Assets/pics/portraits/rado4.jpg"
portraits[19] = new Image();
portraits[19].src = "client/Assets/pics/portraits/tent.jpg"

var landscapes = new Array();
landscapes[0] = new Image();
landscapes[0].src = "client/Assets/pics/landscapes/blaze.jpg"
landscapes[1] = new Image();
landscapes[1].src = "client/Assets/pics/landscapes/blaze_looking.jpg"
landscapes[2] = new Image();
landscapes[2].src = "client/Assets/pics/landscapes/building.jpg"
landscapes[3] = new Image();
landscapes[3].src = "client/Assets/pics/landscapes/chris_jon.jpg"
landscapes[4] = new Image();
landscapes[4].src = "client/Assets/pics/landscapes/comerica.jpg"
landscapes[5] = new Image();
landscapes[5].src = "client/Assets/pics/landscapes/coop.jpg"
landscapes[6] = new Image();
landscapes[6].src = "client/Assets/pics/landscapes/dog.jpg"
landscapes[7] = new Image();
landscapes[7].src = "client/Assets/pics/landscapes/fist.jpg"
landscapes[8] = new Image();
landscapes[8].src = "client/Assets/pics/landscapes/harsens.jpg"
landscapes[9] = new Image();
landscapes[9].src = "client/Assets/pics/landscapes/hart.jpg"
landscapes[10] = new Image();
landscapes[10].src = "client/Assets/pics/landscapes/hol.jpg"
landscapes[11] = new Image();
landscapes[11].src = "client/Assets/pics/landscapes/jon_car.jpg"
landscapes[12] = new Image();
landscapes[12].src = "client/Assets/pics/landscapes/live1.jpg"
landscapes[13] = new Image();
landscapes[13].src = "client/Assets/pics/landscapes/moose.jpg"
landscapes[14] = new Image();
landscapes[14].src = "client/Assets/pics/landscapes/rado1.jpg"
landscapes[15] = new Image();
landscapes[15].src = "client/Assets/pics/landscapes/rado2.jpg"
landscapes[16] = new Image();
landscapes[16].src = "client/Assets/pics/landscapes/rado3.jpg"
landscapes[17] = new Image();
landscapes[17].src = "client/Assets/pics/landscapes/rado4.jpg"
landscapes[18] = new Image();
landscapes[18].src = "client/Assets/pics/landscapes/random_couple.jpg"
landscapes[19] = new Image();
landscapes[19].src = "client/Assets/pics/landscapes/sky_field.jpg"
landscapes[20] = new Image();
landscapes[20].src = "client/Assets/pics/landscapes/tim.jpg"
landscapes[21] = new Image();
landscapes[21].src = "client/Assets/pics/landscapes/drew.jpg"
landscapes[22] = new Image();
landscapes[22].src = "client/Assets/pics/landscapes/nate.jpg"


var tallSlots = new Array();
var wideSlots = new Array();
var lastPics = new Array();
var currentPics = new Array();

tallSlots = document.getElementsByClassName("portrait");
wideSlots = document.getElementsByClassName("landscape");

window.onload = function() {
  document.getElementById("button").addEventListener("click", generatePics);
  generatePics();
}

function getRandomNumber(max)
{
  return rand = Math.floor(Math.random() * Math.floor(max));
}

function generatePics()
{
  currentPics = lastPics;
  currentPics.length = 0;
  generateLandscapes();
  generatePortraits();
  checkForDupes(tallSlots);
  checkForDupes(wideSlots);
  checkForRepeats();
  // getLastPhotos();
  console.log(currentPics);
}

function generatePortraits()
{ 
  for(let i = 0; i < tallSlots.length; i++)
  {
    var rand = getRandomNumber(19);

    tallSlots[i].src = portraits[rand].src;
    tallSlots[i].parentElement.href = portraits[rand].src;
    currentPics.push(tallSlots[i]);
  }
}

function generateLandscapes()
{ 
  for(let i = 0; i < wideSlots.length; i++)
  {
    var rand = getRandomNumber(22);

    wideSlots[i].src = landscapes[rand].src;
    wideSlots[i].parentElement.href = landscapes[rand].src;
    currentPics.push(wideSlots[i]);
  }
}

function checkForDupes(arr)
{
  for(let i = 0; i < arr.length; i++)
  {
    for(let j = 0; j < arr.length; j++)
    {
      if(i !== j)
      {
        if(arr[i].src === arr[j].src)
        {
          currentPics.length = 0;
          generatePics();
        }
      }
    }
  }
}

function checkForRepeats()
{
  for(let i = 0; i < lastPics.length; i++)
  {

  }
}

/* function getLastPhotos()
{
  lastPics.length = 0;

  for(i = 0; i < tallSlots.length; i++)
  {
    lastPics.push(tallSlots[i]);
  }

  for(i = 0; i < wideSlots.length; i++)
  {
    lastPics.push(wideSlots[i]);
  }
} */
