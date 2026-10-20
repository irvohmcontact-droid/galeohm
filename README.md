# GALEOHM

Site Next.js App Router / React / TypeScript pour la recharge électrique à domicile.

## Démarrer

Node.js >= 22.13.0.

```bash
npm install
npm run dev
```

```bash
npm run typecheck
npm run build
npm start
```

## Déploiement Vercel

Importer ce dépôt, choisir le framework Next.js et conserver la racine du dépôt comme répertoire du projet. Commande de build : `npm run build`. Aucun secret nécessaire pour cette version. L’origine des métadonnées est `https://galeohm.vercel.app` ; l’adapter dans layout, sitemap et robots si le domaine change.

## Contenu

Accueil immersif, grandes photographies, animations au défilement, 29 guides, recherche filtrable et outil de préparation de projet avec téléchargement local du récapitulatif. Le calculateur ne transmet aucune donnée ni demande de devis.

Les mots-clés et contenus sont dans `lib/content.ts`. Les variantes proches sont regroupées ; les volumes de recherche ne sont pas mesurés.

## Avant ouverture commerciale

Compléter et vérifier identité légale, coordonnées, zone d’intervention, assurances et qualifications, tarifs et traitement des demandes de devis. La page Informations précise l’état de cette version. Aucun avis ou chantier fictif n’est présenté comme réel.

## Crédits

Logo fourni par GALEOHM. Photographies Unsplash d’illustration. Text Blur Reveal de Wensity Labs, repéré sur 21st.dev : voir THIRD_PARTY_NOTICES.md.

## Parcours devis (version de préparation)

La route `/devis` propose trois étapes validées côté navigateur : logement, recharge et coordonnées. Le dernier bouton prépare un récapitulatif consultable et téléchargeable. Aucune requête réseau, aucun e-mail et aucun stockage serveur ne sont déclenchés. Le message de confirmation précise que la demande n’est pas envoyée. Le contrat d’API et la transmission seront intégrés dans un second temps. Les données restent uniquement dans l’état React de la page, sans localStorage.

## Enrichissement visuel et éditorial

Deux scènes résidentielles originales générées et encodées en WebP complètent les photographies existantes. Elles sont explicitement présentées comme illustrations. Les 29 guides incluent désormais un cas concret, une liste de vérification, une question complémentaire, une erreur à éviter et plusieurs accès au devis. Les boutons de devis sont répétés dans les sections clés et une barre fixe est affichée sur mobile hors de la page devis.
