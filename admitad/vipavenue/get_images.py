def get_images(soup):
    images = []
    img_proto = soup.find_all('li', class_='product__card--item')
    for img in img_proto: images.append(img.find('img')['src'])
    return images