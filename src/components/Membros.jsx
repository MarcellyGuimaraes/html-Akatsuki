import React from 'react'
import { membros } from '../assets/data'
import gifAkatsuki from '../assets/img/Akatsuki.png.webp'

const Membros = () => {
  return (
    <section className="p-10 flex flex-col ">
      <h3 className="text-2xl font-bold text-center">Membros</h3>
      <div className="w-84 flex items-center justify-center">
        <img
          id="akatsuki"
          src={gifAkatsuki}
          className="w-[60%] md:w-3/5 bg-white"
        />
        <ul className="md:text-xl pl-4">
          {membros.map((membro) => (
            <li className="itens">⧽ {membro.name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Membros
