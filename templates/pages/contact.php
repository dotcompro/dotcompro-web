<div class="section" id="contact-section">
	<div class="contact-body">
		<main class="contact-body-wrapper">
			<div class="header">
				<span class="title-wrapper"></span>
			</div>



				<!-- <form method="POST" action="mail.php" class="contact-form contact-items" name="contact-form"> -->

					<form class="contact-form contact-items" name="contact-form">

					<div class="contact-row">
						<div class="col-30">
							<label for="fname">First name</label>
						</div>
						<div class="col-70">
							<input type="text" id="firstName" placeholder="Enter your name" name ="first_name">
						</div>
					</div>

					<div class="contact-row">
						<div class="col-30">
							<label for="lname">Last name</label>
						</div>
						<div class="col-70">
							<input type="text" id="lastName" placeholder="Enter your last name" name="last_name">
						</div>
					</div>

					<div class="contact-row">
						<div class="col-30">
							<label for="company">Company</label>
						</div>
						<div class="col-70">
							<input type="text" id="company" placeholder="Your company" name="company">
						</div>
					</div>

					<div class="contact-row">
						<div class="col-30">
							<label for="email">E-mail</label>
						</div>
						<div class="col-70">
							<input type="email" id="email" placeholder="Your email" name="email">
						</div>
					</div>

					<div class="contact-row">
						<div class="col-30">
							<label for="subject">Message</label>
						</div>
						<div id="text-message">
							<textarea id="message-area" name="msg-area" placeholder="Enter your message here"></textarea>
						</div>
					</div>

						<input class="action-button" type="submit" value="Send" name="submit">
						<input class="action-button" type="reset" value="Delete" name="reset">
				</form>
	


		</main>
<!-- zemelapis -->
			<div id="map" style="height: 30%; width: 100%;">
		</div>
	</div>
</div>

    <script>
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 48.1351253, lng: 11.5819805},
          zoom: 12,
          styles: 
          	[
    			{
			        "featureType": "administrative",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "lightness": 33
			            }
			        ]
    			},
			    {
			        "featureType": "landscape",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#f2e5d4"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#c5dac6"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "all",
			        "stylers": [
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#c5c6c6"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#e4d7c6"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#fbfaf7"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#acbcc9"
			            }
			        ]
			    }
			]
        });
      }
    </script>

    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDreKd_O7B6ndIShNj2dnFvOFK7RHkXBl4&callback=initMap"></script>

</div> 

</body>
</html>