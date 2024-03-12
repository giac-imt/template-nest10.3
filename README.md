## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

-   Nest 10.3.0
-   Prettier 3.1.1 & Eslint 8.56.0
-   Husky :
    -   Lint staged
    -   Validate branch name
    -   Validate commit name
-   Docker compose for Postgres
-   Dockerfile for mimimum efficient image

## Installation

```bash
$ npm install

$ cp .env.dist .env
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Architecture Back

```yaml
├── . husky/: contient les fichiers de pre-commit (vérification de message de commit et/ou du contenu).
└── src/: contient les fichiers sources du projet.
│       ├── ResourceFolder/: Dossier spécifique pour les modules généré par la CLI Nest.
│       │       ├── dto/: Contient les objets de transfert de données utilisés pour des données entre les clients et le serveur généré par la CLI Nest.
│       │       ├── entities/: Dossier avec modèles de données ORM correspondant aux tables de la base de données, générés par la CLI Nest.
│       │       ├── resource.module.ts: Module NestJS pour fournir le service d'accès à la base de données généré par la CLI Nest.
│       │       ├── resource.controller.ts: Controller NestJS pour gérer le routing et les erreurs généré par la CLI Nest.
│       │       ├── resource.controller.spec.ts: Controller NestJS pour tester le routing et les erreurs généré par la CLI Nest.
│       │       ├── resource.service.ts: Service NestJS pour effectuer les opérations de base de données généré par la CLI Nest.
│       │       └── resource.service.spec.ts: Tests unitaires pour le service d'accès à la base de données généré par la CLI Nest.
│   	└── main.ts: nécessaire pour lancer l'application.
├── test/: contient les tests unitaires et/ou d'intégration de l'application.
├── . dockerignore: ignore les fichiers non nécessaires pour Docker.
├── . env: variables d'environnement utilisées au niveau local, copié/collé du .env.dist avec ajout des clés privées (CE FICHIER DOIT ÊTRE GITIGNORE).
├── . env.dist: variables d'environnement poussées au niveau de git (UNIQUEMENT DES CLES PUBLIQUES).
├── . eslintrc.json: ensemble des règles Eslint qui doivent être respectées sur le projet.
├── . gitignore: ensemble des fichiers ignorés par Git.
├── . gitlab-ci.yml: intégration continue (pipelines) avec Gitlab.
├── . nvmrc: version de node figée pour tout le projet.
├── . prettierrc: ensemble des règles Prettier qui doivent être appliquées sur le projet.
├── Dockerfile: intructions de création d'image avec Docker.
├── docker-compose.yml: définir et éxécuter des applications Docker (base de donneés).
├── lint-staged.config.js: règles qui doivent être appliquées par husky à chaque commit.
├── nest-cli.json: fichier de configuration de la CLI NestJS.
├── README.md: informations du projet (lancement, architecture, ...).
├── package.json: ensemble des packages installés sur le projet.
├── package-lock.json: version immuable du package.json.
├── tsconfig.json: options de compilation TypeScript.
└── collections.json: ensemble des collections Postman.
```

## Utilisation de la version de node du projet

Tapez la commande : `nvm use`
