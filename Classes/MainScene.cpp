//
//  MainScene.cpp
//  com.goofypapa.GoofypapaTest-mobile
//
//  Created by 吴思 on 2018/12/4.
//

#include "MainScene.h"
#include "JsScene.h"

USING_NS_CC;

bool MainScene::init( void )
{
    if( !Scene::init() )
    {
        return false;
    }
    
    auto t_visibleSizeHalf = Director::getInstance()->getVisibleSize() * 0.5f;
    Vec2 t_origin = Director::getInstance()->getVisibleOrigin();
    
    auto t_itemTest = MenuItemFont::create( "Test", []( Ref * p_target ){
        Director::getInstance()->replaceScene( JsScene::create( "Test/main.js" ) );
    } );
    
    t_itemTest->setPosition( Vec2( t_origin.x + t_visibleSizeHalf.width, t_origin.y + t_visibleSizeHalf.height * 1.5f ) );
    
    auto t_itemAstronomy = MenuItemFont::create( "Astronomy", []( Ref * p_target ){
        Director::getInstance()->replaceScene( JsScene::create( "Astronomy/main.js" ) );
    } );
    t_itemAstronomy->setPosition( Vec2( t_origin.x + t_visibleSizeHalf.width, t_origin.y + t_visibleSizeHalf.height ) );
    
    auto t_itemABC = MenuItemFont::create( "ABC", []( Ref * p_target ){
        Director::getInstance()->replaceScene( JsScene::create( "ABC/main.js" ) );
    } );
    t_itemABC->setPosition( Vec2( t_origin.x + t_visibleSizeHalf.width, t_origin.y + t_visibleSizeHalf.height * 0.5f ) );
    
    
    auto t_menu = Menu::create( t_itemTest, t_itemAstronomy, t_itemABC, NULL );
    t_menu->setPosition( Vec2::ZERO );
    addChild( t_menu );
    
    return true;
}
