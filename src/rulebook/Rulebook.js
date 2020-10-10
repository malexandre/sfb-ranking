import './Rulebook.css'
import React from 'react'

export default function Rulebook() {
  return (
    <div>
      <h2>Structure des saisons</h2>
      <p>
        Les saisons commencent par une phase de Ronde Suisse, permettant de détrminer les X meilleurs joueurs qui se
        qualifieront ensuite pour un tournoi à Double Élimination. Le X sera déterminer en fonction du nombre de
        participants, tout comme le nombre de matchs dans la Ronde Suisse. Les joueurs auront un match à jouer par semaine.
        Tous les matchs se jouent en une seule manche.
      </p>
      <p>
        Les tirages de la Ronde Suisse seront annoncés chaque vendredi soir, dès que tous les résultats de la semaine
        seront validés. Une victoire en phase de Ronde suisse rapporte 3 points. Une victoire par forfait rapporte 2
        points. Un match nul (les deux joueurs sont déclarés forfaits en même temps) 1 point chacun. Les défaites 0
        point. Les égalités sont départagées par la médiane Buchholz.
      </p>
      <p>
        Un groupe de 5 modérateurs a été désigné pour jouer le rôle d&apos;arbitre si le besoin émerge, comme par
        exemple pour déclarer quelqu&apos;un forfait pour un match s&apos;il pose un lapin à son adversaire sans raison.
      </p>
      <p>
        En dehors des tirages des matchs et de la gestion des résultats, tout est géré via Discord. Un channel dédié à
        chaque match sera disponible. Il est recommandé de vous organiser avec vos adversaires sur ce channel, à la vue
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
          équipe du même joueur. Une fois que les deux joueurs auront révélés leurs deux équipes, le joueur 1 doit ban
          une équipe du joueur 2. C&apos;est ensuite au tour du joueur 2 de ban une équipe du joueur 1. Et la suite suit
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
    </div>
  )
}
