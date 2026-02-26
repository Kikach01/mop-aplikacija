# 📱 Instalacija mobilne aplikacije - Mjerenje odlagališnih plinova

## Što je napravljeno?

Aplikacija je sada **PWA (Progressive Web App)** koja se može instalirati na mobitel kao prava aplikacija!

## 📋 Potrebne datoteke:

1. ✅ `MOP_clean.html` - glavna aplikacija
2. ✅ `manifest.json` - konfiguracija aplikacije
3. ✅ `sw.js` - service worker za offline rad
4. ⚠️ `icon-192.png` - ikona 192x192px (trebaš kreirati)
5. ⚠️ `icon-512.png` - ikona 512x512px (trebaš kreirati)

---

## 🎨 Kako kreirati ikone?

### Opcija 1: Online alat
1. Idi na https://www.favicon-generator.org/
2. Upload logo ili sliku (preporučam zelenu pozadinu #2e7d32 sa bijelim simbolom ♻️)
3. Generiraj ikone
4. Preuzmi `icon-192.png` i `icon-512.png`
5. Stavi ih u isti folder kao `MOP_clean.html`

### Opcija 2: Canva
1. Idi na https://www.canva.com/
2. Kreiraj dizajn 512x512px
3. Dodaj zelenu pozadinu (#2e7d32)
4. Dodaj bijeli tekst "MOP" ili simbol ♻️
5. Preuzmi kao PNG
6. Resize na 192x192px za manju ikonu

### Opcija 3: Privremeno rješenje
Možeš koristiti bilo koju sliku (logo tvrtke) i preimenovati je u `icon-192.png` i `icon-512.png`

---

## 📲 Kako instalirati na Android mobitel?

1. **Postavi datoteke na web server**
   - Možeš koristiti GitHub Pages (besplatno)
   - Ili bilo koji web hosting
   - Ili lokalni server za testiranje

2. **Otvori stranicu u Chrome pregledniku**
   - Upiši URL aplikacije (npr. https://tvoj-server.com/MOP_clean.html)

3. **Instaliraj aplikaciju**
   - Klikni na **tri točkice** (⋮) u gornjem desnom kutu
   - Odaberi **"Dodaj na početni zaslon"** ili **"Install app"**
   - Potvrdi instalaciju

4. **Gotovo!**
   - Ikona aplikacije će se pojaviti na početnom zaslonu
   - Aplikacija radi kao prava mobilna aplikacija
   - Radi i offline (nakon prvog učitavanja)

---

## 🍎 Kako instalirati na iPhone (iOS)?

1. **Otvori stranicu u Safari pregledniku**
   - Chrome ne podržava PWA instalaciju na iOS-u!
   - Mora biti Safari

2. **Dodaj na početni zaslon**
   - Klikni na **Share** ikonu (kvadrat sa strelicom prema gore)
   - Skrolaj dolje i odaberi **"Add to Home Screen"**
   - Unesi naziv (npr. "MOP Mjerenje")
   - Klikni **"Add"**

3. **Gotovo!**
   - Ikona će se pojaviti na početnom zaslonu
   - Aplikacija radi kao prava iOS aplikacija

---

## 🌐 Kako postaviti na web server?

### Opcija 1: GitHub Pages (BESPLATNO)

1. **Kreiraj GitHub račun** (ako nemaš)
   - Idi na https://github.com/

2. **Kreiraj novi repository**
   - Klikni "New repository"
   - Naziv: `mop-mjerenje`
   - Public
   - Kreiraj

3. **Upload datoteke**
   - Klikni "uploading an existing file"
   - Dodaj sve datoteke:
     - MOP_clean.html
     - manifest.json
     - sw.js
     - icon-192.png
     - icon-512.png

4. **Aktiviraj GitHub Pages**
   - Idi u Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save

5. **Tvoja aplikacija je online!**
   - URL: `https://tvoj-username.github.io/mop-mjerenje/MOP_clean.html`

### Opcija 2: Lokalno testiranje

1. **Instaliraj Python** (ako nemaš)
   - Preuzmi s https://www.python.org/

2. **Pokreni lokalni server**
   ```
   cd C:\Users\kliscinski\Desktop
   python -m http.server 8000
   ```

3. **Otvori u pregledniku**
   - Na računalu: http://localhost:8000/MOP_clean.html
   - Na mobitelu (ista WiFi mreža): http://IP-ADRESA-RAČUNALA:8000/MOP_clean.html

---

## ✨ Prednosti PWA aplikacije:

✅ Radi na Android i iOS
✅ Instalira se kao prava aplikacija
✅ Radi offline (nakon prvog učitavanja)
✅ Nema potrebe za Google Play ili App Store
✅ Automatski se ažurira
✅ Brže učitavanje
✅ Manje podataka troši
✅ Pristup kameri, lokaciji, itd.

---

## 🔧 Testiranje:

1. Otvori Chrome DevTools (F12)
2. Idi na **Application** tab
3. Provjeri:
   - **Manifest** - trebaju biti svi podaci
   - **Service Workers** - treba biti registriran
   - **Cache Storage** - trebaju biti cached datoteke

---

## ❓ Problemi?

### "Add to Home Screen" ne pojavljuje se
- Provjeri da li su sve datoteke na HTTPS serveru (ne HTTP)
- Provjeri da li postoje ikone (icon-192.png i icon-512.png)
- Provjeri da li je manifest.json ispravan

### Aplikacija ne radi offline
- Provjeri da li je Service Worker registriran
- Otvori aplikaciju barem jednom dok si online
- Provjeri Console za greške

### Ikone se ne prikazuju
- Provjeri da li su ikone u istom folderu kao HTML
- Provjeri da li su nazivi točni (icon-192.png, icon-512.png)
- Provjeri da li su ikone PNG format

---

## 📞 Kontakt

Za dodatnu pomoć, kontaktiraj IT podršku ili pošalji email.
