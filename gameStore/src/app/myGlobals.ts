'use strict';

export const listaGeneros = [];

fetch("/api/listar-generos", { method: "POST" }).then((dados: any) => {
    dados.json().then((e: any) => {
      console.log("generos lista: ", e);
      e.forEach((dado) => {
        listaGeneros.push({ item_id: dado.CODIGO, item_text: dado.GENERO });
      })
    })
  })