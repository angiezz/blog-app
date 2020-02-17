import makeRouter from 'koa-router';

const router = makeRouter();

router.get('/*', async (ctx, next) => {
  console.log('next=======>', { ctx });
  await ctx.state.mobx.HomeStore.initBlogList();
  // await ctx.state.mobx.ArchiveStore.getArchivesList();
  await next();
});

export default router;
