/**
 *@author     黄佳
 *@date       2019/12/12  17:46
 *@Copyright 天源迪科信息技术股份有限公司
 *@Description
 */
import _ from 'lodash';
import './style.css';
import Data from './data.xml';
import cat from './assets/cat.jpg';
function component() {
    let element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // 将图像添加到我们已经存在的 div 中。
    var myIcon = new Image();
    console.log(cat)
    myIcon.src = cat;
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());

