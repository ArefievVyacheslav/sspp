import math

def get_time(second_all):
    hours = math.floor(second_all / 3600)
    minutes = math.floor((second_all - hours * 3600) / 60)
    if minutes < 0: minutes = 0
    seconds = math.floor(second_all - hours * 3600 - minutes * 60)
    time = ''
    if hours > 0: time = time + f'{hours} час. '
    if minutes > 0: time = time + f'{minutes} мин. '
    if seconds > 0: time = time + f'{seconds} сек.'
    return time