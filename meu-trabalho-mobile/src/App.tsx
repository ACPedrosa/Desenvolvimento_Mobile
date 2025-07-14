//o useState é um hook do react que foi importado. Um hook permite que um componente lembre de algo ou reaja a certas mudanças realizadas.
import { useState } from 'react'

//Esses dois imports não estão sendo utilizados, entretanto são utilizados para exibir as logos do React e do Vite.
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import './App.css' // Importa os estilos do CSS que serão adicionados ao React

//Função principal que retorna o JSX da aplicação (componente principal)
function App() {
  return ( //O conteúdo visual do componente é adicionado nesse return. Como o corpo de um HTML
    <div>
      {/* div com o título da aplicação, */}
      <h1>Meu primeiro app React</h1>
    </div>
  )
}


export default App // Exporta o App para que ele possa ser usado no arquivo principal .tsx.
