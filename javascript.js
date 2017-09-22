var testMp4 = 'https://edge.mb.gammae.com/pathfinder3/banners/Fame/TrannyPros/300x250/MP4/noprice/en/116809/116809_300x250_v1.mp4';
var testPng = 'https://blahblahblah.png';

document.getElementById("convert-button").addEventListener("click", function (e) {
	//grab the mp4 and spit out the destination
	var input_field = document.getElementById("result_field");
	var output_field_script = document.getElementById("output-field-script");
	var output_field_dest = document.getElementById("output-field-dest");
	var input_field_png = document.getElementById("result_field_png");

	var str_to_check = input_field.value;
	var png_output = input_field_png.value;

	//grab radio button value
	function getSelectedRadio() {
		var elements = document.getElementsByName('radioButtons');

		for (var i = 0, len = elements.length; i<len; ++i) {
			if (elements[i].checked) {
				return elements[i].value;
			}
		}
	}

	//get input values from mp4 input
	if (str_to_check.indexOf("NextDoorBuddies") > -1) {
		var product = "www.buddylead.com";
		var site = "nextdoorbuddies";
		var abbr = "NDB";
		var pr = "9";
		var su = "1";
		var si = "3";
	}

	if (str_to_check.indexOf("NextDoorRaw") > -1) {
		var product = "www.buddylead.com";
		var site = "nextdoorraw";
		var abbr = "NDR";
		var pr = "9";
		var su = "1";
		var si = "83";
	}

	if (str_to_check.indexOf("TrannyPros") > -1) {
		var product = "www.iyalc.com";
		var site = "trannypros";
		var abbr = "TPR";
		var pr = "8";
		var su = "1";
		var si = "117";
	}

	if (str_to_check.indexOf("TransSensual") > -1) {
		var product = "www.iyalc.com";
		var site = "transsensual";
		var abbr = "TSS";
		var pr = "8";
		var su = "1";
		var si = "194";
	}

	if (str_to_check.indexOf("IconMale") > -1) {
		var product = "www.buddylead.com";
		var site = "iconmale";
		var abbr = "ICO";
		var pr = "9";
		var su = "1";
		var si = "79";
	}

	if (str_to_check.indexOf("NextDoorTwink") > -1) {
		var product = "www.buddylead.com";
		var site = "nextdoortwink";
		var abbr = "NDT";
		var pr = "9";
		var su = "1";
		var si = "35";
	}

	if (str_to_check.indexOf("NextDoorEbony") > -1) {
		var product = "www.buddylead.com";
		var site = "nextdoorebony";
		var abbr = "NDE";
		var pr = "9";
		var su = "1";
		var si = "51";
	}

	if (str_to_check.indexOf("EvilAngel") > -1) {
		var product = "www.iyalc.com";
		var site = "evilangel";
		var abbr = "EA";
		var pr = "8";
		var su = "1";
		var si = "128";
	}

	if (str_to_check.indexOf("SheMaleIdol") > -1) {
		var product = "www.iyalc.com";
		var site = "shemaleidol";
		var abbr = "SMI";
		var pr = "8";
		var su = "1";
		var si = "139";
	}

	if (str_to_check.indexOf("TSPlayground") > -1) {
		var product = "www.iyalc.com";
		var site = "tsplayground";
		var abbr = "TSP";
		var pr = "8";
		var su = "1";
		var si = "165";
	}

	if (str_to_check.indexOf("FootsieBabes") > -1) {
		var product = "www.iyalc.com";
		var site = "21sextury";
		var abbr = "FB";
		var pr = "8";
		var su = "1";
		var si = "207";
	}

	if (str_to_check.indexOf("GirlsWay") > -1) {
		var product = "www.iyalc.com";
		var site = "girlsway";
		var abbr = "GW";
		var pr = "8";
		var su = "1";
		var si = "187";
	}

	if (str_to_check.indexOf("NextDoorStudios") > -1) {
		var product = "www.buddylead.com";
		var site = "nextdoorstudios";
		var abbr = "NDS";
		var pr = "9";
		var su = "1";
		var si = "46";
	}


	//get the scene ID
	var last_part = str_to_check.split('/');
	var last_part_check = last_part[last_part.length-1];
	var last_part_check_number = last_part_check.split('_');

	console.log(last_part.length);

	
	if (last_part_check_number.length == 4) {
		var scene_id_part = last_part[last_part.length-1];
		var get_scene_id = scene_id_part.split('_');
		var scene_id = get_scene_id[1];
		var get_size = get_scene_id[2];
		var size = get_size.split('x');
	}
	else if (last_part_check_number.length == 3) {
		var scene_id_part = last_part[last_part.length-1];
		var get_scene_id = scene_id_part.split('_');
		var scene_id = get_scene_id[0];
		var get_size = get_scene_id[1];
		var size = get_size.split('x');
	}


	//get backups for mp4 banners
	if (abbr == "TPR" && get_size == "300x250") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Fame/TrannyPros/300x250/GIF/noprice/en/67000/67000_300x250_v1.gif";
	}

	if (abbr == "ICO" && get_size == "300x250") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Buddy/IconMale/300x250/GIF/noprice/en/81105/81105_300x250_v1.gif";
	}

	if (abbr == "NDB" && get_size == "300x250") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Buddy/NextDoorBuddies/300x250/GIF/1doll/en/114652/114652_300x250_v1.gif";
	}

	if (abbr == "NDT" && get_size == "300x250") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Buddy/NextDoorTwink/300x250/GIF/noprice/en/27164/27164_300x250_v6.gif";
	}

	if (abbr == "NDE" && get_size == "300x250") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Buddy/NextDoorEbony/300x250/GIF/noprice/en/68683/68683_300x250_v1.gif";
	}

	if (abbr == "NDR" && get_size == "300x250") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Buddy/NextDoorRaw/300x250/GIF/noprice/en/115279/115279_300x250_v1.gif";
	}

	if (abbr == "TSS" && get_size == "300x250") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Fame/TransSensual/300x250/GIF/noprice/en/74141/74141_300x250_v1.gif";
	}

	if (abbr == "SMI" && get_size == "300x250") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Fame/SheMaleIdol/300x250/GIF/noprice/en/73053/73053_300x250_v1.gif";
	}

	if (abbr == "TSP" && get_size == "300x250") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Fame/TSPlayground/300x250/GIF/noprice/en/67145/67145_300x250_v2.gif";
	}

	if (abbr == "TSS" && get_size == "160x600") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Fame/TransSensual/160x600/JPG/noprice/en/124666/tss_124666_160x600_v170001.jpg";
	}

	if (abbr == "TSS" && get_size == "160x600") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Fame/TransSensual/160x600/JPG/noprice/en/124666/tss_124666_160x600_v170001.jpg";
	}

	if (abbr == "TPR" && get_size == "160x600") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Fame/TrannyPros/160x600/JPG/noprice/en/TPR0004/TPR0004_160x600_v1.jpg";
	}

	if (abbr == "TSS" && get_size == "610x100") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Fame/TransSensual/610x100/JPG/noprice/en/79126/79126_610x100_v1.jpg";
	}

	if (abbr == "FB" && get_size == "315x300") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Fame/FootsieBabes/315x300/JPG/1doll/en/122107/122107_315x300_v1.jpg";
	}

	if (abbr == "GW" && get_size == "315x300") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Fame/GirlsWay/315x300/JPG/noprice/en/116646/116646_315x300_v1.jpg";
	}

	if (abbr == "NDB" && get_size == "315x300") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Buddy/NextDoorBuddies/315x300/JPG/noprice/en/117538/117538_315x300_v1.jpg";
	}

	if (abbr == "TPR" && get_size == "315x300") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Fame/TrannyPros/315x300/GIF/noprice/en/TPR0001/TPR0001_315x300_v1.gif";
	}

	if (abbr == "NDS" && get_size == "300x250") {
		var backup = "https://edge.mb.gammae.com/pathfinder3/banners/Buddy/NextDoorStudios/300x250/GIF/noprice/en/122580/122580_300x250_v2.gif";
	}

	var advid = getSelectedRadio();

	//prepare outputs
	if (str_to_check.indexOf(".mp4") > -1) {
		if (png_output == null || png_output == "") {
			output_field_script.value = "<video width=\"" + size[0] + "\" height=\"" + size[1] + "\" loop autoplay poster=\"" + backup + "\"> \n<source src=" + str_to_check + "  type=\"video/mp4\"> \n<img src=\"" + backup + "\"></video>";
		}
		else {
			output_field_script.value = "<div style=\"position: absolute; z-index: 255\"> \n<img src=\"" + png_output + "\" style=\"background-color: transparent; display: inline-block;\"></div> \n<video width=\"" + size[0] + "\" height=\"" + size[1] + "\" loop autoplay poster=\"" + backup + "\"> \n<source src=" + str_to_check + "  type=\"video/mp4\"> \n<img src=\"" + backup + "\"></video>";
		}
	}
	else if (str_to_check.indexOf(".jpg") > -1) {
		output_field_script.value = "<img src=\"" + str_to_check + "\">";
	}
	else if (str_to_check.indexOf(".gif") > -1) {
		output_field_script.value = "<img src=\"" + str_to_check + "\">";
	}
	else {
		alert('what you talkin bout Willis?!!?');
	}

	output_field_dest.value = "http://" + product + "/" + site + "/go.php?pr=" + pr + "&su=" + su + "&si=" + si + "&pa=index&ar=&ad=" + advid + "&cs=mbnt&acampaign=" + abbr + "_" + scene_id + "_{zone}_{campaignID}_{adgroupID}_{creativeID}&gsub_id={transactionID}&gallery_id={transactionID}";


});

// copy script button
document.getElementById('copy-script-button').addEventListener('click', function(e) {
	document.getElementById('output-field-script').select();
	document.execCommand('copy');
});

// copy destination button
document.getElementById('copy-dest-button').addEventListener('click', function(e) {
	document.getElementById('output-field-dest').select();
	document.execCommand('copy');
});