# arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
# arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,0]

# emptyarry = []
# for i in arr:
#     emptyarry.append(str(i))

# emptyarry = "".join(emptyarry)
# print(emptyarry)
# print(emptyarry.count("1"))

# for i in arrNum:
#     print(f"{i} : {emptyarry.count(str(i))}")
# abusiveWords = ["chuitye" , "bcOrWot" , "mc he thu"  , "lc" , "kc"]

import pyautogui as py
import time as t

t.sleep(10)
for i in range(10):
    py.typewrite("Erripuka");
    py.press("enter")

    # if(k > len(abusiveWords) -1 ) : k = 0
    # word = abusiveWords[k]
    # k =  k +1

# for i in range(1 , 10):
#     for j in range(10):
#         for k in range(10):
#             for l in range(10):
#                 first = ((i*1000) + (j*100) + (k*10) + (l)) * 4
#                 second = (l*1000) + (k*100) + (j*10) + (i)
#                 if(first == second ):
#                     print(i , j , k , l)
#                     # break

# import pyautogui as py 
# import time as t
#
# t.sleep(3)
#
# for i in range(10):
#     print("sahith")


# s = "this is me inside the vim"
# l = set(s)
# dict = {}

# k = 0;
# max = 0
# for i in l:
#     if(i != " "):
#         dict[i] = s.count(i)

#     # if(dict[i] > max):
#     #     max = dict[i]
#     #     name = i
#     print(dict[i])

# # for i in dict:
    
# # print(dict , name)
# print(max, name)


# import turtle
# import time
# time.sleep(5)
# screen = turtle.Screen()
# pen = turtle.Turtle()
# pen.speed(1)
# for _ in range(4):
#     pen.forward(100)  # Move the turtle forward by 100 units
#     pen.left(90)      # Turn the turtle left by 90 degrees
# screen.exitonclick()



# arr  = [ "a","b" , " ","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ]
# hello = "hello world"
# num = 0;
# print(hello[0])

# for i in arr:
#     if


# number;
# this is string "1234234owieurowieurwoeiru"

# string1 = input("Enter a number or quit to quit : ")
# while(string1 != "quit"):
#     print()

# inputNum = input("Enter a number: ")
# try:
#     inputNum = int(inputNum)
#     print("Yes it is int")
#     isCheck = False
# except:
#     print("It is not a number")
#     isCheck = True

isCheck = True
while(isCheck):
    inputNum = input("Enter a number: ")
    try:
        inputNum = int(inputNum)
        print("Yes it is int \n")
        isCheck = False
    except :
        print("It is not a number \n")
        isCheck = True