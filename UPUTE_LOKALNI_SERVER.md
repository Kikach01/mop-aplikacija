# 💻 Lokalni server - Za testiranje

## Ako želiš testirati prije postavljanja online

---

## Metoda 1: Python (najjednostavnije)

### 1. Provjeri imaš li Python
Otvori Command Prompt i upiši:
```
python --version
```

Ako nemaš, preuzmi s: https://www.python.org/downloads/

### 2. Pokreni server
```
cd C:\Users\kliscinski\Desktop
python -m http.server 8000
```

### 3. Otvori u pregledniku
- Na računalu: http://localhost:8000/MOP_clean.html
- Na mobitelu (ista WiFi): http://192.168.X.X:8000/MOP_clean.html

### 4. Dohvati IP adresu računala
```
ipconfig
```
Traži "IPv4 Address" (npr. 192.168.1.100)

---

## Metoda 2: Node.js http-server

### 1. Instaliraj Node.js
Preuzmi s: https://nodejs.org/

### 2. Instaliraj http-server
```
npm install -g http-server
```

### 3. Pokreni server
```
cd C:\Users\kliscinski\Desktop
http-server -p 8000
```

### 4. Otvori
- http://localhost:8000/MOP_clean.html

---

## Metoda 3: Visual Studio Code Live Server

### 1. Instaliraj VS Code
Preuzmi s: https://code.visualstudio.com/

### 2. Instaliraj Live Server extension
- Otvori VS Code
- Extensions (Ctrl+Shift+X)
- Traži "Live Server"
- Install

### 3. Pokreni
- Desni klik na MOP_clean.html
- "Open with Live Server"

---

## ⚠️ Napomena:

Lokalni server radi samo dok je računalo uključeno i dok je server pokrenut.

Za trajno rješenje koristi:
- **SharePoint** (preporučeno za vašu tvrtku)
- **Netlify Drop** (najbrže)

---
