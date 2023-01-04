def get_images(soup):
    images = []
    img_proto = soup.find_all('img', { 'itemprop': 'image' })
    for img in img_proto: images.append(img['data-src'])
    return images