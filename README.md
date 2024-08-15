<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">LOGIN-SCREEN-WITH-MONGODB---EXPRESSJS</h1>
</p>

<p align="center">
	<img src="https://img.shields.io/github/license/Arthucunha/Login-Screen-with-MongoDB---ExpressJS?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Arthucunha/Login-Screen-with-MongoDB---ExpressJS?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Arthucunha/Login-Screen-with-MongoDB---ExpressJS?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Arthucunha/Login-Screen-with-MongoDB---ExpressJS?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black" alt=".ENV">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<br>
	<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=flat&logo=MongoDB&logoColor=white" alt="MongoDB">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
</p>
<hr>

## 🔗 Quick Links

> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running Login-Screen-with-MongoDB---ExpressJS](#-running-Login-Screen-with-MongoDB---ExpressJS)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)

---
## 📂 Repository Structure

```sh
└── Login-Screen-with-MongoDB---ExpressJS/
    ├── my-app
    │   ├── .gitignore
    │   ├── README.md
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── src
    │   │   ├── App.css
    │   │   ├── App.test.tsx
    │   │   ├── App.tsx
    │   │   ├── index.css
    │   │   ├── index.tsx
    │   │   ├── pages
    │   │   │   ├── Dashboard.tsx
    │   │   │   └── Login.tsx
    │   │   ├── react-app-env.d.ts
    │   │   ├── reportWebVitals.ts
    │   │   └── setupTests.ts
    │   ├── tailwind.config.js
    │   └── tsconfig.json
    └── server
        ├── .env
        ├── .gitignore
        ├── db
        │   └── conn.mjs
        ├── index.mjs
        ├── loadEnvironment.mjs
        ├── package-lock.json
        ├── package.json
        └── routes
            └── login.mjs
```

---

## 🧩 Modules

<details closed><summary>my-app</summary>

| File                                                                                                                            |
| ---                                                                                                                             |
| [tsconfig.json](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/tsconfig.json)           |
| [postcss.config.js](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/postcss.config.js)   |
| [package.json](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/package.json)             |
| [tailwind.config.js](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/tailwind.config.js) |
| [package-lock.json](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/package-lock.json)   |

</details>

<details closed>

| File                                                                                                                                |
| ---                                                                                                                                 |
| [react-app-env.d.ts](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/src/react-app-env.d.ts) |
| [setupTests.ts](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/src/setupTests.ts)           |
| [index.tsx](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/src/index.tsx)                   |
| [App.css](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/src/App.css)                       |
| [App.test.tsx](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/src/App.test.tsx)             |
| [App.tsx](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/src/App.tsx)                       |
| [index.css](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/src/index.css)                   |
| [reportWebVitals.ts](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/src/reportWebVitals.ts) |

</details>

<details closed><summary>my-app.src.pages</summary>

| File                                                                                                                            |
| ---                                                                                                                             |
| [Dashboard.tsx](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/src/pages/Dashboard.tsx) |
| [Login.tsx](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/my-app/src/pages/Login.tsx)         |

</details>

<details closed><summary>server</summary>

| File                                                                                                                              |
| ---                                                                                                                               |
| [package.json](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/server/package.json)               |
| [index.mjs](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/server/index.mjs)                     |
| [.env](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/server/.env)                               |
| [package-lock.json](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/server/package-lock.json)     |
| [loadEnvironment.mjs](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/server/loadEnvironment.mjs) |

</details>

<details closed><summary>server.routes</summary>

| File                                                                                                                 |
| ---                                                                                                                  |
| [login.mjs](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/server/routes/login.mjs) |

</details>

<details closed><summary>server.db</summary>

| File                                                                                                           |
| ---                                                                                                            |
| [conn.mjs](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/master/server/db/conn.mjs) |

</details>

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **NodeJs**: `version 18.19.1`

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS/issues)**: Submit bugs found or log feature requests for Login-screen-with-mongodb---expressjs.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/Arthucunha/Login-Screen-with-MongoDB---ExpressJS
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the MIT License.

---
