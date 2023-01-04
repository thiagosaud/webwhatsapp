![SOCIAL PREVIEW](https://raw.githubusercontent.com/thiagosaud/webwhatsapp/main/temp/imgs/social-preview.png 'WHATSAPP WEB BY THIAGO SAUD')

#

<p align="center">
  <img src="https://img.shields.io/github/stars/thiagosaud/webwhatsapp?style=social" />
  <img src="https://img.shields.io/github/forks/thiagosaud/webwhatsapp?style=social" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/thiagosaud/webwhatsapp?color=%2362df5e&logoColor=%2362df5e" />
  <img src="https://img.shields.io/github/sponsors/thiagosaud?color=%2362df5e&logoColor=%2362df5e" />
  <img src="https://img.shields.io/github/languages/count/thiagosaud/webwhatsapp?color=%2362df5e&logoColor=%2362df5e" />
  <img src="https://img.shields.io/github/v/release/thiagosaud/webwhatsapp?include_prereleases?color=%2362df5e&logoColor=%2362df5e" />
  <img src="https://img.shields.io/github/last-commit/thiagosaud/webwhatsapp?color=%2362df5e&logoColor=%2362df5e" />
</p>

## :rocket: About the Project

This project was created to _demonstrate all my knowledge with the Angular platform and its ecosystem_ such as state manipulation with the [NGRX library](https://ngrx.io/guide/store) and event-based development with the [RXJS library](https://rxjs-dev.firebaseapp.com/guide/overview).

The **_VERCEL SERVELESS_** was also used to create a _"mock"_, where I _simulate the backend_, [Prettier](https://prettier.io/) and [Husky](https://github.com/typicode/husky) to _control style-guide_, _code standardization and versioning_.

### Notes

This project is still in _development mode_, _but functional for purposes of studies and knowledge_. What I will _implement in the future_ will be the _control of routes_ using the [NGRX-Router](https://ngrx.io/guide/router-store), the _control of data management of the entity_ with [NGRX-Data](https://ngrx.io/guide/data) and _possibly the insertion of user session simulation_.

### Store

_There are two items in the store, which are:_

- `User`
- `Chat`

The `User` refers to all users and its operation is quite simple, there are two types of users, which are:

1. `Main` (It is the user who accessed the system)
2. `Not Main` (He is the friend of User Main)

_Its structure is as follows:_

```js
{
	"id": string,
	"full_name": string,
	"avatar": string,
	"isMain": bool,
	"isClicked": bool
},
```

`Chat` refers to all conversations between `User Main` and "`User Not Main`", the operation is also quite simple, the architecture was based on `noSQL`, where the `ID` of the given `Chat` is the user `ID`.

_Its structure is as follows:_

```js
{
	"id": string,
	"messages": [
		{
			"id": string,
			"text": string,
			"time": string,
			"isMain": bool,
			"isRead": bool
		}
	]
},
```

### Backend

As I said before, the backend was _"tweaked"_ with `yarn start`, don't worry that the whole procedure is described in the next section.

However, for a brief understanding, when starting the server, we can access the _two existing routes_, which are:

1. http://localhost:4300/users
2. http://localhost:4300/chat

## :electric_plug: How to use

So when this project is cloned on your machine, it is necessary to install its modules using the package manager `YARN`...
If you do not have `YARN` properly installed on your machine, [access this link](https://yarnpkg.com/) to download and install...
If you already have `YARN` installed, open `terminal` (linux) or `cmd` (windows) at the root of the project where the `package.json` file is located and run the following command:

```
yarn
```

After that, `YARN` will install all the project dependencies for you...
The second step is to start the "backend" (_Vercel Dev_) of the project, for this I have already prepared a command in the script of the file `package.json`, just just run the following command:

```
yarn start
```

**Note:** The control of the requests are made by the `switchMap` of the `RXJS library` and which is inside the `SideEffects` of the determined item in the `Store`, however as the backend was "moved" with the `Vercel Dev`.

## :memo: License

See the [LICENSE](LICENSE) for more details.

## :heartpulse: Sponsor

Made with ♥ and with the intention of learning and passing on knowledge.

So that I can work full-time and open to the community, thus bringing more relevance and technological solutions. It would mean a lot to me and the whole community if you help me reach this goal.

[![MY SPONSORS](https://img.shields.io/static/v1?label=SPONSOR&message=CLICK&style=for-the-badge&logo=GitHubSponsors&color=EA4AAA)](https://github.com/sponsors/thiagosaud)
