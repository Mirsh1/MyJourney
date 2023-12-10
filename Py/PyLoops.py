"""
Activity 1 - Python Loops
Write a Python program to get the Fibonacci series between 0 to 50. 

Note : 

The Fibonacci Sequence is the series of numbers : 0, 1, 1, 2, 3, 5, 8, 13, 21, .... 

Every next number is found by adding up the two numbers before it.
"""


limit = 50
num1 = 0
num2 = 1

while num1 <= limit:
    print(num1, end=" ")
    
    num1 = num2 
    num2 = num1 + num2

"""
Write a Python program to create the multiplication table (from 1 to 10) of a number.

Expected Output:

Input a number: 6

6 x 1 = 6 

6 x 2 = 12 

6 x 3 = 18 

6 x 4 = 24 

6 x 5 = 30 

6 x 6 = 36 

6 x 7 = 42 

6 x 8 = 48 

6 x 9 = 54 

6 x 10 = 60
"""

x = int(input("input a number to multiply: "))
i = 1
while i < 11:
    print ( x , " x ", i, "=", x * i )
    i += 1
