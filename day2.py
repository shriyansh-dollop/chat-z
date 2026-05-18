# arr = [2,4,5,6]
# print(min(arr))
# print(max(arr))


# x = float(input("enter any number: "))
# print(x)



# x = int(input("Enter any number:"))

# print('entered number = ' ,x)

# if x % 2 == 0 :
#     print(f"{x}yes")
# else :
#     print(f"{x}no")


def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Error! Division by zero."
    return x / y

print("--- Simple Python Calculator ---")
print("Select operation:")
print("1. Add\n2. Subtract\n3. Multiply\n4. Divide")

while True:
    choice = input("Enter choice (1/2/3/4) or 'q' to quit: ")

    if choice.lower() == 'q':
        break

    if choice in ('1', '2', '3', '4'):
        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))
        except ValueError:
            print("Invalid input. Please enter numeric values.")
            continue

        if choice == '1':
            print(f"{num1} + {num2} = {add(num1, num2)}")
        elif choice == '2':
            print(f"{num1} - {num2} = {subtract(num1, num2)}")
        elif choice == '3':
            print(f"{num1} * {num2} = {multiply(num1, num2)}")
        elif choice == '4':
            print(f"{num1} / {num2} = {divide(num1, num2)}")
    else:
        print("Invalid Choice")