def get_proxies(idx=False):
    with open('proxies.txt') as file:
        if idx: return ''.join(file.readlines()).strip().split('\n')[idx]
        else: return ''.join(file.readlines()).strip().split('\n')