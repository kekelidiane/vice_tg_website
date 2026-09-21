import logging

from django.core.mail import EmailMessage
from django.conf import settings
from django.http import Http404
from django.shortcuts import render

from core.data.articles import ARTICLES, get_article_by_slug, get_recent_articles
from core.forms import ContactForm, NewsletterForm
from core.site import SITE_CONFIG

logger = logging.getLogger(__name__)


def home(request):
    return render(
        request,
        "pages/home.html",
        {
            "latest_articles": ARTICLES[:3],
            "contact_form": ContactForm(),
            "newsletter_form": NewsletterForm(),
        },
    )


def blog_list(request):
    return render(request, "pages/blog_list.html", {"articles": ARTICLES})


def blog_detail(request, slug):
    article = get_article_by_slug(slug)
    if article is None:
        raise Http404("Article introuvable")
    return render(
        request,
        "pages/blog_detail.html",
        {
            "article": article,
            "recent_articles": get_recent_articles(3, exclude_slug=slug),
        },
    )


def donation(request):
    return render(request, "pages/donation.html")


def contact_submit(request):
    if request.method != "POST":
        raise Http404

    form = ContactForm(request.POST)
    if not form.is_valid():
        return render(request, "partials/contact_result.html", {"status": "error"})

    data = form.cleaned_data
    subject = data["objet"] or f"Nouveau message de {SITE_CONFIG['name']}"
    body = (
        f"Nom : {data['nom']} {data['prenom']}\n"
        f"Email : {data['email']}\n\n"
        f"Message :\n{data['message']}"
    )

    try:
        email = EmailMessage(
            subject=subject,
            body=body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[settings.MAIL_TO],
            reply_to=[data["email"]],
        )
        email.send(fail_silently=False)
        status = "sent"
    except Exception:
        logger.exception("Erreur envoi mail (contact)")
        status = "error"

    return render(request, "partials/contact_result.html", {"status": status})


def newsletter_submit(request):
    if request.method != "POST":
        raise Http404

    form = NewsletterForm(request.POST)
    if not form.is_valid():
        return render(request, "partials/newsletter_result.html", {"status": "error"})

    data = form.cleaned_data
    try:
        email = EmailMessage(
            subject=f"Nouvelle inscription newsletter - {SITE_CONFIG['name']}",
            body=f"Nouvelle inscription à la newsletter : {data['email']}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[settings.MAIL_TO],
            reply_to=[data["email"]],
        )
        email.send(fail_silently=False)
        status = "sent"
    except Exception:
        logger.exception("Erreur envoi mail (newsletter)")
        status = "error"

    return render(request, "partials/newsletter_result.html", {"status": status})
