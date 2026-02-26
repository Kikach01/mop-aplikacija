# 📊 Postavljanje aplikacije na SharePoint - DETALJNE UPUTE

## ✅ Najbolje rješenje za vašu tvrtku!

SharePoint je idealan jer:
- Već ga koristite
- Kontrola pristupa (samo vaši zaposlenici)
- Sigurno
- Brzo
- Besplatno
- Integracija s Teams

---

## 📋 PRIPREMA (5 minuta)

### Korak 1: Generiraj ikone

1. **Otvori generator ikona:**
   - Pronađi datoteku `generate-icon.html` na desktopu
   - Dvostruki klik da se otvori u pregledniku (Chrome, Edge, Firefox...)

2. **Preuzmi prvu ikonu:**
   - Vidjet ćeš zelenu ikonu s ♻️ simbolom i "MOP" tekstom
   - Ispod ikone 192x192px klikni gumb **"Preuzmi icon-192.png"**
   - Datoteka će se preuzeti u Downloads folder

3. **Preuzmi drugu ikonu:**
   - Ispod ikone 512x512px klikni gumb **"Preuzmi icon-512.png"**
   - Datoteka će se preuzeti u Downloads folder

4. **Premjesti ikone:**
   - Otvori Downloads folder
   - Pronađi `icon-192.png` i `icon-512.png`
   - Kopiraj ih u isti folder gdje je `MOP_clean.html` (Desktop)

### Korak 2: Provjeri sve datoteke

Sada bi na desktopu trebao imati ovih **5 datoteka**:
- ✅ `MOP_clean.html` (glavna aplikacija)
- ✅ `manifest.json` (konfiguracija)
- ✅ `sw.js` (service worker)
- ✅ `icon-192.png` (mala ikona)
- ✅ `icon-512.png` (velika ikona)

---

## 🌐 POSTAVLJANJE NA SHAREPOINT (10 minuta)

### Korak 3: Otvori SharePoint

**Opcija A - Preko Teams-a:**
1. Otvori **Microsoft Teams**
2. Odaberi channel gdje želiš aplikaciju (npr. "Test-mjerenje")
3. Klikni na **Files** tab (gore)
4. Klikni **"Open in SharePoint"** (gore desno)

**Opcija B - Direktno:**
1. Otvori preglednik
2. Idi na: https://dvokutec.sharepoint.com/
3. Odaberi site (npr. "17025-test-Test-mjerenje")
4. Klikni na **"Documents"** ili **"Shared Documents"**

### Korak 4: Kreiraj folder za aplikaciju

1. **Kreiraj novi folder:**
   - Klikni **"+ New"** (gore lijevo)
   - Odaberi **"Folder"**
   - Naziv: `MOP-Aplikacija` (ili bilo koji naziv)
   - Klikni **"Create"**

2. **Otvori folder:**
   - Dvostruki klik na novi folder `MOP-Aplikacija`

### Korak 5: Upload datoteke

**Metoda 1 - Drag & Drop (najbrže):**
1. Otvori Windows Explorer (folder gdje su datoteke)
2. Selektiraj svih 5 datoteka:
   - Drži Ctrl i klikni na svaku datoteku
   - Ili označi sve: Ctrl+A
3. Povuci ih u SharePoint prozor
4. Pusti ih (drop)
5. Čekaj da se upload završi (vidjet ćeš progress bar)

**Metoda 2 - Upload gumb:**
1. Klikni **"Upload"** (gore)
2. Odaberi **"Files"**
3. Selektiraj svih 5 datoteka (drži Ctrl)
4. Klikni **"Open"**
5. Čekaj da se upload završi

### Korak 6: Provjeri upload

Trebao bi vidjeti svih 5 datoteka u folderu:
- ✅ MOP_clean.html
- ✅ manifest.json
- ✅ sw.js
- ✅ icon-192.png
- ✅ icon-512.png

---

## 🔗 DOHVAĆANJE LINKA (2 minute)

