import re


def get_images(soup):
    images = []
    img_proto = soup.find('div', class_='product-card-slider__main-wrap').find_all('span', class_=re.compile(
        'product-card-slider__slide-image'))
    for img in img_proto: images.append('https://stockmann.ru' + img.get('data-zoom-img'))
    return images