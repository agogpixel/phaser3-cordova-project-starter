/*! For license information please see vendors~phaser~gameobjects~phaser~physics.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1257:function(t,e,i){var n=i(4),r=i(4);n=i(1258),r=i(1259),t.exports={renderWebGL:n,renderCanvas:r}},1258:function(t,e){t.exports=function(t,e,i,n){i.addToRenderList(e),this.pipeline.batchSprite(e,i,n)}},1259:function(t,e){t.exports=function(t,e,i,n){i.addToRenderList(e),t.batchSprite(e,e.frame,i,n)}},128:function(t,e,i){var n=i(294),r=i(3),s=i(82),a=i(12),l=i(220),h=i(5),o=i(9),c=i(10),u=i(494),d=i(160),f=i(67),p=new r({Extends:a,initialize:function(t,e,i){a.call(this),i?e&&!Array.isArray(e)&&(e=[e]):Array.isArray(e)?c(e[0])&&(i=e,e=null):c(e)&&(i=e,e=null),this.scene=t,this.children=new d,this.isParent=!0,this.type="Group",this.classType=h(i,"classType",f),this.name=h(i,"name",""),this.active=h(i,"active",!0),this.maxSize=h(i,"maxSize",-1),this.defaultKey=h(i,"defaultKey",null),this.defaultFrame=h(i,"defaultFrame",null),this.runChildUpdate=h(i,"runChildUpdate",!1),this.createCallback=h(i,"createCallback",null),this.removeCallback=h(i,"removeCallback",null),this.createMultipleCallback=h(i,"createMultipleCallback",null),this.internalCreateCallback=h(i,"internalCreateCallback",null),this.internalRemoveCallback=h(i,"internalRemoveCallback",null),e&&this.addMultiple(e),i&&this.createMultiple(i),this.on(s.ADDED_TO_SCENE,this.addedToScene,this),this.on(s.REMOVED_FROM_SCENE,this.removedFromScene,this)},addedToScene:function(){this.scene.sys.updateList.add(this)},removedFromScene:function(){this.scene.sys.updateList.remove(this)},create:function(t,e,i,n,r,s){if(void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=this.defaultKey),void 0===n&&(n=this.defaultFrame),void 0===r&&(r=!0),void 0===s&&(s=!0),this.isFull())return null;var a=new this.classType(this.scene,t,e,i,n);return a.addToDisplayList(this.scene.sys.displayList),a.addToUpdateList(),a.visible=r,a.setActive(s),this.add(a),a},createMultiple:function(t){if(this.isFull())return[];Array.isArray(t)||(t=[t]);var e=[];if(t[0].key)for(var i=0;i<t.length;i++){var n=this.createFromConfig(t[i]);e=e.concat(n)}return e},createFromConfig:function(t){if(this.isFull())return[];this.classType=h(t,"classType",this.classType);var e=h(t,"key",void 0),i=h(t,"frame",null),r=h(t,"visible",!0),s=h(t,"active",!0),a=[];if(void 0===e)return a;Array.isArray(e)||(e=[e]),Array.isArray(i)||(i=[i]);var l=h(t,"repeat",0),c=h(t,"randomKey",!1),d=h(t,"randomFrame",!1),f=h(t,"yoyo",!1),p=h(t,"quantity",!1),v=h(t,"frameQuantity",1),m=h(t,"max",0),y=u(e,i,{max:m,qty:p||v,random:c,randomB:d,repeat:l,yoyo:f});t.createCallback&&(this.createCallback=t.createCallback),t.removeCallback&&(this.removeCallback=t.removeCallback);for(var S=0;S<y.length;S++){var g=this.create(0,0,y[S].a,y[S].b,r,s);if(!g)break;a.push(g)}var b=o(t,"setXY.x",0),A=o(t,"setXY.y",0),C=o(t,"setXY.stepX",0),F=o(t,"setXY.stepY",0);n.SetXY(a,b,A,C,F);var T=o(t,"setRotation.value",0),k=o(t,"setRotation.step",0);n.SetRotation(a,T,k);var x=o(t,"setScale.x",1),D=o(t,"setScale.y",x),R=o(t,"setScale.stepX",0),L=o(t,"setScale.stepY",0);n.SetScale(a,x,D,R,L);var Y=o(t,"setOrigin.x",.5),O=o(t,"setOrigin.y",Y),X=o(t,"setOrigin.stepX",0),M=o(t,"setOrigin.stepY",0);n.SetOrigin(a,Y,O,X,M);var z=o(t,"setAlpha.value",1),E=o(t,"setAlpha.step",0);n.SetAlpha(a,z,E);var w=o(t,"setDepth.value",0),P=o(t,"setDepth.step",0);n.SetDepth(a,w,P);var V=o(t,"setScrollFactor.x",1),U=o(t,"setScrollFactor.y",V),H=o(t,"setScrollFactor.stepX",0),B=o(t,"setScrollFactor.stepY",0);n.SetScrollFactor(a,V,U,H,B);var N=h(t,"hitArea",null),G=h(t,"hitAreaCallback",null);N&&n.SetHitArea(a,N,G);var I=h(t,"gridAlign",!1);return I&&n.GridAlign(a,I),this.createMultipleCallback&&this.createMultipleCallback.call(this,a),a},preUpdate:function(t,e){if(this.runChildUpdate&&0!==this.children.size)for(var i=this.children.entries.slice(),n=0;n<i.length;n++){var r=i[n];r.active&&r.update(t,e)}},add:function(t,e){return void 0===e&&(e=!1),this.isFull()||(this.children.set(t),this.internalCreateCallback&&this.internalCreateCallback.call(this,t),this.createCallback&&this.createCallback.call(this,t),e&&(t.addToDisplayList(this.scene.sys.displayList),t.addToUpdateList()),t.on(s.DESTROY,this.remove,this)),this},addMultiple:function(t,e){if(void 0===e&&(e=!1),Array.isArray(t))for(var i=0;i<t.length;i++)this.add(t[i],e);return this},remove:function(t,e,i){return void 0===e&&(e=!1),void 0===i&&(i=!1),this.children.contains(t)?(this.children.delete(t),this.internalRemoveCallback&&this.internalRemoveCallback.call(this,t),this.removeCallback&&this.removeCallback.call(this,t),t.off(s.DESTROY,this.remove,this),i?t.destroy():e&&(t.removeFromDisplayList(),t.removeFromUpdateList()),this):this},clear:function(t,e){void 0===t&&(t=!1),void 0===e&&(e=!1);for(var i=this.children,n=0;n<i.size;n++){var r=i.entries[n];r.off(s.DESTROY,this.remove,this),e?r.destroy():t&&(r.removeFromDisplayList(),r.removeFromUpdateList())}return this.children.clear(),this},contains:function(t){return this.children.contains(t)},getChildren:function(){return this.children.entries},getLength:function(){return this.children.size},getMatching:function(t,e,i,n){return l(this.children.entries,t,e,i,n)},getFirst:function(t,e,i,n,r,s,a){return this.getHandler(!0,1,t,e,i,n,r,s,a)},getFirstNth:function(t,e,i,n,r,s,a,l){return this.getHandler(!0,t,e,i,n,r,s,a,l)},getLast:function(t,e,i,n,r,s,a){return this.getHandler(!1,1,t,e,i,n,r,s,a)},getLastNth:function(t,e,i,n,r,s,a,l){return this.getHandler(!1,t,e,i,n,r,s,a,l)},getHandler:function(t,e,i,n,r,s,a,l,h){var o,c;void 0===i&&(i=!1),void 0===n&&(n=!1);var u=0,d=this.children.entries;if(t)for(c=0;c<d.length;c++)if((o=d[c]).active===i){if(++u===e)break}else o=null;else for(c=d.length-1;c>=0;c--)if((o=d[c]).active===i){if(++u===e)break}else o=null;return o?("number"==typeof r&&(o.x=r),"number"==typeof s&&(o.y=s),o):n?this.create(r,s,a,l,h):null},get:function(t,e,i,n,r){return this.getFirst(!1,!0,t,e,i,n,r)},getFirstAlive:function(t,e,i,n,r,s){return this.getFirst(!0,t,e,i,n,r,s)},getFirstDead:function(t,e,i,n,r,s){return this.getFirst(!1,t,e,i,n,r,s)},playAnimation:function(t,e){return n.PlayAnimation(this.children.entries,t,e),this},isFull:function(){return-1!==this.maxSize&&this.children.size>=this.maxSize},countActive:function(t){void 0===t&&(t=!0);for(var e=0,i=0;i<this.children.size;i++)this.children.entries[i].active===t&&e++;return e},getTotalUsed:function(){return this.countActive()},getTotalFree:function(){var t=this.getTotalUsed();return(-1===this.maxSize?999999999999:this.maxSize)-t},setActive:function(t){return this.active=t,this},setName:function(t){return this.name=t,this},propertyValueSet:function(t,e,i,r,s){return n.PropertyValueSet(this.children.entries,t,e,i,r,s),this},propertyValueInc:function(t,e,i,r,s){return n.PropertyValueInc(this.children.entries,t,e,i,r,s),this},setX:function(t,e){return n.SetX(this.children.entries,t,e),this},setY:function(t,e){return n.SetY(this.children.entries,t,e),this},setXY:function(t,e,i,r){return n.SetXY(this.children.entries,t,e,i,r),this},incX:function(t,e){return n.IncX(this.children.entries,t,e),this},incY:function(t,e){return n.IncY(this.children.entries,t,e),this},incXY:function(t,e,i,r){return n.IncXY(this.children.entries,t,e,i,r),this},shiftPosition:function(t,e,i){return n.ShiftPosition(this.children.entries,t,e,i),this},angle:function(t,e){return n.Angle(this.children.entries,t,e),this},rotate:function(t,e){return n.Rotate(this.children.entries,t,e),this},rotateAround:function(t,e){return n.RotateAround(this.children.entries,t,e),this},rotateAroundDistance:function(t,e,i){return n.RotateAroundDistance(this.children.entries,t,e,i),this},setAlpha:function(t,e){return n.SetAlpha(this.children.entries,t,e),this},setTint:function(t,e,i,r){return n.SetTint(this.children.entries,t,e,i,r),this},setOrigin:function(t,e,i,r){return n.SetOrigin(this.children.entries,t,e,i,r),this},scaleX:function(t,e){return n.ScaleX(this.children.entries,t,e),this},scaleY:function(t,e){return n.ScaleY(this.children.entries,t,e),this},scaleXY:function(t,e,i,r){return n.ScaleXY(this.children.entries,t,e,i,r),this},setDepth:function(t,e){return n.SetDepth(this.children.entries,t,e),this},setBlendMode:function(t){return n.SetBlendMode(this.children.entries,t),this},setHitArea:function(t,e){return n.SetHitArea(this.children.entries,t,e),this},shuffle:function(){return n.Shuffle(this.children.entries),this},kill:function(t){this.children.contains(t)&&t.setActive(!1)},killAndHide:function(t){this.children.contains(t)&&(t.setActive(!1),t.setVisible(!1))},setVisible:function(t,e,i){return n.SetVisible(this.children.entries,t,e,i),this},toggleVisible:function(){return n.ToggleVisible(this.children.entries),this},destroy:function(t,e){void 0===t&&(t=!1),void 0===e&&(e=!1),this.scene&&!this.ignoreDestroy&&(this.emit(s.DESTROY,this),this.removeAllListeners(),this.scene.sys.updateList.remove(this),this.clear(e,t),this.scene=void 0,this.children=void 0)}});t.exports=p},129:function(t,e,i){var n=i(3),r=i(14),s=i(16),a=i(1257),l=new n({Extends:s,Mixins:[r.Alpha,r.BlendMode,r.Depth,r.Flip,r.GetBounds,r.Mask,r.Origin,r.Pipeline,r.ScrollFactor,r.Size,r.TextureCrop,r.Tint,r.Transform,r.Visible,a],initialize:function(t,e,i,n,r){s.call(this,t,"Image"),this._crop=this.resetCropObject(),this.setTexture(n,r),this.setPosition(e,i),this.setSizeToFrame(),this.setOriginFromFrame(),this.initPipeline()}});t.exports=l},248:function(t,e,i){var n=i(4),r=i(4);n=i(249),r=i(250),t.exports={renderWebGL:n,renderCanvas:r}},249:function(t,e){t.exports=function(t,e,i,n){i.addToRenderList(e),e.pipeline.batchSprite(e,i,n)}},250:function(t,e){t.exports=function(t,e,i,n){i.addToRenderList(e),t.batchSprite(e,e.frame,i,n)}},67:function(t,e,i){var n=i(112),r=i(3),s=i(14),a=i(16),l=i(248),h=new r({Extends:a,Mixins:[s.Alpha,s.BlendMode,s.Depth,s.Flip,s.GetBounds,s.Mask,s.Origin,s.Pipeline,s.ScrollFactor,s.Size,s.TextureCrop,s.Tint,s.Transform,s.Visible,l],initialize:function(t,e,i,r,s){a.call(this,t,"Sprite"),this._crop=this.resetCropObject(),this.anims=new n(this),this.setTexture(r,s),this.setPosition(e,i),this.setSizeToFrame(),this.setOriginFromFrame(),this.initPipeline()},addedToScene:function(){this.scene.sys.updateList.add(this)},removedFromScene:function(){this.scene.sys.updateList.remove(this)},preUpdate:function(t,e){this.anims.update(t,e)},play:function(t,e){return this.anims.play(t,e)},playReverse:function(t,e){return this.anims.playReverse(t,e)},playAfterDelay:function(t,e){return this.anims.playAfterDelay(t,e)},playAfterRepeat:function(t,e){return this.anims.playAfterRepeat(t,e)},chain:function(t){return this.anims.chain(t)},stop:function(){return this.anims.stop()},stopAfterDelay:function(t){return this.anims.stopAfterDelay(t)},stopAfterRepeat:function(t){return this.anims.stopAfterRepeat(t)},stopOnFrame:function(t){return this.anims.stopOnFrame(t)},toJSON:function(){return s.ToJSON(this)},preDestroy:function(){this.anims.destroy(),this.anims=void 0}});t.exports=h}}]);