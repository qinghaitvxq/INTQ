/*------------------------函数节流--start----------------------*/
// CD 冷却时间  游戏中释放某个技能后，3秒内或某个时间内不能再释放某个技能

function fn() {
  console.log("函数节流按钮测试");
}
var btn1 = document.getElementById("button1");
var cd = false;

btn1.onclick = function() {
  if (!cd) {
    fn();
    cd = true;
    var timerId = setTimeout(() => {
      cd = false;
    }, 3000);
  }
};
// btn1.onclick = function() {
//   if (cd) {
//   } else {
//     fn();
//     cd = true;
//     var timerId = setTimeout(() => {
//       cd = false;
//     }, 2000);
//   }
// };
/*------------------------函数节流--end----------------------*/

/*------------------------函数防抖--start----------------------*/
//带着一起做
function fn2() {
  console.log("函数防抖按钮测试");
}
var btn2 = document.getElementById("button2");

var timerId = null;
btn2.onclick = function() {
  if (timerId) {
    window.clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    fn();
    timerId = null;
  }, 5000);
};

/*------------------------函数防抖--start----------------------*/
