<h1 align="center">
	<img alt="GoStack" src="temp/images/webwhatsapp.jpg" width="1000px" />
</h1>

<h3 align="center">Webwhatsapp: Simple Copy</h3>

<p align="center">
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/thiagobonisoficial/webwhatsapp?style=social">
  <img alt="GitHub forks" src="https://img.shields.io/github/forks/thiagobonisoficial/webwhatsapp?style=social">
</p>

<p align="center">
  <img alt="GitHub" src="https://img.shields.io/github/license/thiagobonisoficial/webwhatsapp?color=%2362df5e&logoColor=%2362df5e">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/thiagobonisoficial/webwhatsapp?color=%2362df5e&logoColor=%2362df5e">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/thiagobonisoficial/webwhatsapp?color=%2362df5e&logoColor=%2362df5e">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/thiagobonisoficial/webwhatsapp?color=%2362df5e&logoColor=%2362df5e">
</p>

<p align="center">
  <a href="#rocket-about-the-challenge">About the Project</a>&nbsp;&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp;<a href="#electric_plug-how-to-use">How to Use</a>
  &nbsp;
  |&nbsp;&nbsp;&nbsp;<a href="#memo-license">License</a>
</p>

## :rocket: About the Project

This project was created to _demonstrate all my knowledge with the Angular platform and its ecosystem_ such as state manipulation with the [NGRX library](https://ngrx.io/guide/store) and event-based development with the [RXJS library](https://rxjs-dev.firebaseapp.com/guide/overview).

The [Json-Server](https://github.com/typicode/json-server) was also used to create a _"mock"_, where I _simulate the backend_, [Prettier](https://prettier.io/) and [Husky](https://github.com/typicode/husky) to _control style-guide_, _code standardization and versioning_.

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

As I said before, the backend was _"tweaked"_ with `Json-Server`, don't worry that the whole procedure is described in the next section.

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
The second step is to start the "backend" (Json-Server) of the project, for this I have already prepared a command in the script of the file `package.json`, just just run the following command:

```
yarn start_backend
```

Finally, we can start the project with the following command:

```
ng serve
```

**Note:** The control of the requests are made by the `switchMap` of the `RXJS library` and which is inside the `SideEffects` of the determined item in the `Store`, however as the backend was "moved" with the `Json-Server` keep in mind that sometimes it may not be able to handle the requests and fall, so stay tuned at the command prompt! _Also remember, if this happens, roll back the server, returning the_ `db.json` _file to the original._

## :memo: License

This project is under the GNU license. See the [LICENSE](LICENSE) for more details..

---

Made with ♥ and with the intention of learning and passing on knowledge. 👋
