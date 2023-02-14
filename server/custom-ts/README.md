# fireboom-ts-hook

## Install

```bash
pnpm install
# or
# yarn install
# npm install
```

## Run in dev

```bash
npm run dev
```

If you want to re-run when file changed, you should install `ts-node-dev` and run

```bash
npm run dev:watch
```

## Run in production

1. Build ts files

```bash
npm run build
```

2. Start

```bash
npm run start
```

生产环境启动方式
```ts
cd server 
./fireboom build
systemctl restart fb
```
查看生产环境authKey
```ts
systemctl status fb
```