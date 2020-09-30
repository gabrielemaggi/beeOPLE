function arrivo(start, x, y, i) {
	var flo = document.getElementById("flower");
	var flower = flo.getBoundingClientRect();
	var bee    = {r : 28, genx: x, geny: y};
	flower.r = 100;

	var dx = flower.x - bee.genx;
	var dy = flower.y - bee.geny;
	var distanza = Math.sqrt(dx * dx + dy * dy);
	switch(i) {
		case 0:		//sinistra up-->down
			if(distanza + 100 < flower.r + bee.r){
				clearInterval(start);
			   	setTimeout(function(){
						apialfiore();
						document.getElementById("apesx").style.visibility = "hidden";
				}, 1500);
				
			}
			break;
        case 1:		//destra up-->down
			if(distanza + 100 < flower.r + bee.r){
				clearInterval(start);
			   	setTimeout(function(){
						apialfiore();
						document.getElementById("apedx").style.visibility = "hidden";
				}, 1500);
			}
			break;
		case 2:		//destra down-->down
			if(distanza + 100 < flower.r + bee.r){
				clearInterval(start);
			   	setTimeout(function(){
						apialfiore();
						document.getElementById("apedx").style.visibility = "hidden";
				}, 1500);
			}
			break;
		case 3:		//sinistra down-->down
			if(distanza + 100 < flower.r + bee.r){
				clearInterval(start);
			   	setTimeout(function(){
						apialfiore();
						document.getElementById("apesx").style.visibility = "hidden";
				}, 1500);
			}
			break;
	}
}

function apialfiore() {
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	
	var h = window.innerHeight
	|| document.documentElement.clientHeight
    || document.body.clientHeight;
	
	var x = 0;
	var y = 0;
	var incx = 0;
	var incy = 0;
	var i = Math.floor((Math.random() * 4));
	var beedx = document.getElementById("apedx");
	var beesx = document.getElementById("apesx");
	
    var start = setInterval(frame, 5, i);
	
	function frame(i) {
		switch (i) {
			case 0 :		//sinistra up-->down
				beesx.style.visibility = "visible";
				x = -100 + incx;
				y = 125 + incy;
				beesx.style.top = y + 'px';
				beesx.style.left = x  + 'px';
				incy += 0.5;
                incx++;
				arrivo(start, x, y, i);
                break;
            case 1 :		 //destra up-->down
				beedx.style.visibility = "visible";
				x = w - incx;
				y = 0 + 125 + incy;
				beedx.style.top = y + 'px';
				beedx.style.left = x  + 'px';
				incy += 0.5;
				incx++;
				arrivo(start, x, y, i);
				break;
			case 2 :		  //destra down-->down
				beedx.style.visibility = "visible";
				x = w + 20 - incx;
				y = h - incy;
				beedx.style.top = y + 'px';
				beedx.style.left = x  + 'px';
				incy += 0.3;
				incx++;
				arrivo(start, x, y, i);
				break;
			case 3 :		//sinistra down-->down
				beesx.style.visibility = "visible";
				x = -100 + incx;
				y = h - incy;
				beesx.style.top = y + 'px';
				beesx.style.left = x  + 'px';
				incy += 0.3;
				incx++;
				arrivo(start, x, y, i);
				break;
		}
	}
}

function carica() {
	var s = document.createElement("IMG");
	s.setAttribute("src", "../public/images/apesx.png");
	s.setAttribute("width", "140");
    s.setAttribute("height", "110");
	s.setAttribute("alt", "Beesx");
	s.setAttribute("id", "apesx");
    document.body.appendChild(s);
	
	var d = document.createElement("IMG");
	d.setAttribute("src", "../public/images/apedx.png");
	d.setAttribute("width", "140");
    d.setAttribute("height", "110");
	d.setAttribute("alt", "Beedx");
	d.setAttribute("id", "apedx");
	document.body.appendChild(d);
	
	document.getElementById("apesx").style.visibility = "hidden";
	document.getElementById("apedx").style.visibility = "hidden";

	apialfiore();
}