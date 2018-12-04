//
//  JsScene.h
//  com.goofypapa.GoofypapaTest-mobile
//
//  Created by 吴思 on 2018/12/4.
//

#ifndef __JS_SCENE_H__
#define __JS_SCENE_H__

#include "cocos2d.h"
#include <string>

class JsScene: public cocos2d::Scene
{
public:
    static cocos2d::Scene * create( const std::string & p_fileName );
protected:
    CREATE_FUNC( JsScene );
    virtual bool init( void ) override;
    virtual bool initWithFileName( const std::string & p_fileName );
};


#endif //__JS_SCENE_H__
