"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30041],{49196:(t,e,d)=>{d.r(e),d.d(e,{data:()=>a});const a={key:"v-0463160c",path:"/devices/E2001_E2002.html",title:"IKEA E2001/E2002 control via MQTT",lang:"en-US",frontmatter:{title:"IKEA E2001/E2002 control via MQTT",description:"Integrate your IKEA E2001/E2002 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-07-01T18:17:29.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Button -> action mapping",slug:"button-action-mapping",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E2001_E2002.md",git:{updatedTime:1668935016e3}}},94004:(t,e,d)=>{d.r(e),d.d(e,{default:()=>u});var a=d(66252);const r=(0,a.uE)('<h1 id="ikea-e2001-e2002" tabindex="-1"><a class="header-anchor" href="#ikea-e2001-e2002" aria-hidden="true">#</a> IKEA E2001/E2002</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E2001/E2002</td></tr><tr><td>Vendor</td><td>IKEA</td></tr><tr><td>Description</td><td>STYRBAR remote control</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/E2001-E2002.jpg" alt="IKEA E2001/E2002"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the switch to Zigbee2MQTT by pressing the pair button (found under the back cover next to the battery) 4 times in a row within 5 seconds. The red light on the side should flash a few times and then turn off. After a few seconds it turns back on and pulsate. When connected, the light turns off.</p><h3 id="button-action-mapping" tabindex="-1"><a class="header-anchor" href="#button-action-mapping" aria-hidden="true">#</a> Button -&gt; <code>action</code> mapping</h3><table><thead><tr><th>Icon</th><th>Action</th><th>Exposed Action</th></tr></thead><tbody><tr><td>Light large ( top )</td><td>push</td><td>on</td></tr><tr><td>Light large ( top )</td><td>hold</td><td>brightness_move_up</td></tr><tr><td>Light large ( top )</td><td>release</td><td>brightness_stop</td></tr><tr><td>-----</td><td>-----</td><td>-----</td></tr><tr><td>Light small ( bottom )</td><td>push</td><td>off</td></tr><tr><td>Light small ( bottom )</td><td>hold</td><td>brightness_move_down</td></tr><tr><td>Light small ( bottom )</td><td>release</td><td>brightness_stop</td></tr><tr><td>-----</td><td>-----</td><td>-----</td></tr><tr><td>Arrow left</td><td>push</td><td>arrow_left_click</td></tr><tr><td>Arrow left</td><td>hold</td><td>arrow_left_hold</td></tr><tr><td>Arrow left</td><td>release</td><td>arrow_left_release</td></tr><tr><td>-----</td><td>-----</td><td>-----</td></tr><tr><td>Arrow right</td><td>push</td><td>arrow_right_click</td></tr><tr><td>Arrow right</td><td>hold</td><td>arrow_right_hold</td></tr><tr><td>Arrow right</td><td>release</td><td>arrow_right_release</td></tr></tbody></table><p>For the arrow buttons it seems that the hold/move action takes a bit longer to be send.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',9),i=(0,a.Uk)("This device supports OTA updates, for more information see "),o=(0,a.Uk)("OTA updates"),n=(0,a.Uk)("."),s=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),l=(0,a.Uk)("How to use device type specific configuration"),c=(0,a.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>arrow_left_click</code>, <code>arrow_right_click</code>, <code>arrow_left_hold</code>, <code>arrow_right_hold</code>, <code>arrow_left_release</code>, <code>arrow_right_release</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),h={},u=(0,d(83744).Z)(h,[["render",function(t,e){const d=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[i,(0,a.Wm)(d,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[o])),_:1}),n]),s,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(d,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[l])),_:1})])]),c],64)}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[d,a]of e)t[d]=a;return t}}}]);