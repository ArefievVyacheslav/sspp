def get_brand(soup):
    brand = soup.find('h1', class_='product-card-main__title').contents[0].strip().upper()
    if brand == '': brand = soup.find('h1', class_='product-card-main__title').find('a').text.strip().upper()
    if brand == 'MICHAEL MICHAEL KORS': brand = 'MICHAEL KORS'
    if brand == 'LAUREN RALPH LAUREN': brand = 'RALPH LAUREN'
    return brand