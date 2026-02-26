# 📋 UPUTE ZA SHAREPOINT INTEGRACIJU

## ✅ ŠTO SAM DODAO:

1. **Microsoft Authentication Library (MSAL)** - za prijavu korisnika
2. **SharePoint REST API** - za spremanje i čitanje podataka
3. **Fallback na localStorage** - ako SharePoint ne radi

---

## 🔧 POTREBNO JE REGISTRIRATI AZURE AD APLIKACIJU

Da bi HTML mogao pristupiti SharePointu, moraš registrirati aplikaciju u Azure AD.

### **KORAK 1: Registriraj aplikaciju**

1. Idi na: **https://portal.azure.com**
2. Prijavi se sa svojim Microsoft računom
3. U search baru upiši: **"App registrations"** ili **"Registracije aplikacija"**
4. Klikni **"+ New registration"** ili **"+ Nova registracija"**

### **KORAK 2: Konfiguriraj aplikaciju**

1. **Name:** `Mjerenje Plinova App`
2. **Supported account types:** Odaberi **"Accounts in this organizational directory only"**
3. **Redirect URI:**
   - Platform: **Single-page application (SPA)**
   - URI: URL gdje će biti HTML (npr. `https://dvokutec.sharepoint.com/sites/17025-test-Test-mjerenje/SitePages/Mjerenje.aspx`)
   - Ili za testiranje lokalno: `http://localhost` ili `file:///`
4. Klikni **"Register"**

### **KORAK 3: Kopiraj Application (client) ID**

1. Nakon registracije, vidiš **"Application (client) ID"**
2. **Kopiraj taj ID** (izgleda kao: `12345678-1234-1234-1234-123456789abc`)
3. Taj ID ćeš staviti u HTML

### **KORAK 4: Dodaj API permissions**

1. U aplikaciji, klikni na **"API permissions"** (lijevo u meniju)
2. Klikni **"+ Add a permission"**
3. Odaberi **"SharePoint"**
4. Odaberi **"Delegated permissions"**
5. Odaberi:
   - `AllSites.Read`
   - `AllSites.Write`
6. Klikni **"Add permissions"**
7. Klikni **"Grant admin consent for [tvoja firma]"** (ako imaš admin pristup)

---

## 📝 DODAJ CLIENT ID U HTML

1. Otvori **MOP_clean.html**
2. Pronađi liniju (oko linije 750):
```javascript
clientId: 'YOUR_APP_CLIENT_ID_HERE'
```
3. Zamijeni sa stvarnim Client ID-om:
```javascript
clientId: '12345678-1234-1234-1234-123456789abc'
```
4. Spremi HTML

---

## 🎉 TESTIRANJE

1. Otvori HTML u browseru
2. Kada klikneš "Završi mjerenje", pojavit će se Microsoft login prozor
3. Prijavi se
4. Podaci će se spremiti u SharePoint listu
5. Kada klikneš "Povijest mjerenja", učitat će podatke iz SharePointa

---

## 🔍 ALTERNATIVA - BEZ AZURE AD REGISTRACIJE

Ako ne možeš registrirati Azure AD aplikaciju (nemaš admin pristup), mogu napraviti **Power Automate** rješenje:

### **Power Automate pristup:**

1. **Flow 1: Spremi mjerenje**
   - HTTP trigger prima podatke
   - Dodaje red u SharePoint listu

2. **Flow 2: Učitaj mjerenja**
   - HTTP trigger
   - Vraća sve podatke iz SharePoint liste

3. **HTML poziva te flowove** umjesto direktnog pristupa SharePointu

**Prednost:** Ne treba Azure AD registracija
**Nedostatak:** Sporije od direktnog pristupa

---

## ❓ ŠTO ŽELIŠ?

**A) Registrirati Azure AD aplikaciju** (brže, direktan pristup)
- Trebam admin pristup ili pomoć IT-a

**B) Koristiti Power Automate flowove** (jednostavnije, ne treba admin)
- Mogu napraviti za 15 minuta

Javi mi! 🚀
