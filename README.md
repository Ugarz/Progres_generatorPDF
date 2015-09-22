# Comment générer un pdf avec NodeJS et MomentJS et pdf-kit ?
Ce repo accompagne un [article de mon blog](http://ugoarzur.fr/2015/09/17/generer-un-pdf-avec-nodejs/). Il vous permet de récupérer un code en NodeJS pour générer un pdf en NodeJS et avec les librairies MomentJS et pdf-kit.
Je pars du postulat que vous avez installé les outils que votre bécane aura besoin pour lancer ce projet.

| Outil	        | Rôle          												 | Link or command								     |
| ------------- |:--------------------------------------:| -----------------------------------:|
| Node 					| Permet d'utiliser les dépendances      | `sudo apt-get install nodejs npm`   |
| Grunt		      | Permet d'automatiser des tâches        | `npm install -g grunt-cli` 				 |
| Nodemon	      | Permet de lancer le serveur de l'appli | `npm install -g nodemon` 				   |

## Instructions
En partant du principe que vous avez une version de NodeJS installée sur votre OS opérationnelle.
Ouvre un terminal et suivez les instructions.

### On récupère le projet
```bash
git clone git@github.com:Ugarz/Progres_generatorPDF.git
```

### On entre et installe les dépendances
```bash
cd Progres_generatorPDF && npm install
```

### Pour générer le pdf
```bash
node index.js
```

## Workflow

[x] ~~Créer un pdf avec pdf-kit~~

[ ] Ajouter MomentJS et gérer des variable pour générer les dates dynamiquement.

[ ] Faire une interface pour contoler le tout.