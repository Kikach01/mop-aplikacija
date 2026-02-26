# ⚡ BRZA REFERENCA - SharePoint instalacija

## 🎯 Za IT administratora (10 minuta)

### 1. Pripremi datoteke
```
✅ MOP_clean.html
✅ manifest.json
✅ sw.js
✅ icon-192.png (generiraj s generate-icon.html)
✅ icon-512.png (generiraj s generate-icon.html)
```

### 2. Upload na SharePoint
```
Teams > Files > Open in SharePoint
New > Folder > "MOP-Aplikacija"
Drag & drop svih 5 datoteka
```

### 3. Kopiraj link
```
Desni klik na MOP_clean.html > Copy link
```

### 4. Pošalji link korisnicima
```
Teams chat / Email / SMS
```

---

## 📱 Za krajnje korisnike (2 minute)

### Android:
```
1. Otvori link u Chrome
2. Tri točkice (⋮) > Add to Home screen
3. Gotovo!
```

### iPhone:
```
1. Otvori link u Safari (ne Chrome!)
2. Share > Add to Home Screen
3. Gotovo!
```

---

## 🔄 Ažuriranje aplikacije

```
1. Promijeni MOP_clean.html lokalno
2. Upload na SharePoint (Replace)
3. Korisnici automatski dobiju novu verziju
```

---

## 💡 Teams Tab (opciono)

```
Teams channel > + > Website
Naziv: "MOP Mjerenje"
URL: [SharePoint link]
Save
```

---

## ❓ Najčešći problemi

### "Add to Home screen" ne pojavljuje se
- Provjeri da su ikone uploadane (icon-192.png, icon-512.png)
- Provjeri da je manifest.json uploadan
- Osvježi stranicu (F5)

### Aplikacija ne radi offline
- Otvori aplikaciju barem jednom dok si online
- Provjeri da je sw.js uploadan
- Obriši cache i pokušaj ponovo

### iPhone ne može instalirati
- Mora biti Safari preglednik (ne Chrome!)
- Provjeri da si prijavljen s Microsoft računom

---

## 📞 Podrška

**Detaljne upute:** `UPUTE_SHAREPOINT_HOSTING.md`
**Checklist:** `CHECKLIST_SHAREPOINT.md`
**IT podrška:** [kontakt]
