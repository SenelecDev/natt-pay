# Guide d'installation et de démarrage - NattPay

Ce guide vous aidera à installer et configurer le projet NattPay sur votre machine locale.

## Prérequis

Avant de commencer, assurez-vous que les logiciels suivants sont installés sur votre système :

- Node.js (version 14.0.0 ou supérieure)
- npm (généralement installé avec Node.js)
- Un éditeur de code comme Visual Studio Code, Sublime Text, etc.

## Étapes d'installation

### 1. Cloner le projet

```bash
git clone https://github.com/votre-nom/natt-pay.git
cd natt-pay
```

Si vous avez téléchargé le projet sous forme d'archive, décompressez-la et ouvrez un terminal dans le dossier du projet.

### 2. Installer les dépendances

Dans le terminal, exécutez la commande suivante pour installer toutes les dépendances nécessaires :

```bash
npm install
```

Cette commande va lire le fichier `package.json` et installer tous les packages requis pour le projet.

### 3. Démarrer l'application en mode développement

Une fois l'installation terminée, démarrez l'application avec la commande :

```bash
npm start
```

Cette commande lance l'application en mode développement. Votre navigateur par défaut devrait s'ouvrir automatiquement à l'adresse [http://localhost:3000](http://localhost:3000).

Si le navigateur ne s'ouvre pas automatiquement, vous pouvez ouvrir manuellement cette URL.

## Structure des fichiers importants

- `src/App.js`: Le composant principal de l'application
- `src/index.js`: Point d'entrée de React
- `src/contexts/AppContext.js`: Gestion de l'état global de l'application
- `src/components/`: Tous les composants React organisés par fonctionnalité

## Personnalisation du thème

Pour personnaliser les couleurs et autres aspects du design :

1. Ouvrez le fichier `tailwind.config.js` à la racine du projet
2. Modifiez la section `theme.extend.colors` pour changer les couleurs principales

Par exemple, pour changer la couleur orange principale :

```javascript
theme: {
  extend: {
    colors: {
      'orange': {
        500: '#VOTRE_NOUVELLE_COULEUR',
        600: '#VARIATION_PLUS_FONCÉE',
      },
    },
  },
},
```

## Tester l'application sur un appareil mobile

Pour tester l'application sur un appareil mobile pendant le développement :

1. Assurez-vous que votre ordinateur et votre appareil mobile sont connectés au même réseau Wi-Fi
2. Récupérez l'adresse IP de votre ordinateur
   - Sur Windows : `ipconfig` dans le terminal
   - Sur macOS/Linux : `ifconfig` ou `ip addr` dans le terminal
3. Démarrez le serveur de développement avec npm start
4. Sur votre appareil mobile, ouvrez le navigateur et accédez à `http://VOTRE_ADRESSE_IP:3000`

## Construire pour la production

Lorsque vous êtes prêt à déployer l'application, exécutez :

```bash
npm run build
```

Cette commande crée une version optimisée de l'application dans le dossier `build/`. Ces fichiers peuvent être déployés sur n'importe quel serveur web statique.

## Dépannage

### La page ne s'affiche pas correctement

- Vérifiez la console du navigateur pour les erreurs (F12 ou Clic droit > Inspecter > Console)
- Assurez-vous que toutes les dépendances sont installées correctement

### Problèmes avec les icônes Font Awesome

Si les icônes ne s'affichent pas correctement :

1. Vérifiez que vous êtes connecté à Internet (les icônes sont chargées depuis un CDN)
2. Si vous souhaitez utiliser Font Awesome hors ligne, installez le package via npm :
   ```bash
   npm install @fortawesome/fontawesome-free
   ```
   Et modifiez les importations en conséquence dans `index.js`

### Autres problèmes

Si vous rencontrez d'autres problèmes :

1. Essayez de supprimer le dossier `node_modules` et le fichier `package-lock.json`
2. Réinstallez les dépendances avec `npm install`
3. Redémarrez l'application avec `npm start`

## Ressources additionnelles

- [Documentation React](https://reactjs.org/docs/getting-started.html)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Font Awesome](https://fontawesome.com/docs)

## Support

Pour toute question ou problème, veuillez créer une issue sur le dépôt GitHub du projet ou contacter l'équipe de développement à [votre-email@example.com].