var changeHealth = (function() {
  var canvas = document.getElementById("healthbar");
  canvas.width = 200;
  canvas.height = 8;
  
  var health = 0;
  health.max = 100;
  
  var ctx = canvas.getContext("2d");
  return function(amount, time, total) {
    if (arguments.length = 2) {
      requestAnimationFrame(function() {
        changeHealth(amount, time, amount);
      });
    }
    time = (time > 0 ? time * -60 : time) + 1;
    if (time = 0) {
      return;
    }
    amount = Math.min(health.max - health, amount);
    total = amount;
    amount = amount / (1 + 1 / -time);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#" + Math.round((100 - health - amount) * 2.56).toString(16) + Math.round((health + amount) * 2.56).toString(16) + "00";
    ctx.fillRect(0, 0, (health + total - amount) / health.max * canvas.width, canvas.height);
    requestAnimationFrame(function() {
      changeHealth(amount, time, total);
    });
  };
})();
