import { formatDate } from "./scriptTools.mjs";

console.log("hi !!");
gsap.registerPlugin(ScrollTrigger);
const element = document.querySelector(".content-section-one");

gsap.to(element, {
  duration: 1.3, // Durée de l'animation en secondes
  height: "55%", // Hauteur finale en pourcentage du conteneur
  ease: "power1.inOut",
  onComplete: () => {
    setTimeout(() => {
      let contentOneChild1 = document.createElement("div");
      contentOneChild1.classList.add("construct1");
      element.appendChild(contentOneChild1);

      let contentOneChild2 = document.createElement("div");
      contentOneChild2.classList.add("construct2");
      element.appendChild(contentOneChild2);
      let photoNom = document.createElement("div");
      photoNom.classList.add("photoInfo");
      
      gsap.to(contentOneChild1, { duration: 2, y: 200, ease: "Bounce.easeOut" });
      gsap.to(photoNom, { duration: 4, x: 500,y: 50, ease: "elastic.out" });

      let photoAno = document.createElement("img");
      photoAno.classList.add("photo");
      photoAno.src = "./img/anno.png";

      let info = document.createElement("div");
      info.classList.add("info");

      const ul = document.createElement("ul");
      const liNom = document.createElement("li");
      liNom.textContent = "Nom: Vanherzecke";
      ul.classList.add("name");
      ul.appendChild(liNom);
      const liPrenom = document.createElement("li");
      liPrenom.textContent = "Prénom: \n Yohann";
      ul.appendChild(liPrenom);

      let titre = document.createElement("h3");
      titre.textContent = "DevWeb";

      contentOneChild1.appendChild(photoNom);
      contentOneChild1.appendChild(titre);
      photoNom.appendChild(photoAno);

      // photoNom.appendChild(photo);

      photoNom.appendChild(info);
      info.appendChild(photoAno);
      info.appendChild(ul);

      let experiences = document.createElement("div");
      experiences.classList.add("experiences");

      let terminalLine = document.createElement("p");
      terminalLine.classList.add("terminalLine");
      terminalLine.innerHTML = `
// Last login: ${formatDate()} from 37.66.149.120 :</br> </br>  `;

      let pre = document.createElement("pre");
      pre.classList.add("ascii");
      pre.textContent = `                 
                        | | | |    | | |
                        | |_| | ___| | | ___
                        |  _  |/ _ \ | |/ _ \
                        | | | |  __/ | | (_) |
                        \_| |_/\___|_|_|\___/            `;

      contentOneChild1.appendChild(experiences);
      experiences.appendChild(pre);
      experiences.appendChild(terminalLine);

      function createTerminal() {
        // Créer l'élément principal 'div' avec la classe 'containeInput'
        const container = document.createElement("div");
        container.classList.add("containeInput");

        // Créer la 'div' avec la classe 'inputTerminal'
        const inputTerminal = document.createElement("div");
        inputTerminal.classList.add("inputTerminal");

        // Créer le paragraphe avec la classe 'prompt' et son contenu
        const prompt = document.createElement("p");
        prompt.classList.add("prompt");
        prompt.textContent = "devSecOpS@kali :";

        // Créer l'input de type 'text'
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.classList.add("styled-input");
        // Ajouter le paragraphe et l'input à la div 'inputTerminal'
        inputTerminal.appendChild(prompt);
        inputTerminal.appendChild(input);

        // Créer la 'div' avec la classe 'output'
        const output = document.createElement("div");
        output.classList.add("output");

        // Créer le paragraphe vide avec la classe 'outputP'
        const outputP = document.createElement("p");
        outputP.classList.add("outputP");

        // Ajouter le paragraphe à la div 'output'
        output.appendChild(outputP);

        // Ajouter 'inputTerminal' et 'output' à 'container'
        container.appendChild(inputTerminal);
        container.appendChild(output);

        // Ajouter un écouteur d'événement pour détecter la touche Enter
        input.addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            // Récupérer la valeur de l'input
            const inputValue = event.target.value.trim();

            // Gestion des commandes via un switch
            switch (inputValue.toLowerCase()) {
              case "help":
                outputP.textContent =
                  "Liste des commandes : \n help, exit, ssh, hack";
                break;

              case "exit":
                outputP.textContent = "Terminal fermé.";
                break;

              case "ssh":
                outputP.textContent = `type your  name@domain.extension `;
                break;

              case "hack":
                (function hack() {
                  let terminal = document.querySelector(
                    ".containerEmuleTerminal"
                  );

                  terminal.style.display = "block";

                  // Utiliser GSAP pour animer l'opacité
                  gsap.fromTo(
                    terminal,
                    { opacity: 0 }, // Valeur de départ
                    { opacity: 1, duration: 1 } // Valeur de fin et durée de l'animation
                  );
                })();
                break;
              case "hack -exit":
                (function exit() {
                  let terminal = document.querySelector(
                    ".containerEmuleTerminal"
                  );

                  // Utiliser GSAP pour animer l'opacité
                  gsap.to(terminal, {
                    opacity: 0, // Valeur de fin
                    duration: 1, // Durée de l'animation
                    onComplete: () => {
                      terminal.style.display = "none"; // Mettre en display: none après l'animation
                    },
                  });
                })();
                break;

              case "clear":

              let nextSibling = terminalLine.nextElementSibling;

        // Supprime tous les frères après .terminalLine
        while (nextSibling) {
            const temp = nextSibling; // Stocke le frère actuel
            nextSibling = nextSibling.nextElementSibling; // Avance au frère suivant
            temp.remove(); // Supprime le frère stocké
        }

                break;
              default:
                outputP.textContent = `Commande inconnue : ${inputValue}`;
            }

            // Désactiver l'input précédent
            input.disabled = true;

            // Créer un nouveau terminal pour la commande suivante
            const newTerminal = createTerminal();

            // Ajouter le nouveau terminal au DOM juste après l'ancien
            experiences.appendChild(newTerminal);
            newTerminal.querySelector("input").focus();
            // Vider l'input après soumission
            event.target.value = "";
          }
        });

        // Retourner l'élément principal contenant toute la structure
        return container;
      }

      // Utilisation de la fonction pour créer le premier terminal
      const terminalContainer = createTerminal();

      // Ajouter le premier terminal au DOM
      terminalLine.after(terminalContainer);

      // -----------------------------------------construct2---------------------------
      let pathRessources = [
        "reseaux",
        "back-end",
        "front-end",
        "windows",
        "linux",
      ];

      let dossier = document.createElement("span");
      let screen = document.createElement("h3");
      screen.textContent = "codeurBase";
      screen.classList.add("sony");
      contentOneChild2.appendChild(screen);
      dossier.classList.add("windows-path");

      for (let i = 0; i < pathRessources.length; i++) {
        let clone = dossier.cloneNode(true); // Crée une copie profonde de 'dossier'
        clone.classList.add(pathRessources[i]); // Ajoute chaque élément du tableau comme une classe

        // Création de la balise <a> avec un href="#"
        let link = document.createElement("a");
        link.classList.add(scroll - link);
        console.log(scroll, "&", link);

        link.href = `#${pathRessources[i]}`; // Utilise # comme lien par défaut
        link.appendChild(clone); // Ajoute le clone à l'intérieur du lien

        // Ajoute le lien au container
        contentOneChild2.appendChild(link);
      }
    }, 1000);
  },
});

