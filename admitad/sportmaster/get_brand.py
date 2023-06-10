def get_brand(soup):
    return soup.find('a', class_='card__info-link').text.strip().upper()