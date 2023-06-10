import re
from bs4 import BeautifulSoup

brands = ["ADIDAS&PARLEY","ALEXANDER MCQUEEN","ARMANI","ARMANI  COLLEZIONI","BALDININI","BALMAIN","BARRACUDA","BIKKEMBERGS",
          "BILLIONAIRE","BOGNER","BOGNER FIRE + ICE","BOSS","BRIONI","BRUNELLO CUCINELLI","CALVIN KLEIN","CORNELIANI",
          "DEREK ROSE","DIRK BIKKEMBERGS","DOLCE & GABBANA","DSQUARED2","EMPORIO ARMANI","FALKE","FRANKIE MORELLO",
          "FURLA","GIANFRANCO FERRE","GIORGIO ARMANI","HUGO","ICEBERG","JOHN RICHMOND","JUST CAVALLI","KARL LAGERFELD","KENZO",
          "MICHAEL MICHAEL KORS","MONCLER","MOSCHINO","OFF-WHITE","PALM ANGELS","PAUL & SHARK","PHILIPP PLEIN","PLEIN SPORT",
          "POLO RALPH LAUREN","PREMIATA","RALPH LAUREN","ROBERTO CAVALLI","TOM FORD","VALENTINO","VERSACE","VIADESTE",
          "Y-3","YOHJI YAMAMOTO","ALEXANDER TEREKHOV","ALEXANDER WANG","BALENCIAGA","DKNY","JIMMY CHOO",
          "MCQ","MICHAEL KORS","P.A.R.O.S.H.","PAROSH","PRADA","RED VALENTINO","REEBOK VB","VASSA&CO","VASSA&CO PIN CODE"
          "STELLA MCCARTNEY","STELLA MCCARTNEY SPORT","TEREKHOV","TEREKHOV GIRL","UGG AUSTRALIA", "VERSACE JEANS COUTURE","VICTORIA BECKHAM"]

def get_product_links_on_page(html, page):
    try:
        soup = BeautifulSoup(html, 'lxml')
        links_arr = []
        product_blocks = soup.find_all('div', class_="catalog__products-item")
        for product in product_blocks:
            product_brand = product.find('div', class_="catalog__products-item-brand").text
            if product_brand in brands:
                product_link = product.find('a', class_=re.compile('catalog__products-item-link'))
                links_arr.append('https://vipavenue.ru' + product_link.get('href'))
        return links_arr
    except:
        print(f'Ссылки на {page} странице НЕ собраны!')
        return