def get_sale(sale):
    return int(sale.text.strip().replace('–', '').replace('%', ''))