<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"/>
	<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	<link rel="stylesheet" type="text/css" href="css/livecount.css" />
	<link rel="stylesheet" type="text/css" href="css/odometer-theme-default.css" />
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<meta name="description" content="The best instagram livecount you ever seen! battle, fast refresh, media livecount and more!" />
	<meta name="keywords" content="instagram livecount, realtime, followers, follower, livecount" />
	<meta name="author" content="mathias777" />
	<title>instagram livecount</title>
	<script src="js/livecount.js"></script>
	<script src="js/odometer.js"></script>
	<script src="js/sweetalert.js"></script>
</head>
<body id="wewcor">
	<h1 eid="title">mathias777 stat</h1>
	<br>
	<div class="post">
	   <img src="img/0.jpg" id="pfp" onclick="gotoprofile()" alt="ima de prifile mai bon la" style="display: block;margin-left: auto;margin-right: auto;width: 200px;border: solid 3px black;">
		<h1 id="coconu" onclick="gotoprofile()" class="lctext">mathias santourian</h1>
		<div class="autre" id="autre" style="width: 100%;position: inherit;font-family: mathias;">
			<h1 id="followeur" class="lctext">farming exp :</h1>
			<div name="leposte" style="font-size: 150px; line-height: 1em; display: unset;font-family: mathias" id="odometer" class="odometer">0</div>
				<h1 id="milestona" class="lctext">left for </h1>
				<div name="milespzn" id="odometer5" style="font-size: 70px; line-height: 1em; display: unset;font-family: mathias" class="odometer">0</div>
		</div>
	</div>
	<div class="follower" id="follower" style="width: 49%;position: absolute;font-family: mathias;">
		<h1 id="posts" class="lctext">coins :</h1>
		<div id="odometer2" style="font-size: 100px; line-height: 1em; display: unset;font-family: mathias" class="odometer">0</div>
	</div>
	<div class="followein" id="followin" style="width: 48%;position: inherit;margin-left: 52%;font-family: mathias;">
		<h1 id="folower" style="color: white;text-align: center;font-family: mathias;line-height: 0;">death :</h1>
		<div name="lefollowin" id="odometer3" style="font-size: 100px; line-height: 1em; display: unset;font-family: mathias;" class="odometer">0</div>
	</div>
	<div class="followers" id="post-text">
		<h1 id="autre2" style="color: white;text-align: center;line-height: 0;font-family: mathias;">mining exp:</h1>
		<div name="highlight" id="odometer4" style="font-size: 100px; line-height: 1em; display: unset;font-family: mathias;" class="odometer">0</div>
	</div>
	<div style="display: flow-root;" id="backcredit">
		<div style="width: 99%;display: flex;text-align: center;margin-bottom: 4px;">
			<button onclick="sonsetting()" class="soundbutton" id="soundstting">sound : OFF</button>
			<img src="img/sole.png" id="sole" alt="light mode" style="width: 60px;margin-left: 63%">
		</div>
	</div>
</body>