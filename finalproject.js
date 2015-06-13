var intval = null;
var pos = 0;

$(document).ready(function() {


    intval = window.setInterval(moveBg, 10);
});

function moveBg() {

    pos-= 0.1;

    $("#background1").css({backgroundPosition:  "0px " + (pos * 10) + "px"});

    if(pos < -100){
    	pos = 0;
    	var elem = document.getElementById('plasticbottle')
    	var xy = getRandomPosition(elem);
		elem.style.top = xy[0] + 'px';
		elem.style.left = xy[1] + 'px';
		var elem = document.getElementById('plasticbag')
    	var xy = getRandomPosition(elem);
		elem.style.top = xy[0] + 'px';
		elem.style.left = xy[1] + 'px';
		var elem = document.getElementById('can')
    	var xy = getRandomPosition(elem);
		elem.style.top = xy[0] + 'px';
		elem.style.left = xy[1] + 'px';
		var elem = document.getElementById('tyre')
    	var xy = getRandomPosition(elem);
		elem.style.top = xy[0] + 'px';
		elem.style.left = xy[1] + 'px';
		var elem = document.getElementById('plasticbottle1')
    	var xy = getRandomPosition(elem);
		elem.style.top = xy[0] + 'px';
		elem.style.left = xy[1] + 'px';
		var elem = document.getElementById('plasticbottle2')
    	var xy = getRandomPosition(elem);
		elem.style.top = xy[0] + 'px';
		elem.style.left = xy[1] + 'px';
		var elem = document.getElementById('plasticbag1')
    	var xy = getRandomPosition(elem);
		elem.style.top = xy[0] + 'px';
		elem.style.left = xy[1] + 'px';
		var elem = document.getElementById('plasticbag2')
    	var xy = getRandomPosition(elem);
		elem.style.top = xy[0] + 'px';
		elem.style.left = xy[1] + 'px';
		var elem = document.getElementById('can1')
    	var xy = getRandomPosition(elem);
		elem.style.top = xy[0] + 'px';
		elem.style.left = xy[1] + 'px';
		var elem = document.getElementById('can2')
    	var xy = getRandomPosition(elem);
		elem.style.top = xy[0] + 'px';
		elem.style.left = xy[1] + 'px';
		var elem = document.getElementById('tyre1')
    	var xy = getRandomPosition(elem);
		elem.style.top = xy[0] + 'px';
		elem.style.left = xy[1] + 'px';
		var elem = document.getElementById('tyre2')
    	var xy = getRandomPosition(elem);
		elem.style.top = xy[0] + 'px';
		elem.style.left = xy[1] + 'px';
    }


}

function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];

}


function leftArrowPressed() {
var element = document.getElementById("turtle");
element.style.left = parseInt(element.style.left) - 5 + 'px';
}

function rightArrowPressed() {
var element = document.getElementById('turtle');
element.style.left = parseInt(element.style.left) + 5 + 'px';

}

function upArrowPressed() {
var element = document.getElementById('turtle');
element.style.top = parseInt(element.style.top) - 5 + 'px';
}

function downArrowPressed() {
var element = document.getElementById('turtle');
element.style.top = parseInt(element.style.top) + 5 + 'px';
}

function moveSelection(evt) {
	checkcollision(document.getElementById("tyre"), document.getElementById("turtle"));
		checkcollision(document.getElementById("plasticbag"), document.getElementById("turtle"));
	checkcollision(document.getElementById("plasticbottle"), document.getElementById("turtle"));
	checkcollision(document.getElementById("can"), document.getElementById("turtle"));
	checkcollision(document.getElementById("tyre1"), document.getElementById("turtle"));
		checkcollision(document.getElementById("plasticbag1"), document.getElementById("turtle"));
	checkcollision(document.getElementById("plasticbotttle1"), document.getElementById("turtle"));
	checkcollision(document.getElementById("can1"), document.getElementById("turtle"));
	checkcollision(document.getElementById("tyre2"), document.getElementById("turtle"));
		checkcollision(document.getElementById("plasticbag2"), document.getElementById("turtle"));
	checkcollision(document.getElementById("plasticbottle2"), document.getElementById("turtle"));
	checkcollision(document.getElementById("can2"), document.getElementById("turtle"));

	checkwithin(document.getElementById("turtle"));
    switch (evt.keyCode) {
        case 37:
        leftArrowPressed();
        break;
        case 39:
        rightArrowPressed();
        break;
        case 38:
        upArrowPressed();
        break;
        case 40:
        downArrowPressed();
        break;
        }
    }

    function gameLoop()
        {
        	window.addEventListener('keydown', moveSelection);
        }

	function checkwithin(elem){
    	if(parseInt(elem.style.top) < 0)
    		elem.style.top = "500px";
    }


    function checkcollision(element1, element2) {

    	var top1 = parseInt(element1.style.top);
    	var top2 = parseInt(element2.style.top);
    	var left1 = parseInt(element1.style.left);
    	var left2 = parseInt(element2.style.left);

    	var width1 = element1.width;
    	var width2 = element2.width;
    	var height1 = element1.height;
    	var height2 = element2.height;

    	if(left1 > left2)  
		{
			if (left1 < left2 + width2)
			{
				if (top1 > top2)
					{
						if (top1 < top2 + height2)
						{
							document.getElementById('turtle').style.top = "500px";
						}
					}
			}
		}

		if(left2 > left1)  
		{
			if (left2 < left1 + width1)
			{
				if (top2 > top1)
					{
						if (top2 < top1 + height1)
						{
							document.getElementById('turtle').style.top = "500px";
						}
					}
			}
		}  
    }







