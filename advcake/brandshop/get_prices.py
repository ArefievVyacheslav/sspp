def get_prices(price):
    return int(price.text.replace(' ', '').replace('₽', '').strip())
