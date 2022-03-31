'use strict';

export const listaGeneros = [];

fetch("/api/listar-generos", { method: "POST" }).then((dados: any) => {
    dados.json().then((e: any) => {
      e.forEach((dado) => {
        listaGeneros.push({ item_id: dado.CODIGO, item_text: dado.GENERO });
      })
    })
  })

fetch('/api/listar-generos', {method: 'POST'}).then((dados: any) => {
  dados.json().then((e: any) => {
    localStorage.setItem("GENEROS", JSON.stringify(e));
  })
})