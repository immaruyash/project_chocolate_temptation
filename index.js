 myMap = () => {
	var mapProp= {
        center:new google.maps.LatLng(19.293180, 72.853520),
		zoom:5,
		mapTypeId:google.maps.MapTypeId.HYBRID,
    };
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var marker = new google.maps.Marker({
		position:{ lat: 19.293180, lng: 72.853520 },
		animation:google.maps.Animation.BOUNCE,
		title: 'Chocolate Temptation Home-made'
	});

	var infowindow = new google.maps.InfoWindow({
		content:"Welcome to Chocolate Temptation Home-made"
	});

	google.maps.event.addListener(marker,'click',function() {
		var pos = map.getZoom();
		map.setZoom(75);
		infowindow.open(map,marker);
		map.setCenter(marker.getPosition());
		/*window.setTimeout(function() {map.setZoom(pos);},3000);*/
	});
	marker.setMap(map);
}