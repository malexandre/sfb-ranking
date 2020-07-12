import './Rulebook.css'
import React from 'react'

export default function Faq() {
  return (
    <div>
      <h1 className="mb-4">F.A.Q. Confirmée par Mythic Games</h1>
      <dl>
        <dt>Le déplacement de Deryn est-il optionnel sur sa réaction ?</dt>
        <dd>Non, il est obligatoire.</dd>

        <dt>
          Si un champion sur lequel a été joué une réaction est mis &quot;Out of Action&quot;, est-ce que les effets de
          la réaction s&apos;applique toujours autour de l&apos;endroit où il est mort ?
        </dt>
        <dd>
          Non. Dans la séquence de combat du livre de règle, si le champion est mis &quot;Out of Action&quot; lors de
          l&apos;étape 7, ça arrive bien avant la réaction, donc le champion n&apos;est déjà plus sur plateau lorsque la
          réaction se déroule.
        </dd>

        <dt>
          Si une attaque possède un Push ou un Pull, et que le champion ciblé joue une réaction qui lui permet de se
          déplacer, et qu&apos;il se déplace de façon à ne plus être aligné avec l&apos;attaquant, est-ce qu&apos;on
          fait toujours le Push ou le Pull ?
        </dt>
        <dd>
          Non, on résoud la séquence d&apos;attaque dans l&apos;order. Le Push/Pull étant un effet Post-Attaque, il est
          résolu après la réaction, et à ce moment là les champions ne sont plus alignés.
        </dd>

        <dt>
          Est-ce que Mariusz, en devenant exalté, gagne Vol de vie directement sur l&apos;attaque qu&apos;il vient
          d&apos;utiliser s&apos;il est Bloodied ?
        </dt>
        <dd>
          Non, les dommages ont été distribué lorsqu&apos;il n&apos;était pas exalté, donc l&apos;attaque n&apos;avait
          pas Vol de vie à ce moment là.
        </dd>

        <dt>
          Quand une unité subit un fear, peut-elle choisir une direction qui ne permet pas de faire le Dash au maximum
          quand une qui le permet existe ?
        </dt>
        <dd>
          S&apos;il y a une direciton qui permet de Dash 2 en s&apos;éloignant de la source du Fear il faut la choisir
          en priorité devant les direcitons qui ne permettent que de Dash 1.
        </dd>

        <dt>
          Avec la carte Nightmare de Nevamor, s&apos;il traverese plusieurs ennemis, dans quel ordre sont fait les Fear
          ?
        </dt>
        <dd>
          Le joueur qui subit le Fear choisi dans quel ordre les champions se déplacent. Donc un champion peut se
          déplacer et laisser une place à un autre.
        </dd>

        <dt>
          Si une réaction tue l&apos;attaquant, qui level up ? Le champion attaqué ou le champion à qui appartient la
          réaction ?
        </dt>
        <dd>Le champion attaqué, sauf si spécifié autrement sur la réaction.</dd>

        <dt>Est-ce qu&apos;un champion peut level up alors qu&apos;il est Out of Action ?</dt>
        <dd>Non.</dd>

        <dt>
          Si une attaque avec Drain de vie applique plus de dommages qu&apos;il ne reste de point de vie à la cible,
          est-ce que l&apos;attaque ne draine que le nombre de points de vie restants, ou les dommages totaux ?
        </dt>
        <dd>
          Dommages totaux. Donc une attaque 5 lifesteal contre une cible avec 2 points de vie et 0 d&apos;armure soigne
          l&apos;attaquant de 5.
        </dd>
      </dl>
    </div>
  )
}
