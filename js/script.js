$(function(){
	
	var z = y = 0;
	var peronFlg = false;

	window.addEventListener('devicemotion', function(evt) {
		// z 縦の加速度
		z = Math.floor(evt.acceleration.z);
		y = Math.floor(evt.accelerationIncludingGravity.y);
	
		//z 縦の加速度が一定値を超えたら
		if (z > 10 && peronFlg == false) {
			
			peronFlg = true;

			if (z > 30 && y > 20) {
				//スカートめくり判定
				document.location = "success.html";
			} else {
				//スカートめくれない判定
				document.location = "not.html";
			}
		}

	});
});
