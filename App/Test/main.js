
//
//  test.js
//  com.goofypapa.GoofypapaTest-mobile
//
//  Created by 吴思 on 2018/12/4.
//

require('script/jsb.js');

Main = cc.ComponentJS.extend({
    onEnter: function() {
        var scene = this.getOwner();

        var visibleSize = cc.director.getVisibleSize();
        var visibleOrigin = cc.director.getVisibleOrigin();

        console.log( "------->" + JSON.stringify( visibleSize ) );
        console.log( "------->" + JSON.stringify( visibleOrigin ) );
                
        jsb.fileUtils.addSearchPath( "App/Test/res" );


        var label = new cc.LabelTTF( "-----haha------", "fonts/Marker Felt.ttf", 36);
        label.setColor(cc.color(255, 0, 0));
        label.setPosition( visibleOrigin.x + visibleSize.width/2, visibleOrigin.y + visibleSize.height/2);

        scene.addChild( label );

        var sprite = new cc.Sprite( "HelloWorld.png" );
        var spriteSize = sprite.getContentSize();
        sprite.setPosition( visibleOrigin.x + visibleSize.width - spriteSize.width / 2, visibleOrigin.y + spriteSize.height / 2 );
        scene.addChild( sprite );

        console.log( "==============" + JSON.stringify( spriteSize ) );
    },
    update: function(dt){

    }
});

