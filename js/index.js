/**
 ��������� 1.�ֲ�ͼ�Զ��ֲ� = �� ��ʱ��
 2.ͼƬ���л���ʾ = �� DOM�Ĳ����޸���ʽ����
 3.�����ͣ��ָ����ť��ʾ��Ӧ��ͼƬ = �� �����¼�
 4.�����ͣ���ֲ�ͼ����ͣ�ֲ� = �������ʱ��
 �Զ��ֲ���ʵ��ԭ��ͨ���������е�ͼƬ���غ����еİ�ť��ʽȥ�����ٵ���ָ��һ��ͼƬ��ʾ��һ����ť��ʾ����ͨ����ʱ�����������������������������һ���ֲ�ͼ��
 */
var page = 0;//����һ���������ڴ洢��ǰ��Ҫ��ʾ��ͼƬ����ֵ��
var len = 8;//����ͼƬ�ֲ�������
var imgLi = document.getElementById("slide-img").getElementsByTagName("li");
var pageLi = document.getElementById("slide-page").getElementsByTagName("li");
var slideBox = document.getElementById("slide");
var play = true;//���ڱ�ʶ�Ƿ��Զ��ֲ�
//ִ���ֲ�����
slide();
//setInterval(slide,1000); //����
//setTimeout() һ��
/*************�����ͣ��ͣ�Զ��ֲ�**************/
slideBox.onmouseover = function(){
    play = false;
}
slideBox.onmouseout = function(){
    play = true;
}
/**************�����ͣ�л���ʾ******************/
for(var i=0;i<pageLi.length;i++){
    hoverEvent(i);
}
//����һ������¼��Ĵ�����
function hoverEvent(i){
    pageLi[i].onmouseover = function(){
        //console.log(i);
        //alert(pageLi[i].innerText-1);
        page = pageLi[i].innerText-1;//��ȡ��Ҫ��ʾͼƬ��Ӧ������ֵ
        hideAll();//��������ͼƬ
        imgLi[page].style.display="block";//ָ��һ��ͼƬ��ʾ
        removeAll();//ȥ�����еİ�ť��ʽ
        pageLi[page].className = 'active';//ָ��һ����ť��ʽ
    }
}
//����һ���ֲ�����
function slide(){
    if(play){
        hideAll();//��������ͼƬ
        imgLi[page].style.display="block";//ָ��һ��ͼƬ��ʾ
        removeAll();//ȥ�����еİ�ť��ʽ
        pageLi[page].className = 'active';//ָ��һ����ť��ʽ
        page++;
        if(page>=len)page=0;
    }
    //���������ֲ�
    setTimeout(slide,1000); //�ݹ��÷�,ʵ������ѭ��
}
//����һ����������ͼƬ�ĺ���
function hideAll(){
    for(var i=0;i<imgLi.length;i++){
        imgLi[i].style.display="none";
    }
}
//����һ������ȥ�����еİ�ť��ʽ
function removeAll(){
    for(var i=0;i<pageLi.length;i++){
        pageLi[i].className = '';//�Ƴ����е�class
    }
}
