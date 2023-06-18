import{S as F,c as y,N as C,v as i,P as A,E as u}from"./chunks/index.3c45ee81.js";import{d as c,h as d,a as r,c as _,w as o,b as l,u as p,l as m,e as h,g as s,i as n,f}from"./chunks/framework.ab10dd6e.js";const g=c({__name:"MovableCircle",setup(D){const t=F([Math.sqrt(2)/2,Math.sqrt(2)/2]),e=d(()=>y.mag(t.point));return(a,B)=>(r(),_(p(u),{height:200,viewBox:{y:[-2,2]}},{default:o(()=>[l(p(C)),l(p(i),{center:[0,0],radius:e.value},null,8,["radius"]),l(p(A),{ctx:p(t)},null,8,["ctx"])]),_:1}))}}),v=s("h1",{id:"circles",tabindex:"-1"},[n("Circles "),s("a",{class:"header-anchor",href:"#circles","aria-label":'Permalink to "Circles"'},"​")],-1),E=s("p",null,"Circles take a center vector and a radius.",-1),q=f(`<details class="details custom-block"><summary>Code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Mafs</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Cartesian</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Circle</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MovablePoint</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useMovablePoint</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vec</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mafs-vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">computed</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> pointOnCircle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMovablePoint</span><span style="color:#A6ACCD;">([Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sqrt</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sqrt</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> r </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">computed</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> vec</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mag</span><span style="color:#A6ACCD;">(pointOnCircle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">point))</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">200</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{ y: [-2, 2] }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Cartesian</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Circle</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:center</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[0, 0]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">MovablePoint</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:ctx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pointOnCircle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details>`,1),x=s("strong",null,"Props",-1),b=s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"Default")])],-1),M=s("td",null,[s("strong",null,"center")],-1),P=s("td",null,[s("strong",null,"radius")],-1),N=s("td",null,[s("strong",null,"filled")],-1),k=s("p",null,[s("strong",null,"filled"),n(" is the same as "),s("a",{href:"/infinax/display/polygons/#filledprops"},"Polygons")],-1),V=JSON.parse('{"title":"Circles","description":"","frontmatter":{},"headers":[],"relativePath":"display/circles/index.md","filePath":"display/circles/index.md"}'),w={name:"display/circles/index.md"},J=c({...w,setup(D){return(t,e)=>{const a=m("w");return r(),h("div",null,[v,E,l(g),q,s("p",null,[x,n(),l(a,null,{default:o(()=>[n("<Circle ... />")]),_:1})]),s("table",null,[b,s("tbody",null,[s("tr",null,[M,s("td",null,[l(a,null,{default:o(()=>[n("vector2")]),_:1})]),s("td",null,[l(a,null,{default:o(()=>[n("—")]),_:1})])]),s("tr",null,[P,s("td",null,[l(a,null,{default:o(()=>[n("number")]),_:1})]),s("td",null,[l(a,null,{default:o(()=>[n("—")]),_:1})])]),s("tr",null,[N,s("td",null,[l(a,null,{default:o(()=>[n("FilledProps")]),_:1})]),s("td",null,[l(a,null,{default:o(()=>[n("—")]),_:1})])])])]),k])}}});export{V as __pageData,J as default};
