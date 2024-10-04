import { formatDate } from "./scriptTools.mjs";

console.log("hi !!");
gsap.registerPlugin(ScrollTrigger);
const contentSectionOne = document.querySelector(".content-section-one");

gsap.to(contentSectionOne, {
  duration: 1.3, // Durée de l'animation en secondes
  height: "55%", // Hauteur finale en pourcentage du conteneur
  ease: "power1.inOut",
  onComplete: () => {
    setTimeout(() => {
      let contentOneChild1 = document.createElement("div");
      contentOneChild1.classList.add("construct1");
      contentSectionOne.appendChild(contentOneChild1);

      let contentOneChild2 = document.createElement("div");
      contentOneChild2.classList.add("construct2");
      contentSectionOne.appendChild(contentOneChild2);
      let photoNom = document.createElement("div");
      photoNom.classList.add("photoInfo");

      gsap.to(contentOneChild1, {
        duration: 2,
        y: 200,
        ease: "Bounce.easeOut",
        onComplete: () => {
          // Appeler la deuxième animation une fois la première terminée
          gsap.to(photoNom, {
            duration: 2,
            x: 900,
            y: 50,
            ease: "Bounce.out",
            onComplete: () => {
              console.log("complete");
              let bannerP = document.createElement("div");
              bannerP.classList.add("parentBanner");
              bannerP.id = "parentBanner";
              let bannerC = document.createElement("div");
              bannerC.classList.add("childBanner");
              bannerC.id = "childBanner";
              let txt = null;
              let textbanner = document.createElement("p");
              textbanner.classList.add("textbanner");
              bannerC.setAttribute("animate", "");

              textbanner.textContent =
                txt ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, sapiente.";

              bannerP.appendChild(bannerC);
              console.log("contsecone :", contentSectionOne);
              bannerC.appendChild(textbanner);
              contentSectionOne.appendChild(bannerP);

              new SplitType("[animate]", {
                types: "lines, words, chars",
                tagName: "span",
              });

              gsap.from("[animate] .word", {
                y: "300px",
                opacity: 1,
                rotationZ: "10",
                duration: 1,
                ease: "bounce.out",
                stagger: 0.3,
                onComplete: () => {
                  setTimeout(() => {
                    gsap.to(".textbanner", {
                      opacity: "1",
                      x: "-110%",
                      duration: 1.5,
                      ease: "power2.inOut",
                      onComplete: () => {
(
                        function scrollToTop() {
                          let scrool = document.querySelector('.construct1');
                        console.log("scrool", scrool);
                        
                          scrool.scrollTo({
                            top: 700,
                            behavior: 'smooth' // Scroll fluide vers le haut
                          });
                        })()

                        bannerC.textContent = "";
                      
                        // Créer le nouvel élément <p> avec l'ID et la classe spécifiés
                        let bannerTextTwo = document.createElement("p");
                        bannerTextTwo.id = "bannerTextTwo";
                        bannerTextTwo.classList.add("bannerTextTwo");
                        bannerTextTwo.textContent =
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolores!";
                        bannerC.appendChild(bannerTextTwo);
                      
                        // Créer une timeline avec GSAP
                        let tl = gsap.timeline();
                      
                        // Ajouter les animations à la timeline
                        tl.fromTo(
                          "#bannerTextTwo", // Sélectionner l'élément par ID
                          { opacity: 0, scale: 0.5 }, // Valeurs initiales
                          { opacity: 1, scale: 1, duration: 1, ease: "power2.out" } // Animation pour faire apparaître avec un agrandissement
                        )
                        .to(
                          "#bannerTextTwo", // Sélectionner l'élément par ID
                          { scale: 0.8, duration: 0.5, ease: "elastic.out(1, 0.5)" } // Animation pour revenir à la taille initiale
                        );
                      },
                    });
                  }, 2000);
                },
              });
            },
          });
        },
      });

      gsap.to(contentOneChild2, {
        duration: 2,
        x: -800,
        ease: "linear",
        onstart: () => {
          console.log("start");

          let startblack = document.createElement("div");
          startblack.classList.add("loadW");
          startblack.id = "loadW";
          contentOneChild2.appendChild(startblack);
        },
      });

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
// Last login: ${formatDate()} from 37.66.149.120 </br> </br>Type help for more information :   `;

      let pre = document.createElement("pre");
      pre.classList.add("ascii");
      pre.textContent = `                 
                        | | | |    | | |
                        | |_| | ___| | | ___
                        |  _  |/ _ \\ | |/ _ \\
                        | | | |  __/ | | (_) |
                       \\_| |_/\\___|_|_|\\___/            `;

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
        prompt.textContent = "C:\\Users\\user\\Desktop>:";

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
                  "Liste des commandes : \n help,\nexit,\n ssh,\n hack,\n windows";
                break;

              case "exit":
                outputP.textContent = "Terminal fermé.";
                break;

              case "ssh":
                outputP.textContent = `type your  name@domain.extension `;
                break;

              case "hack --start":
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
            
              case "hack --exit":
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
             
                case "windows":
                outputP.textContent = "type windows --start";
                break;
             
                case "windows --start":
                // Animation GSAP sur l'élément wload
                const wload = document.getElementById("loadW");
                const soundEffect = document.getElementById("soundEffect");
                soundEffect.volume = 0.1;
                // 1. Clignotement rapide du fond de noir à blanc, en partant du centre (effet de cercle)
                gsap.to(wload, {
                  duration: 0.5,
                  backgroundColor: "white",
                  scale: 1, // Part du centre
                  // borderRadius: "50%",
                  opacity: 1,
                  repeat: 1, // Clignote 5 fois
                  yoyo: true,
                  ease: "power1.inOut",
                  onUpdate: () => {
                    // contentOneChild2.style.opacity = "0"
                  },
                  onComplete: () => {
                    // 2. Après le clignotement, définir "bios.webp" comme background
                    wload.style.backgroundImage = 'url("../img/bios.webp")';
                    wload.style.backgroundSize = "cover";

                    // 3. Après 3 secondes, changer le fond en "windows.webp"
                    setTimeout(() => {
                      wload.style.backgroundImage =
                        'url("../img/windows.webp")';

                      // 4. Après encore 3 secondes, retirer la div et jouer un son
                      setTimeout(() => {
                        soundEffect.play(); // Jouer le son
                        wload.remove(); // Supprimer l'élément wload
                      }, 3000); // 3 secondes avant de retirer la div
                    }, 3000); // 3 secondes après bios.webp
                  },
                });
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
