const Koa = require("koa");
const Router = require("@koa/router");
const httpStatus = require("http-status");
const { lucas } = require("./lib");

const app = new Koa();
const router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = "Hello World";
  next();
});

router.get("/lucas/:n", async (ctx, next) => {
  const { n: rawN } = ctx.params;
  const n = parseInt(rawN, 10);
  if (!Number.isInteger(parseInt(n, 10))) {
    const err = new Error(`the passed index must be an integer, received ${n}`);
    err.status = httpStatus.BAD_REQUEST;
    err.expose = true;
    throw err;
  }
  let value;
  try {
    value = lucas(n);
  } catch (err) {
    err.status = httpStatus.INTERNAL_SERVER_ERROR;
    throw err;
  }

  ctx.body = value;
  ctx.status = 200;
  next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(5001, () => {
  console.log(`api listening on port ${5001}`);
});
