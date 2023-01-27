import React from 'react'
import { membros } from '../assets/data'
import gifAkatsuki from '../assets/img/Akatsuki.png.webp'

const Membros = () => {
  return (
    <section className="p-10 bg-red-900 text-white flex flex-col ">
      <h3 className="text-2xl font-bold">Membros</h3>
      <div className="w-84 flex">
        <ul className="w-2/5">
          {membros.map((membro) => (
            <li className="itens">⧽ {membro.name}</li>
          ))}
        </ul>
        <img
          id="akatsuki"
          src={gifAkatsuki}
          className="w-[60%] md:w-3/5 bg-white"
        />
      </div>
    </section>
  )
}

export default Membros
