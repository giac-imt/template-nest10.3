import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from 'src/app.module'

import 'dotenv/config'

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'log', 'debug'],
    })

    app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
    const config = new DocumentBuilder()
        .addCookieAuth('access_token')
        .setTitle('CASTOR-QUOTATION-API')
        .setDescription('API to data related to Castor Quotation')
        .setVersion('1.0')
        .addTag('CASTOR')
        .build()

    const origins = []
    if (process.env.NODE_ENV === 'local') {
        // indiquer les URL nécessaires pour le bon fonctionnement du projet en local
        origins.push('http://localhost:port_utilise')
    } else if (process.env.NODE_ENV === 'dev') {
        // indiquer les URL nécessaires pour le bon fonctionnement du projet sur l'environnement de développement
        origins.push('https://mon-meilleur-site.develop.com')
    } else if (process.env.NODE_ENV === 'staging') {
        // indiquer les URL nécessaires pour le bon fonctionnement du projet sur l'environnement de staging/UAT
        origins.push('https://mon-meilleur-site.staging.com')
    } else if (process.env.NODE_ENV === 'prod') {
        // indiquer les URL nécessaires pour le bon fonctionnement du projet sur l'environnement de production
        origins.push('https://mon-meilleur-site.com')
    }

    // ajouter les méthodes nécessaires pour le projet dans les CORS
    app.enableCors({
        credentials: true,
        origin: origins,
        allowedHeaders: '*',
        methods: ['GET', 'POST', 'PUT'],
    })

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)
    await app.listen(process.env.PORT)
    // eslint-disable-next-line
    console.log(`[App] Server successfully started on port ${process.env.PORT}`)
    // eslint-disable-next-line
    console.log(`[App] Environment : ${process.env.NODE_ENV}`)
}
void bootstrap()
