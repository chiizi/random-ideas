var health = 0;
var healthmax = 100;
var healthbarKillSwitch;

var changeHealth = (function() {
  var STOP = false;
  healthbarKillSwitch = function() {
    return STOP = !STOP;
  };
  
  var canvas = document.getElementById("healthbar");
  canvas.width = 200;
  canvas.height = 8;
  
  var ctx = canvas.getContext("2d");
  
  (function() {
    if (STOP) return;
    var a = document.createElement("code");
    a.id = "debug";
    document.body.appendChild(a);
  })();
  
  var actual = function(amount, count) {
    if (STOP) return;
    document.getElementById("debug").innerHTML = Array.prototype.slice.call(arguments, 0).toString().replace(",", ", ");
    health += amount;
    if (health > healthmax) {
      health = healthmax;
    }
    if (count == 0 || health >= healthmax) {
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#" + Math.round(Math.min((100 - health - amount) * 2.56), 255).toString(16) + Math.round(Math.min((health + amount) * 2.56), 255).toString(16) + "00";
    ctx.fillRect(0, 0, health / healthmax * canvas.width, canvas.height);
    requestAnimationFrame(function() {
      if (STOP) return;
      actual(amount, count + (count < 0 ? 1 : -1));
    });
  };
  
  return function(amount, time) {
    if (STOP) return;
    requestAnimationFrame(function() {
      if (STOP) return;
      actual(amount / (time * 60), time * 60);
    });
  };
})();
