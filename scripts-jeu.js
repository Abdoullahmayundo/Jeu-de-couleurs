// Déclaration des variables
let Reponse='Danger'
let score=0

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
let Choix=document.querySelectorAll("button")
var Bgcolor=document.querySelector("#couleur")


// fonction changer la couleur
function changeColor() {
    // changement de la couleur

        //choix du couleur au hasard
    const randomIndex=Math.floor(Math.random()*colors.length)
    const randomcolor=colors[randomIndex].color
    Bgcolor.style.backgroundColor=randomcolor

    //choix du bouttons

        // appel au DOM
    let bouttons=document.querySelectorAll(".answers")

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


Choix.forEach(button => {
    button.addEventListener("click", () =>{
        if(button.dataset.correct==="true"){
            let b
            AfficherScore=document.querySelector("#score")
            score++
            AfficherScore.textContent=score
            console.log("bonne réponse")
        }else{
                console.log("mauvaise réponse")
        }
        changeColor()
    })
})
changeColor()
