import { PrismaClient } from '@prisma/client/extension'

const prisma = new PrismaClient()

async function main() {
    // await Promise.all(
    // 	Example.map(async example =>
    // 		prisma.example.upsert({
    // 			where: { unique_field: unique_field.id },
    // 			update: {},
    // 			create: example,
    // 		})
    // 	)
    // )
}
main()
    .catch(e => {
        //eslint-disable-next-line
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect()
    })
