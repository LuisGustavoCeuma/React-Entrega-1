# Parte 4 – Reflexão (Para Pensar)

## 1. Diferença entre abordagem imperativa e declarativa

**Imperativa (JavaScript puro / manipulação do DOM):**
descreve *como* chegar ao resultado, passo a passo. Por exemplo: localizar um elemento, alterar seu texto, adicionar ou remover uma classe. O estado da interface é o efeito acumulado dessas instruções, o que dificulta rastrear quem alterou o quê à medida que a aplicação cresce.

**Declarativa (React):**
descreve *o que* a interface deve ser para um determinado estado, por exemplo `<p>{contador}</p>`. O framework decide quais operações de DOM são necessárias para chegar até lá.

## 2. Por que o Virtual DOM "otimiza" a performance

Manipular o DOM real é custoso, pois o navegador precisa recalcular layout e repintar a tela. O React mantém uma representação leve da interface em memória (Virtual DOM), compara a nova versão com a anterior (*diffing*) e aplica ao DOM real somente as diferenças (*reconciliação*). Na prática, isso tende a agrupar e reduzir as operações de DOM.

## 3. Ressalva

O Virtual DOM não garante que o React seja mais rápido que uma manipulação direta bem feita. O diffing tem custo próprio, e atualizar grandes trechos a cada mudança pode ser mais lento que um update cirúrgico. Seu principal benefício é a **previsibilidade e a produtividade**, e não uma garantia de desempenho superior.
