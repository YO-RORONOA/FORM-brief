Ce projet est un formulaire de sondage des employés à plusieurs sections, créé avec HTML, JavaScript et Bootstrap, conçu pour collecter des données statistiques sur les employés. Le formulaire comporte trois sections principales—Informations Personnelles, Contact Professionnel et Retour d’Expérience—chacune nécessitant une validation avant de permettre à l’utilisateur de passer à l’étape suivante. Lors de la soumission, le formulaire affiche un récapitulatif des informations saisies pour révision.

Fonctionnalités
Navigation Multi-Étapes : Les utilisateurs peuvent naviguer entre les sections en utilisant les boutons "Suivant" et "Retour".
Validation des Champs : La validation en temps réel garantit que les champs requis sont remplis correctement avant de passer à l’étape suivante.
Style Bootstrap : Le formulaire utilise le système de grille de Bootstrap pour un agencement réactif et un style uniforme.
Récapitulatif : Une fenêtre modale affiche un récapitulatif de toutes les informations saisies avant la soumission finale.
Structure du Projet
Le projet comprend des fichiers séparés pour le HTML, JavaScript et CSS :

index.html : Contient la structure HTML et les sections du formulaire.
script.js : Gère la navigation du formulaire, la validation des champs, et l’affichage de la fenêtre modale de récapitulatif.
style.css : Contient des styles supplémentaires personnalisés, lorsque nécessaire.
Sections

1. Informations Personnelles
Dans cette section, le formulaire recueille les données de base de l’utilisateur, y compris "Nom", "Prénom", "Âge", "Sexe" et "Pays". Les champs sont organisés de manière à favoriser une saisie simple et fluide des informations, en utilisant des balises HTML de type <input> et <select> pour les champs texte et les listes déroulantes.

Validation en JavaScript : La validation en temps réel est appliquée pour vérifier que le nom et le prénom contiennent au moins un caractère et que l’âge est compris entre 18 et 100 ans. Le bouton "Suivant" n'est activé que si toutes les conditions sont respectées.

2. Contact Professionnel
Cette section est conçue pour recueillir des informations de contact nécessaires à des fins professionnelles, telles que l’"Email", le "Numéro de téléphone" et l'"Adresse". Le formulaire utilise ici les champs de type <input> avec une validation en JavaScript qui vérifie que chaque champ contient un minimum d’un caractère.

Format et validation en temps réel : Le champ email est validé pour s'assurer qu'il contient un format correct (par exemple, exemple@domaine.com). Si tous les champs contiennent au moins un caractère, le bouton "Suivant" est activé.

3. Retour d’Expérience
Cette section permet aux utilisateurs de donner leurs impressions et commentaires sur leur expérience en tant qu’employé, en utilisant un champ <textarea> pour les "Commentaires".

Validation des Commentaires : Le champ "Commentaires" exige au moins un caractère pour permettre la soumission. Le bouton de soumission ne devient cliquable que si un texte est présent, garantissant que l'utilisateur fournit une rétroaction significative.

4. Récapitulatif
Avant de soumettre le formulaire, une fenêtre modale de récapitulatif s'ouvre, affichant toutes les informations fournies par l'utilisateur. Cette fonctionnalité est mise en œuvre avec une combinaison de JavaScript et Bootstrap pour le style.

Affichage de la modale en JavaScript : Lorsqu’un utilisateur clique sur le bouton "Soumettre", JavaScript compile les informations saisies dans chaque champ et les affiche dans la modale. L’utilisateur peut revoir ses réponses et confirmer en cliquant sur le bouton "Accepter" pour soumettre définitivement le formulaire.
