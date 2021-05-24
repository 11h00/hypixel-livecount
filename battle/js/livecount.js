
const mathiasStat = new XMLHttpRequest();
const alexStat = new XMLHttpRequest();
const aspokyStat = new XMLHttpRequest();
const nezkuStat = new XMLHttpRequest();
let oldscore = 0;
let mathiasScore, alexScore, aspokyScore, nezkuScore;
let nezkuResponce, mathiasResponce, alexResponce, aspokyResponce;
const friendUUID = {
	"mathias":"cc8d46de115f42dbb640a077ef01728a",
	"alex":"559cc9e7b31242adb5d2e5b575e4ec74",
	"aspoky":"da136c9c8c0f4734afa84df939f67768",
	"nezku":"32398e5b7dba425d9c1dd61b2474ff13",
}
let sonounon = false;
let sonHD = false;
//sounds
const UPsound = new Audio("lesonn/up.mp3");
const DOWNsound = new Audio("lesonn/down.mp3");
//end of sounds
let lanui = false;
let updatecount = 0

let calcTotalScore = (playerStat) => {
	let dies = playerStat.death_count ?? 0;
	let alchemy = playerStat.experience_skill_alchemy ?? 0;
	let combat = playerStat.experience_skill_combat ?? 0;
	let enchanting = playerStat.experience_skill_enchanting ?? 0;
	let farming = playerStat.experience_skill_farming ?? 0;
	let fishing = playerStat.experience_skill_fishing ?? 0;
	let foraging = playerStat.experience_skill_foraging ?? 0;
	let mining = playerStat.experience_skill_mining ?? 0;
	let runecrafting = playerStat.experience_skill_runecrafting ?? 0;
	let taming = playerStat.experience_skill_taming ?? 0;
	let fairy_exchanges = playerStat.fairy_exchanges ?? 0;
	let souls = playerStat.fairy_souls ?? 0;
	let souls_collected = playerStat.fairy_souls_collected ?? 0;
	let critical = playerStat.stats.highest_critical_damage ?? 0;
	let kills = playerStat.stats.kills ?? 0;
	let gifts_given = playerStat.stats.gifts_given ?? 0;
	let gifts_received = playerStat.stats.gifts_received ?? 0;
	let auctionwon = playerStat.stats.auctions_won ?? 0;
	let auctions_bids = playerStat.stats.auctions_bids ?? 0;
	let totalblockmined = 0;
	Object.keys(playerStat.collection).forEach(xd => {
		totalblockmined += playerStat.collection[xd] ?? 0;
	})
	return parseInt(((alchemy * 6) + (combat * 15) + (enchanting * 5) + (farming * 7) + (fishing * 4) + (foraging * 9) + ((mining + totalblockmined) * 11) + (runecrafting * 19) + (taming * 7) + (fairy_exchanges * 80) + ((souls_collected * fairy_exchanges) * 90) + souls) + (critical * (52) + (kills * 45) + (gifts_given * 84) + (gifts_received * 101) + ((auctionwon - auctions_bids) * 2) + totalblockmined) + dies * 5205)
}
function checkcookie() {
	if (sonounon == true) {
		sonHD = false;
		sonsetting();
	}
	if (getdayornoght == true) {
		document.documentElement.style.setProperty('--lightmode_background', "black");
		document.documentElement.style.setProperty('--livecountdiv_background', "rgba(119, 119, 119, 0.133)");
		document.documentElement.style.setProperty('--livecountdiv_borders', "2px solid rgba(189, 189, 189, 0.133)");
		document.documentElement.style.setProperty('--feature_button', "rgb(66, 66, 66)");
		document.getElementById("sole").src = "img/lue.png";
		lanui = true;
	}
}

function sonsetting() {
	if (sonHD == true) {
		if (lanui == false) {
			document.getElementById("soundstting").style.background = "#FF0000";
		}
		document.getElementById("soundstting").innerText = "sound : OFF";
		sonHD = false;
	} else {
		if (lanui == false) {
			document.getElementById("soundstting").style.background = "#00FF00";
		}
		document.getElementById("soundstting").innerText = "sound : ON";
		sonHD = true;
	}

}

