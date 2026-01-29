// Déclaration des variables
let score=0
let questioncont=0
const Maxquestion=10

  // declaration du tableaux
const colors = [
  { color: "darkred", meaning: "Urgence" },
  { color: "crimson", meaning: "Passion" },
  { color: "firebrick", meaning: "Intensité" },
  { color: "indianred", meaning: "Chaleur" },

  { color: "green", meaning: "Espoir" },
  { color: "darkgreen", meaning: "Stabilité" },
  { color: "lime", meaning: "Énergie" },
  { color: "forestgreen", meaning: "Nature" },
  { color: "seagreen", meaning: "Renouveau" },

  { color: "blue", meaning: "Calme" },
  { color: "darkblue", meaning: "Sérieux" },
  { color: "skyblue", meaning: "Paix" },
  { color: "steelblue", meaning: "Fiabilité" },
  { color: "royalblue", meaning: "Confiance" },

  { color: "yellow", meaning: "Joie" },
  { color: "gold", meaning: "Richesse" },
  { color: "khaki", meaning: "Attention" },
  { color: "lemonchiffon", meaning: "Douceur" },
  { color: "lightyellow", meaning: "Optimisme" },

  { color: "orange", meaning: "Créativité" },
  { color: "darkorange", meaning: "Dynamisme" },
  { color: "coral", meaning: "Vitalité" },
  { color: "tomato", meaning: "Action" },
  { color: "orangered", meaning: "Audace" },

  { color: "purple", meaning: "Mystère" },
  { color: "indigo", meaning: "Spiritualité" },
  { color: "darkmagenta", meaning: "Pouvoir" },
  { color: "mediumorchid", meaning: "Imagination" },
  { color: "plum", meaning: "Rêve" },

  { color: "pink", meaning: "Tendresse" },
  { color: "hotpink", meaning: "Émotion" },
  { color: "deeppink", meaning: "Passion" },
  { color: "lightpink", meaning: "Romance" },
  { color: "palevioletred", meaning: "Sensibilité" },

  { color: "brown", meaning: "Solidité" },
  { color: "saddlebrown", meaning: "Terre" },
  { color: "chocolate", meaning: "Confort" },
  { color: "peru", meaning: "Chaleur" },
  { color: "rosybrown", meaning: "Simplicité" },

  { color: "black", meaning: "Élégance" },
  { color: "dimgray", meaning: "Neutralité" },
  { color: "gray", meaning: "Équilibre" },
  { color: "darkgray", meaning: "Discrétion" },
  { color: "lightgray", meaning: "Sobriété" },

  { color: "white", meaning: "Pureté" },
  { color: "snow", meaning: "Clarté" },
  { color: "ivory", meaning: "Paix" },
  { color: "linen", meaning: "Calme" },
  { color: "floralwhite", meaning: "Sérénité" },

  { color: "cyan", meaning: "Fraîcheur" },
  { color: "aqua", meaning: "Légèreté" },
  { color: "darkcyan", meaning: "Stabilité" },
  { color: "turquoise", meaning: "Protection" },
  { color: "mediumturquoise", meaning: "Guérison" },

  { color: "teal", meaning: "Clarté" },
  { color: "olive", meaning: "Sagesse" },
  { color: "darkolivegreen", meaning: "Maturité" },
  { color: "lawngreen", meaning: "Vitalité" },
  { color: "chartreuse", meaning: "Innovation" },

  { color: "navy", meaning: "Autorité" },
  { color: "midnightblue", meaning: "Profondeur" },
  { color: "slateblue", meaning: "Réflexion" },
  { color: "dodgerblue", meaning: "Liberté" },
  { color: "deepskyblue", meaning: "Ouverture" },

  { color: "beige", meaning: "Neutralité" },
  { color: "bisque", meaning: "Douceur" },
  { color: "wheat", meaning: "Abondance" },
  { color: "tan", meaning: "Simplicité" },
  { color: "burlywood", meaning: "Nature" },

  { color: "salmon", meaning: "Bienveillance" },
  { color: "lightsalmon", meaning: "Accueil" },
  { color: "darksalmon", meaning: "Confort" },
  { color: "mistyrose", meaning: "Fragilité" },
  { color: "peachpuff", meaning: "Gentillesse" },

  { color: "lavender", meaning: "Apaisement" },
  { color: "thistle", meaning: "Délicatesse" },
  { color: "ghostwhite", meaning: "Silence" },
  { color: "honeydew", meaning: "Fraîcheur" },
  { color: "aliceblue", meaning: "Clarté" },

  { color: "mintcream", meaning: "Pureté" },
  { color: "oldlace", meaning: "Tradition" },
  { color: "seashell", meaning: "Calme" },
  { color: "whitesmoke", meaning: "Neutralité" },
];


