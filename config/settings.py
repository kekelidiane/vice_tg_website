"""
Configuration Django du site vitrine VICE TOGO.

Pas de base de données applicative pour l'instant : le contenu (articles de
blog, infos de l'association) vit dans core/data/ et core/context_processors.py.
La gestion dynamique du contenu (CMS, back-office) viendra plus tard via une
app tierce, sans remettre en cause cette configuration de base.
"""

from pathlib import Path

import environ

BASE_DIR = Path(__file__).resolve().parent.parent

env = environ.Env(
    DEBUG=(bool, False),
)
# Lit le fichier .env à la racine du projet s'il existe (copier .env.example -> .env)
environ.Env.read_env(BASE_DIR / ".env")

SECRET_KEY = env("DJANGO_SECRET_KEY", default="dev-insecure-secret-key-change-me")
DEBUG = env.bool("DJANGO_DEBUG", default=True)

ALLOWED_HOSTS = env.list("DJANGO_ALLOWED_HOSTS", default=["localhost", "127.0.0.1"])

INSTALLED_APPS = [
    "django.contrib.staticfiles",
    "core",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django.middleware.gzip.GZipMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "core.context_processors.site_config",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"

# Pas de base de données requise pour l'instant : le site est en lecture
# seule côté contenu. SQLite est laissé en place uniquement pour les besoins
# internes de Django (sessions, etc.) si jamais ils sont utilisés plus tard.
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

LANGUAGE_CODE = "fr-fr"
TIME_ZONE = "Africa/Lome"
USE_I18N = True
USE_TZ = True

STATIC_URL = "static/"
STATICFILES_DIRS = [BASE_DIR / "static"]
STATIC_ROOT = BASE_DIR / "staticfiles"

STORAGES = {
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# ---------------------------------------------------------------------------
# E-mail (formulaire de contact + newsletter)
# ---------------------------------------------------------------------------
# Configuration SMTP standard Django. Par défaut sur Gmail, comme la version
# Next.js d'origine (Nodemailer + SMTP Gmail), mais changeable pour n'importe
# quel fournisseur SMTP via les variables d'environnement ci-dessous.
EMAIL_BACKEND = env(
    "DJANGO_EMAIL_BACKEND",
    default="django.core.mail.backends.smtp.EmailBackend",
)
EMAIL_HOST = env("MAIL_HOST", default="smtp.gmail.com")
EMAIL_PORT = env.int("MAIL_PORT", default=587)
EMAIL_USE_TLS = env.bool("MAIL_USE_TLS", default=True)
EMAIL_HOST_USER = env("MAIL_USER", default="")
EMAIL_HOST_PASSWORD = env("MAIL_PASS", default="")
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER

# Adresse qui reçoit les messages du site (formulaire de contact,
# inscriptions à la newsletter). Par défaut, la même que l'expéditeur.
MAIL_TO = env("MAIL_TO", default=EMAIL_HOST_USER)

# En développement, si aucun identifiant SMTP n'est configuré, on bascule
# automatiquement sur le backend console pour ne jamais planter le
# formulaire de contact pendant les tests locaux (les mails s'affichent
# simplement dans le terminal au lieu d'être envoyés).
if DEBUG and not EMAIL_HOST_USER:
    EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