function testcount(folo) {
	if (folo > oldscore) {
		UPsound.cloneNode(true).play();
	}
	if (folo < oldscore) {
		DOWNsound.cloneNode(true).play();
	}
}
mathiasStat.onreadystatechange = function (event) {
	if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			mathiasResponce = JSON.parse(mathiasStat.responseText);
			alexStat.open('GET', "https://api.hypixel.net/skyblock/profiles?key=e2ff97ef-9cc9-4681-9792-ce663cef3e6e&uuid=" + friendUUID.alex);
			alexStat.send(null);
		}
	}
};
alexStat.onreadystatechange = function (event) {
	if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			alexResponce = JSON.parse(alexStat.responseText);
			aspokyStat.open('GET', "https://api.hypixel.net/skyblock/profiles?key=e2ff97ef-9cc9-4681-9792-ce663cef3e6e&uuid=" + friendUUID.aspoky);
			aspokyStat.send(null);
		}
	}
};
function calcscoregap(score1, score2){
	let result = 0;
	if (score1 > score2){
		result = score1 - score2
	}else{
		result = score2 - score1
	}
	gapcount.innerHTML = result
	return result;
}
aspokyStat.onreadystatechange = function (event) {
	if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			aspokyResponce = JSON.parse(aspokyStat.responseText);
			nezkuStat.open('GET', "https://api.hypixel.net/skyblock/profiles?key=e2ff97ef-9cc9-4681-9792-ce663cef3e6e&uuid=" + friendUUID.nezku);
			nezkuStat.send(null);
		}
	}
};
nezkuStat.onreadystatechange = function (event) {
	if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			nezkuResponce = JSON.parse(nezkuStat.responseText);
			mathiasResponce.profiles.forEach(lol => {
				if (lol.members.cc8d46de115f42dbb640a077ef01728a.first_join == 1604841201752){
					mathiasResponce = lol.members.cc8d46de115f42dbb640a077ef01728a;
				}
			});
			alexResponce.profiles.forEach(lol => {
				if (lol.members["559cc9e7b31242adb5d2e5b575e4ec74"].first_join == 1606939827748){
					alexResponce = lol.members["559cc9e7b31242adb5d2e5b575e4ec74"]
				}
			});
			aspokyResponce.profiles.forEach(lol => {
				if (lol.members.da136c9c8c0f4734afa84df939f67768.first_join == 1588014978755){
					aspokyResponce = lol.members.da136c9c8c0f4734afa84df939f67768
				}
			});
			nezkuResponce.profiles.forEach(lol => {
				if (lol.members["32398e5b7dba425d9c1dd61b2474ff13"].first_join == 1598811929025){
					nezkuResponce = lol.members["32398e5b7dba425d9c1dd61b2474ff13"]
				}
			});
			mathiascount.innerHTML = calcTotalScore(mathiasResponce) + calcTotalScore(alexResponce);
			kaiizcount.innerHTML = calcTotalScore(aspokyResponce) + calcTotalScore(nezkuResponce);
			mathiasscorecount.innerHTML = calcTotalScore(mathiasResponce);
			alexscorecount.innerHTML = calcTotalScore(alexResponce);
			aspokyscorecount.innerHTML = calcTotalScore(aspokyResponce);
			fwazscorecount.innerHTML = calcTotalScore(nezkuResponce);
			testcount(calcscoregap(calcTotalScore(mathiasResponce) + calcTotalScore(alexResponce),  calcTotalScore(aspokyResponce) + calcTotalScore(nezkuResponce)));
			oldscore = calcscoregap(calcTotalScore(mathiasResponce) + calcTotalScore(alexResponce),  calcTotalScore(aspokyResponce) + calcTotalScore(nezkuResponce))
		}
	}
};
function tg() {
	setTimeout(function () {
		mathiasStat.open('GET', "https://api.hypixel.net/skyblock/profiles?key=e2ff97ef-9cc9-4681-9792-ce663cef3e6e&uuid=" + friendUUID.mathias);
		mathiasStat.send(null);
		updatecount = 15000;
		tg();
	}, updatecount)
}

tg();  