(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{23:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var c,o,i,r,l,a,d,u=e(0),s=e.n(u),b=e(12),j=e.n(b),h=e(2),f=e(3),O=e(10),k=e(4),v=e(1),x=f.a.div(c||(c=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  height: 60px;\n  width: 60px;\n  font-size: 200%;\n  font-weight: ",";\n  :nth-child(n) {\n    border-bottom: 0.5px solid black;\n    border-right: 0.5px solid black;\n  }\n  :nth-child(9n+3) {\n    border-right: 2px solid black;\n  }\n  :nth-child(9n+6) {\n    border-right: 2px solid black;\n  }\n  :nth-child(n+19):nth-child(-n+27) {\n    border-bottom: 2px solid black;\n  }\n  :nth-child(n+46):nth-child(-n+54) {\n    border-bottom: 2px solid black;\n  }\n}\n"])),(function(n){return n.on?"orange":"teal"}),(function(n){return n.locked?"bold":"normal"})),g=function(n){var t=n.number,e=n.active,c=n.locked,o=n.onClick;return Object(v.jsx)(x,{on:e,locked:c,onClick:o,children:t>0?t:null})},p=f.a.div(o||(o=Object(h.a)(["\n  ","\n  background: white;\n  display: grid;\n  grid-template-columns: repeat(9, 0fr);\n  ","\n  // user-select: none;\n  ","\n"])),"","",""),m=function(n){var t=n.board,e=n.onClick,c=n.locked,o=n.selected;return Object(v.jsx)("div",{children:Object(v.jsx)(p,{children:t.split("").map((function(n,t){return Object(v.jsx)(g,{number:n,active:t===o,locked:!0===c[t],onClick:function(){return e(t)}},t)}))})})},y=f.a.div(i||(i=Object(h.a)(["\n\n"]))),C=function(n){var t=n.name,e=n.onClick;return Object(v.jsx)(y,{onClick:e,children:t})},w=f.a.div(r||(r=Object(h.a)(["\n    // display: flex;\n    // align-items: top;\n    // justify-content: center;\n    background-color:#74ad5a;\n\tborder:2px solid #3b6e22;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#ffffff;\n\tfont-family:Arial;\n\tfont-size:13px;\n\tfont-weight:bold;\n\tpadding:6px 12px;\n\ttext-decoration:none;\n\t&:hover {\n\tbackground-color:#68a54b;\n    }\n    &:active {\n\tposition:relative;\n\ttop:1px;} \n    margin:4px\n"]))),S=function(n){var t=n.name,e=n.onClick;return Object(v.jsx)(w,{children:Object(v.jsx)("div",{children:Object(v.jsx)(C,{name:t,onClick:e})})})},A=function(){var n=["004300209005009001070060043006002087190007400050083000600000105003508690042910300","040100050107003960520008000000000017000906800803050620090060543600080700250097100","600120384008459072000006005000264030070080006940003000310000050089700000502000190","497200000100400005000016098620300040300900000001072600002005870000600004530097061","005910308009403060027500100030000201000820007006007004000080000640150700890000420","100005007380900000600000480820001075040760020069002001005039004000020100000046352","009065430007000800600108020003090002501403960804000100030509007056080000070240090","000000657702400100350006000500020009210300500047109008008760090900502030030018206","503070190000006750047190600400038000950200300000010072000804001300001860086720005","060720908084003001700100065900008000071060000002010034000200706030049800215000090","004083002051004300000096710120800006040000500830607900060309040007000205090050803","000060280709001000860320074900040510007190340003006002002970000300800905500000021","004300000890200670700900050500008140070032060600001308001750900005040012980006005","008070100120090054000003020604010089530780010009062300080040607007506000400800002","065370002000001370000640800097004028080090001100020940040006700070018050230900060","005710329000362800004000000100000980083900250006003100300106000409800007070029500","200005300000073850000108904070009001651000040040200080300050000580760100410030096","040800500080760092001005470056309000009001004320500010000200700700090030005008026","050083017000100400304005608000030009090824500006000070009000050007290086103607204","700084005300701020080260401624109038803600010000000002900000000001005790035400006","067050010084309000003080040090000205000621790700093600300400000020007153500800076","001409030000306052007008190060020800000003065894507000403091080079040026000700900","206030000001065070047108050500000029008019406000420001000042800609300005070000013","004502178100090030000800004600450000070900012801203500400000009350060807090300620","140060800085010040907400250030070400209000307008900060000740010601305090700002600","590000147000900008072000030700040290020030806800170050005764009036005000100800002","100000090208970605000532000006050400700806002083700010604080120890600050015040007","900084060604005207030070080760001500053000001000409603105026090002040000800003710","308056007006900253012040000000000320904800000760109805000001904831000506040007030","170300009008040600000060030600800001924600300300902500010200040709503016005007800","004030021070005009380690000030000000602100450010907003000846700560001240008250030","083200096200030704007915000402390008010004060069870000000400007500060280070050900","803000270409008000700024096000006915001802000030750000054000060608100003372009140","070490103003070590050000000000000061100749020024306008600980700012600000480007052","830040096020010008904700030409002065308001070000603800507030020000506400002080100","060250000792006100000081600009000500410009780207300004000763010300540290800000040","050400680090100000008059302007203000000600208604080005036004190100007000072800050","010092047000700609600040100003000000720008900840105070106400280480030000900017005","078010609203009008410060052720106030000400700091305000932000400005720010000008006","056010000280030040040090765790003008005760000000004001100600203020001400060805900","000001847010000000059348006300020004076100500200006790040207069007800415003590000","205040003001009000046001587004607090802000056090020340170008200000500800500903001","103800000906400072000205090090070050084901300002506000210004005308700401070080600","850420370003000010000170009000500602029304000010000438046090805005000900702840003","061490020280007050003108007600704031000250074090600000000010008570000206800906000"];return n[Math.floor(Math.random()*Math.floor(n.length))]},E=f.a.div(l||(l=Object(h.a)(["\n  // width: 100vw;\n  // height: 100vh;\n  ","\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  user-select: none;\n"])),""),z=f.a.div(a||(a=Object(h.a)(["\n  display: flex;\n  align-items: top;\n  justify-content: center;\n  user-select: none;\n"]))),F=function(){var n=Object(u.useState)(A()),t=Object(k.a)(n,2),e=t[0],c=t[1],o=Object(u.useState)([e]),i=Object(k.a)(o,2),r=i[0],l=i[1],a=Object(u.useState)(0),d=Object(k.a)(a,2),s=d[0],b=d[1],j=Object(u.useState)(null),h=Object(k.a)(j,2),f=h[0],x=h[1],g=function(){for(var n=new Array(e.length),t=0;t<e.length;t++)e[t]>0&&(n[t]=!0);return n},p=Object(u.useState)(g()),y=Object(k.a)(p,2),C=y[0],w=y[1];Object(u.useEffect)((function(){var n=function(n,t){if(!C[n]){var e=r.slice(0,s+1),c=r[s].substr(0,n)+t+r[s].substr(n+1);l([].concat(Object(O.a)(e),[c])),b(s+1)}};function t(t){var e=t.key;e>=0&&e<=9&&null!=f?n(f,e):"Delete"===t.key&&n(f,0)}return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[f,r,C,s]);var F=function(n){for(var t=new Array(n.length),e=0;e<n.length;e++)n[e]>0&&(t[e]=!0);return t};return Object(v.jsxs)("div",{children:[Object(v.jsx)(E,{children:Object(v.jsx)(m,{board:r[s],locked:C,setBoardHistory:l,onClick:function(n){C[n]?x(null):x(f===n?null:n)},selected:f})}),Object(v.jsxs)(z,{children:[Object(v.jsx)(S,{name:"Undo",onClick:function(){s>=1&&b(s-1),C.every((function(n){return null===n}))&&w(g())}}),Object(v.jsx)(S,{name:"Redo",onClick:function(){s<r.length-1&&b(s+1)}}),Object(v.jsx)(S,{name:"Restart from beginning",onClick:function(){b(0),x(null)}}),Object(v.jsx)(S,{name:"Erase All",onClick:function(){var n="0".repeat(r[s].length);l([].concat(Object(O.a)(r),[n])),b(s+1),w(F(Array(r[s].length))),x(null)}}),Object(v.jsx)(S,{name:"Random Puzzle",onClick:function(){var n=A();c(n),l([n]),w(F(n)),b(0),x(null)}})]})]})},L=(e(23),f.a.div(d||(d=Object(h.a)(["\n  height: 100vh;\n  width: 100vw;\n  background: white;\n"]))));var M=function(){return Object(v.jsx)(L,{children:Object(v.jsx)(F,{})})},B=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,25)).then((function(t){var e=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;e(n),c(n),o(n),i(n),r(n)}))};j.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root")),B()}},[[24,1,2]]]);
//# sourceMappingURL=main.e77fb18a.chunk.js.map