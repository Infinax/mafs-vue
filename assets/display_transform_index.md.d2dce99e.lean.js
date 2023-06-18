import{S as r,N as m,$ as c,p as f,v as h,R as _,P as D,X as y,E as g,c as E}from"./chunks/index.39e48459.js";import{d as i,h as x,a as C,c as b,w as o,b as n,u as a,i as l,l as q,e as T,g as s,f as A}from"./chunks/framework.a8c70d05.js";const v=i({__name:"SimpleTransform",setup(u){const t=r([-4,-2]),e=r([8,4]),p=r([1,0],{constrain:F=>E.normalize(F)}),d=x(()=>Math.atan2(p.point[1],p.point[0]));return(F,R)=>(C(),b(a(g),{height:400,viewBox:{x:[-8,8],y:[-3,3]}},{default:o(()=>[n(a(m)),n(a(c),{translate:a(t).point},{default:o(()=>[n(a(c),{rotate:d.value},{default:o(()=>[n(a(c),{scale:a(e).point},{default:o(()=>[n(a(f),{points:[[0,0],[1,0],[1,1],[0,1]]}),n(a(h),{center:[.5,.5],radius:.5}),n(a(_),{x:.5,y:.5},{default:o(()=>[l(" Hello world! ")]),_:1})]),_:1},8,["scale"]),n(a(D),{ctx:a(e),color:a(y).blue},null,8,["ctx","color"])]),_:1},8,["rotate"]),n(a(D),{ctx:a(p)},null,8,["ctx"])]),_:1},8,["translate"]),n(a(D),{ctx:a(t),color:a(y).green},null,8,["ctx","color"])]),_:1}))}}),P=s("h1",{id:"transform",tabindex:"-1"},[l("Transform "),s("a",{class:"header-anchor",href:"#transform","aria-label":'Permalink to "Transform"'},"​")],-1),w=s("p",null,[l("Sometimes it can be useful to apply 2D transformations to one or more components collectively. This is where "),s("code",null,"Transform"),l(" comes in handy.")],-1),M=A(`<details class="details custom-block"><summary>Code</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Mafs</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Cartesian</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Polygon</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Circle</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Text</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Transform</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MovablePoint</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useMovablePoint</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Theme</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vec</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mafs-vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">computed</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> t </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMovablePoint</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> s </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMovablePoint</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> r </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMovablePoint</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">constrain</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">p</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> vec</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">normalize</span><span style="color:#A6ACCD;">(p)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> angle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">computed</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">atan2</span><span style="color:#A6ACCD;">(r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">point[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">point[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">400</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{ x: [-8, 8], y: [-3, 3] }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Cartesian</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Transform</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:translate</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">t.point</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Transform</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:rotate</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">angle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Transform</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:scale</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s.point</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Polygon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:points</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[[0, 0], [1, 0], [1, 1], [0, 1]]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Circle</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:center</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[0.5, 0.5]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:radius</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:x</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:y</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        Hello world!</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Transform</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">MovablePoint</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:ctx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Theme.blue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Transform</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">MovablePoint</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:ctx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Transform</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">MovablePoint</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:ctx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">t</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Theme.green</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Mafs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details>`,1),N=s("strong",null,"Props",-1),k=s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"Default")])],-1),V=s("td",null,[s("strong",null,"matrix")],-1),B=s("td",null,[s("strong",null,"translate")],-1),S=s("td",null,[s("strong",null,"scale")],-1),$=s("td",null,[s("strong",null,"rotate")],-1),z=s("td",null,[s("strong",null,"shear")],-1),H=A(`<h2 id="transformation-types" tabindex="-1">Transformation types <a class="header-anchor" href="#transformation-types" aria-label="Permalink to &quot;Transformation types&quot;">​</a></h2><p><code>Transform</code> supports many transformation convenience props, but they all boil down to matrix multiplication.</p><p>You can pass your own matrix via the <code>matrix</code> prop and it will be combined with any other transformations you define. Use <code>vec.matrixBuilder()</code> to construct such a matrix if needed.</p><h3 id="nesting" tabindex="-1">Nesting <a class="header-anchor" href="#nesting" aria-label="Permalink to &quot;Nesting&quot;">​</a></h3><p>Nesting is supported. Transformations will be applied <em>inside out</em>, so the innermost <code>Transform</code> will be applied first.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Transform</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">translate</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Transform :rotate=&quot;Math.PI / 2&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {/* Things in here will be rotated, _then_ translated */}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">Transform</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/</span><span style="color:#F07178;">Transform</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="prop-order-matters" tabindex="-1">Prop order matters <a class="header-anchor" href="#prop-order-matters" aria-label="Permalink to &quot;Prop order matters&quot;">​</a></h3><p>Though it&#39;s not typical for prop order in Vue to be significant, it is for <code>Transform</code>. Transformations will be applied in the order the props are set on the component, with the exception of <code>matrix</code> which always comes first.</p><h2 id="exceptions" tabindex="-1">Exceptions <a class="header-anchor" href="#exceptions" aria-label="Permalink to &quot;Exceptions&quot;">​</a></h2><p>Not all elements support <code>Transform</code>. This may change in the future.</p><ul><li>Text nodes have their <em>anchor points</em> transformed, but not the text itself.</li><li><code>Coordinates.*</code> cannot be transformed.</li><li><code>Function.OfX</code> cannot be transformed.</li><li><code>VectorField</code> cannot be transformed.</li></ul>`,11),J=JSON.parse('{"title":"Transform","description":"","frontmatter":{},"headers":[],"relativePath":"display/transform/index.md","filePath":"display/transform/index.md"}'),O={name:"display/transform/index.md"},U=i({...O,setup(u){return(t,e)=>{const p=q("w");return C(),T("div",null,[P,w,n(v),M,s("p",null,[N,l(),n(p,null,{default:o(()=>[l("<Transform ... />")]),_:1})]),s("table",null,[k,s("tbody",null,[s("tr",null,[V,s("td",null,[n(p,null,{default:o(()=>[l("Matrix")]),_:1})]),s("td",null,[n(p,null,{default:o(()=>[l("—")]),_:1})])]),s("tr",null,[B,s("td",null,[n(p,null,{default:o(()=>[l("Vector2")]),_:1})]),s("td",null,[n(p,null,{default:o(()=>[l("—")]),_:1})])]),s("tr",null,[S,s("td",null,[n(p,null,{default:o(()=>[l("number | vector2")]),_:1})]),s("td",null,[n(p,null,{default:o(()=>[l("—")]),_:1})])]),s("tr",null,[$,s("td",null,[n(p,null,{default:o(()=>[l("number")]),_:1})]),s("td",null,[n(p,null,{default:o(()=>[l("—")]),_:1})])]),s("tr",null,[z,s("td",null,[n(p,null,{default:o(()=>[l("Vector2")]),_:1})]),s("td",null,[n(p,null,{default:o(()=>[l("—")]),_:1})])])])]),H])}}});export{J as __pageData,U as default};
