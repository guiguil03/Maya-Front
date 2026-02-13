# Instructions pour créer l'image Open Graph (aperçu de partage)

## 🎯 Objectif
Créer une image qui montre le **début de votre site** (Hero Section) pour qu'elle apparaisse quand vous partagez le lien par message.

## 📐 Taille recommandée
- **Dimensions** : 1200 x 630 pixels (ratio 1.91:1)
- **Format** : PNG ou JPG
- **Taille fichier** : < 1MB (idéalement < 300KB)

## 🎨 Contenu de l'image
L'image doit montrer le **début de votre site** (Hero Section) avec :
- ✅ Le logo Maya en haut
- ✅ Le titre principal "Économisez à Chaque Achat avec MayaConnect"
- ✅ Le sous-titre "Économisez de l'argent à chaque achat..."
- ✅ Les mockups de téléphones (optionnel mais recommandé)
- ✅ Le design bordeaux de votre site
- ✅ Le fond dégradé gris/blanc

## 🛠️ Méthodes pour créer l'image

### Option 1 : Capture d'écran (⭐ Le plus rapide)
1. Ouvrez votre site dans le navigateur (mode développement ou production)
2. Faites une capture d'écran de la section Hero (du haut jusqu'aux téléphones)
3. Ouvrez l'image dans un éditeur (Paint, Photoshop, GIMP, etc.)
4. Redimensionnez à **1200x630px** (gardez les proportions)
5. Recadrez si nécessaire pour montrer le début du site
6. Enregistrez comme `og-image.png` dans le dossier `public`

### Option 2 : Outil en ligne
- Utilisez [Canva](https://www.canva.com/) ou [Figma](https://www.figma.com/)
- Créez un design de 1200x630px avec les éléments de votre Hero
- Exportez en PNG
- Placez dans `public/og-image.png`

### Option 3 : Design dans Figma
1. Créez un frame de 1200x630px
2. Copiez-collez les éléments de votre Hero Section
3. Ajustez pour que ça rentre bien dans le format
4. Exportez en PNG
5. Placez dans `public/og-image.png`

## 📁 Placement du fichier
Une fois créée, placez l'image dans :
```
public/og-image.png
```

## 🔗 Mise à jour de l'URL
Après le déploiement sur Vercel, mettez à jour `index.html` :
- Ligne 21 : `og:image` → Remplacez `https://mayaconnect.app/` par votre URL Vercel
- Ligne 28 : `twitter:image` → Même chose
- Ligne 18 : `og:url` → Même chose
- Ligne 25 : `twitter:url` → Même chose

**Exemple** : Si votre site est sur `https://maya-connect.vercel.app/`, remplacez toutes les occurrences de `https://mayaconnect.app/` par `https://maya-connect.vercel.app/`

## ✅ Test
Pour tester l'aperçu :
1. Partagez votre URL sur WhatsApp/Facebook/Messages
2. L'image devrait apparaître automatiquement
3. Si ça ne marche pas, vérifiez que l'image est bien dans `public/og-image.png` et que l'URL est correcte
