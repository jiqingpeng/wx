"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getLocation=exports.getNetworkType=exports.onAccelerometerChange=exports.stopAccelerometer=exports.startAccelerometer=exports.stopDeviceMotionListening=exports.startDeviceMotionListening=exports.stopGyroscope=exports.startGyroscope=exports.getStorages=exports.getStorage=exports.removeStorages=exports.removeStorage=exports.setStorage=exports.setStorages=exports.saveImage=exports.downloadFile=exports.getSystemInfo=exports.getUserInfo=exports.authorize=exports.openSetting=exports.getSetting=void 0;var _util=require("./util");function _objectDestructuringEmpty(e){if(null==e)throw new TypeError("Cannot destructure undefined")}var getSetting=exports.getSetting=function(){return(0,_util.base)(wx.getSetting)({})},openSetting=exports.openSetting=function(){return(0,_util.base)(wx.openSetting)({})},authorize=exports.authorize=function(e){return(0,_util.base)(wx.authorize)(e)},getUserInfo=exports.getUserInfo=function(e){return(0,_util.base)(wx.getUserInfo)(e)},getSystemInfo=exports.getSystemInfo=function(){return(0,_util.base)(wx.getSystemInfo)({})},downloadFile=exports.downloadFile=function(e){return(0,_util.base)(wx.downloadFile)(e)},saveImage=exports.saveImage=function(e){return(0,_util.base)(wx.saveImageToPhotosAlbum)(e)},setStorages=exports.setStorages=function(e){for(var t=0;t<e.length;t++)wx.setStorage(e[t])},setStorage=exports.setStorage=function(e){return(0,_util.base)(wx.setStorage)(e)},removeStorage=exports.removeStorage=function(e){return _objectDestructuringEmpty(e),(0,_util.base)(wx.removeStorage)(obj)},removeStorages=exports.removeStorages=function(e){for(var t=0;t<e.length;t++)wx.removeStorage(e[t])},getStorage=exports.getStorage=function(e){return(0,_util.base)(wx.getStorage)(e)},getStorages=exports.getStorages=function(e){var t=[];return e.forEach(function(e){return t.push(getStorage({key:e}))}),Promise.all(t)},startGyroscope=exports.startGyroscope=function(e){return(0,_util.base)(wx.startGyroscope)(e)},stopGyroscope=exports.stopGyroscope=function(){return(0,_util.base)(wx.stopGyroscope)({})},startDeviceMotionListening=exports.startDeviceMotionListening=function(e){return(0,_util.base)(wx.startDeviceMotionListening)(e)},stopDeviceMotionListening=exports.stopDeviceMotionListening=function(){return(0,_util.base)(wx.stopDeviceMotionListening)({})},startAccelerometer=exports.startAccelerometer=function(e){return(0,_util.base)(wx.startAccelerometer)(e)},stopAccelerometer=exports.stopAccelerometer=function(){return(0,_util.base)(wx.stopAccelerometer)({})},onAccelerometerChange=exports.onAccelerometerChange=function(e){return(0,_util.base)(wx.onAccelerometerChange)(e)},getNetworkType=exports.getNetworkType=function(){return(0,_util.base)(wx.getNetworkType)({})},getLocation=exports.getLocation=function(e){return(0,_util.base)(wx.getLocation)(e)};