var changeHealth = (function() {
  var canvas = document.getElementById("healthbar");
  canvas.width = 200;
  canvas.height = 8;
  
  var health = 100;
  health.max = 100;
  
  var ctx = canvas.getContext("2d");
  return function(amount, time) {
    amount = Math.min(health.max - health, amount);
    amount = /* asdf */0;
    ctx.fillStyle = "#" + Math.round((100 - health - amount) * 2.56).toString(16) + Math.round((health + amount) * 2.56).toString(16) + "00";
  };
})();
