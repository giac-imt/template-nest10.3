# Ce dockerfile est un template de démarrage, n'hésitez pas à le retoucher pour les besoins de votre projet
ARG NODE_VERSION=18-alpine
ARG NODE_ENV=production

# BUILD STEP
FROM node:$NODE_VERSION AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci ---no-progress

COPY . .

RUN npm run build
RUN npm prune --omit=dev


# RESULT STEP
FROM node:$NODE_VERSION AS production

ARG NODE_ENV
ENV MAX_OLD_SPACE_SIZE=512

## install dumb-init to propagate system signals
RUN apk add dumb-init

WORKDIR /usr/src/app
USER node

COPY --from=builder --chown=node:node /usr/src/app/node_modules node_modules
COPY --from=builder --chown=node:node /usr/src/app/dist dist
COPY --from=builder --chown=node:node /usr/src/app/package.json package.json

EXPOSE 3001

ENTRYPOINT [ "dumb-init", "--" ]
CMD [ "sh", "-c", "export NODE_OPTIONS=--max_old_space_size=$MAX_OLD_SPACE_SIZE && node dist/main" ]
