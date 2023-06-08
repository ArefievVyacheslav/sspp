import time
from get_time import get_time
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import undetected_chromedriver


product_links = []
start_time = time.time()


def get_product_links(link):
    product_links.clear()
    option = Options()
    option.headless = True
    driver = undetected_chromedriver.Chrome(options=option)
    try:
        driver.get(link)
        product_links_proto = driver.find_elements(By.CLASS_NAME, 'product-card__link')
        for product_link in product_links_proto:
            product_links.append(product_link.get_attribute('href'))
        driver.close()
        driver.quit()
        print('Ссылки на товары собраны за', f'{get_time(round(time.time() - start_time))}')
        links = product_links.copy()
        product_links.clear()
        return {
            'product_links': links,
            'status': f'Ссылки на товары собраны через {get_time(round(time.time() - start_time))} от начала'
        }
    except Exception as ex:
        print(ex)
        return {}