### Korak 7: Kopiraj link aplikacije

1. **Pronađi MOP_clean.html:**
   - U SharePoint folderu `MOP-Aplikacija`
   - Vidi datoteku `MOP_clean.html`

2. **Kopiraj link:**
   - Desni klik na `MOP_clean.html`
   - Odaberi **"Copy link"** ili **"Kopiraj vezu"**
   - Link je kopiran u clipboard

3. **Zalijepi link negdje:**
   - Otvori Notepad ili Word
   - Zalijepi link (Ctrl+V)
   - Link će izgledati ovako:
   ```
   https://dvokutec.sharepoint.com/sites/17025-test-Test-mjerenje/Shared%20Documents/MOP-Aplikacija/MOP_clean.html
   ```

4. **Pošalji link kolegama:**
   - Kopiraj link
   - Pošalji ga preko Teams chata, emaila, ili SMS-a
   - Svi koji imaju pristup SharePoint siteu mogu otvoriti aplikaciju

---

## 📱 INSTALACIJA NA MOBITEL (5 minuta)

### Korak 8: Otvori na Android mobitelu

1. **Otvori link:**
   - Primi link (Teams, email, SMS...)
   - Klikni na link
   - Otvara se u Chrome pregledniku

2. **Prijavi se (ako treba):**
   - Ako te pita za prijavu, unesi Microsoft račun
   - Email: `kristijan.liscinski@dvokut-ecro.hr`
   - Lozinka: tvoja lozinka

3. **Čekaj da se učita:**
   - Aplikacija će se učitati
   - Vidjet ćeš login ekran aplikacije

4. **Instaliraj aplikaciju:**
   - Klikni na **tri točkice** (⋮) gore desno
   - Odaberi **"Add to Home screen"** ili **"Dodaj na početni zaslon"**
   - Promijeni naziv ako želiš (npr. "MOP Mjerenje")
   - Klikni **"Add"** ili **"Dodaj"**

5. **Gotovo!**
   - Ikona aplikacije će se pojaviti na početnom zaslonu
   - Klikni na ikonu da otvoriš aplikaciju
   - Radi kao prava mobilna aplikacija!

### Korak 9: Otvori na iPhone mobitelu

1. **Otvori link:**
   - Primi link (Teams, email, SMS...)
   - Klikni na link
   - **VAŽNO:** Mora se otvoriti u **Safari** pregledniku (ne Chrome!)

2. **Prijavi se (ako treba):**
   - Ako te pita za prijavu, unesi Microsoft račun

3. **Čekaj da se učita:**
   - Aplikacija će se učitati

4. **Instaliraj aplikaciju:**
   - Klikni na **Share** ikonu (kvadrat sa strelicom prema gore) dolje
   - Skrolaj dolje
   - Odaberi **"Add to Home Screen"**
   - Promijeni naziv ako želiš
   - Klikni **"Add"**

5. **Gotovo!**
   - Ikona će se pojaviti na početnom zaslonu
   - Klikni na ikonu da otvoriš aplikaciju

---

## 💡 BONUS: Dodaj u Teams kao Tab (5 minuta)

### Korak 10: Dodaj aplikaciju u Teams channel

1. **Otvori Teams:**
   - Odaberi channel (npr. "Test-mjerenje")

2. **Dodaj novi tab:**
   - Klikni na **+** (plus ikona) pored postojećih tabova
   - Odaberi **"Website"**

3. **Unesi podatke:**
   - **Name:** `MOP Mjerenje` (ili bilo koji naziv)
   - **URL:** Zalijepi SharePoint link aplikacije
   - Klikni **"Save"**

4. **Gotovo!**
   - Novi tab "MOP Mjerenje" će se pojaviti
   - Svi u channelu mogu pristupiti aplikaciji direktno iz Teams-a
   - Ne trebaju otvarati link, samo kliknu na tab!

---

