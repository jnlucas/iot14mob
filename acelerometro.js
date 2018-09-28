var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var gyro = new five.Accelerometer({
    controller: "MPU6050",
	sensitivity: 16384 // optional
  });
  var valorX = 'acordaddsdsdsdso';

  
  
  
  gyro.on("change", function() {
    
	console.log(this.x)
	
	
	if(this.x < 0 && valorX != 'pescou'){
		valorX = 'pescou'
		console.log(valorX);
		
		
		
		var mqtt = require('mqtt')
		var client  = mqtt.connect('mqtt://test.mosquitto.org')

		client.on('connect', function () {
		  client.subscribe('caminhao/14mob', function (err) {
			if (!err) {
			  client.publish('caminhao/14mob', 'pescou')
			}
		  })
		})

		client.on('message', function (topic, message) {
		  // message is Buffer
		  console.log(message.toString())
		  client.end()
		})
		
		
		
	}
	if(this.x > 0 && valorX == 'pescou'){
		valorX = 'acordado'
		console.log(valorX);
		
		
		var mqtt = require('mqtt')
		var client  = mqtt.connect('mqtt://test.mosquitto.org')

		client.on('connect', function () {
		  client.subscribe('caminhao/14mob', function (err) {
			if (!err) {
			  client.publish('caminhao/14mob', 'acordado')
			}
		  })
		})

		client.on('message', function (topic, message) {
		  // message is Buffer
		  console.log(message.toString())
		  client.end()
		})
		
		
	}
	
	
	
	
	
	
	
	
	
  });
});




