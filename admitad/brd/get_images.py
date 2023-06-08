def get_images(soup):
    images = []
    img_proto = soup.find_all('img', class_='gal-photo')
    for img in img_proto: images.append('https://brd.ru' + img['src'])
    return images