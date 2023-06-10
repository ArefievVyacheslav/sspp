def get_images(soup):
    images = []
    img_proto = soup.find('ul', class_="splide__list").find_all('meta', itemprop="contentUrl")
    for img in img_proto: images.append(img['content'])
    return images