from datetime import datetime

from core.site import SITE_CONFIG


def site_config(request):
    """Rend `site` et `current_year` disponibles dans tous les templates,
    sans avoir à les repasser depuis chaque vue."""
    return {
        "site": SITE_CONFIG,
        "current_year": datetime.now().year,
    }
