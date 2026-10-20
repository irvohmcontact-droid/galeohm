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

Deux scènes résidentielles originales générées et encodées en WebP complètent les photographies existantes. Elles sont explicitement présentées comme illustrations. Les 29 guides incluent désormais un cas concret, une liste de vérification, une question complémentaire, une erreur à éviter et plusieurs accès au devis. Un seul bouton de devis est rendu par page dans l’en-tête fixe, sur ordinateur comme sur mobile. Il est masqué sur `/devis`, où le formulaire constitue l’action principale. Les CTA répétés dans les sections, les guides, le pied de page et la barre mobile ont été retirés.

## Améliorations du parcours

Sélecteur interactif maison/copropriété/solaire avec onglets accessibles au clavier et préremplissage contextuel du devis via `?projet=`. Navigation de page par ancres, filtres de guides regroupés en sept besoins avec recherche réinitialisable. Étapes du devis revisitées avec progression visible, retour aux étapes déjà ouvertes et validation avant navigation vers une étape ultérieure. Aucun envoi API ajouté.

## Correction des CTA

Le composant commun rend un lien HTML natif, un seul libellé et une flèche. Les deux faces et la temporisation de navigation ont été supprimées. La mise en page minimale est isolée dans un CSS Module afin que les styles du composant soient compilés avec lui. Le Gradient Button fourni depuis 21st.dev est désormais utilisé via Radix Slot : le lien reçoit directement le dégradé, sans bouton imbriqué et sans second libellé.

## Composants UI et Tailwind

Le projet est déjà configuré avec Next.js App Router, TypeScript, Tailwind CSS 4 via `@tailwindcss/postcss`, et l’alias `@/*`. Les styles sont dans `app/globals.css` ; conserver `@import 'tailwindcss'` (les trois directives `@tailwind` du snippet concernent Tailwind 3).

`components/ui` contient les primitives réutilisables compatibles shadcn ; les composants métier restent dans `components`. Ce dossier et les alias de `components.json` permettent aux composants importés et au CLI shadcn de partager les mêmes chemins. `lib/utils.ts` fournit déjà `cn`.

Après récupération des modifications :

```bash
npm install
npm run typecheck
npm run build
```

Les dépendances ajoutées sont `@radix-ui/react-slot` et `class-variance-authority`. Aucun provider, hook, état, image ou secret supplémentaire n’est requis. Le composant expose `variant`, `asChild` et les attributs natifs de bouton. Le CTA unique de l’en-tête utilise `asChild` avec un lien `/devis`. Les paramètres `?projet=` restent acceptés par la page de devis pour les accès directs. Les icônes restent fournies par `lucide-react`.

Le dégradé conserve le mécanisme du code fourni, avec une palette adaptée à GALEOHM : vert lumineux et texte bleu pétrole pour les actions principales, dégradé pétrole pour la variante secondaire. Le même effet est accessible au clavier et à l’appui ; les transitions sont désactivées pour `prefers-reduced-motion`. Les règles sont ajoutées hors couche pour ne pas être masquées par les anciens styles globaux. Le fichier `components/ui/gradient-button-demo.tsx` expose les deux variantes pour développement ; il n’est pas affiché dans les pages commerciales.

## Hiérarchie des couleurs

Les tokens de marque sont déclarés dans `app/globals.css` : pétrole `#063b49` pour identité et titres, vert logo `#78a925`, blanc cassé `#f7f8f2` et fonds sauge `#eaf0e2`. Les CTA de devis utilisent le vert lumineux `#c3f05b`, un dégradé vert animé et un texte pétrole. Les liens secondaires restent soulignés ou en contour ; la zone finale utilise un fond sauge pour laisser ressortir son CTA. Les couleurs du fichier logo fourni sont conservées.
