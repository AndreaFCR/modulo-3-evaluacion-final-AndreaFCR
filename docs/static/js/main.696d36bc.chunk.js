(this.webpackJsonpeval=this.webpackJsonpeval||[]).push([[0],{17:function(e,a,t){e.exports=t(28)},27:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),i=t(6),m=t(12),s=t(1),o=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.sort((function(e,a){return e.name.localeCompare(a.name)})).map((function(e){return{episodes:e.episode.length,id:e.id.toString(),image:e.image,name:e.name,origin:e.origin.name,specie:e.species,status:e.status}}))}))},u=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__logo"}))},d=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__logo"},"Creado por Andrea Clavijo"))},p=function(e){return r.a.createElement("section",{className:"filter"},r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"nameSearch"}),r.a.createElement("input",{type:"search",name:"nameSearch",placeholder:"Busca tu personaje favorito...",className:"filter__input",onChange:function(a){a.preventDefault(),e.handleChangeInput({value:a.target.value})},value:e.nameFilter})))},E=function(e){return r.a.createElement(i.b,{to:"/character/".concat(e.id)},r.a.createElement("article",{className:"card"},r.a.createElement("img",{className:"card__image",src:e.image,alt:"Foto de ".concat(e.name)}),r.a.createElement("div",null,r.a.createElement("h3",null,e.name)),r.a.createElement("div",null,e.specie)))},f=function(e){return r.a.createElement("section",{className:"card-list"},e.characterStore.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,image:e.image,episodes:e.episodes,name:e.name,specie:e.specie,status:e.status,origin:e.origin})})))},h=function(e){return r.a.createElement("section",{className:"modal"},r.a.createElement("article",{className:"modal__content"},r.a.createElement("div",{className:"modal__content__title"},r.a.createElement("h2",null,e.name),r.a.createElement(i.b,{to:"/"},r.a.createElement("span",null,"X"))),r.a.createElement("div",{className:"modal__content__main"},r.a.createElement("img",{className:"modal__content__main__image",src:e.image,alt:"Foto de ".concat(e.name)}),r.a.createElement("div",null,"Estado: ",e.status),r.a.createElement("div",null,"Especie: ",e.specie),r.a.createElement("div",null,"Origen: ",e.origin),r.a.createElement("div",null,"Episodios: ",e.episodes))))},g=(t(27),function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),i=Object(m.a)(l,2),E=i[0],g=i[1];Object(n.useEffect)((function(){o().then((function(e){c(e)}))}),[E]);return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement("main",{className:"main"},r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(p,{handleChangeInput:function(e){g(e.value)},nameFilter:E}),r.a.createElement(f,{characterStore:t.filter((function(e){return e.name.toUpperCase().includes(E.toUpperCase())}))})),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/character/:characterId",render:function(e){var a=e.match.params.characterId,n=t.find((function(e){return e.id===a}));return n?r.a.createElement(h,{name:n.name,status:n.status,specie:n.specie,origin:n.origin,episodes:n.episodes,image:n.image,id:n.id}):r.a.createElement("p",null,"Personaje no encontrado")}}))),r.a.createElement(d,null))});l.a.render(r.a.createElement(i.a,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.696d36bc.chunk.js.map