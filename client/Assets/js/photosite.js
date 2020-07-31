var portraits = new Array();
portraits[0] = new Image();
portraits[0].src = "Assets/pics/portraits/aut.jpg"
portraits[1] = new Image();
portraits[1].src = "Assets/pics/portraits/blaze_bed.jpg"
portraits[2] = new Image();
portraits[2].src = "Assets/pics/portraits/blaze_bed2.jpg"
portraits[3] = new Image();
portraits[3].src = "Assets/pics/portraits/crumb.jpg"
portraits[4] = new Image();
portraits[4].src = "Assets/pics/portraits/denver.jpg"
portraits[5] = new Image();
portraits[5].src = "Assets/pics/portraits/denver2.jpg"
portraits[6] = new Image();
portraits[6].src = "Assets/pics/portraits/dom.jpg"
portraits[7] = new Image();
portraits[7].src = "Assets/pics/portraits/jon_field.jpg"
portraits[8] = new Image();
portraits[8].src = "Assets/pics/portraits/jon_river.jpg"
portraits[9] = new Image();
portraits[9].src = "Assets/pics/portraits/live1.jpg"
portraits[10] = new Image();
portraits[10].src = "Assets/pics/portraits/live2.jpg"
portraits[11] = new Image();
portraits[11].src = "Assets/pics/portraits/live3.jpg"
portraits[12] = new Image();
portraits[12].src = "Assets/pics/portraits/live4.jpg"
portraits[13] = new Image();
portraits[13].src = "Assets/pics/portraits/live5.jpg"
portraits[14] = new Image();
portraits[14].src = "Assets/pics/portraits/lone_tree.jpg"
portraits[15] = new Image();
portraits[15].src = "Assets/pics/portraits/rado1.jpg"
portraits[16] = new Image();
portraits[16].src = "Assets/pics/portraits/rado2.jpg"
portraits[17] = new Image();
portraits[17].src = "Assets/pics/portraits/rado3.jpg"
portraits[18] = new Image();
portraits[18].src = "Assets/pics/portraits/rado4.jpg"
portraits[19] = new Image();
portraits[19].src = "Assets/pics/portraits/tent.jpg"

var landscapes = new Array();
landscapes[0] = new Image();
landscapes[0].src = "Assets/pics/landscapes/blaze.jpg"
landscapes[1] = new Image();
landscapes[1].src = "Assets/pics/landscapes/blaze_looking.jpg"
landscapes[2] = new Image();
landscapes[2].src = "Assets/pics/landscapes/building.jpg"
landscapes[3] = new Image();
landscapes[3].src = "Assets/pics/landscapes/chris_jon.jpg"
landscapes[4] = new Image();
landscapes[4].src = "Assets/pics/landscapes/comerica.jpg"
landscapes[5] = new Image();
landscapes[5].src = "Assets/pics/landscapes/coop.jpg"
landscapes[6] = new Image();
landscapes[6].src = "Assets/pics/landscapes/dog.jpg"
landscapes[7] = new Image();
landscapes[7].src = "Assets/pics/landscapes/fist.jpg"
landscapes[8] = new Image();
landscapes[8].src = "Assets/pics/landscapes/harsens.jpg"
landscapes[9] = new Image();
landscapes[9].src = "Assets/pics/landscapes/hart.jpg"
landscapes[10] = new Image();
landscapes[10].src = "Assets/pics/landscapes/hol.jpg"
landscapes[11] = new Image();
landscapes[11].src = "Assets/pics/landscapes/jon_car.jpg"
landscapes[12] = new Image();
landscapes[12].src = "Assets/pics/landscapes/live1.jpg"
landscapes[13] = new Image();
landscapes[13].src = "Assets/pics/landscapes/moose.jpg"
landscapes[14] = new Image();
landscapes[14].src = "Assets/pics/landscapes/rado1.jpg"
landscapes[15] = new Image();
landscapes[15].src = "Assets/pics/landscapes/rado2.jpg"
landscapes[16] = new Image();
landscapes[16].src = "Assets/pics/landscapes/rado3.jpg"
landscapes[17] = new Image();
landscapes[17].src = "Assets/pics/landscapes/rado4.jpg"
landscapes[18] = new Image();
landscapes[18].src = "Assets/pics/landscapes/random_couple.jpg"
landscapes[19] = new Image();
landscapes[19].src = "Assets/pics/landscapes/sky_field.jpg"
landscapes[20] = new Image();
landscapes[20].src = "Assets/pics/landscapes/tim.jpg"
landscapes[21] = new Image();
landscapes[21].src = "Assets/pics/landscapes/drew.jpg"
landscapes[22] = new Image();
landscapes[22].src = "Assets/pics/landscapes/nate.jpg"


var tallSlots = new Array();
var wideSlots = new Array();

tallSlots = document.getElementsByClassName("portrait");
wideSlots = document.getElementsByClassName("landscape");

window.onload = function() {
  document.getElementById("button").addEventListener("click", generatePics);
  generatePics();
}

function getRandomNumber(max)
{
  return  rand = Math.floor(Math.random() * Math.floor(max));
}

function generatePics()
{ 
  for(let i = 0; i < tallSlots.length; i++)
  {
    var rand = getRandomNumber(19);
    console.log("This is the random index for the portraits" + rand);

    tallSlots[i].src = portraits[rand].src;
    tallSlots[i].parentElement.href = portraits[rand].src;
  }

  for(let i = 0; i < wideSlots.length; i++)
  {
    var rand = getRandomNumber(22);
    console.log("This is the random index for the landscapes" + rand);

    wideSlots[i].src = landscapes[rand].src;
    wideSlots[i].parentElement.href = landscapes[rand].src;
  }
}

function checkForDupes()
{
  
}