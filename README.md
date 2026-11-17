# Atividade Tailwind - Biblioteca UI

## Reflexão

**Imperativa x declarativa:** no JavaScript puro, você manipula o DOM passo a passo (criar, alterar e remover elementos). No React, você descreve como a tela deve ser para cada estado, e o React aplica as mudanças.

**Virtual DOM:** é uma cópia da interface em objetos JavaScript. Quando algo muda, o React compara a nova versão com a anterior e atualiza só o que mudou no DOM real, o que evita operações caras desnecessárias.

**Vantagens do Tailwind:** o estilo fica no próprio componente, não é preciso criar nomes de classes e o build inclui só o CSS usado.

**Desvantagens:** o JSX fica carregado de classes, é preciso consultar os nomes dos utilitários e classes dinâmicas precisam ser escritas por extenso (como `bg-red-600`), por isso usamos objetos de mapeamento.
