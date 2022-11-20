"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[87389],{58011:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-7f7f1278",path:"/devices/HS2WD-E.html",title:"HEIMAN HS2WD-E control via MQTT",lang:"en-US",frontmatter:{title:"HEIMAN HS2WD-E control via MQTT",description:"Integrate your HEIMAN HS2WD-E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Triggering the alarm",slug:"triggering-the-alarm",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Warning (composite)",slug:"warning-composite",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/HS2WD-E.md",git:{updatedTime:1668935016e3}}},49823:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const d=(0,o(66252).uE)('<h1 id="heiman-hs2wd-e" tabindex="-1"><a class="header-anchor" href="#heiman-hs2wd-e" aria-hidden="true">#</a> HEIMAN HS2WD-E</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>HS2WD-E</td></tr><tr><td>Vendor</td><td>HEIMAN</td></tr><tr><td>Description</td><td>Smart siren</td></tr><tr><td>Exposes</td><td>battery, warning, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/HS2WD-E.jpg" alt="HEIMAN HS2WD-E"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="triggering-the-alarm" tabindex="-1"><a class="header-anchor" href="#triggering-the-alarm" aria-hidden="true">#</a> Triggering the alarm</h3><p>The alarm can be trigged by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> message <code>{&quot;warning&quot;: {&quot;duration&quot;: 10, &quot;mode&quot;: &quot;emergency&quot;, &quot;strobe&quot;: false}}</code>.</p><p>Where:</p><ul><li><code>duration</code>: the number of seconds the alarm will be on (max is 1800 seconds)</li><li><code>mode</code>: <code>stop</code> or <code>emergency</code></li><li><code>strobe</code>: <code>true</code> or <code>false</code> will let the strobe flash once during the alarm</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite" aria-hidden="true">#</a> Warning (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe_level&quot;: VALUE, &quot;strobe&quot;: VALUE, &quot;strobe_duty_cycle&quot;: VALUE, &quot;duration&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect). Allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>level</code> (enum): Sound level. Allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe_level</code> (enum): Intensity of the strobe. Allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) during warning. Allowed values: <code>true</code> or <code>false</code></li><li><code>strobe_duty_cycle</code> (numeric): Length of the flash cycle.</li><li><code>duration</code> (numeric): Duration in seconds of the alarm.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),i={},r=(0,o(83744).Z)(i,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);