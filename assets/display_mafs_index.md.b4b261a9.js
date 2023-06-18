import{R as u,E as i,N as d,v as h,f as A,p as C}from"./chunks/index.39e48459.js";import{d as p,a as e,c as y,w as l,b as a,i as n,u as t,l as g,e as m,g as s,f as c}from"./chunks/framework.a8c70d05.js";const f=p({__name:"PlaneMafs",setup(r){return(D,F)=>(e(),y(t(i),{height:200},{default:l(()=>[a(t(u),{x:0,y:0},{default:l(()=>[n("I love math!")]),_:1})]),_:1}))}}),_=p({__name:"Zoom",setup(r){return(D,F)=>(e(),y(t(i),{height:400,viewBox:{x:[-.25,.25],y:[-.25,.25],padding:0},zoom:{min:.1,max:2}},{default:l(()=>[a(t(d),{subdivisions:5}),a(t(h),{center:[0,0],radius:1}),a(t(u),{x:1.1,y:.1,attach:t(A).NE},{default:l(()=>[n(" Oh hi! ")]),_:1},8,["attach"])]),_:1}))}}),v=p({__name:"ContainViewbox",setup(r){return(D,F)=>(e(),y(t(i),{viewBox:{x:[-5,5],y:[-5,5]},height:400},{default:l(()=>[a(t(d)),a(t(C),{points:[[-5,-5],[5,-5],[5,5],[-5,5]]})]),_:1}))}}),b=p({__name:"StretchViewbox",setup(r){return(D,F)=>(e(),y(t(i),{height:400,viewBox:{x:[-5,5],y:[-5,5]},preserveAspectRatio:!1},{default:l(()=>[a(t(d)),a(t(C),{points:[[-5,-5],[5,-5],[5,5],[-5,5]]})]),_:1}))}}),E=s("h1",{id:"mafs",tabindex:"-1"},[n("Mafs "),s("a",{class:"header-anchor",href:"#mafs","aria-label":'Permalink to "Mafs"'},"​")],-1),q=s("p",null,"This component is the entrypoint into rendering visualizations. It must wrap all other Mafs components. On its own, it renders a blank canvas.",-1),w=c(`<details class="details custom-block"><summary>Code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Mafs</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Text</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mafs-vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:x</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:y</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">I love math!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details>`,1),x=s("strong",null,"Props",-1),k=s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"Default")])],-1),M=s("td",null,[s("strong",null,"width")],-1),z=s("td",null,[s("strong",null,"height")],-1),P=s("td",null,[s("strong",null,"pan")],-1),T=s("p",null,"Whether to enable panning with the mouse and keyboard",-1),B=s("td",null,[s("strong",null,"zoom")],-1),N=s("p",null,[n("whether to enable zooming with the mouse and keyboard. This can also be an object with "),s("code",null,"min"),n(" and "),s("code",null,"max"),n(" properties to set the scale limits.")],-1),V=s("ul",null,[s("li",null,[s("code",null,"min"),n("should be in the range (0, 1).")]),s("li",null,[s("code",null,"max"),n("should be in the range [1, ∞).")])],-1),R=s("td",null,[s("strong",null,"viewBox")],-1),S=s("p",null,'A way to declare the "area of interest" of your visualizations. Mafs will center and zoom to this area.',-1),I=s("td",null,[s("strong",null,"preserveAspectRatio")],-1),O=s("p",null,"Whether to squish the graph to fill the Mafs viewport or to preserve the aspect ratio of the coordinate space.",-1),Z=s("td",null,[s("strong",null,"onClick")],-1),$=s("p",null,"Called when the view is clicked on, and passed the point where it was clicked.",-1),j=s("td",null,[s("strong",null,"ssr")],-1),W=s("p",null,"Enable rendering on the server side. If false, an empty view will still be rendered, with nothing in it.",-1),H=s("p",null,"Note that server-side rendering complicated graphs can really bloat your HTML.",-1),J=c('<h2 id="sizing" tabindex="-1">Sizing <a class="header-anchor" href="#sizing" aria-label="Permalink to &quot;Sizing&quot;">​</a></h2><p>Mafs accepts a <code>width</code> and <code>height</code> prop. <code>width</code> defaults to <code>auto</code>, which means that Mafs will scale to the width of its container. <code>height</code> defaults to <code>500px</code>, and cannot be set to <code>&quot;auto&quot;</code>.</p><h2 id="zooming-and-panning" tabindex="-1">Zooming and panning <a class="header-anchor" href="#zooming-and-panning" aria-label="Permalink to &quot;Zooming and panning&quot;">​</a></h2><p>Mafs can be zoomed and panned by end users using a variety of input methods. Zooming and panning can be enabled, disabled, and configured via the <code>zoom</code> and <code>pan</code> props.</p><ul><li>The mouse wheel zooms the viewport.</li><li>Pressing and dragging pans the viewport.</li><li>The &quot;pinch&quot; gesture zooms and pans the viewport simultaneously.</li><li>The arrow, <kbd>-</kbd>, and <kbd>+</kbd> keys pan and zoom the viewport, with the <kbd>option</kbd>, <kbd>meta</kbd>, and <kbd>shift</kbd> keys adjusting the speed.</li></ul><p>Panning is enabled by default, but zooming is opt-in. The default zoom limits are <code>0.5-5</code></p>',6),L=c(`<details class="details custom-block"><summary>Code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Mafs</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Cartesian</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Circle</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Text</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CardinalDirection</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mafs-vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">400</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{ x: [-0.25, 0.25], y: [-0.25, 0.25], padding: 0, }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:zoom</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{ min: 0.1, max: 2 }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Cartesian</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:subdivisions</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Circle</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:center</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[0, 0]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:x</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:y</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:attach</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CardinalDirection.NE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            Oh hi!</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><h2 id="viewbox" tabindex="-1">Viewbox <a class="header-anchor" href="#viewbox" aria-label="Permalink to &quot;Viewbox&quot;">​</a></h2><p>When showing a visualization, it&#39;s useful to think of your content as having a useful &quot;viewbox&quot; designating the region in which interesting things are happening. Mafs allows you to specify this with the <code>viewBox</code> prop.</p>`,3),G=c(`<details class="details custom-block"><summary>Code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Mafs</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Cartesian</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Polygon</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mafs-vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{ x: [-5, 5], y: [-5, 5] }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">400</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Cartesian</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Polygon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:points</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[[-5, -5], [5, -5], [5, 5], [-5, 5]]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><h3 id="aspect-ratio-preservation" tabindex="-1">Aspect ratio preservation <a class="header-anchor" href="#aspect-ratio-preservation" aria-label="Permalink to &quot;Aspect ratio preservation&quot;">​</a></h3><p>The <code>preserveAspectRatio</code> prop changes how the viewbox is mapped to the Mafs viewport. Setting it to <code>false</code> will stretch the viewbox to fit the viewport, tossing aside the aspect ratio preservation.</p>`,3),K=c(`<details class="details custom-block"><summary>Code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Mafs</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Cartesian</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Polygon</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mafs-vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">400</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{ x: [-5, 5], y: [-5, 5] }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:preserveAspectRatio</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Cartesian</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Polygon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:points</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[[-5, -5], [5, -5], [5, 5], [-5, 5]]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><p>The only other option is <code>&quot;contain&quot;</code> for now, which is also the default.</p><h3 id="padding" tabindex="-1">Padding <a class="header-anchor" href="#padding" aria-label="Permalink to &quot;Padding&quot;">​</a></h3><p>Mafs adds a padding of <code>0.5</code> to all visualizations by default. To change or remove padding, you can specify <code>padding</code> in the <code>viewBox</code> object.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Mafs</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">{{</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">...,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">padding:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">}}</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {/* ... */}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,5),Y=JSON.parse('{"title":"Mafs","description":"","frontmatter":{},"headers":[],"relativePath":"display/mafs/index.md","filePath":"display/mafs/index.md"}'),Q={name:"display/mafs/index.md"},ss=p({...Q,setup(r){return(D,F)=>{const o=g("w");return e(),m("div",null,[E,q,a(f),w,s("p",null,[x,n(),a(o,null,{default:l(()=>[n("<Mafs ... />")]),_:1})]),s("table",null,[k,s("tbody",null,[s("tr",null,[M,s("td",null,[a(o,null,{default:l(()=>[n('number | "auto"')]),_:1})]),s("td",null,[a(o,null,{default:l(()=>[n("—")]),_:1})])]),s("tr",null,[z,s("td",null,[a(o,null,{default:l(()=>[n("number")]),_:1})]),s("td",null,[a(o,null,{default:l(()=>[n("—")]),_:1})])]),s("tr",null,[P,s("td",null,[a(o,null,{default:l(()=>[n("boolean")]),_:1}),T]),s("td",null,[a(o,null,{default:l(()=>[n("true")]),_:1})])]),s("tr",null,[B,s("td",null,[a(o,null,{default:l(()=>[n("boolean | { min: number; max: number; }")]),_:1}),N,V]),s("td",null,[a(o,null,{default:l(()=>[n("false")]),_:1})])]),s("tr",null,[R,s("td",null,[a(o,null,{default:l(()=>[n("{ x?: Vector2; y?: Vector2; padding?: number | undefined; } | undefined")]),_:1}),S]),s("td",null,[a(o,null,{default:l(()=>[n("{ x: [-3, 3], y: [-3, 3] }")]),_:1})])]),s("tr",null,[I,s("td",null,[a(o,null,{default:l(()=>[n('false | "contain"')]),_:1}),O]),s("td",null,[a(o,null,{default:l(()=>[n("contain")]),_:1})])]),s("tr",null,[Z,s("td",null,[a(o,null,{default:l(()=>[n("((point: Vector2, event: MouseEvent) => void)")]),_:1}),$]),s("td",null,[a(o,null,{default:l(()=>[n("undefined")]),_:1})])]),s("tr",null,[j,s("td",null,[a(o,null,{default:l(()=>[n("boolean")]),_:1}),W,H]),s("td",null,[a(o,null,{default:l(()=>[n("false")]),_:1})])])])]),J,a(_),L,a(v),G,a(b),K])}}});export{Y as __pageData,ss as default};
