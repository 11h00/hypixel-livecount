//"use strict";
const CULER = new XMLHttpRequest();
var oldcount = 0, folo = 0, updatecount = 0, milestonz, ID, high2;
var timeset = false;
var wew = false;
var sad = new Audio('lesonn/sad.mp3');
sad.loop = true;
var useuname = "mathias_santourian";
var prifle = "";
var pnz = false;
var paused = false;
var methoddemerde = 0;
var sonounon = false;
var wownon = "";
var sonHD = false;
var oldpostcount = 0;
var oldfollwoing = null;
//sounds
var UPsound = new Audio("lesonn/up.mp3");
var DOWNsound = new Audio("lesonn/down.mp3");
var downfollowing = new Audio('lesonn/downfollowing.mp3');
var followingup = new Audio("lesonn/followingup.mp3");
var DOWNsoundfollo = new Audio("lesonn/followdown.mp3");
var postup = new Audio('lesonn/uppost.mp3');
var postdown = new Audio('lesonn/downpost.mp3');
var UPsoundfollo = new Audio("lesonn/up_follower.mp3");
var nofoundmathias = new Audio("lesonn/nofound_mathias.wav");
var mathias_up = new Audio("lesonn/save_up.mp3");
var mathias_down = new Audio("lesonn/save_down.mp3");

nofoundmathias.loop = true
//end of sounds
var followers = 0;
var sond = 1;
var lanui = false;

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkcookie(){
	if (sonounon == true){
		sonHD = false;
		sonsetting();
	}
	if (getdayornoght == true){
		document.documentElement.style.setProperty('--lightmode_background', "black");
        document.documentElement.style.setProperty('--livecountdiv_background', "rgba(119, 119, 119, 0.133)");
        document.documentElement.style.setProperty('--livecountdiv_borders', "2px solid rgba(189, 189, 189, 0.133)");
        document.documentElement.style.setProperty('--feature_button', "rgb(66, 66, 66)");
		document.getElementById("sole").src = "img/lue.png";
		lanui = true;
	}
}

function sonsetting(){
if (sonHD == true){
	if (lanui == false){
		document.getElementById("soundstting").style.background  = "#FF0000";
	}
	document.getElementById("soundstting").innerText = "sound : OFF";
	sonHD = false;
}else{
	if (lanui == false){
    	document.getElementById("soundstting").style.background  = "#00FF00";
	}
	document.getElementById("soundstting").innerText = "sound : ON";
	sonHD = true;
}

}
function milestonztest(){
	switch(parseInt(folo).toString().length){
		case 1:
			var milestonz = folo;
			milestonz += 1;
		break;
		case 2:
			var milestonz = parseInt((Math.floor(folo / 10)) + "0");
			milestonz += 10;
		break;
		case 3:
			var milestonz = parseInt((Math.floor(folo / 100)) + "00");
			milestonz += 100;
		break;
		case 4:
			var milestonz = parseInt((Math.floor(folo / 1000)) + "000");
			milestonz += 1000;
		break;
		case 5:
			var milestonz = parseInt((Math.floor(folo / 10000)) + "0000");
			milestonz += 10000;
		break;
		case 6:
			var milestonz = parseInt((Math.floor(folo / 100000)) + "00000");
			milestonz += 100000;
		break;
		case 7:
			var milestonz = parseInt((Math.floor(folo / 1000000)) + "000000");
			milestonz += 1000000;
		break;
		case 8:
			var milestonz = parseInt((Math.floor(folo / 10000000)) + "0000000");
			milestonz += 10000000
		break;
		case 9:
			var milestonz = parseInt((Math.floor(folo / 100000000)) + "00000000");
			milestonz += 100000000;
		break;
	}
	switch(milestonz){
		case 0:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | nagativer !";break;
		case 1:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | pouri";break;
		case 2:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | C! pa vrai!";break;
		case 3:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | vou y ete pre!";break;
		case 4:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | quelzi ,,,,444!";break;
		case 5:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | moiuter?!";break;
		case 6:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | adnw, !: le ej a ! 6:00?!";break;
		case 7:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | SEVE LE NCHIFFERE GEN?ERAL N.";break;
		case 8:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 8!";break;
		case 9:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 9 est la somme des trois premiers cubes parfaits (03 + 13 + 2 3 = 9).";break;
		case 10:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | DOWN!!!";break;
		case 20:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | HELL YEAH, WIOLL BE EASY!ù";break;
		case 30:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | YHPIU CAN DO IT!!!";break;
		case 40:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 0OOWLO 4 <= (ch_ve innataje).";break;
		case 50:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | OMFH 50% DE MA POITI EGENERAM:!!";break;
		case 60:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 60 ?! DAMMITG!";break;
		case 70:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 78.ùà ? najh,,,,,. BETA	!!";break;
		case 80:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 88 DOIULER!";break;
		case 90:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | JKAI LA GERBE......";break;
		case 100:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 100% !!! DEPU8T DE LANVEN!! ";break;
		case 200:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | WJHTGA?! ";break;
		case 300:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | HAAHAHAJHABBB ! FUNFG NY 1223! !!!!";break;
		case 400:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | diodi you hezar this !?";break;
		case 500:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | mùaintier petit limite centrale ! ";break;
		case 600:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | horor.";break;
		case 700:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 77777! ! ";break;
		case 800:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | _8 TUIOKLE DE  BUNTRE; ! ";break;
		case 900:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | vimiation ! ";break;
		case 1000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + ",,,,, ";break;
		case 2000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | pa ma!!";break;
		case 3000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 3 KILO!";break;
		case 4000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 4444,,,,,";break;
		case 5000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 50% bi !";break;
		case 6000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | va til y ariver?";break;
		case 7000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 7.0 andoid nouga?!";break;
		case 8000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | ùmdij EN G MONOR";break;
		case 9000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | JE VOMI!!!!";break;
		case 10000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 10k!: JE PET 1 PLON!";break;
		case 20000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | C REPATITY!";break;
		case 30000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 30ki §?§?§?§? YOU ARE FOU!";break;
		case 40000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | are yopiu rich or soemthing?!";break;
		case 50000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 50M§% de la lmimit centrale 😳";break;
		case 60000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | 6?!!! YOU AZRE ESXITNG THE NIFGHT!";break;
		case 70000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | adnproijdu  70.0 i aml ion t(heh future?!";break;
		case 80000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | U EN I MINOR! 8 TUILE!";break;
		case 90000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | KE GERBA ENCORE VOU!";break;
		case 100000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | HERLK YEAHY!";break;
		case 200000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | SOWN: SA CONTINUE!!!";break;
		case 300000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | DAWNIG!!!!";break;
		case 400000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | presqt a la miotier general de securite.....!";break;
		case 500000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | miotier general de securite 😳😳😳😳";break;
		case 600000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | opmfg YOIUY ACN DO TYI	 😳😳😳😳";break;
		case 700000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | AZLER PLSU NQSIE 3KI";break;
		case 800000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | MOO?JLIGHT NMLV3 EN BGVY MINRO";break;
		case 900000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | VOMUJAVE4G ANTAL !";break;
		case 1000000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | , <= X2 !";break;
		case 2000000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | CRET UNH JEU DENFAIN :)";break;
		case 3000000:document.getElementById('milestona').innerHTML = 'before ' + milestonz + " | EHLL 6ZEAH B36 M ILUION!:";break;
		
		default:document.getElementById('milestona').innerHTML = 'before ' + milestonz;break;
	}
odometer5.innerHTML = milestonz - folo;
}

