/**
 *@author     黄佳
 *@date       2019/12/12  17:46
 *@Copyright 天源迪科信息技术股份有限公司
 *@Description
 */
import _ from 'lodash';
import printMe from './print.js';
function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = '嘿！点击这里，然后查看 console！';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

