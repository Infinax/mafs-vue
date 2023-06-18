import{S as c,N as u,p as A,X as d,P as r,E as g,I as h}from"./chunks/index.39e48459.js";import{d as D,a as F,c as _,w as p,b as l,u as n,l as m,e as b,g as s,i as o,f as y}from"./chunks/framework.a8c70d05.js";const E=D({__name:"Polygon",setup(C){const e=[2,0],t=[-2,0],a=c([0,2]);return(i,f)=>(F(),_(n(g),{height:300},{default:p(()=>[l(n(u)),l(n(A),{points:[[n(a).point[0],-n(a).point[1]],e,t],filled:{strokeStyle:"dashed"}},null,8,["points"]),l(n(A),{points:[n(a).point,e,t],filled:{color:n(d).blue}},null,8,["points","filled"]),l(n(r),{ctx:n(a)},null,8,["ctx"])]),_:1}))}}),P=D({__name:"Polyline",setup(C){const e=[-2,-2],t=c([-1,1]),a=c([1,-1]),i=[2,2];return(f,J)=>(F(),_(n(g),{height:300},{default:p(()=>[l(n(u)),l(n(h),{points:[e,n(t).point,n(a).point,i],filled:{color:n(d).blue}},null,8,["points","filled"]),l(n(r),{ctx:n(t)},null,8,["ctx"]),l(n(r),{ctx:n(a)},null,8,["ctx"])]),_:1}))}}),q=s("h1",{id:"polygons",tabindex:"-1"},[o("Polygons "),s("a",{class:"header-anchor",href:"#polygons","aria-label":'Permalink to "Polygons"'},"​")],-1),v=s("p",null,"Polygons take a number of points and create a closed shape.",-1),x=y(`<details class="details custom-block"><summary>Code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Mafs</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Cartesian</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Polygon</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MovablePoint</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useMovablePoint</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Theme</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vec</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mafs-vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">vec</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Vector2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">vec</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Vector2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMovablePoint</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">300</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Cartesian</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Polygon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:points</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[[c.point[0], -c.point[1]], a, b]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:filled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{ strokeStyle: &#39;dashed&#39; }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Polygon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:points</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[c.point, a, b]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:filled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{ color: Theme.blue }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">MovablePoint</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:ctx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details>`,1),B=s("strong",null,"Props",-1),M=s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"Default")])],-1),k=s("td",null,[s("strong",null,"points")],-1),N=s("td",null,[s("strong",null,"filled")],-1),V=y(`<details class="details custom-block"><summary>Code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Mafs</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Cartesian</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Polyline</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MovablePoint</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useMovablePoint</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Theme</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vec</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mafs-vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">vec</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Vector2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMovablePoint</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> c </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMovablePoint</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> d</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">vec</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Vector2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">300</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Cartesian</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Polyline</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:points</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[a, b.point, c.point, d]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:filled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{ color: Theme.blue }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">MovablePoint</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:ctx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">MovablePoint</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:ctx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details>`,1),w=s("strong",null,"Props",-1),S=s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"Default")])],-1),T=s("td",null,[s("strong",null,"points")],-1),O=s("td",null,[s("strong",null,"filled")],-1),I=y('<h2 id="filledprops" tabindex="-1">FilledProps <a class="header-anchor" href="#filledprops" aria-label="Permalink to &quot;FilledProps&quot;">​</a></h2><p><strong>filled</strong>—can be configured with the following options:</p><ul><li><strong>color</strong>: string default: <code>var(--mafs-fg)</code>.</li><li><strong>weight</strong>: number default: <code>2</code>.</li><li><strong>fillOpacity</strong>: number default: <code>0.15</code>.</li><li><strong>strokeOpacity</strong>: number default: <code>1</code>.</li><li><strong>strokeStyle</strong>: &quot;solid&quot; | &quot;dashed&quot; default: <code>&quot;solid&quot;</code>.</li></ul>',3),z=JSON.parse('{"title":"Polygons","description":"","frontmatter":{},"headers":[],"relativePath":"display/polygons/index.md","filePath":"display/polygons/index.md"}'),$={name:"display/polygons/index.md"},G=D({...$,setup(C){return(e,t)=>{const a=m("w");return F(),b("div",null,[q,v,l(E),x,s("p",null,[B,o(),l(a,null,{default:p(()=>[o("<Polygon ... />")]),_:1})]),s("table",null,[M,s("tbody",null,[s("tr",null,[k,s("td",null,[l(a,null,{default:p(()=>[o("vector2[]")]),_:1})]),s("td",null,[l(a,null,{default:p(()=>[o("—")]),_:1})])]),s("tr",null,[N,s("td",null,[l(a,null,{default:p(()=>[o("FilledProps")]),_:1})]),s("td",null,[l(a,null,{default:p(()=>[o("—")]),_:1})])])])]),l(P),V,s("p",null,[w,o(),l(a,null,{default:p(()=>[o("<Polyline .../>")]),_:1})]),s("table",null,[S,s("tbody",null,[s("tr",null,[T,s("td",null,[l(a,null,{default:p(()=>[o("vector2[]")]),_:1})]),s("td",null,[l(a,null,{default:p(()=>[o("—")]),_:1})])]),s("tr",null,[O,s("td",null,[l(a,null,{default:p(()=>[o("FilledProps")]),_:1})]),s("td",null,[l(a,null,{default:p(()=>[o("—")]),_:1})])])])]),I])}}});export{z as __pageData,G as default};
