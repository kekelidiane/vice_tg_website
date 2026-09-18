# VICE TOGO — site vitrine (Django)

Site vitrine de l'association **VICE Togo** (Vie Culture Environnement)
Association dédiée au soutien scolaire des enfants démunis, à l'agriculture
biologique et au reboisement.

## Stack technique

- **Django**
- **Tailwind CSS**
- **HTMX**
- **JavaScript vanilla**

## Prérequis

- Python 3.11+
- Node.js 18+

## Installation

### 1. Cloner le projet et créer l'environnement virtuel

```bash
git clone https://github.com/kekelidiane/vice_tg_website.git
cd vice_tg_website

python3 -m venv .venv
source .venv\Scripts\activate
```

### 2. Installer les dépendances Python

```bash
pip install -r requirements.txt
```

### 3. Installer les dépendances Node et compiler Tailwind

```bash
npm install
npm run build
npm run dev
```

### 4. Configurer les variables d'environnement

```bash
cp .env.example .env
```

Accessible sur http://127.0.0.1:8000

## Structure du projet

```
config/                     (settings, urls, wsgi/asgi)
core/              
├── views.py              
├── forms.py               
├── urls.py
├── site.py                
├── context_processors.py  
└── data/
    └── articles.py         
templates/
├── base.html               (head, navbar, footer)
├── components/             (navbar.html, footer.html)
├── sections/               (hero, about, actions...)
├── pages/                  (home.html, blog_list.html, blog_detail.html, donation.html)
└── partials/               (HTMX)
static/
├── css/
├── js/main.js
└── assets/
```

## Contribution

1. Forker le dépôt
2. Créer une branche pour vos modifications
3. Committer vos changements
4. Ouvrir une Pull Request


# *_ARIGATO_*