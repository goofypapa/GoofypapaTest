
MainSceneLayer = cc.Layer.extend({
    ctor: function(){

        this._super();

        var visibleSize = cc.director.getVisibleSize();
        var visibleOrigin = cc.director.getVisibleOrigin();

        console.log( "------->" + JSON.stringify( visibleSize ) );
        console.log( "------->" + JSON.stringify( visibleOrigin ) );

        var sprite = new cc.Sprite( "HelloWorld.png" );
        var spriteSize = sprite.getContentSize();
        sprite.setPosition( visibleOrigin.x + visibleSize.width - spriteSize.width / 2, visibleOrigin.y + spriteSize.height / 2 );
        this.addChild( sprite );

        console.log( "==============" + JSON.stringify( spriteSize ) );

        var btn = new cc.MenuItemFont("Go Sub Scene", function(sender) {
            cc.director.replaceScene( new SubScene() );
        }, this);
        var menu = new cc.Menu( btn );
        menu.setPosition( visibleOrigin.x + visibleSize.width / 2, visibleOrigin.y + visibleSize.height / 2 );
        this.addChild( menu );
    }
});

var MainScene = {
    create: function(){
        var scene = new cc.Scene();
        var layer = new MainSceneLayer();
        scene.addChild( layer );
        return scene;
    }
};
