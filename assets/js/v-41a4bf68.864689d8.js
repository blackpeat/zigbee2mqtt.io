"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[11512],{43611:(e,t,c)=>{c.r(t),c.d(t,{data:()=>a});const a={key:"v-41a4bf68",path:"/devices/DMS-300ZB.html",title:"ShinaSystem DMS-300ZB control via MQTT",lang:"en-US",frontmatter:{title:"ShinaSystem DMS-300ZB control via MQTT",description:"Integrate your ShinaSystem DMS-300ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Occupancy_in (binary)",slug:"occupancy-in-binary",children:[]},{level:3,title:"Occupancy_out (binary)",slug:"occupancy-out-binary",children:[]},{level:3,title:"Occupancy_or (binary)",slug:"occupancy-or-binary",children:[]},{level:3,title:"Occupancy_and (binary)",slug:"occupancy-and-binary",children:[]},{level:3,title:"Occupancy_timeout (numeric)",slug:"occupancy-timeout-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/DMS-300ZB.md",git:{updatedTime:1668935016e3}}},54005:(e,t,c)=>{c.r(t),c.d(t,{default:()=>h});var a=c(66252);const o=(0,a.uE)('<h1 id="shinasystem-dms-300zb" tabindex="-1"><a class="header-anchor" href="#shinasystem-dms-300zb" aria-hidden="true">#</a> ShinaSystem DMS-300ZB</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>DMS-300ZB</td></tr><tr><td>Vendor</td><td>ShinaSystem</td></tr><tr><td>Description</td><td>SiHAS dual motion sensor</td></tr><tr><td>Exposes</td><td>battery, voltage, occupancy_in, occupancy_out, occupancy_or, occupancy_and, occupancy_timeout, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/DMS-300ZB.jpg" alt="ShinaSystem DMS-300ZB"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),i=(0,a.Uk)("This device supports OTA updates, for more information see "),d=(0,a.Uk)("OTA updates"),n=(0,a.Uk)("."),u=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),r=(0,a.Uk)("How to use device type specific configuration"),s=(0,a.uE)('<ul><li><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="occupancy-in-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-in-binary" aria-hidden="true">#</a> Occupancy_in (binary)</h3><p>Indicates whether &quot;IN&quot; Sensor of the device detected occupancy. Value can be found in the published state on the <code>occupancy_in</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy_in is ON, if <code>false</code> OFF.</p><h3 id="occupancy-out-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-out-binary" aria-hidden="true">#</a> Occupancy_out (binary)</h3><p>Indicates whether &quot;OUT&quot; Sensor of the device detected occupancy. Value can be found in the published state on the <code>occupancy_out</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy_out is ON, if <code>false</code> OFF.</p><h3 id="occupancy-or-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-or-binary" aria-hidden="true">#</a> Occupancy_or (binary)</h3><p>Indicates whether &quot;IN or OUT&quot; Sensor of the device detected occupancy. Value can be found in the published state on the <code>occupancy_or</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy_or is ON, if <code>false</code> OFF.</p><h3 id="occupancy-and-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-and-binary" aria-hidden="true">#</a> Occupancy_and (binary)</h3><p>Indicates whether &quot;IN and OUT&quot; Sensor of the device detected occupancy. Value can be found in the published state on the <code>occupancy_and</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy_and is ON, if <code>false</code> OFF.</p><h3 id="occupancy-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-timeout-numeric" aria-hidden="true">#</a> Occupancy_timeout (numeric)</h3><p>Value can be found in the published state on the <code>occupancy_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>second</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),l={},h=(0,c(83744).Z)(l,[["render",function(e,t){const c=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("p",null,[i,(0,a.Wm)(c,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[d])),_:1}),n]),u,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(c,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[r])),_:1})])]),s],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[c,a]of t)e[c]=a;return e}}}]);