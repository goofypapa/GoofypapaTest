//
//  JsScene.cpp
//  com.goofypapa.GoofypapaTest-mobile
//
//  Created by 吴思 on 2018/12/4.
//

#include "JsScene.h"
#include "scripting/js-bindings/manual/component/CCComponentJS.h"

USING_NS_CC;

cocos2d::Scene * JsScene::create( const std::string & p_fileName )
{
    auto t_result = create();
    
    if( !t_result->initWithFileName( p_fileName ) )
    {
        t_result->release();
        t_result = nullptr;
    }
    
    return t_result;
}

bool JsScene::init( void )
{
    return Scene::init();
}


bool JsScene::initWithFileName( const std::string & p_fileName )
{
    
    ComponentJS * t_componentJs = ComponentJS::create( p_fileName );
    addComponent( t_componentJs );
    
    return true;
}
