(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{2257:function(e,s,t){"use strict";t.d(s,{Z:function(){return d}});var i=t(5893),n=t(5988),r=(t(7294),t(5655));function a(e){return(0,i.jsx)("header",{className:"header",children:(0,i.jsxs)("nav",{className:"nav",role:"navigation","aria-label":"main navigation",children:[(0,i.jsx)("a",{href:"/",className:"header__logo",children:(0,i.jsx)(r.Z,{options:{strings:[e.siteTitle],speed:30,lifeLike:!0},children:e.siteTitle})}),(0,i.jsxs)("ul",{className:"header__links",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/posts",children:"Blog"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/cv",children:"Resume"})})]})]})})}function l(){return(0,i.jsxs)("footer",{className:"footer",children:[(0,i.jsxs)("div",{className:"footer__content",children:[(0,i.jsxs)("section",{classname:"footer__content__links",children:[(0,i.jsx)("h3",{children:"Links of Interest"}),(0,i.jsx)("a",{href:"/rss.xml",children:"RSS Feed"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"/todo",children:"Todo List"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://keyoxide.org/hkp/garrit@slashdev.space",children:"PGP Key"})]}),(0,i.jsxs)("section",{classname:"footer__content__social",children:[(0,i.jsx)("h3",{children:"Elsewhere"}),(0,i.jsx)("a",{href:"https://github.com/garritfra",children:"Github"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://www.linkedin.com/in/garritfranke/",children:"LinkedIn"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"mailto:garrit@slashdev.space",children:"Email"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"https://matrix.to/#/@garrit:matrix.slashdev.space",children:"Matrix"})]})]}),(0,i.jsx)("p",{children:"\xa9 2019-2021 Garrit Franke"})]})}var c=t(9008);function o(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(c.default,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("title",{children:e.siteTitle}),(0,i.jsx)("meta",{name:"Description",content:"Random thoughts, tips and rants about software"}),(0,i.jsx)("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),(0,i.jsx)("script",{async:!0,defer:!0,"data-domain":"garrit.xyz",src:"https://analytics.slashdev.space/js/plausible.js"})]})})}function d(e){var s=e.siteTitle,t=e.siteDescription,r=e.children;return(0,i.jsxs)("section",{className:"jsx-2468134916 layout",children:[(0,i.jsx)(o,{siteTitle:s,siteDescription:t}),(0,i.jsx)(a,{siteTitle:s}),(0,i.jsx)("div",{className:"jsx-2468134916 content",children:r}),(0,i.jsx)(l,{}),(0,i.jsx)(n.default,{id:"2468134916",children:[".layout.jsx-2468134916{overflow-x:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100vh;}",".layout.jsx-2468134916 .info_page.jsx-2468134916{color:#ebebeb;}","@media (min-width:768px){}"]})]})}},8325:function(e,s,t){"use strict";t.d(s,{Z:function(){return r}});var i=t(5893),n=t(2257);function r(e){var s=e.title,t=e.date,r=e.siteTitle;return(0,i.jsx)(n.Z,{siteTitle:r,children:(0,i.jsxs)("article",{className:"page",children:[s&&(0,i.jsxs)("div",{className:"page__info",children:[(0,i.jsx)("h1",{children:s}),t&&(0,i.jsx)("h3",{className:"page__info__date",children:t})]}),(0,i.jsx)("div",{className:"page__body",children:e.children}),(0,i.jsx)("div",{className:"page__footer"})]})})}},8455:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return c},default:function(){return o}});var i=t(5893),n=(t(2257),t(724)),r=t.n(n);var a=function(e){var s=e.posts;return(0,i.jsx)("div",{className:"blog__list",children:s.length>1&&s.filter((function(e){return!e.slug.startsWith("_")})).sort((function(e,s){return e.frontmatter.date<s.frontmatter.date?1:-1})).map((function(e){return(0,i.jsx)("div",{className:"blog__list__post",children:(0,i.jsxs)("a",{href:"/posts/".concat(e.slug),children:[(0,i.jsx)("h2",{children:e.frontmatter.title}),(0,i.jsx)("h4",{className:"blog__list__post__date",children:(t=e.frontmatter.date,new Date(t).toDateString().slice(4))}),(0,i.jsx)("p",{children:(0,i.jsx)(r(),{source:(s=e.markdownBody,s.slice(0,200).trimEnd()+"...")})})]})});var s,t}))})},l=t(8325),c=!0,o=function(e){return(0,i.jsx)(l.Z,{siteTitle:"Garrit's Notes",children:(0,i.jsx)(a,{posts:e.posts})})}},313:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return t(8455)}])}},function(e){e.O(0,[774,968,888,179],(function(){return s=313,e(e.s=s);var s}));var s=e.O();_N_E=s}]);