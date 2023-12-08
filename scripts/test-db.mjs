import { PrismaClient } from '@prisma/client';

const db = new PrismaClient({
  log: [{ emit: 'stdout', level: 'query' }],
});

const comment = await db.comment.create({
  data: {
    slug: 'fall-guys',
    user: 'Dan',
    message: 'A Test message',
  },
});
console.log('created:', comment);

// const comments = db.comment.findMany({
//   where: { slug: 'fall-guys' },
// });
// console.log('comments:', comments);
