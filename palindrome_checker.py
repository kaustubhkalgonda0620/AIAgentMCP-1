def is_palindrome(text):
    cleaned = ''.join(ch.lower() for ch in text if ch.isalnum())
    return cleaned == cleaned[::-1]

user_input = input("Enter a string: ")
print(is_palindrome(user_input))
