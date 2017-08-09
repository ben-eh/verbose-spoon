document.getElementById("convert-button").addEventListener("click", function (e) {

	//grab the mp4 and spit out the destination
	var input_field = document.getElementById("result_field");
	var output_field_script = document.getElementById("output-field-script");
	var output_field_dest = document.getElementById("output-field-dest");
	var input_field_png = document.getElementById("result_field_png");

	var str_to_check = input_field.value;
	var png_output = input_field_png.value;

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

	//prepare outputs
	output_field_script.value = "<div style=\"position: absolute; z-index: 255\"> \n<img src=\"" + png_output + "\" style=\"background-color: transparent; display: inline-block;\"></div> \n<video width=\"" + size[0] + "\" height=\"" + size[1] + "\" loop autoplay poster=\"" + backup + "\"> \n<source src=" + str_to_check + "  type=\"video/mp4\"> \n<img src=\"" + backup + "\"></video>";
	output_field_dest.value = "http://" + product + "/" + site + "/go.php?pr=" + pr + "&su=" + su + "&si=" + si + "&pa=index&ar=&ad=248092&cs=mbnt&acampaign=" + abbr + "_" + scene_id + "_{zone}_{campaignID}_{adgroupID}_{creativeID}&gsub_id={transactionID}&gallery_id={transactionID}";

});