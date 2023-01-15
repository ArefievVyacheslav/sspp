def get_images(soup):
    images = []
    img_proto = soup.find_all('span', class_='picture-item')
    for img in img_proto: images.append('https://elyts.ru' + img.find('img')['src'])
    return images