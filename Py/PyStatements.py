"""
Write a Python program that accepts three numbers and prints "All numbers are equal" 
if all three numbers are equal, "All numbers are different" 
if all three numbers are different and "Neither all are equal or different" otherwise.

Test Data:

Input first number: 2
Input second number: 3
Input third number: 4

Expected Output :

All numbers are different.
"""

x = int(input("Input the first number:"))
y = int(input("Input the Second number:"))
z = int(input("Input the Third number:"))

if x == y and y == z and x == z:
    print("All numbers are equal")
elif x != y and y != z and x != z:
    print("All numbers are different")
else:
    print("Neither all are equal nor different")


"""
Write a Python program that accepts three numbers from the user and prints "Increasing order" 
if the numbers are in the increasing order, "Decreasing order" 
if the numbers are in the decreasing order, and "Neither increasing or decreasing order" otherwise.

Test Data:

Input first number: 1524
Input second number: 2345
Input third number: 3321

Expected Output :
Increasing order.
"""

x = int(input("Input the first number:"))
y = int(input("Input the Second number:"))
z = int(input("Input the Third number:"))

if x > y and y > z:
    print("Increasing order")
elif x < y and y < z:
    print("Decreasing order")
else:
    print("Neither increasing or decreasing order")
