 import config from './config';
 var map;

 window.initMap = function () {
   var options = {
     zoom: 8,
     center: {
       lat: 25.0391667,
       lng: 121.525
     },
   }
   map = new google.maps.Map(document.getElementById('map'), options);

   // Listen for click on map
   google.maps.event.addListener(map, 'click', function (e) {
     addMarker({
       position: e.latLng
     });
   })

   // 自定 marker image格式 
   var markerImg = {
     url: './bulldog.svg',
     size: new google.maps.Size(40, 40),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(50, 50),
   };

   /*
   // 新增單一 google map marker
   var marker = new google.maps.Marker({
     position: {lat: 25.0391667, lng: 121.525},
     map: map,
     icon: markerImg, 
   })
      
   // add marker popover
   var infoWindow = new google.maps.InfoWindow({
     content: '<h1>Hi 虎哥在這</h1>'
   })

   marker.addListener('click', function () {
     infoWindow.open(map, marker);
   });
   */

   // 新增多個 google map marker
   // Array of markers
   var markersInfo = [{
     position: {
       lat: 25.0391667,
       lng: 121.525
     },
     icon: markerImg,
     content: '<h1>Hi 虎哥在這</h1>'
   }, {
     position: {
       lat: 24.1433333,
       lng: 120.6813889
     },
   }, {
     position: {
       lat: 23.9722,
       lng: 121.6064
     },
     icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
     content: '<h1>Hi 家在這</h1>'
   }];

   markersInfo.map(function (item) {
     addMarker(item);
   });

   function addMarker(props) {
     var marker = new google.maps.Marker({
       position: props.position,
       map: map,
     });

     if (props.icon) {
       marker.setIcon(props.icon);
     }

     if (props.content) {
       var infoWindow = new google.maps.InfoWindow({
         content: props.content,
       })

       marker.addListener('click', function () {
         infoWindow.open(map, marker);
       });
     }
   }
 }

 const mapScript = document.createElement("script");
 mapScript.type = "text/javascript";
 mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&callback=initMap`;
 mapScript.async = true;
 mapScript.defer = true;
 document.head.appendChild(mapScript);