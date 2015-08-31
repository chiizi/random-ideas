var changeHealth = (function() {
  var canvas = document.getElementById("healthbar");
  canvas.width = 200;
  canvas.height = 8;
  
  var health = 0;
  health.max = 100;
  
  var ctx = canvas.getContext("2d");
  
  var actual = function(amount, count) {
    health += amount;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#" + Math.round((100 - health - amount) * 2.56).toString(16) + Math.round((health + amount) * 2.56).toString(16) + "00";
    ctx.fillRect(0, 0, health / health.max * canvas.width, canvas.height);
    requestAnimationFrame(function() {
      actual(amount, count - 1);
    });
  };
  
  return function(amount, time) {
    requestAnimationFrame(function() {
      actual(amount / (time * 60), time * 60);
    });
  };
})();
