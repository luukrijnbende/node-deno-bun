# node-deno-bun
Are Deno and Bun really drop-in replacements for Node?

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
- [A generic express server](express)
- [A Nuxt app](nuxt)
- [A Next app](next)
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
