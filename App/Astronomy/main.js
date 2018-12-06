

//
//  test.js
//  com.goofypapa.GoofypapaTest-mobile
//
//  Created by 吴思 on 2018/12/4.
//

require('script/jsb.js');
require('App/Astronomy/carouselscene.js');

Main = cc.ComponentJS.extend({
                 onEnter: function() {
                     jsb.fileUtils.addSearchPath("App/Astronomy/res",true);
                     var scenea = CarouselScene.create("You Lose");
                     cc.director.runScene(scenea);

                 },
                 update: function(dt){

                 }
});

