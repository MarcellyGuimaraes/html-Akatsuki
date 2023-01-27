import React from 'react'
import { membros } from '../assets/data'

const Membros = () => {
  return (
    <main className="font-mono flex flex-col items-center bg-red-900 text-white">
      <h1 className="text-3xl font-bold mt-10">Membros</h1>
      <ul className="grid grid-cols-1 w-4/5 md:grid-cols-3 place-items-center">
        {membros.map((membro) => (
          <li className="py-16 text-center p-3 my-2">
            <h2 className="text-3xl font-black">{membro.name}</h2>
            <img src={membro.urlImg} className="h-72 w-60 rounded-2xl" />
            <p className="text-xl font-bold">{membro.name}</p>
            <p className="font-bold">({membro.japanName})</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Membros
