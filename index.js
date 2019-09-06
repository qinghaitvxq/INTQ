// 函数防抖

/*--------函数节流--------*/
// CD 冷却时间  游戏中释放某个技能后，3秒内或某个时间内不能再释放某个技能

function fn() {
  console.log("函数节流按钮测试");
}
var btn1 = document.getElementById("button1");
var cd = false;

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

btn1.onclick = function() {
  if (!cd) {
    fn();
    cd = true;
    var timerId = setTimeout(() => {
      cd = false;
    }, 3000);
  }
};
