import './Rulebook.css'
import React from 'react'

export default function Rulebook() {
  return (
    <div>
      <h1>Ligue Super Fantasy Brawl</h1>
      <p className="lead">Bienvenue sur le site de la ligue Super Fantasy Brawl Francophone !</p>

      <h2>À quoi sert ce site ?</h2>
      <p>
        Cette page contient les règles de la ligue et les liens importants. Sur les autres pages, l&apos;historique de
        toutes les saisons et compétitions jouées est consultable, ainsi que le classement SFB (inspiré du classement
        ATP, pour aider à la répartition des joueurs dans les phases de poule).
      </p>

      <h2>Comment participer ?</h2>
      <p>Le tournoi est ouvert à tous ceux qui sont intéressés et qui parlent français.</p>
      <p>
        Pour l&apos;instant les matchs seront joués sur Tabletopia, mais à l&apos;avenir ils pourront être joués en face
        à face quand le jeu aura été livré.
      </p>
      <p>
        Les inscriptions s&apos;effectuent sur Toornament, un site qui gère automatiquement l&apos;organisation du
        tournoi. Entre chaque saison il y aura une fenêtre d&apos;inscription de deux semaines, annoncées sur le groupe
        Facebook et sur le Discord.
      </p>

      <h2>Structure des saisons</h2>
      <p>
        Les saisons ont une durée 3 mois, avec environ 2 mois dédiés à la phase de groupe, puis 1 mois dédié à la phase
        finale.
      </p>
      <p>
        Le tirage de la phase de groupe est pondéré par le classement actuel de chaque participant. Le nombre de groupe
        sera dépendant du nombre d&apos;inscrits, tout comme le format <b>toutes rondes</b> ou{ ' ' }
        <b>format rondes suisses</b>.
      </p>
      <p>
        Une victoire en phase de groupe rapporte 3 points. Les égalités sont départagées par la différence de points,
        puis par la puissance offensive, puis par les résultats directs, puis au hasard.
      </p>
      <p>
        Les matchs de la phase de poule se jouent en une seule manche, tandis que ceux de la phase finale se jouent en 2
        manches gagnantes (ou autrement dit, le meilleur de 3 manches).
      </p>
      <p>
        Un groupe de 5 modérateurs a été désigné pour jouer le rôle d&apos;arbitre si le besoin émerge, comme par
        exemple pour déclarer quelqu&apos;un forfait pour un match s&apos;il pose un lapin à son adversaire sans raison.
      </p>
      <p>
        En dehors des tirages des groupes et de la gestion des résultats, tout est géré via Discord. Un channel dédié à
        chaque groupe sera disponible. Il est recommandé de vous organiser avec vos adversaires sur ce channel, à la vue
        de tout le monde. C&apos;est le meilleur moyen que nous avons trouvé pour faciliter les décisions des
        modérateurs, mais aussi pour facilement voir quand est-ce que les prochains matchs seront joués.
      </p>
      <p>
        À la fin de chaque saison, des discussions seront entamées avec la communauté pour décider si des changements
        sont à apporter pour la saison suivante, que ce soit en terme d&apos;organisation ou de règles durant les
        matchs.
      </p>
      <p>
        En plus des saisons, des tournois ponctuels pourront être organisés par la communauté, par exemple pour occuper
        ceux qui ne sont pas qualifiés pour la phase finale pendant qu&apos;elle se déroule, ou pour tester
        d&apos;autres formats.
      </p>

      <h2>Structure des matchs</h2>
      <p>
        Malheureusement, le jeu n&apos;est actuellement pas entièrement équilibré. Ce n&apos;est pas très important sur
        les parties amicales, mais dans un format compétitif, le premier joueur serait un poil trop avantangé si on
        suivait parfaitement les règles officielles. Pour rétablir l&apos;équilibre, les matchs de la ligue suivront les
        règles officielles à l&apos;excepion de ces deux changements :
      </p>
      <dl className="row">
        <dt className="col-sm-3">Draft</dt>
        <dd className="col-sm-9">
          Le format utilisé a été surnommé &quot;Double Draft Compétitive&quot;. Un joueur doit créer deux équipes de 5
          parmis la totalité des champions actuellement disponible. Chaque champion ne peut apparaître que dans une
          équipe du même joueur. Une fois que les deux joueurs auront révélés leurs deux équipes, le joueur 2 doit ban
          une équipe du joueur 1. C&apos;est ensuite au tour du joueur 1 de ban une équipe du joueur 2. Et la suite suit
          le format de &quot;Draft Compétitive&quot; du livre de règle.
        </dd>

        <dt className="col-sm-3">Mise en place des objectifs</dt>
        <dd className="col-sm-9">
          <p>
            Après avoir révélé les deux objectifs lors de la mise en place, le joueur 2 peut décider de mulligan tout ou
            partie des objectifs révélés.
          </p>
        </dd>
      </dl>
      <p>
        Concernant les phases finales, seul le premier match utilise le tirage au sort pour déterminer le premier
        joueur. Pour les matchs suivants, le premier joueur est le perdant du match précédent.
      </p>

      <h2>Fonctionnement du classement SFB</h2>
      <p>
        Inspiré par le classement ATP, chaque participation à une saison ou un tournoi ponctuel peut apporter des points
        pour le classement SFB. L&apos;équipe de modération sera en charge de décider si un tournoi ponctuel est assez
        compétitif pour être pris en compte dans le classement. Par exemple, un format qui distribue aléatoirement 3
        champions à chaque joueur serait un poil trop aléatoire pour être vraiment compétitif.
      </p>
      <p>
        Plus les compétitions sont longues, plus elles peuvent rapporter de points. Les saisons rapportent plus de
        points que les tournois ponctuels.
      </p>
      <p>
        Seuls ceux présents dans la première moitié du tableau remportent des points par rapport à leur classement
        final, mais tout le monde remporte des points de participation : 15 points par saison, ou 1 point par match de
        tournoi ponctuel (avec un maximum de 10 points).
      </p>
      <p>
        Le classement ne prend en compte que les deux dernières saisons (qu&apos;on appellera tournois majeurs), et les
        deux meilleurs résultats de tournois ponctuels (appelés tournois mineurs) sur la période de ces deux saisons.
      </p>
      <p>Voici les points gagner par rapport à la position finale :</p>
      <table className="table table-striped">
        <thead className="bg-primary text-light">
          <tr>
            <th scope="col">Position finale</th>
            <th scope="col" colSpan="2">
              Tournoi majeur
            </th>
            <th scope="col" colSpan="2">
              Tournoi mineur
            </th>
          </tr>
          <tr>
            <th scope="col"></th>
            <th scope="col">Seul(e)</th>
            <th scope="col">À égalité</th>
            <th scope="col">Seul(e)</th>
            <th scope="col">À égalité</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td colSpan="2">50</td>
            <td colSpan="2">35</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td colSpan="2">40</td>
            <td colSpan="2">25</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>25</td>
            <td>30</td>
            <td>15</td>
            <td>20</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>20</td>
            <td>25</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>15</td>
            <td>19</td>
            <td>5</td>
            <td>9</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>10</td>
            <td>13</td>
            <td>4</td>
            <td>7</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>9</td>
            <td>11</td>
            <td>3</td>
            <td>5</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>8</td>
            <td>10</td>
            <td>2</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>7</td>
            <td>9</td>
            <td>2</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>6</td>
            <td>8</td>
            <td>2</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>5</td>
            <td>6</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td>4</td>
            <td>5</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <th scope="row">13 jusqu&apos;à 16</th>
            <td>3</td>
            <td>4</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <th scope="row">17 et après</th>
            <td colSpan="2">3</td>
            <td colSpan="2">2</td>
          </tr>
        </tbody>
      </table>

      <h2>Liens importants</h2>
      <dl className="row">
        <dt className="col-sm-3">Livre de règles en Français</dt>
        <dd className="col-sm-9">
          <a href="https://www.dropbox.com/s/9jd7zk7rl3ld3if/SFB_RULES_FR_V3_Updated.pdf?dl=0">
            https://www.dropbox.com/s/9jd7zk7rl3ld3if/SFB_RULES_FR_V3_Updated.pdf?dl=0
          </a>
        </dd>

        <dt className="col-sm-3">Livre de règles en Anglais</dt>
        <dd className="col-sm-9">
          <a href="https://www.dropbox.com/s/5ujqbf3jo5adz2i/SFB_RULES_EN_V3_w_errata.pdf?dl=0">
            https://www.dropbox.com/s/5ujqbf3jo5adz2i/SFB_RULES_EN_V3_w_errata.pdf?dl=0
          </a>
        </dd>

        <dt className="col-sm-3">Discord SFB Francophone</dt>
        <dd className="col-sm-9">
          <a href="https://discord.gg/CtQYJYh">https://discord.gg/CtQYJYh</a>
        </dd>

        <dt className="col-sm-3">Facebook SFB Francophone</dt>
        <dd className="col-sm-9">
          <a href="https://www.facebook.com/groups/604249506754297">https://www.facebook.com/groups/604249506754297</a>
        </dd>

        <dt className="col-sm-3">Tabletopia</dt>
        <dd className="col-sm-9">
          <a href="https://tabletopia.com/games/superfantasybrawl">https://tabletopia.com/games/superfantasybrawl</a>
        </dd>

        <dt className="col-sm-3">Tuto Tabletopia</dt>
        <dd className="col-sm-9">
          <a href="https://www.youtube.com/watch?v=fsWuKMlwYTw">https://www.youtube.com/watch?v=fsWuKMlwYTw</a>
        </dd>

        <dt className="col-sm-3">Tuto Discord</dt>
        <dd className="col-sm-9">
          <a href="https://www.youtube.com/watch?v=cC3dnX5_xz4">https://www.youtube.com/watch?v=cC3dnX5_xz4</a>
        </dd>
      </dl>

      <h2>F.A.Q. Confirmée par Mythic Games</h2>
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
          Est-ce que Mariusz en devenant exalté gagne Vol de vie directement sur l&apos;attaque qu&apos;il vient
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
          S&apos;il y a une direciton qui permet de Dash 2 en s&apos;éloignant de la spirce du Fear il faut la choisir
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
