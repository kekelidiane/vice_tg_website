from datetime import datetime

from core.site import SITE_CONFIG


def site_config(request):
    return {
        "site": SITE_CONFIG,
        "current_year": datetime.now().year,
    }
