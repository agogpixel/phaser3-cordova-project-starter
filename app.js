(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1229:function(e,t,n){e.exports=n.p+"9194eb7ff502cb116d76f5e2408378cc.png"},1541:function(e,t,n){"use strict";n.r(t),n.d(t,"app",(function(){return s})),n.d(t,"gameConfig",(function(){return i}));var a=n(0);function s(e){return Object(a.a)(this,void 0,void 0,(function*(){return{game:new Phaser.Game(e)}}))}class r extends Phaser.Scene{constructor(){super("Boot")}init(){}preload(){}create(){this.scene.start("Preload")}}class o extends Phaser.Scene{constructor(){super("Main")}init(){}preload(){}create(){const{centerX:e,centerY:t}=this.cameras.main,n=this.add.image(e,t,"phaser3");this.events.once(Phaser.Scenes.Events.TRANSITION_START,((e,t)=>{n.setAlpha(0),this.tweens.add({targets:n,alpha:1,duration:t,onComplete:()=>{}})}))}}class c extends Phaser.Scene{constructor(){super("Preload")}init(){}preload(){this.load.image("phaser3",n(1229))}create(){this.scene.transition({target:"Main",duration:500,sleep:!1,allowInput:!1,onUpdate:e=>{}})}}const i={type:Phaser.AUTO,parent:"body",dom:{createContainer:!1,behindCanvas:!1,pointerEvents:void 0},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:1280,height:960},plugins:{global:[]},scene:[r,c,o]}}}]);