(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),l=n.n(o);var c=function(){return r.a.createElement("header",null,"Volume units to grams ingredient converter")},u=n(1),s=n(5);var i=function(e){var t,n=0,a=e.amount.replace(/\u2009/g," ").split(" "),r=Object(s.a)(a);try{for(r.s();!(t=r.n()).done;){var o=t.value;"\xbc"===o|"1/4"===o?n=(parseFloat(n)+parseFloat(.25)).toFixed(3):"\u2153"===o|"1/3"===o?n=(parseFloat(n)+parseFloat(.333)).toFixed(3):"\xbd"===o|"1/2"===o?n=(parseFloat(n)+parseFloat(.5)).toFixed(3):"\u2154"===o|"2/3"===o?n=(parseFloat(n)+parseFloat(.666)).toFixed(3):"\xbe"===o|"3/4"===o?n=(parseFloat(n)+parseFloat(.75)).toFixed(3):n+=parseFloat(o)}}catch(l){r.e(l)}finally{r.f()}return parseFloat(n)},p={water:236,allpurposeflour:125,breadflour:130,cakeflour:114,pastryflour:106,wholewheatflour:113,cornstarch:125,granulatedsugar:200,superfinesugar:224,whitesugar:200,sugar:200,castersugar:224,brownsugar:195,powderedsugar:121,honey:336,butter:227,margarine:230,milk:245,oil:218,cocoapowder:125,oats:102,rice:178,bakingpowder:220,vanillaextract:208,mashedripebanana:206,mashedbanana:206,sourcream:242,bakingsoda:230,cinnamon:132,pecan:125};var d=function(e,t,n){for(var a,r,o=e.replace(/[\s-]/gi,"").toLowerCase(),l=t.toLowerCase(),c=0,u=Object.keys(p);c<u.length;c++){var s=u[c];o.indexOf(s)>-1&&(a=p[s])}return l.indexOf("cup")>-1?r=a*n:l.indexOf("tablespoon")>-1||l.indexOf("tbsp")>-1?r=.0625*a*n:(l.indexOf("teaspoon")>-1||l.indexOf("tsp")>-1)&&(r=.0208*a*n),r=r>10?r.toFixed(0):r.toFixed(1)};var m=function(e){return e.map((function(e){var t,n=e.unit,a=e.ingredient,o=i(e);return t=n?"".concat(d(a,n,o),"g of ").concat(a):"".concat(e.amount," ").concat(a),r.a.createElement("div",null,t)}))};var f=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)("none"),c=Object(u.a)(l,2),s=c[0],i=c[1],p=Object(a.useState)(),d=Object(u.a)(p,2),f=d[0],v=d[1],b=Object(a.useState)("none"),g=Object(u.a)(b,2),h=g[0],E=(g[1],/(\d[\u2009]*[ \t]*[\xbc\u2153\xbd\u2154\xbe]|[\xbc\u2153\xbd\u2154\xbe]|\d[\u2009]*[ \t]*(?:1\/[432]|2\/3|3\/4)|(?:1\/[432]|2\/3|3\/4)|\d)(?!\S)(?:[ \t]+(cups|cup|teaspoons|teaspoon|tsps|tsp|tablespoons|tablespoon|tbsp|tbsps))?(.*)/g);return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Enter the ingredients here"),r.a.createElement("textarea",{className:"conversionInput",id:"text"}),r.a.createElement("br",null),r.a.createElement("button",{className:"convertButton",onClick:function(e){if(e.preventDefault(),document.getElementById("text").value){var t=document.getElementById("text").value;o(t.split(/\n/).filter((function(e){return" "!==e}))),o((function(e){return e.map((function(e){E.lastIndex=0;var t=E.exec(e);return{amount:t[1],unit:t[2],ingredient:t[3]}}))})),i(null),o((function(e){return m(e)}))}}},"Convert"),r.a.createElement("br",null),r.a.createElement("h1",{style:{display:s}},"Converted Ingredients:"),r.a.createElement("h2",null,n),r.a.createElement("br",null),r.a.createElement("h1",null,"If you have the link of a website with a recipe, put it here instead:"),r.a.createElement("input",{className:"linkinput",type:"text",onChange:function(e){return v(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("button",{className:"convertButton",onClick:function(e){e.preventDefault(),f&&fetch(f).then((function(e){console.log(e).catch((function(e){console.log("err"),console.error(e)}))}))}},"Convert"),r.a.createElement("h1",{style:{display:h}},"Converted Ingredients:"),r.a.createElement("h2",null,n),r.a.createElement("h2",null,f))};var v=function(){return r.a.createElement("div",null,r.a.createElement(c,null),r.a.createElement(f,null))};l.a.render(r.a.createElement(v,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(11)}},[[6,1,2]]]);
//# sourceMappingURL=main.4f976a5e.chunk.js.map