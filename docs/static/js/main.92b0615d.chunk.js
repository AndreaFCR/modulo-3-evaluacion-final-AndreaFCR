(this.webpackJsonpeval=this.webpackJsonpeval||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(34)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),i=t(6),s=t(12),m=t(1),o=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.sort((function(e,a){return e.name.localeCompare(a.name)})).map((function(e){return{episodes:e.episode.length,id:e.id.toString(),image:e.image,name:e.name,origin:e.origin.name,species:e.species,status:e.status}}))}))},u=(t(22),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__logo"}))}),d=(t(23),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",null,"Leyenda : ",r.a.createElement("span",null,"\ud83d\udc7d"),' = "Alien"',r.a.createElement("span",null,"\ud83d\udc64"),'= "Human" ',r.a.createElement("span",null,"\ud83d\udc4d"),' = "Alive"',r.a.createElement("span",null,"\ud83d\udc4e"),' = "Dead"'),r.a.createElement("div",{className:"footer__logo"},"\xa9 2020 Creado por Andrea Clavijo"))}),p=(t(24),function(e){return r.a.createElement("section",{className:"filter"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Busca tu personaje favorito...",className:"filter__input",onChange:function(a){a.preventDefault(),e.handleChangeInput({value:a.target.value})},value:e.nameFilter})))}),E=(t(25),function(e){return r.a.createElement(i.b,{to:"/character/".concat(e.id)},r.a.createElement("article",{className:"card"},r.a.createElement("div",null,r.a.createElement("img",{className:"card__image",src:e.image,alt:"Foto de ".concat(e.name)})),r.a.createElement("div",{className:"card__name"},r.a.createElement("h3",null,e.name)),r.a.createElement("div",{className:"card__species"},"Human"===e.species?"\ud83d\udc64":"\ud83d\udc7d")))}),f=(t(31),function(e){return r.a.createElement("section",{className:"card-list"},0===e.characterStore.length?r.a.createElement("div",{className:"error-message"},r.a.createElement("p",null,'No hay ning\xfan personaje que coincida con la palabra "'.concat(e.nameFilter,'"'))):e.characterStore.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,image:e.image,episodes:e.episodes,name:e.name,species:e.species,status:e.status,origin:e.origin})})))}),_=(t(32),function(e){return r.a.createElement("section",{className:"modal"},r.a.createElement("article",{className:"modal__content"},r.a.createElement("div",{className:"modal__content__title"},r.a.createElement("h2",null,e.name)),r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{className:"modal__content__icon"},r.a.createElement("i",{className:"fa fa-times-circle","aria-hidden":"true"}))),r.a.createElement("div",{className:"modal__content__main"},r.a.createElement("div",{className:"modal__content__main__image"},r.a.createElement("img",{src:e.image,alt:"Foto de ".concat(e.name)})),r.a.createElement("div",{className:"modal__content__main__properties"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"Estado: "),function(){if("unknown"!==e.status){var a="Alive"===e.status?"\ud83d\udc4d":"\ud83d\udc4e";return r.a.createElement("span",{"aria-label":"Dead or Alive"},a)}return r.a.createElement("span",null,e.status)}()),r.a.createElement("li",null,r.a.createElement("span",null,"Especie: "),function(){var a="Human"===e.species?"\ud83d\udc64":"\ud83d\udc7d";return r.a.createElement("span",{"aria-label":"Human or Alien"},a)}()),r.a.createElement("li",null,r.a.createElement("span",null,"Origen: "),e.origin),r.a.createElement("li",null,r.a.createElement("span",null,"N\xba de episodios: "),e.episodes))))))}),h=(t(33),function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),E=i[0],h=i[1];Object(n.useEffect)((function(){o().then((function(e){c(e)}))}),[E]);return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement("main",{className:"main"},r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(p,{handleChangeInput:function(e){h(e.value)},nameFilter:E}),r.a.createElement(f,{characterStore:t.filter((function(e){return e.name.toUpperCase().includes(E.toUpperCase())})),nameFilter:E})),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/character/:characterId",render:function(e){var a=e.match.params.characterId,n=t.find((function(e){return e.id===a}));return n?r.a.createElement(_,{name:n.name,status:n.status,species:n.species,origin:n.origin,episodes:n.episodes,image:n.image,id:n.id}):r.a.createElement("div",{className:"error-message"},r.a.createElement("p",null,"Personaje no encontrado"))}}))),r.a.createElement(d,null))});l.a.render(r.a.createElement(i.a,null,r.a.createElement(h,null)),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.92b0615d.chunk.js.map