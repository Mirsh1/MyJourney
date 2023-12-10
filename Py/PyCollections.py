"""
Write a Python program to sum values of a list.

Test Data:

Sample List:

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Expected Output:

The sum is 55."""

myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print("The sum is: ", sum(myList))

"""
Write a Python program to calculate the average value of a list elements.

Test Data:

Sample List:

[20, 30, 25, 35, -16, 60, -100]

Expected Output:

Average value of the list elements is : 7.7.
"""


myList = [20, 30, 25, 35, -16, 60, -100]
x = sum(myList)/len(myList)

print("Average value of the list elements is ", sum(myList))


"""
Write a Python program to find the maximum and minimum value of a list.

Test Data:

Sample List:

[25, 14, 56, 15, 36, 56, 77, 18, 29, 49]

Expected Output:

Original List: [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]

Maximum value for the above list = 77

Minimum value for the above list = 14

Important:
Don't forget to comment your code.


"""

list3 = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]


print(" Original List: ", list3)

print ("Maximum value for the above list = ", max(list3) )

print ("Minimum value for the above list = ", min(list3) )
