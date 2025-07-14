// src/components/Conteudo.tsx
import '../App.css';

function Conteudo() {
    function mostrarAlerta(){
        alert("Você clicou no botão!");
    }
    function executarAcao() {
        alert("Função chamada com sucesso.");
    }

  return (
    <div>
        <p>Este é o conteúdo principal.</p>

        {/* Botão com função onClick */}
        <button onClick={mostrarAlerta}>
            Mostrar Alerta
        </button>

        {/* Botão para função executarAcao no clique */}
        <button onClick={executarAcao}>
            Executar Ação
        </button>
        
    </div>
  );
}

export default Conteudo;
