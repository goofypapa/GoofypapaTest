/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var res = {
    HelloWorld_png : "res/HelloWorld.png",
    bg_png : "res/bj.png",
    back_png : "res/goback.png",
    mercury:"res/a-mercury.png",
    venus:"res/b-venus.png",
    earth:"res/c-earth.png",
    mars:"res/d-mars.png",
    jupiter:"res/e-jupiter.png",
    saturn:"res/f-saturn.png",
    uranus:"res/g-uranus.png",
    neptune:"res/h-neptune.png",
    pluto:"res/i-pluto.png",
    sun:"res/j-sun.png",
    moon:"res/k-moon.png",
    asteroid:"res/l-asteroid.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}