/****************************************************************************
 Copyright (c) 2015-2016 Chukong Technologies Inc.
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

var carouselLayer = cc.Layer.extend({
    
    ctor: function(content) {
        this._super();

        var layer_1 = new cc.Layer();
        this.addChild(layer_1);

        var visibleSize = cc.director.getVisibleSize();
        var visibleOrigin = cc.director.getVisibleOrigin();



        var bgSprite = cc.Sprite("bj.png")
        // var bgSprite = cc.Sprite(g_resources[1])
        var bgSize = bgSprite.getContentSize();

        bgSprite.setScale(visibleSize.width / bgSize.width,  visibleSize.height / bgSize.height );
        bgSprite.setPosition( visibleOrigin.x + visibleSize.width / 2, visibleOrigin.y + visibleSize.height / 2 );
        layer_1.addChild(bgSprite,0);


        cc.loader.load(["astr.plist"],function(){



            cc.spriteFrameCache.addSpriteFrames("astr.plist");
            var frame =  cc.Sprite("#b-venus.png");
            layer_1.addChild(frame );
            var frameSize = frame.getContentSize();
            frame.x = visibleSize.width/4;
            frame.y = visibleSize.height/1.3;
            // frame.y = visibleSize.height/2;
            frame.setScale(visibleSize.width /frameSize.width*.24,visibleSize.height/frameSize.height*.4)

            var frame1 =  cc.Sprite("#a-mercury.png");
            layer_1.addChild(frame1 );
            frame1.x = visibleSize.width/2;
            frame1.y = visibleSize.height/1.3;
            // frame1.y = visibleSize.height/2;
            frame1.setScale(visibleSize.width /frameSize.width*.24,visibleSize.height/frameSize.height*.4)

            var frame2 =  cc.Sprite("#c-earth.png")
            layer_1.addChild(frame2 );
            frame2.x = visibleSize.width/1.35;
            frame2.y = visibleSize.height/1.3;
            // frame2.y = visibleSize.height/2;
            frame2.setScale(visibleSize.width /frameSize.width*.24,visibleSize.height/frameSize.height*.4)

            var frame3 =  cc.Sprite("#d-mars.png")
            layer_1.addChild(frame3 );
            frame3.x = visibleSize.width/4;
            frame3.y = visibleSize.height/2.5;
            frame3.setScale(visibleSize.width /frameSize.width*.24,visibleSize.height/frameSize.height*.4)

            var frame4 =  cc.Sprite("#e-jupiter.png")
            layer_1.addChild(frame4 );
            frame4.x = visibleSize.width/2;
            frame4.y = visibleSize.height/2.5;
            frame4.setScale(visibleSize.width /frameSize.width*.24,visibleSize.height/frameSize.height*.4)

            var frame5 =  cc.Sprite("#f-saturn.png")
            layer_1.addChild(frame5 );
            frame5.x = visibleSize.width/1.35;
            frame5.y = visibleSize.height/2.5;
            frame5.setScale(visibleSize.width /frameSize.width*.24,visibleSize.height/frameSize.height*.4)


        });
    }

});

var CarouselScene = {
    create: function (layer_1) {
        var scenea = new cc.Scene();
        var layer = new carouselLayer(layer_1);
        scenea.addChild(layer);

        return scenea;
    }
};