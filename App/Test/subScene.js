
SubScene = cc.Scene.extend({
    ctor: function(){
        this._super();

        var visibleSize = cc.director.getVisibleSize();
        var visibleOrigin = cc.director.getVisibleOrigin();

        var btn = new cc.MenuItemFont("Go Details Scene", function(sender) {
            cc.director.replaceScene( new DetailsScene() );
        }, this);
        var menu = new cc.Menu( btn );
        menu.setPosition( visibleOrigin.x + visibleSize.width / 2, visibleOrigin.y + visibleSize.height / 2 );
        this.addChild( menu );
    }
});
