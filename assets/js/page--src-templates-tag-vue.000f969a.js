(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2qYH":function(e,t,a){"use strict";a.r(t);var s=a("r0AA"),r={components:{Pagination:a("F5n6").a,ListItem:s.a},computed:{postLabel:function(){return a("dhqo")("post",this.$page.tag.belongsTo.totalCount)}},metaInfo:function(){return{title:this.$page.tag.title,bodyAttrs:{class:"bg-white"}}}},i=a("KHd+"),o=null,n=Object(i.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("div",{staticClass:"flex w-full relative text-gray-400 mx-auto bg-black px-4 sm:px-0 md:h-64 h-48"},[a("div",{staticClass:"container w-full mx-auto flex flex-wrap my-5"},[a("div",{staticClass:"text-center w-full"},[a("h2",{staticClass:"self-center text-white"},[e._v(e._s(e.$page.tag.title))]),e._v("\n          A collection of "),a("span",{staticClass:"self-center"},[e._v(e._s(e.$page.tag.belongsTo.totalCount)+" "+e._s(e.postLabel))])])])]),a("div",{staticClass:"container mx-auto px-6 sm:px-0 hidden md:block"},[a("div",{staticClass:"post-feed"},e._l(e.$page.tag.belongsTo.edges,(function(e){return a("ListItem",{key:e.node.id,attrs:{record:e.node}})})),1),a("div",{staticClass:"pagination flex justify-center mb-8"},[e.$page.tag.belongsTo.pageInfo.totalPages>1?a("Pagination",{attrs:{baseUrl:e.$page.tag.path,currentPage:e.$page.tag.belongsTo.pageInfo.currentPage,totalPages:e.$page.tag.belongsTo.pageInfo.totalPages,maxVisibleButtons:5}}):e._e()],1)])])}),[],!1,null,null,null);"function"==typeof o&&o(n);t.default=n.exports},F5n6:function(e,t,a){"use strict";a("qePV"),a("ma9I");var s={props:{baseUrl:String,currentPage:Number,totalPages:Number,maxVisibleButtons:{type:Number,required:!1,default:3}},methods:{isFirstPage:function(e,t){return 1==e},isLastPage:function(e,t){return e==t},isCurrentPage:function(e,t){return e==t},nextPage:function(e,t){return"".concat(this.baseUrl,"/").concat(e+1)},previousPage:function(e,t){return 2===e?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(e-1)}},computed:{startPage:function(){return 1===this.currentPage?1:(this.currentPage,this.totalPages,this.currentPage-1)},pages:function(){for(var e=[],t=this.startPage;t<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);t+=1)e.push({name:t,isDisabled:t===this.currentPage,link:1===t?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(t)});return e}}},r=a("KHd+"),i=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"flex pl-0 list-none rounded my-2"},[e.isFirstPage(e.currentPage,e.totalPages)?e._e():a("li",{staticClass:"w-10 relative block text-center py-2 leading-tight bg-white border border-gray-300 text-black ml-0 mr-1 rounded hover:bg-gray-300"},[a("g-link",{staticClass:"page-link",attrs:{to:e.previousPage(e.currentPage,e.totalPages),tabindex:"-1"}},[e._v("«")])],1),e._l(e.pages,(function(t){return a("li",{key:t.name,staticClass:"w-10 relative block py-2 text-center leading-tight bg-white border border-gray-300 text-black rounded hover:bg-gray-300 ml-1 mr-1",class:[e.isCurrentPage(e.currentPage,t.name)?"border-l-2 border-l-black":""]},[a("g-link",{staticClass:"page-link",attrs:{to:t.link,"aria-label":t.name,"aria-current":t.name}},[e._v(e._s(t.name))])],1)})),e.isLastPage(e.currentPage,e.totalPages)?e._e():a("li",{staticClass:"w-10 relative block py-2 text-center leading-tight bg-white border border-gray-300 text-black ml-1 rounded hover:bg-gray-300"},[a("g-link",{staticClass:"page-link",attrs:{to:e.nextPage(e.currentPage,e.totalPages),tabindex:"-1"}},[e._v("»")])],1)],2)}),[],!1,null,null,null);t.a=i.exports},dhqo:function(e,t,a){e.exports=function(){var e=[],t=[],a={},s={},r={};function i(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function n(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,a){return t[a]||""}))}function l(e,t){return e.replace(t[0],(function(a,s){var r=n(t[1],arguments);return o(""===a?e[s-1]:a,r)}))}function c(e,t,s){if(!e.length||a.hasOwnProperty(e))return t;for(var r=s.length;r--;){var i=s[r];if(i[0].test(t))return l(t,i)}return t}function u(e,t,a){return function(s){var r=s.toLowerCase();return t.hasOwnProperty(r)?o(s,r):e.hasOwnProperty(r)?o(s,e[r]):c(r,s,a)}}function g(e,t,a,s){return function(s){var r=s.toLowerCase();return!!t.hasOwnProperty(r)||!e.hasOwnProperty(r)&&c(r,r,a)===r}}function d(e,t,a){return(a?t+" ":"")+(1===t?d.singular(e):d.plural(e))}return d.plural=u(r,s,e),d.isPlural=g(r,s,e),d.singular=u(s,r,t),d.isSingular=g(s,r,t),d.addPluralRule=function(t,a){e.push([i(t),a])},d.addSingularRule=function(e,a){t.push([i(e),a])},d.addUncountableRule=function(e){"string"!=typeof e?(d.addPluralRule(e,"$0"),d.addSingularRule(e,"$0")):a[e.toLowerCase()]=!0},d.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),r[e]=t,s[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return d.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return d.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return d.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(d.addUncountableRule),d}()},r0AA:function(e,t,a){"use strict";var s={props:["record"]},r=a("KHd+"),i=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"post-card bg-white"},[a("a",{staticClass:"post-card-image-link",attrs:{href:e.record.path}},[a("div",{staticClass:"post-card-image"},[a("g-image",{staticClass:"object-cover h-full w-full",attrs:{src:e.record.image}})],1)]),a("div",{staticClass:"post-card-content"},[a("a",{staticClass:"post-card-content-link",attrs:{href:e.record.path}},[a("header",{staticClass:"post-card-header"},[a("span",{staticClass:"text-gray-500 uppercase text-xs font-medium tracking-wide"},[e._v(e._s(e.record.category.title))]),a("h2",{staticClass:"post-card-title text-xl"},[e._v(e._s(e.record.title))])]),a("section",{staticClass:"post-card-excerpt"},[a("p",[e._v(e._s(e.record.excerpt))])])]),a("footer",{staticClass:"post-card-meta mt-4"},[a("ul",{staticClass:"author-list"},e._l(e.record.author,(function(e){return a("li",{key:e.id,staticClass:"author-list-item"},[a("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.name,expression:"author.name"}],attrs:{to:e.path}},[a("g-image",{staticClass:"w-6 h-6 rounded-full bg-gray-200",attrs:{src:e.image,alt:e.name}})],1)],1)})),0),a("span",{staticClass:"text-xs uppercase text-gray-700"},[e._v(e._s(e.record.timeToRead)+" min read")])])])])}),[],!1,null,null,null);t.a=i.exports}}]);