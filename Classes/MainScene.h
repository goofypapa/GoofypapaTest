//
//  MainScene.h
//  com.goofypapa.GoofypapaTest-mobile
//
//  Created by 吴思 on 2018/12/4.
//

#ifndef __MAIN_SCENE_H__
#define __MAIN_SCENE_H__

#include "cocos2d.h"

class MainScene: public cocos2d::Scene
{
public:
    CREATE_FUNC( MainScene );
    
protected:
    virtual bool init( void ) override;
};

#endif //__MAIN_SCENE_H__
