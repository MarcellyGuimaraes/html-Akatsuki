import React from 'react'
import akatsuki from '../assets/img/akatsuki.png'

const Historia = () => {
  return (
    <div className="bg-red-400 font-mono flex flex-col items-center">
      <h1 className="text-center py-8 text-2xl font-bold">
        {' '}
        A HISTORIA DA AKATSUKI
      </h1>

      <div className="mx-7 w-4/5 flex flex-col items-center">
        <p className="mb-6">
          Akatsuki (暁; Literalmente significa "Amanhecer") foi inicialmente uma
          organização criada por Yahiko e seus dois companheiros Konan e Nagato,
          em um esforço para lutar contra a tirania e a opressão que sua aldeia
          natal, Amegakure, estava enfrentando durante a Terceira Guerra Mundial
          Shinobi, além da ambição de conquistar a paz mundial.
        </p>

        <p className="mb-6">
          Após a morte de Yahiko e sob a influência de Obito Uchiha, a Akatsuki
          tornou-se uma organização criminosa formada por Nukenin de Rank S e é
          o grupo mais procurado em todo o mundo shinobi. Seu principal objetivo
          é recolher todos os Bijū para o seu plano de dominação mundial. Como
          tal, a Akatsuki, apesar de ter inicialmente um papel menor durante a
          Parte I, tornou-se a principal força antagônica na Parte II.
        </p>

        <p className="mb-6">
          A Akatsuki foi em um determinado momento composta por, no máximo, dez
          membros primários, os quais foram criminosos Rank S de suas
          respectivas aldeias — com a exceção de Nagato e Konan. Os membros
          sempre trabalham em equipes de dois, com exceção de Zetsu, que
          funciona como o espião da organização, e faz uso de suas habilidades
          únicas para o benefício da organização. Os membros da equipe devem
          cooperar muito bem, ou pelo menos o suficiente para realizar suas
          tarefas, mesmo que alguns possam ter problemas mútuos com o outro. A
          organização raramente é totalmente reunida, como visto no final da
          Parte I, quando um membro disse que era a primeira vez em sete anos,
          que eles se reuniram.
        </p>

        <p className="mb-6">
          A organização é generalizada, abrangendo vários países, tendo agentes
          em vários lugares. Quando uma equipe encontra um Bijū e tem que
          começar o trabalho de selar a besta, eles têm esconderijos escondidos
          com muitas armadilhas prontas, para protegê-los enquanto realizam sua
          longa técnica de três dias.
        </p>
        <img className="my-10 w-2/5" src={akatsuki} />

        <p className="mb-6">
          A Akatsuki foi fundada originalmente por Yahiko durante a Terceira
          Guerra Mundial Shinobi, sendo constituída por ninjas de Amegakure que
          desejavam criar a paz para seu país de origem, que funcionava como um
          campo de batalha para três dos Cinco Grandes Países Shinobi.
        </p>

        <p className="mb-6">
          Yahiko insistia que suas ações assim como as ações dos membros
          restantes da Akatsuki eram feitas apenas para ajudar Nagato à trazer a
          paz mundial, embora Konan tenha alegado que era o carisma de Yahiko
          que mantinha o grupo unido e estimulado. Obito alega que foi ele quem
          motivou Yahiko à formar a organização e, assim, credita-se como o
          criador do grupo.
        </p>

        <p className="mb-6">
          Apesar de ele só ter se encontrado uma vez com Yahiko, o jovem ficou
          cauteloso com relação ao homem mascarado e não acreditou em sua
          afirmação de ser Madara Uchiha, Obito, porém, deixou uma impressão em
          Nagato, ao mesmo tempo em que prometeu esperar por ele e seu amigo
          quando eles decidirem procurar o seu conselho.
        </p>

        <p className="mb-6">
          Em seus primeiros dias, a Akatsuki ganhou fama e reconhecimento em
          Amegakure, chamando a atenção de Hanzō da Salamandra — um ninja de
          renome mundial e líder do país. Acreditando que o grupo estava se
          tornando uma ameaça ao seu governo, além de ser incentivado por Danzō
          Shimura, que o fez acreditar que a Akatsuki estava conspirando para
          derrubá-lo, Hanzō se aproximou da organização e afirmou falsamente que
          ele queria usá-los como um eixo para negociar a paz entre
          Konohagakure, Iwagakure e Sunagakure. No entanto, Hanzō traiu a
          Akatsuki e, trabalhando em conjunto com Danzō Shimura da Anbu de
          Konohagakure, sequestraram Konan e orquestraram a morte de Yahiko.
          Após se sincronizar com a Estátua Demoníaca do Caminho Exterior e
          tentar se vingar dos assassinos de Yahiko, utilizando o cadáver de seu
          amigo como um recipiente e passando a usar o nome Pain, Nagato se
          tornou o novo líder da Akatsuki e assumiu o controle de Amegakure após
          uma guerra civil.
        </p>
      </div>
    </div>
  )
}

export default Historia