gsap.to(".horizontal-scroll", {
  x: () =>
    -(
      document.querySelector(".horizontal-scroll").scrollWidth -
      window.innerWidth
    ), // Scroll horizontal complet
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-container", // Déclencher le scroll horizontal à l'entrée de la section horizontale
    pin: true, // Bloque l'élément pendant
    anticipatePin: 1,
    scrub: true,
    end: () => "+=" + document.querySelector(".horizontal-scroll").scrollWidth, // Fin du scroll une fois le contenu horizontal complété
  },
});
// ---------------------------------terminal-----------------------------

//  const terminal = document.querySelector('.terminal');
//     const input = document.getElementById('commandInput');
//     const output = document.querySelector('.output');

//     // Fonction qui gère la commande tapée
//     function processCommand(command) {
//       let result = '';

//       switch (command.trim()) {
//         case 'help':
//           result = 'Liste des commandes disponibles: help, exit';
//           console.log('Commande HELP exécutée');
//           break;
//         case 'exit':
//           result = 'Session terminée. Bye!';
//           break;
//         default:
//           result = `Commande non reconnue: ${command}`;
//       }

//       return result;
//     }

//     // Fonction pour créer une nouvelle ligne d'input
//     function addNewLine() {
//       // Récupère la commande saisie
//       const command = input.value;
//       const result = processCommand(command);

//       // Créer une nouvelle div pour afficher la commande précédente
//       const newOutput = document.createElement('div');
//       newOutput.innerHTML = `<span class="prompt">Kali@DevSecOps:~$</span> ${command}<br>${result}`;
//       terminal.appendChild(newOutput, input.parentElement); // Ajoute avant l'input

//       // Réinitialise l'input pour une nouvelle commande
//       input.value = '';
//       input.focus(); // Remet le focus sur le nouvel input
//     }

//     // Détecte lorsqu'on appuie sur "Entrée"
//     input.addEventListener('keypress', (e) => {
//       if (e.key === 'Enter') {
//         e.preventDefault(); // Empêche le comportement par défaut
//         addNewLine(); // Gère l'ajout de la nouvelle ligne
//       }
//     });
// -------------------------------------Pluging color letter -------------------------------------------

let split = Splitting();

console.log("split : ", Splitting());
