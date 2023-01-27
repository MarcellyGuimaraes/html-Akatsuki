import React from 'react'

const Map = () => {
  return (
    <section className="mapa">
      <h3 className="principal-title">localização</h3>
      <p>As aldeias estão localizadas no japão</p>

      <div className="mapa-conteudo">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12869.2294906606!2d139.7568381537917!3d36.2563417202509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601f4bf1d405aeef%3A0xf9681bc0b7f5d82e!2sAkatsuki%2C%20Oyama%2C%20Tochigi%20329-0211%2C%20Jap%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1644425852565!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}

export default Map
