"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.reportFormID=exports.count=exports.report=void 0;var _index=require("../actions/index"),_wxevent=require("./wxevent"),_request=require("./request");function _asyncToGenerator(e){return function(){var a=e.apply(this,arguments);return new Promise(function(i,c){return function t(e,n){try{var r=a[e](n),o=r.value}catch(e){return void c(e)}if(!r.done)return Promise.resolve(o).then(function(e){t("next",e)},function(e){t("throw",e)});i(o)}("next")})}}var regeneratorRuntime=require("../assets/libs/runtime"),report=exports.report=function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(){var s,t,n,r,o,i,c,a,u,p,_,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s={},t=wx.getStorageSync(_index.storageKeys.id),n=t.open_id,r=t.app_id,s=Object.assign(s,{open_id:n},{union_id:""}),e.next=5,(0,_wxevent.getUserInfo)({}).then(function(e){var t=e.userInfo,n=t.nickName,r=t.avatarUrl,o=t.gender,i=t.country,c=t.province,a=t.city;s=Object.assign(s,{gender:o},{wechat_nickname:n,wechat_avatar:r,location_country:i,location_province:c,location_city:a})}).catch(function(e){s=Object.assign(s,{gender:0,wechat_nickname:"",wechat_avatar:"",location_country:"",location_province:"",location_city:""})});case 5:return e.next=7,(0,_wxevent.getSetting)().then(function(e){e.authSetting["scope.userLocation"]?(0,_wxevent.getLocation)({}).then(function(e){var t=e.latitude,n=e.longitude;s=Object.assign(s,{coordinate_longitude:(""+n).slice(0,16),coordinate_latitude:(""+t).slice(0,16)})}).catch(function(e){s=Object.assign(s,{coordinate_longitude:"",coordinate_latitude:""})}):s=Object.assign(s,{coordinate_longitude:"",coordinate_latitude:""})});case 7:return o={},i=wx.getSystemInfoSync(),c=i.brand,a=i.model,u=i.version,p=i.system,_=i.platform,d="",e.next=12,(0,_wxevent.getNetworkType)().then(function(e){d=e.networkType});case 12:o=Object.assign({},{brand:c,model:a,system:p,network:d},{system_version:u,agent:_}),_request.api.post(_index.actions.post.collect,{app_id:r,user:JSON.stringify(s),client:JSON.stringify(o)}).then(function(e){}).catch(function(e){return console.error("report: "+type+" ",e)});case 14:case"end":return e.stop()}},e,void 0)}));return function(){return e.apply(this,arguments)}}(),count=exports.count=function(t){var e=wx.getStorageSync(_index.storageKeys.parent_id)||"",n=wx.getStorageSync(_index.storageKeys.is_old_user)||!1;Object.is(t.type,"")||(t=Object.assign({},t,{parent_user:e,user_is_old:n}),_request.api.post(_index.actions.post.fission_event,t).then(function(e){}).catch(function(e){return console.error("report: "+t.type+" ",e)}))},reportFormID=exports.reportFormID=function(e){var t=e.form_id,n=e.type;if(!Object.is(t,"")){var r=wx.getStorageSync(_index.storageKeys.id),o=r.app_id,i=r.open_id;_request.api.post(_index.actions.post.form_id,{open_id:i,app_id:o,form_id:t}).then(function(e){}).catch(function(e){return console.error("report: "+n+" ",e)})}};