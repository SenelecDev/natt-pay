# NattPay - Application de Gestion des Tontines

NattPay est une application web mobile-first qui permet aux utilisateurs de créer, gérer et participer à des tontines (système d'épargne rotatif populaire en Afrique et dans de nombreuses communautés à travers le monde).

## Fonctionnalités

- **Tableau de bord** : Visualisation du solde, des tontines actives et des transactions récentes
- **Gestion des tontines** : Création, modification et gestion des tontines
- **Paiements** : Effectuer des paiements pour les tontines et visualiser l'historique des transactions
- **Invitations** : Inviter des contacts à rejoindre une tontine via différents canaux
- **Rappels** : Programmer des rappels pour les échéances de paiement
- **Profil utilisateur** : Gestion des informations personnelles et des préférences

## Technologies utilisées

- [React](https://reactjs.org/) - Bibliothèque JavaScript pour la construction d'interfaces utilisateur
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [Font Awesome](https://fontawesome.com/) - Icônes et symboles

## Installation

1. Clonez ce dépôt
```bash
git clone https://github.com/votre-nom/natt-pay.git
cd natt-pay
```

2. Installez les dépendances
```bash
npm install
```

3. Démarrez l'application en mode développement
```bash
npm start
```

4. Accédez à l'application dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000)

## Déploiement

Pour construire l'application pour la production :

```bash
npm run build
```

Les fichiers de construction seront créés dans le dossier `build`.

## Structure du projet

Le projet est organisé selon la structure suivante :

- `public/` - Ressources statiques et HTML de base
- `src/` - Code source de l'application
  - `components/` - Composants React réutilisables
    - `common/` - Composants communs (NavBar, TabBar, etc.)
    - `forms/` - Formulaires pour les différentes actions
    - `tabs/` - Composants pour chaque onglet principal
    - `modals/` - Fenêtres modales et confirmations
  - `contexts/` - Contextes React pour la gestion d'état
  - `data/` - Données statiques ou simulées
  - `utils/` - Fonctions utilitaires
  - `App.js` - Composant principal de l'application

## Personnalisation

L'application utilise Tailwind CSS qui peut être facilement personnalisé via le fichier `tailwind.config.js`. Vous pouvez modifier les couleurs, les polices et autres propriétés selon les besoins de votre marque.

## Captures d'écran

*Des captures d'écran seront ajoutées ici*

## À propos des Tontines

Les tontines sont des systèmes d'épargne et de crédit rotatifs traditionnels où un groupe de personnes contribue régulièrement à un fonds commun. À tour de rôle, les membres reçoivent la totalité du montant collecté. Ce système favorise l'épargne et l'entraide financière, particulièrement dans les communautés où l'accès aux services bancaires formels peut être limité.

## Licence

Ce projet est sous licence MIT.

## Contact

Pour toute question ou suggestion concernant ce projet, veuillez nous contacter à l'adresse [votre-email@example.com].