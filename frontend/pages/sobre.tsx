import React from "react";
import Image from "next/image";

const Sobre = () => {
  return (
    <div className="mx-auto max-w-5xl px-8 mt-20">
      <div className="title text-white my-4">
        <h2>ANTI PANÓPTICO - Sobrevivência num mundo pós-privacidade</h2>
        <span>--</span>
      </div>
      <div className="post" style={{ color: "#c8c8c8" }}>
        <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
          <p className="mb-2">
            &ldquo; O princípio é conhecido: na periferia uma construção em
            anel; no centro, uma torre; esta é vazada de largas janelas que se
            abrem sobre a face interna do anel; a construção periférica é
            dividida em celas, cada uma atravessando toda a espessura da
            construção; elas têm duas janelas, uma para o interior,
            correspondendo às janelas da torre; outra, que dá para o exterior,
            permite que a luz atravesse a cela de lado a lado &rdquo;
          </p>
          <cite>
            <a>- Foucault, Vigiar e Punir</a>
          </cite>
        </blockquote>
        <p className="py-4">
          Essa é a definição que Foucault traz para o panóptico, um instrumento
          idealizado por Bentham para auxiliar na atividade de vigiar, seu
          princípio ironicamente remete a luz, pois se tudo for posto a luz,
          nada sera escondido. É muito mais fácil vigiar um prisioneiro exposto
          a luz do que um em uma escura masmorra.
        </p>
        <p className="py-4">
          O panóptico nos coloca na posição de animal preso em um zoológico,
          quando tudo é posto a luz tudo é revelado, a observação constante e
          ubíqua. No lugar da privação e do ocultamento temos a visibilidade, e
          por conseqüência, uma maior capacidade de vigilância e punição.
        </p>
        <p className="py-4">
          Mas ele não serve apenas com o propósito de dar mais visibilidade, mas
          também a idéia de divisibilidade, a cela individualizada e a
          discriminação frente à luz facilitam o estudo individualizado, assim,
          paulatinamente isolados do todo, a luz captura para isolar.
        </p>
        <p className="py-4">
          Todo esse processo de vigilância resulta em mais disciplina, menos
          distrações, e contribui para um maior exercício do poder através do
          controle. Para além disso, a disciplina atua como ente modelador de
          comportamento, quando todos os olhos se voltam para mim, de lá de
          dentro da escuridão, quem sou alem daquele que querem que eu seja?
        </p>
        <p className="py-4">
          Nesse modelo de sociedade disciplinar nós vivemos um processo contínuo
          de observação, ação disciplinatória e punição. Transitamos entre
          prisões, da escola para a caserna, da caserna para a fábrica, a
          disciplina não é o lugar físico, mas a difusão do poder sobre o
          indivíduo.
        </p>
        <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
          <p className="mb-2">
            &ldquo; Devemos ainda nos admirar que a prisão se pareça com as
            fábricas, com as escolas, com os quartéis, com os hospitais, e todos
            se pareçam com as prisões?” &rdquo;
          </p>
          <cite>
            <a>- Foucault, Vigiar e Punir</a>
          </cite>
        </blockquote>
        <h2 className="py-4">
          Por isso, em momentos como esse, precisamos questionar &quot; Quem há
          de vigiar os próprios vigilantes? &quot; e consequentemente, cegar o
          Panóptico, ou mitigar sua ação, se nossa ambição for algum grau de
          liberdade.
        </h2>
        <p className="py-4">
          O propósito deste projeto não é meramente atuar no mapeamento de
          câmeras de segurança, mas instigar o questionamento sobre tal
          indústria, que se vale a vigilância ativa e uma consequente punição
          para aqueles que não se encaixam no modelo. Não é apenas perverso, mas
          lucrativo e eficaz, docilizar para dominar é parte do nosso mote
          humano.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
