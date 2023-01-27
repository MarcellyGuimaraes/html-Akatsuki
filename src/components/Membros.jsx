import React from 'react'

const Membros = () => {
  return (
    <section className="renegados">
      <h3 className="principal-title">Membros</h3>
      <div className="conteudo-renegados">
        <ul className="lista-renegados">
          <li className="itens">Pain</li>
          <li className="itens">Hidan</li>
          <li className="itens">Itachi</li>
          <li className="itens">Zetzu</li>
          <li className="itens">Konan</li>
          <li className="itens">Deidara</li>
          <li className="itens">Orochimaru</li>
          <li className="itens">Kakuzu</li>
          <li className="itens">Kisame</li>
          <li className="itens">Sasori</li>
          <li className="itens">Obito</li>
        </ul>
        <img
          id="akatsuki"
          src="img/Akatsuki.png.webp"
          className="imagem-renegados"
        />
      </div>

      <div className="video">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/-oYMo8k22Vw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

export default Membros
