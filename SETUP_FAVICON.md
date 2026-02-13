# Configuration du Favicon et Meta Tags

## Pour le Favicon (logo dans l'onglet)

1. Créez un dossier `public` à la racine du projet (s'il n'existe pas)
2. Copiez `src/assets/logo2.png` vers `public/favicon.png`
3. Le favicon sera automatiquement servi à `/favicon.png`

## Pour l'aperçu de partage (Open Graph)

1. Copiez `src/assets/logo2.png` vers `public/og-image.png`
2. Mettez à jour l'URL dans `index.html` :
   - Remplacez `https://mayaconnect.app/` par votre URL de déploiement réelle
   - Remplacez `https://mayaconnect.app/og-image.png` par votre URL + `/og-image.png`

## Commandes PowerShell

```powershell
# Créer le dossier public
New-Item -ItemType Directory -Path "public" -Force

# Copier le favicon
Copy-Item "src\assets\logo2.png" "public\favicon.png"

# Copier l'image pour Open Graph
Copy-Item "src\assets\logo2.png" "public\og-image.png"
```

## Après le déploiement

N'oubliez pas de mettre à jour les URLs dans `index.html` :
- `og:url` : votre URL de production
- `og:image` : votre URL + `/og-image.png`
- `twitter:url` : votre URL de production
- `twitter:image` : votre URL + `/og-image.png`
