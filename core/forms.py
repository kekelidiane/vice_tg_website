from django import forms

INPUT_CLASSES = (
    "border border-gray-300 rounded-lg px-4 py-3 w-full "
    "focus:ring-2 focus:ring-vice-green-500 focus:outline-none "
    "focus:border-transparent"
)


class ContactForm(forms.Form):
    nom = forms.CharField(
        max_length=120,
        widget=forms.TextInput(attrs={"placeholder": "Nom", "class": INPUT_CLASSES}),
    )
    prenom = forms.CharField(
        max_length=120,
        required=False,
        widget=forms.TextInput(
            attrs={"placeholder": "Prénom(s)", "class": INPUT_CLASSES}
        ),
    )
    email = forms.EmailField(
        widget=forms.EmailInput(
            attrs={"placeholder": "Adresse mail", "class": INPUT_CLASSES}
        ),
    )
    objet = forms.CharField(
        max_length=200,
        required=False,
        widget=forms.TextInput(attrs={"placeholder": "Objet", "class": INPUT_CLASSES}),
    )
    message = forms.CharField(
        widget=forms.Textarea(
            attrs={"placeholder": "Votre message", "rows": 6, "class": INPUT_CLASSES}
        ),
    )


class NewsletterForm(forms.Form):
    email = forms.EmailField(
        widget=forms.EmailInput(
            attrs={
                "placeholder": "Entrez votre adresse mail",
                "class": (
                    "flex-1 px-4 py-2 rounded-lg border border-gray-300 "
                    "focus:outline-none focus:ring-2 focus:ring-vice-gold-400 "
                    "text-gray-900"
                ),
            }
        ),
    )
