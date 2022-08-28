# node-deno-bun
Ever since the introduction of Bun (a super fast JavaScript runtime) there are three runtimes to choose from when wanting to develop and run a JavaScript server. Node.js was the one that started it all and most application are made to run on that, but how would those applications fare running on the other runtimes, are they really a drop-in replacement?

## Versions
|||
| ---- | ------------- |
| Node | 16.17.0 (LTS) | 
| Deno | 1.25.0        |
| Bun  | 0.1.10 (beta) |

## Installation
The installation commands below assume you are using a Mac and have all the usual stuff installed.

### Node
```sh
nvm install 16.17.0
```

### Deno
```sh
curl -fsSL https://deno.land/install.sh | sh -s v1.25.0
```

### Bun
```sh
curl https://bun.sh/install | bash -s bun-v0.1.10
```

## Running
This repo contains several test projects.
- [A simple script](script)
- [A native HTTP server](http)
- [A simple express server](express)
- [A Nuxt.js 2 app](nuxt2)
- [A Nuxt.js 3 app](nuxt3)
- [A Next.js app](next)
- [An Angular Universal app](angular-universal)

Each of those projects can be started with the same commands.
### Node
```sh
yarn install
yarn build
yarn start:node
```

### Deno
```sh
yarn install
yarn build
yarn start:deno
```

### Bun
```sh
yarn install
yarn build
yarn start:bun
```
