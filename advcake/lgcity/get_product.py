import random
from get_transliterate import get_transliterate
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import undetected_chromedriver


def get_product(link, gender, idx):
    global category
    try:
        option = Options()
        option.headless = True
        option.add_argument("--headless=new")
        driver = undetected_chromedriver.Chrome(options=option)
        driver.get(link)
        try:
            if gender != 'women': gender = 'Мужской'
            else: gender = 'Женский'
            name = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, 'breadcrumbs-last-item'))).get_attribute('textContent')
            price = int(driver.find_element(By.CLASS_NAME, 'card__info-price-text--new').get_attribute('content'))
            oldprice = int(driver.find_element(By.CLASS_NAME, 'card__info-price-text--old').get_attribute('textContent')
                           .replace('\n', '').replace('\t', '').replace('\xa0', ' ').replace(' ', '').replace('₽', ''))
            sale = int(driver.find_element(By.CLASS_NAME, 'card__info-price-text--percent').get_attribute('textContent').replace('%', ''))
            brand = driver.find_element(By.CLASS_NAME, 'card__info-link').text.upper()
            category = driver.find_elements(By.CLASS_NAME, 'breadcrumbs__item')[2].get_attribute('textContent').strip()
            subcategory = driver.find_elements(By.CLASS_NAME, 'breadcrumbs__item')[4].get_attribute('textContent').strip()
            color = driver.find_element(By.CLASS_NAME, 'card__color-value').get_attribute('textContent').lower().replace('ё', 'е').replace('в наличии: онлайн, офлайн', '').replace('в наличии: онлайн', '')
            if color == '': color = False
            brand_country = False
            country = False
            season = False
            style = False
            structure = False
            keys = driver.find_elements(By.CLASS_NAME, 'card__info-list-item-key')
            values = driver.find_elements(By.CLASS_NAME, 'card__info-list-item-val')
            info = {}
            for idx, key in enumerate(keys):
                key_txt = key.get_attribute('textContent').replace(':', '')
                val_txt = values[idx].get_attribute('textContent')
                if key_txt == 'Состав': structure = val_txt
                if key_txt == 'Страна производства': country = val_txt
                if key_txt == 'Страна бренда': brand_country = val_txt
                if key_txt == 'Сезон': season = val_txt
                if key_txt == 'Стиль': style = val_txt
                info[key_txt] = val_txt
            sizes = []
            for size in driver.find_elements(By.CLASS_NAME, 'select__drop-list-text--right'):
                sizes.append(size.get_attribute('textContent'))
            images = []
            for img in driver.find_elements(By.CLASS_NAME, 'card__slider-img'):
                images.append(img.get_attribute('src'))
            print(idx, 'PRODUCT - DONE!!!')
        except Exception as ex:
            print(ex)
            return
        finally: driver.quit()
        return {
            'id': round(random.uniform(1000000000, 9999999999)),
            'age': 'Взрослый',
            'benefit': oldprice - price,
            'brand': brand,
            'brandCountry': brand_country,
            'brandCountry_t': get_transliterate(brand_country) if brand_country else False,
            'category': category,
            'category_t': get_transliterate(category),
            'color': color,
            'color_t': get_transliterate(color) if color else False,
            'country': country,
            'country_t': get_transliterate(country) if country else False,
            'delivery': ['ru'],
            'deliveryPrice': False,
            'gender': gender,
            'name': name,
            'info': info,
            'installment': False,
            'images': images,
            'like': 0,
            'link': link,
            'oldprice': oldprice,
            'pp': 'advcake',
            'price': price,
            'sale': sale,
            "season": season,
            'season_t': get_transliterate(season) if season else False,
            'shop': 'lgcity',
            'sizes': sizes,
            "style": style,
            'style_t': get_transliterate(style) if style else False,
            'structure': structure,
            'subcategory': subcategory,
            'subcategory_t': get_transliterate(subcategory)
        }
    except:
        print(f'{link} НЕ собран!')
        return


# print(get_product(
#     'https://lgcity.ru/product/bryuki_3887.html',
#     'Женский', 1))