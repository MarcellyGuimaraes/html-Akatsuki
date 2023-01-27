import React from 'react'
import Akatsuki from '../assets/img/membros-da-akatsuki.jpg'

const Main = () => {
  return (
    <section className="flex w-screen flex-col items-center">
      <img src={Akatsuki} className="w-screen" alt="Membros da akatsuki" />
      <h2 className="my-5 text-3xl font-bold">Akatsuki</h2>

      <div className="w-3/5">
        <p>
          <strong>Akatsuki</strong> é a organização de mercenários e vilões de{' '}
          <strong>Naruto</strong>. Mesmo que tenham sido os principais
          antagonistas do anime, é quase impossível ter acompanhado as aventuras
          dos shinobis de <strong>Konoha</strong> e não ter se apaixonado ou, no
          mínimo, simpatizado com a Akatsuki. Afinal, a organização é
          absolutamente cativante seja em design, carisma ou história.
        </p>

        <p id="org">
          Quanto aos <strong>objetivos</strong> da Akatsuki, depende muito da
          versão que estamos falando do grupo. Em comum, dá para dizer que todas
          as versões do grupo mostradas em Naruto traziam como ideal{' '}
          <strong>alcançar algum conceito de paz mundial</strong> – de forma
          distorcida ou não.
        </p>

        <p>
          Quando conhecemos a <strong>Akatsuki</strong>, o grupo é formado por
          shinobis renegados que trabalham como mercenários em missões secretas
          para alguns países ninja. Além disso, eles possuíam um objetivo
          próprio, que é revelado mais adiante, de{' '}
          <em>
            <strong>capturar todos os Jinchuuriki</strong>
          </em>{' '}
          para extrair deles as Bestas de Cauda.
        </p>
      </div>
    </section>
  )
}

export default Main