// utilisation du DOM
var AfficherScore = document.querySelector("#score")
var Bgcolor=document.querySelector("#couleur")
let bouttons=document.querySelectorAll(".answers")
const resultMessage=document.getElementById("resultatMessage")
const actionBtn=document.getElementById("actionBtn")
const game=document.getElementById("corps")
const Message=document.getElementById("MessageDeFin")


// utilisation de la bouton du final
actionBtn.addEventListener("click", ()=>{
    game.style.filter="none"
    Message.style.display="none"
    if(score>=6){
        Niveau1()
    }Niveau1()
})

    //fonction récommencer
function Niveau1() {
    score=0
    questioncont=0
    AfficherScore.textContent=score
    resultMessage.textContent=""
    actionBtn.style.display="none"
    bouttons.forEach(button=>{
        button.style.display="inline-block"
    })
    changeColor()
}

// fonction changer la couleur
function changeColor() {

        //choix du couleur au hasard
    const randomIndex=Math.floor(Math.random()*colors.length)
    const randomcolor=colors[randomIndex].color
    Bgcolor.style.backgroundColor=randomcolor
        // choix du boutton pour la bonne réponse
    const reponseCorrectIndex=Math.floor(Math.random()*bouttons.length)

        // remplissage du boutons
    bouttons.forEach((btn, index) => {
        if(index===reponseCorrectIndex){
            btn.textContent=colors[randomIndex].meaning
            btn.dataset.correct='true'
        }else{
            const Fauxresult=Math.floor(Math.random(2)*colors.length)
            btn.textContent=colors[Fauxresult].meaning
            btn.dataset.correct='false'
        }
    })
}

    // fonction réinitialisation du bouton apres le clique sur le bouton
function resetButtons() {
  bouttons.forEach(button => {
    button.classList.remove("correct", "wrong");
    button.disabled = false;
  });
}


    // fonction du fin de jeux
function FinDuJeu() {
    game.style.filter="blur(5px)"
    Message.style.display="flex"
    bouttons.forEach(button=>button.style.display="none")
    if(score>=8){
        resultMessage.textContent="Félicitations, vous avez un niveau élevé"+score+"/10"
        actionBtn.textContent="suivant"
    }else if(score>=6){
        resultMessage.textContent="Félicitations, vous avez un niveau bas"+score+"/10"
        actionBtn.textContent="suivant"
    }else {
        resultMessage.textContent="Ouft, votre niveau est trop bas "+score+"/10"
        actionBtn.textContent="récommencer"
    }actionBtn.style.display="inline-block"
}

    // fonctionnement du programme complet
bouttons.forEach(button => {
    button.addEventListener("click", () =>{
            //bloquer les clics
        bouttons.forEach(b=>b.disabled=true)
            //corps du programme et verification du réponse
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
            AfficherScore=document.querySelector("#score")
            score++
            AfficherScore.textContent=score
            console.log("bonne réponse")
        }else{
            button.classList.add("wrong");
            console.log("mauvaise réponse")
        }
            // compteur des quetions de l'utilisateur
            questioncont++
        setTimeout(() => {
        resetButtons();
            if(questioncont===Maxquestion){
                FinDuJeu()
            }else{
        changeColor()
            }
        }, 500)

    })
})
changeColor()
