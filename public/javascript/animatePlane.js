// function init() {
//   imgObj = document.getElementById("airplane");
//   imgObj.style.position = "absolute";
//   imgObj.style.top = "200px";
//   imgObj.style.left = "600px";
//   imgObj.style.visibility = "hidden";
//   for (i = 100; i > 0; i--) {
//     setTimeout(moveRight, 500);
//   }
//   //   moveRight(imgObj);
// }

// function moveRight(imgObj, i) {
//   imgObj.style.left = i * 10 + "px";
//   imgObj.style.visibility = "visible";
// }

// window.onload = function () {
//   init();
// };

function ShowHideDiv(btnGhost) {
        var GhostStyle = document.getElementById("ghostanimation");
if (btnGhost.value == "Hide Ghost") {
            GhostStyle.style.display = "none";
            btnGhost.value = "Play Ghost";
        } else {
            GhostStyle.style.display = "block";
            btnGhost.value = "Hide Ghost";
        }
    }
// window.onload = function () {
//   init();
// };