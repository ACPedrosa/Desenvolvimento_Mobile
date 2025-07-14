//o useState é um hook do react que foi importado. Um hook permite que um componente lembre de algo ou reaja a certas mudanças realizadas.
import { useState } from 'react'

//Esses dois imports não estão sendo utilizados, entretanto são utilizados para exibir as logos do React e do Vite.
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import './App.css' // Importa os estilos do CSS que serão adicionados ao React

// Importando o componente do Exercício 02
import Ex002 from './components/Ex002';

// Importando o componente Mensagem - Exercício 03
import Mensagem from './components/Mensagem';

// Importando os componentes - Excício 04
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';

//Importando função renderizarMensagem de Conteudo.tsx
import {renderizarMensagem} from './components/Conteudo';

//Função principal que retorna o JSX da aplicação (componente principal)
function App() {
  return ( //O conteúdo visual do componente é adicionado nesse return. Como o corpo de um HTML
    <div>
      {/* div com o título da aplicação, */}
      <h1>Meu primeiro app React</h1>

      {/* Usa o componente Ex002 */}
      <Ex002 />

      {/* Usa o componente Mensagem */}
      <Mensagem />

      {/*Usa componentes do Exercício 04*/}
      <Cabecalho />
      <Conteudo />
      <Rodape />

      {/*Usa função renderizarMensage de Conteudo - Exercicio 07*/}
      {renderizarMensagem()}
    </div>
  )
}


export default App // Exporta o App para que ele possa ser usado no arquivo principal .tsx.
