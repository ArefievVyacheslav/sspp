import random
from get_sale import get_sale
from get_prices import get_prices
from get_transliterate import get_transliterate
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import undetected_chromedriver


def get_product(link, gender, idx):
    global category
    try:
        option = Options()
        option.headless = True
	options.add_argument("--headless=new")
	driver = undetected_chromedriver.Chrome(options=option)
        driver.get(link)
        try:
            if gender != 'women': gender = 'Мужской'
            else: gender = 'Женский'
            price = get_prices(driver.find_element(By.CLASS_NAME, 'product-order__price_new'))
            oldprice = get_prices(driver.find_element(By.CLASS_NAME, 'product-order__price_old'))
            sale = get_sale(driver.find_element(By.CLASS_NAME, 'product-order__price-discount'))
            brand = driver.find_element(By.CLASS_NAME, 'product-page__header').text.upper()
            name = driver.find_element(By.CLASS_NAME, 'product-page__subheader').text.strip() + ' ' + brand
            category = driver.find_elements(By.CLASS_NAME, 'breadcrumbs__item')[2].get_attribute('textContent').strip()
            subcategory = driver.find_elements(By.CLASS_NAME, 'breadcrumbs__item')[3].get_attribute('textContent').strip()
            color = driver.find_elements(By.CLASS_NAME, 'tooltip')[0].get_attribute('textContent').lower().replace('ё', 'е').replace('в наличии: онлайн, офлайн', '').replace('в наличии: онлайн', '')
            if color == '': color = driver.find_elements(By.CLASS_NAME, 'tooltip')[1].get_attribute('textContent').lower().replace('ё', 'е').replace('в наличии: онлайн, офлайн', '').replace('в наличии: онлайн', '')
            if color == '': color = driver.find_elements(By.CLASS_NAME, 'tooltip')[2].get_attribute('textContent').lower().replace('ё', 'е').replace('в наличии: онлайн, офлайн', '').replace('в наличии: онлайн', '')
            if color == '': color = False
            info = []
            country = False
            structure = False
            for idx, param in enumerate(driver.find_element(By.CLASS_NAME, 'product-menu__content').find_elements(By.TAG_NAME, 'li')):
                if idx == 0: structure = param.get_attribute('textContent').replace('Материал: ', '').split('; ')
                elif idx == 1: country = param.get_attribute('textContent').replace('Страна-производитель: ', '').upper()
                else: info.append(param.get_attribute('textContent'))
            sizes = []
            for size in driver.find_elements(By.CLASS_NAME, 'product-plate__item'):
                sizes.append(size.get_attribute('textContent').replace('В наличии: Онлайн, Офлайн', '').replace('В наличии: Онлайн', '').replace(' EU', '').strip())
            images = []
            for img in driver.find_elements(By.CLASS_NAME, 'zoom-region'):
                images.append(img.find_element(By.TAG_NAME, 'div').find_element(By.TAG_NAME, 'img').get_attribute('src'))
            print(idx, 'PRODUCT - DONE!!!')
        except Exception as ex:
            print(ex)
            return
        finally:
            if category == 'Верхняя одежда': category = 'Одежда'
            driver.quit()
        return {
            'id': round(random.uniform(1000000000, 9999999999)),
            'age': 'Взрослый',
            'benefit': oldprice - price,
            'brand': brand,
            'brandCountry': False,
            'brandCountry_t': False,
            'category': category,
            'category_t': get_transliterate(category),
            'color': color,
            'color_t': get_transliterate(color),
            'country': country,
            'country_t': get_transliterate(country),
            'delivery': ['ru', 'rb', 'kz'],
            'deliveryPrice': 350,
            'description': False,
            'gender': gender,
            'name': name,
            'info': info,
            'installment': True,
            'images': images,
            'like': 0,
            'link': link,
            'oldprice': oldprice,
            'pp': 'advcake',
            'price': price,
            'sale': sale,
            "season": False,
            'season_t': False,
            'shop': 'brandshop',
            'sizes': sizes,
            "style": False,
            'style_t': False,
            'structure': structure,
            'subcategory': subcategory,
            'subcategory_t': get_transliterate(subcategory)
        }
    except:
        print(f'{link} НЕ собран!')
        return
