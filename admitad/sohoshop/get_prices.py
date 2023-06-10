def get_prices(price):
    return int(price.text.strip().replace('(', '').replace(')', '').replace(' ', '').replace('₽', ''))