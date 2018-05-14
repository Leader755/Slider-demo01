/**
 需求分析： 1.轮播图自动轮播 = 》 定时器
 2.图片的切换显示 = 》 DOM的操作修改样式属性
 3.鼠标悬停到指定按钮显示对应的图片 = 》 鼠标的事件
 4.鼠标悬停至轮播图，暂停轮播 = 》清除定时器
 自定轮播的实现原理：通过设置所有的图片隐藏和所有的按钮样式去除后，再单独指定一张图片显示和一个按钮显示，再通过定时器函数，无限上面这个操作，就是一个轮播图。
 */
var page = 0;//定义一个变量用于存储当前需要显示的图片索引值。
var len = 8;//定义图片轮播的数量
var imgLi = document.getElementById("slide-img").getElementsByTagName("li");
var pageLi = document.getElementById("slide-page").getElementsByTagName("li");
var slideBox = document.getElementById("slide");
var play = true;//用于标识是否自动轮播
//执行轮播函数
slide();
//setInterval(slide,1000); //无限
//setTimeout() 一次
/*************鼠标悬停暂停自动轮播**************/
slideBox.onmouseover = function(){
    play = false;
}
slideBox.onmouseout = function(){
    play = true;
}
/**************鼠标悬停切换显示******************/
for(var i=0;i<pageLi.length;i++){
    hoverEvent(i);
}
//定义一个鼠标事件的处理函数
function hoverEvent(i){
    pageLi[i].onmouseover = function(){
        //console.log(i);
        //alert(pageLi[i].innerText-1);
        page = pageLi[i].innerText-1;//获取需要显示图片对应的索引值
        hideAll();//隐藏所有图片
        imgLi[page].style.display="block";//指定一张图片显示
        removeAll();//去除所有的按钮样式
        pageLi[page].className = 'active';//指定一个按钮样式
    }
}
//定义一个轮播函数
function slide(){
    if(play){
        hideAll();//隐藏所有图片
        imgLi[page].style.display="block";//指定一张图片显示
        removeAll();//去除所有的按钮样式
        pageLi[page].className = 'active';//指定一个按钮样式
        page++;
        if(page>=len)page=0;
    }
    //设置无限轮播
    setTimeout(slide,1000); //递归用法,实现无限循环
}
//定义一个隐藏所有图片的函数
function hideAll(){
    for(var i=0;i<imgLi.length;i++){
        imgLi[i].style.display="none";
    }
}
//定义一个函数去除所有的按钮样式
function removeAll(){
    for(var i=0;i<pageLi.length;i++){
        pageLi[i].className = '';//移除所有的class
    }
}
