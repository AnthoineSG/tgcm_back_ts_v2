# APO #7 The good choice market

⚠️ INTERDICTION DE PUSH SUR MAIN SANS PASSER PAR L'ONGLET PULL REQUEST ⚠️

---

- Doc sur l'[**_Architecture_**](docs/architecture.md)

- Doc sur les [**_Test_**](docs/test.md)

- Doc sur [**_SQL_**](docs/sql.md)

- Doc sur le deploiement avec [**_Heroku_**](docs/heroku.md)

- Doc sur les images [**_Cloudinary_**](docs/cloudinary.md)

- Doc sur le versioning avec [**_Sqitch_**](docs/sqitch.md)

- Doc sur le chiffrage via [**_Bcrypt_**](docs/bcrypt.md)

- Doc sur la validation avec [**_Joi_**](docs/joi.md)

---

## INIT L'API

Pour start l'api en local

```bash
# Installer des dependences
npm i
```

```bash
# Start le server en dev mode
npm run dev
# ou en lecture seul
npm start
```

---

## Crée la BDD en local

Pour gérer sqitch en local

```bash
# Crée la BDD et le user
npm run create
```

```bash
# Déployer les tables
npm run deploy
```

```bash
# Supprimer les tables
npm run revert
```

```bash
# Verifier les tables
npm run verify
```

---

## Lancé les test

```bash
npm t

# Ou pour avoir les stats

npm run test:cov
```

---

## Fix les probleme Eslint

```bash
npm run eslint
```

---
