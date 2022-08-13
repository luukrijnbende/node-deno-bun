# node-deno-bun
Ever since the introduction of Bun (a super fast JavaScript runtime) there are three runtimes to choose from when wanting to develop and run a JavaScript server. Node.js was the one that started it all and most application are made to run on that, but how would those applications fare running on the other runtimes, are they really a drop-in replacement?

## Versions
|||
| ---- | ------------- |
| Node | 16.16.0 (LTS) | 
| Deno | 1.24.2        |
| Bun  | 0.1.7 (beta)  |

## Installation
The installation commands below assume you are using a Mac and have all the usual stuff installed.

### Node
```sh
nvm install 16.16.0
```

### Deno
```sh
brew install deno@1.24.2
```

### Bun
```sh
curl https://bun.sh/install | bash -s bun-v0.1.7
```

## Running
This repo contains several test projects.
- [A simple script](script)
- [A native HTTP server](http)
- [A simple express server](express)
- [A Nuxt.js app](nuxt)
- [A Next.js app](next)
- [An Angular Universal app](angular-universal)

Each of those projects can be started with the same commands.
### Node
```sh
yarn install
yarn start:node
```

### Deno
```sh
yarn install
yarn start:deno
```

### Bun
```sh
yarn install
yarn start:bun
```
