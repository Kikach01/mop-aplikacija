# 📁 Postavljanje aplikacije na OneDrive

## Korak po korak:

### 1. Pripremi datoteke
Trebat će ti ovih 5 datoteka u istom folderu:
- MOP_clean.html
- manifest.json
- sw.js
- icon-192.png (generiraj s generate-icon.html)
- icon-512.png (generiraj s generate-icon.html)

### 2. Upload na OneDrive
1. Idi na https://onedrive.live.com/
2. Kreiraj novi folder "MOP-Aplikacija"
3. Upload svih 5 datoteka u taj folder

### 3. Podijeli MOP_clean.html
1. Desni klik na `MOP_clean.html`
2. Odaberi **"Share"** ili **"Podijeli"**
3. Klikni **"Anyone with the link can view"**
4. Kopiraj link

### 4. Pretvori link u direktan pristup
OneDrive link izgleda ovako:
```
https://onedrive.live.com/embed?resid=ABC123&authkey=XYZ
```

Trebaš ga pretvoriti u direktan link. Koristi ovaj alat:
https://www.onedrive-link-generator.com/

Ili ručno:
- Zamijeni `onedrive.live.com` sa `onedrive.live.com/download`
- Dodaj `&download=1` na kraj

### 5. Otvori na mobitelu
- Otvori link u Chrome (Android) ili Safari (iPhone)
- Dodaj na početni zaslon

---

## ⚠️ Problem s OneDrive:
OneDrive ne podržava direktno hostanje HTML aplikacija s Service Workerima.

---
