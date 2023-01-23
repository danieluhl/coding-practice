username = input('enter username: ')
password = input('enter password: ')
pw_len = len(password)
stars = '*' * pw_len

print(f'{username}, your password {stars} is {pw_len} letters long')
