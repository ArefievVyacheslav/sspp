from undetected_chromedriver import Chrome, ChromeOptions
from bs4 import BeautifulSoup

url = "https://www.sportmaster.ru/catalog/sale_/?f-availability=delivery_wo_exp,exp_delivery&f-cat=cat_aksessuary,cat_obuv,cat_odezhda&f-age_gender=age_gender_muzhchiny&f-brand=134913850299,134921380299,134922180299,134923980299,134943420299,134953520299,134957800299,134961460299,134963300299,44692390299,4526360002,4526390002,4526420002,4526530002,4526600002,45882690299,47785340299,4930740002,4930770002,4931390002,4931400002,4931840002,4932590002,60052010299"

options = ChromeOptions()
options.add_argument("--headless")  # Запуск Chrome в режиме без графического интерфейса

with Chrome(options=options) as driver:
    driver.get(url)
    html = driver.page_source

    soup = BeautifulSoup(html, "html.parser")
    product_links = soup.find_all("a", class_="sm-category-product-link")

    for link in product_links:
        product_url = link["href"]
        print(product_url)
