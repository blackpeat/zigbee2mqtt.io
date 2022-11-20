"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[76522],{78246:(e,t,a)=>{a.r(t),a.d(t,{data:()=>s});const s={key:"v-1b1006eb",path:"/devices/TS0601_gas_sensor.html",title:"TuYa TS0601_gas_sensor control via MQTT",lang:"en-US",frontmatter:{title:"TuYa TS0601_gas_sensor control via MQTT",description:"Integrate your TuYa TS0601_gas_sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-05-01T14:47:09.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Gas (binary)",slug:"gas-binary",children:[]},{level:3,title:"Self_test (binary)",slug:"self-test-binary",children:[]},{level:3,title:"Self_test_result (enum)",slug:"self-test-result-enum",children:[]},{level:3,title:"Fault_alarm (binary)",slug:"fault-alarm-binary",children:[]},{level:3,title:"Silence (binary)",slug:"silence-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS0601_gas_sensor.md",git:{updatedTime:1668935016e3}}},71825:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const s=(0,a(66252).uE)('<h1 id="tuya-ts0601-gas-sensor" tabindex="-1"><a class="header-anchor" href="#tuya-ts0601-gas-sensor" aria-hidden="true">#</a> TuYa TS0601_gas_sensor</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS0601_gas_sensor</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>gas sensor</td></tr><tr><td>Exposes</td><td>gas, self_test, self_test_result, fault_alarm, silence, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS0601_gas_sensor.jpg" alt="TuYa TS0601_gas_sensor"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="gas-binary" tabindex="-1"><a class="header-anchor" href="#gas-binary" aria-hidden="true">#</a> Gas (binary)</h3><p>Indicates whether the device detected gas. Value can be found in the published state on the <code>gas</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> gas is ON, if <code>false</code> OFF.</p><h3 id="self-test-binary" tabindex="-1"><a class="header-anchor" href="#self-test-binary" aria-hidden="true">#</a> Self_test (binary)</h3><p>Indicates whether the device is being self-tested. Value can be found in the published state on the <code>self_test</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;self_test&quot;: NEW_VALUE}</code>. If value equals <code>true</code> self_test is ON, if <code>false</code> OFF.</p><h3 id="self-test-result-enum" tabindex="-1"><a class="header-anchor" href="#self-test-result-enum" aria-hidden="true">#</a> Self_test_result (enum)</h3><p>Result of the self-test. Value can be found in the published state on the <code>self_test_result</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>checking</code>, <code>success</code>, <code>failure</code>, <code>others</code>.</p><h3 id="fault-alarm-binary" tabindex="-1"><a class="header-anchor" href="#fault-alarm-binary" aria-hidden="true">#</a> Fault_alarm (binary)</h3><p>Indicates whether a fault was detected. Value can be found in the published state on the <code>fault_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> fault_alarm is ON, if <code>false</code> OFF.</p><h3 id="silence-binary" tabindex="-1"><a class="header-anchor" href="#silence-binary" aria-hidden="true">#</a> Silence (binary)</h3><p>Silence the alarm. Value can be found in the published state on the <code>silence</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silence&quot;: NEW_VALUE}</code>. If value equals <code>true</code> silence is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),d={},i=(0,a(83744).Z)(d,[["render",function(e,t){return s}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,s]of t)e[a]=s;return e}}}]);