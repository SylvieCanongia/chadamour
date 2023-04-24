# Chadamour

Bienvenue sur Chadamour !

Un site pour les amoureux des chats :smile_cat: :kissing_cat: :heart_eyes:

## Stack

- Next JS 13 / TypeScript / SASS

## Prérequis / Prerequisites

- Node >=18.15.0
- NPM
- PNPM

## Lancement du projet

`pnpm install`

`pnpm dev`

## Environement de développement / Environment development

- Verrouillage des versions de Node sur le projet (`.nvmrc`) et du gestionnaire de paquet (`.npmrc`)
- [Git](https://git-scm.com/doc)
- Qualité avec [**ESLint**](https://eslint.org/)
- Formattage avec [**Prettier**](https://prettier.io/) ([+ Extension VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode))
- Git hooks avec [**Husky**](https://typicode.github.io/husky/#/) pour automatiser ESLint, Prettier et Build
- Configuration des commit avec [**commitlint**](https://commitlint.js.org/#/) - [NPM package](https://www.npmjs.com/package/@commitlint/config-conventional)

- Script de débogage avec [**cross-env**](https://www.npmjs.com/package/cross-env)

```json
// package.json

{
  ...
  "scripts": {
    ...
    "dev": "cross-env NODE_OPTIONS='--inspect' next dev",
  },
}
```

- Documentation avec [Storybook](https://storybook.js.org/).
  `pnpm storybook`

  port local : <http://localhost:6006/>

## Tests unitaires (et end-to-end)

A venir

## Architecture des dossiers

Dossier `src` :

- core
- domain
  - components
  - lib
- packages
  - config
  - shared
    - header
    - layout
- pages

Les packages m'ont permis de tester l'import de composants globaux (`header` et `layout`) en tant que package depuis les `node_modules`.

Pour vérifier que les importations se font dans le bon sens (core => domain => pages), des règles sont définies dans le fichier `eslintrc.json` :

```json
//eslintrc.json
{
  ...
  "rules": {
    // warn us if we're importing from the wrong paths
    "import/no-restricted-paths": [
      "error", // can be "warning" if prefered
      {
        "zones": [
          {
            "target": "./src/core",
            "from": "./src/domain/components"
          },
          {
            "target": "./src/core",
            "from": "./src/domain/lib"
          },
          {
            "target": "./src/core",
            "from": "./src/pages"
          },
          {
            "target": "./src/core",
            "from": "./src/packages/shared"
          },
          {
            "target": "./src/domain/components",
            "from": "./src/pages"
          },
          {
            "target": "./src/domain/lib",
            "from": "./src/pages"
          },
          {
            "target": "./src/packages/shared",
            "from": "./src/pages"
          }
        ]
      }
    ]
  }
}
```

## Déploiement

A venir
