## O Desafio

O desafio proposto foi fazer um clone de uma página web responsiva com React.js. 
Não foi dada nenhuma restrição em relação ao boilerplaite. 

<div width="100vw">
  <Image src="./public/challenge-web-version.png" />
</div>

## Tecnologias 

- [Create React App - CRA](https://create-react-app.dev/)
- [Chakra UI](https://chakra-ui.com/)
- [Typescript](https://www.typescriptlang.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Fontsource](https://fontsource.org/) 

## Resultado Final

Devido ao tempo da entrega decidi utilizar uma biblioteca de interface declarativa, Chakra UI, pois queria que o desenvolvimento fosse um pouco mais ágil, e com essas libs há a vantagem de ter vários componentes já prontos para uso. Outra decisão foi utilizar o CRA ao invés do Next.js, pois nesse caso seria apenas um clone e não necessitaria das funcionalidades disponíveis no Next.

Sobre o Chakra Ui, resolvi componentizar os elementos construídos com os componentes da biblioteca, um exemplo foram os Badges, criei o componente que continha o grupo de badges, e também fiz um componente para o badge em si, com as devidas props, os dados que iriam mudar dinamicamente.

Embora os componentes do Chakra já venham devidamente estilizados, por algumas vezes é necessário adicionar estilos a mais, para isso utilizei o CSS-IN-JS que é usado pelo próprio Chakra "por baixo dos panos", onde coloquei o estilo diretamente no componente. 

O typescript foi utilizado para conseguir uma confiança na hora de passar as props entre os componentes, saber exatamente quais tipos são esperados. 

[Live preview](https://desafio-lighthouse.vercel.app/) 

Versão web: 

<div width="100vw">
  <Image src="./public/result-web-version.png" />
</div>

Versão mobile: 

<div width="100vw">
  <Image src="./public/result-mobile-version.png" />
</div>