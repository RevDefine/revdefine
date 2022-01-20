# Rev Define (revdefine)

RChain BlockExplorer


This is just a front-end project which only display the data in the RChain. There are no mock data to demonstrate. If you really want to run the explorer with real data, you have to start the [custom RNode](https://github.com/zsluedem/rchain/tree/revdefine) and connect to it.

**The custom RNode is not an official RNode version developed by the whole core team!!!!Bugs and problems are expected.**

## Prerequirements
You need to install the software below to compile.

1. [yarn](https://yarnpkg.com/)

## Download the package and install the dependencies
```bash
$ git clone https://github.com/RevDefine/revdefine.git
$ cd revdefine
$ yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
$ quasar dev
```

Then you can browse the page by http://localhost:8080

### Build the app for production
```bash
quasar build
```

The generated static files would locate in `dist`.

### config RNode server

The default host which the explorer is trying to connect is localhost.

You can edit the hosts by editting [productionHost.ts](./src/defineAPI/productionHost.ts)


Currently revdefine.io is supporting the data providing.You can also use revdefine api.

```typescript
export const productionHost = 'https://revdefine.io'
export const productionRNodePort = 40406
```