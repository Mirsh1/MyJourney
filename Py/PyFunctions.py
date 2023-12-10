"""Activity 1 - Python Functions
Write 2 Python functions to: 

show the list content. 
find the max value in the list.
Sample List : [10, 2, 3, 4, 7]

Expected Output :

The content of the list is: [10, 2, 3, 4, 7]

The max value in the list: 10"""

def my_function(myList):
    print("The content of the list is: ", myList )
    print("The max value in the list: ", max.(myList) )


myList = [10, 2, 3, 4, 7]

my_function()


"""Activity 2 - Python Functions
Write a Python function to calculate the factorial of a number (a non-negative integer n ). 
The function accepts the number as an argument.

Note:
The factorial of a number is the product of all the integers from 1 to that number and it is represented by n!

For example, the factorial of 6! is 1*2*3*4*5*6 = 720. 

The factorial is not defined for negative numbers, and the factorial of zero is one, 0! = 1."""


x = int(input("Enter a number: "))

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

result = factorial(x)
print(f"The factorial of {x} is: {result}")


"""Activity 3 - Python Functions
Write a Python function that takes a number as a parameter and check the number is prime or not. 

Note: 

Prime numbers are the numbers that are only divisible by themselves and 1, in other words, if we try to divide them by another number, the result is not a whole number. 

So, if we divide the number by anything other than 1 or itself, we will get a remainder that is not zero. 

Negative numbers can not be prime."""


def is_prime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

num = int(input("Pick a number: "))
if is_prime(num):
    print(f"{num} is prime")
else:
    print(f"{num} is not prime")