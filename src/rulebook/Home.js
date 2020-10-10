import './Rulebook.css'
import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>Ligue Super Fantasy Brawl</h1>
      <p className="lead">
        Bienvenue sur le site de la ligue Super Fantasy Brawl Francophone ! Cette Ligue est gérée par
        et pour la Communauté francophone de SFB. Bien que nous sommes en contact avec Mythic, il est important de
        préciser que cette Ligue n&apos;est pas gérée par Mythic ou un des distributeurs du jeu.
      </p>

      <h2>À quoi sert ce site ?</h2>
      <p>
        Cette page contient les règles de la ligue et les liens importants. Sur les autres pages, l&apos;historique de
        toutes les saisons et compétitions jouées est consultable, ainsi que le classement SFB (inspiré du classement
        ATP, pour aider à la répartition des joueurs dans les phases de poule).
      </p>

      <h2>Comment participer ?</h2>
      <p>La ligue est ouverte à tous ceux qui sont intéressés et qui parlent français.</p>
      <p>
        Pour l&apos;instant les matchs seront joués sur Tabletopia, mais à l&apos;avenir ils pourront être joués en face
        à face quand le jeu aura été livré.
      </p>
      <p>
        Les inscriptions s&apos;effectuent sur Toornament, un site qui gère automatiquement l&apos;organisation du
        tournoi. Entre chaque saison il y aura une fenêtre d&apos;inscription de deux semaines, annoncées sur le groupe
        Facebook et sur le Discord.
      </p>

      <iframe width="640" height="360" src="https://widget.toornament.com/tournaments/3982645302550142976/?_locale=fr" allowfullscreen frameborder="0"></iframe>
      <iframe width="640" height="360" src="https://widget.toornament.com/tournaments/3692103847403331584/?_locale=fr" allowFullScreen frameBorder="0"></iframe>

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

        <dt className="col-sm-3">SFB Database</dt>
        <dd className="col-sm-9">
          <a href="http://sfbdb.com">http://sfbdb.com</a>
        </dd>
      </dl>
    </div>
  )
}
