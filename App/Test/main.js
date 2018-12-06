
//
//  test.js
//  com.goofypapa.GoofypapaTest-mobile
//
//  Created by 吴思 on 2018/12/4.
//
require('App/Test/mainScene.js');
require('App/Test/subScene.js');
require('App/Test/detailsScene.js');

Main = cc.ComponentJS.extend({
    onEnter: function() {

        jsb.fileUtils.addSearchPath( "App/Test/res" );
        var scene = this.getOwner();

        var layer = new MainSceneLayer();
        scene.addChild(layer);
    },
    update: function(dt){

    }
});

