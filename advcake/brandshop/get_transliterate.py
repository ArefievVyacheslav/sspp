from transliterate import translit


def get_transliterate(text):
    return translit(text, language_code='ru', reversed=True).replace("'", '').replace("'", '')