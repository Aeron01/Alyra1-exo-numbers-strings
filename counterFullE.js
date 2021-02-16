// Programme de comptage de toutes les lettres 'e' & 'E' dans un texte.

let txt = 'Je suis le ténébreux, - le veuf, - l\'inconsolé,' + ' Le prince d\'Aquitaine à la tour abolie :' + ' Ma seule étoile est morte, - et mon luth constellé' + ' Porte le soleil noir de la Mélancolie.' + ' Dans la nuit du tombeau, toi qui m\'as consolé,' + ' Rends - moi le Pausilippe et la mer d\'Italie,' + ' La fleur qui plaisait tant à mon cœur désolé,' + ' Et la treille où le pampre à la rose s\'allie.' + ' Suis - je Amour ou Phébus ? ...Lusignan ou Biron ?' + ' Mon front est rouge encor du baiser de la reine;' + ' J\'ai rêvé dans la grotte où nage la sirène...' + ' Et j\'ai deux fois vainqueur traversé l\'Achéron;' + ' Modulant tour à tour sur la lyre d\'Orphée' + ' Les soupirs de la sainte et les cris de la fée.'
let nbe = 0 // Initialisation du compteur de 'e'.

console.log(`${txt}\n`) // Affichage du texte.
txtlc = txt.toLowerCase() // Transformation de toutes les majuscules dans le texte en minuscule.

for (let nbe0 = 0; nbe0 < txtlc.length; ++nbe0) { // Boucle d'incrémentation pour traiter tous les caractères du texte.
  if (txtlc[nbe0] === 'e') // Comparateur des caractéres et comptage des 'e' par incrémentation.
    nbe++
}

console.log(`Il y a ${nbe} 'e' dans ce texte.`) // Affichage du résultat.