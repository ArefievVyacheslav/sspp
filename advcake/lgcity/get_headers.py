import fake_useragent


def get_headers():
    user = fake_useragent.UserAgent().random
    return {'user-agent': user.strip()}