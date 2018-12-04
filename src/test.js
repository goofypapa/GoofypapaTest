//
//  test.js
//  com.goofypapa.jstest
//
//  Created by 吴思 on 2018/12/4.
//

require('script/jsb.js');

Sprite = cc.ComponentJS.extend({
                               
    onEnter: function() {
        var owner = this.getOwner();


        var label = new cc.LabelTTF( "haha", "fonts/Marker Felt.ttf", 32);
        label.setColor(cc.color(255, 0, 0));
        label.setPosition(cc.winSize.width/2, cc.winSize.height/2);

        owner.addChild( label );

        var sprite = new cc.Sprite( "HelloWorld.png" );
        var spriteSize = sprite.getContentSize();
        sprite.setPosition( spriteSize.width / 2, spriteSize.height / 2 );
        owner.addChild( sprite );

        console.log( "==============" + JSON.stringify( spriteSize ) );

    },
    update: function(dt){

    }
});