function testcount(){
	if (folo > oldcount){
		UPsound.cloneNode(true).play();
	}
	if (folo < oldcount){
		DOWNsound.cloneNode(true).play();
	}
	if (high2 > oldpostcount){
		postup.cloneNode(true).play();
	}
	if (high2 < oldpostcount){
		postdown.cloneNode(true).play();
	}
	if (oldfollwoing > followin){
		downfollowing.cloneNode(true).play();
	}
	if (oldfollwoing < followin){
		followingup.cloneNode(true).play();
	}
	if (followers > oldcount2){
		UPsoundfollo.cloneNode(true).play();
	}
	if (followers < oldcount2){
		DOWNsoundfollo.cloneNode(true).play();
	}
}

function tg() {        
   setTimeout(function () {   
		CULER.open('GET', "https://api.hypixel.net/skyblock/profiles?key=e2ff97ef-9cc9-4681-9792-ce663cef3e6e&uuid=cc8d46de115f42dbb640a077ef01728a");
		CULER.send(null);
		CULER.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			degar = JSON.parse(CULER.responseText);
			oldcount2 = followers;
			oldcount = folo;
			oldpostcount = high2;
			oldfollwoing = followin;
			
			folo = degar.profiles[0].members.cc8d46de115f42dbb640a077ef01728a.experience_skill_farming;
			followers = degar.profiles[0].members.cc8d46de115f42dbb640a077ef01728a.coin_purse;
			high2 = degar.profiles[0].members.cc8d46de115f42dbb640a077ef01728a.experience_skill_mining;
			followin = degar.profiles[0].members.cc8d46de115f42dbb640a077ef01728a.death_count;
			
			odometer.innerHTML = folo;
			odometer2.innerHTML = followers;
			odometer3.innerHTML = followin;
			milestonztest()
			odometer4.innerHTML = high2;
			if (sonHD == true) {
				testcount();
			}
        }
		switch(this.status){
			case 429:
				swal.fire({
				title:"429: rate limit de merde",
				text:"please try again later.",
				});
			break;
			case 500:
				swal.fire({
				title:"500: internal server error",
				text:"!",
				});
			break;
		}
    }
};                     
        tg();
	updatecount = 25000;
   }, updatecount)
}

tg();  