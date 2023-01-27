import React from 'react'

const Map = () => {
  return (
    <section className="flex flex-col items-center my-16">
      <h3 className="font-bold text-2xl mb-3">Localização</h3>
      <p>Mapa de Konoha, Gyokutō, Distrito de Tamana, Japão</p>

      <div className="mapa-conteudo">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6494.2839766393945!2d130.61858814120976!3d32.919496862069096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540581cbf255473%3A0xc1f116a9f0bd4fc!2sKonoha%2C%20Gyokut%C5%8D%2C%20Distrito%20de%20Tamana%2C%20Kumamoto%20869-0303%2C%20Jap%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1674846099485!5m2!1spt-BR!2sbr"
          width="800"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default Map
