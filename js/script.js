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

			if (z > 40 && y > 20) {
				//スカートめくり判定
				$("body").css({"background":"#ff0000"});
				
			} else {
				//スカートめくれない判定
				$("body").css({"background":"#0000ff"});			
			}

			document.getElementById('test1').innerHTML = z;
			document.getElementById('test2').innerHTML = y;
		}

	});
});