## 🔄 AŽURIRANJE APLIKACIJE (2 minute)

Kada napraviš promjene u aplikaciji:

1. **Promijeni datoteke lokalno:**
   - Uredi `MOP_clean.html` na desktopu
   - Spremi promjene

2. **Upload novu verziju:**
   - Idi na SharePoint folder `MOP-Aplikacija`
   - Povuci novu verziju `MOP_clean.html`
   - SharePoint će pitati: **"Replace"** ili **"Keep both"**
   - Odaberi **"Replace"**

3. **Gotovo!**
   - Svi korisnici će automatski dobiti novu verziju
   - Možda će trebati osvježiti stranicu (F5)

---

## 🔒 KONTROLA PRISTUPA

### Tko može pristupiti aplikaciji?

- Samo osobe koje imaju pristup SharePoint siteu
- Možeš kontrolirati pristup u SharePoint postavkama

### Kako dodati/ukloniti korisnike?

1. **Idi na SharePoint site:**
   - Otvori site (npr. "17025-test-Test-mjerenje")

2. **Otvori postavke:**
   - Klikni na **⚙️ Settings** (zupčanik) gore desno
   - Odaberi **"Site permissions"**

3. **Dodaj korisnika:**
   - Klikni **"Invite people"**
   - Unesi email adresu
   - Odaberi razinu pristupa (Read, Edit, Full control)
   - Klikni **"Share"**

4. **Ukloni korisnika:**
   - Pronađi korisnika na listi
   - Klikni na **...** (tri točkice)
   - Odaberi **"Remove user permissions"**

---

## ❓ ČESTA PITANJA

### Q: Mogu li koristiti aplikaciju offline?
**A:** Da! Nakon prvog učitavanja, aplikacija radi i bez interneta. Service Worker kešira sve potrebne datoteke.

### Q: Trebam li instalirati aplikaciju na svaki mobitel?
**A:** Da, svaki korisnik mora instalirati aplikaciju na svoj mobitel. Ali to traje samo 1 minutu.

### Q: Mogu li koristiti aplikaciju na računalu?
**A:** Da! Otvori SharePoint link u pregledniku. Možeš i instalirati kao desktop aplikaciju (Chrome: tri točkice > Install app).

### Q: Što ako promijenim datoteke?
**A:** Samo upload novu verziju na SharePoint (Replace). Korisnici će automatski dobiti novu verziju.

### Q: Mogu li promijeniti ikonu aplikacije?
**A:** Da! Uredi `generate-icon.html` (promijeni boju, tekst, simbol), generiraj nove ikone, i upload ih na SharePoint (Replace).

### Q: Zašto iPhone mora koristiti Safari?
**A:** iOS ne podržava PWA instalaciju iz Chrome-a. Mora biti Safari.

### Q: Mogu li imati više verzija aplikacije?
**A:** Da! Kreiraj više foldera na SharePointu (npr. "MOP-Test", "MOP-Production") i svaki će imati svoj link.

### Q: Koliko prostora zauzima aplikacija?
**A:** Vrlo malo - oko 500 KB. Service Worker kešira datoteke lokalno na mobitelu.

---

## 🎉 GOTOVO!

Sada imaš:
- ✅ Aplikaciju na SharePointu
- ✅ Link za dijeljenje
- ✅ Mobilnu aplikaciju na mobitelu
- ✅ Tab u Teams-u (opciono)
- ✅ Kontrolu pristupa
- ✅ Offline rad

Aplikacija radi kao prava mobilna aplikacija bez potrebe za Google Play ili App Store!

---

## 📞 Trebam pomoć?

Ako imaš problema:
1. Provjeri da li su sve datoteke uploadane
2. Provjeri da li link radi u pregledniku
3. Provjeri da li imaš pristup SharePoint siteu
4. Pokušaj osvježiti stranicu (F5)
5. Pokušaj obrisati cache u pregledniku

Ako i dalje ne radi, kontaktiraj IT podršku.
