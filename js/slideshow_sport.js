//获取元素节点
var main = $1('.main');
var pic = $1('.pic');
var pics = $2('.pic img');
var listdots = $2('.listdot li');

//获取前后按钮
var perv = $1('.prev');
var next = $1('.next');


//获取第一个图片和第一个圆点
var img1 = pics[0];
var dot1 = listdots[0];

//首先克隆第一张图片，并插入最后一列
var firstImg = img1.cloneNode(true);
// console.log(firstImg);
pic.appendChild(firstImg);
// console.log(pic);

//进入页面自动轮播
//    ----调用函数
autoPlay()

//定义自动轮播函数
//    ----里面设置计时器(因此在这里声明一个计时器)
var timer;
//    ----并调用移动下一张函数
function autoPlay() { 
  timer = setInterval(function () {
    moveNext();
  }, 7000);
}

//自定义一个当前图片索引并获取一张图片的长度
var imgIndex = 0;
var imgWidth = img1.clientWidth 
// console.log(imgWidth);
//定义控制移动的宽度为：1400px
//自定义一个当前原点的索引
var listchild = 0;

// --------------------------------//定义下一张函数
function moveNext() {
  imgIndex++;
  //判断范围
  // console.log(pics.length);
  if(imgIndex > pics.length){
    imgIndex = 1;//下一张为的第二张下标
    //这里直接让第一张图完成瞬间切换
    pic.style.left = 0 + 'px';
    // console.log(pic.style.left);
  }
  animate(pic,{'left': -imgIndex*imgWidth});//执行动画
  // console.log(imgIndex*imgWidth);
  //清除第一个原点的样式class
  listdots[listchild].className = '';
  //让索引++
  listchild++ ;
  //判断当前圆点索引范围
  if (listchild >= listdots.length) {
    listchild = 0;
  }
  //给当前圆点添加class
  listdots[listchild].className = 'show';
}

// --------------------------------//定义上一张函数
function movePrev() { 
  imgIndex--;
  //判断范围
  // console.log(pics.length);
  if(imgIndex < 0 ){
    imgIndex = pics.length-1;//下次播放：上一张为的pics里几张图片的最后一张减一
    //这里直接让第一张图完成瞬间切换为第6张
    console.log(pics.length);
    pic.style.left = -pics.length*imgWidth+'px';
    console.log(pic.style.left);
  }
  animate(pic,{'left': -imgIndex*imgWidth});//执行动画
  // console.log(pic.style.left);

  //清除第一个原点的样式class
  listdots[listchild].className = '';
  //让索引--
  listchild-- ;
  //判断当前圆点索引范围
  if (listchild < 0) {
    listchild = listdots.length -1;
  }
  //给当前圆点添加class
  listdots[listchild].className = 'show';
}

// --------------------------------//设置点击事件
//点击下一个按钮时触发下一张事件
next.onclick =  function () { 
  //先清理计时器
  clearInterval(timer);
  //实现点击切换效果
  moveNext();
  //开启自动轮播
  autoPlay();
}
//点击上一个按钮时触发下一张事件
perv.onclick =  function () { 
  //先清理计时器
  clearInterval(timer);
  //实现点击切换效果
  movePrev();
  //开启自动轮播
  autoPlay();
}

// --------------------------------//设置点击事件
//点击小圆点实现图片定位效果
for (var i = 0, len = listdots.length; i < len; i++) {
  //自己定义遍历出来的小元素的下标，并给小圆点添加索引
  listdots[i].index = i;
  listdots[i].onclick =function () { 
    //先清除计时器，和上一个圆点的class
    clearInterval(timer);
    imgIndex = this.index
    animate(pic,{'left': -imgIndex*imgWidth});
    // 启动自动播放
    autoPlay()
    // 清除上次的类名
    listdots[listchild].className = '';
    // 当前点击的页码添加类名
    listdots[this.index].className = 'show'
    // 更新上次的页码
    listchild = this.index
  }
}
