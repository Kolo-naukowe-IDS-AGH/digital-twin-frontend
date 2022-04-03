## Digital-Twin frontend

Digital-Twin frontend Next.js with Typescript.

- development

Prefer to use yarn instead of npm. Feel free to use both package managers.
Make sure you don't commit `package-lock.json`.

```
cp .env.example .env
yarn install
yarn dev
```

- build

```
rm -rf node_modules
yarn install
yarn buld
yarn start
```

## Linting

To keep the code consistent, use the built-in prettier and eslint.

```
Jetbrains IDE > Settings / Preferences > Plugins > Prettier
Visual Studio Code > Plugins > Prettier
```

### Automatic code formatting

- Prettier

```
yarn format
```

- Eslint

```
yarn format-lint
```

- Run prettier and eslint

```
yarn format-all
```

### Check code formatting

Make sure the code is properly formatted before pushing to repository.

- Prettier

```
yarn check-format
```

- Eslint

```
yarn check-lint
```

- Run prettier and eslint

```
yarn check-all
```

### Workflow and good practice

Never commit directly to `master` branch. Create a new branch and make a pull request to `master` after finishing work.

Make sure that the branch name is according to what you are doing and the functionality provided by the code.

Switching branches:

```shell
git fetch origin -p
git pull origin master
git checkout -b <your initials>_<short branch description>

e.x.
git checkout -b DW_form_validation
```

Commit names:

```shell
git commit -m "[FE - frontend, Setup - project setup] - <your commit message>"

e.x.
git commit -m "[FE] - add basic tailwind setup"
```
