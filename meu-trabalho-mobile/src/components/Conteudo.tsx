// src/components/Conteudo.tsx
import '../App.css';

function Conteudo() {
  return (
    <div>
        <p>Este é o conteúdo principal.</p>
        {/* Botão com função onClick */}
        <button onClick={() => alert("Você clicou no botão!")}>
            Mostrar Alerta
        </button>
    </div>
  );
}

export default Conteudo;
