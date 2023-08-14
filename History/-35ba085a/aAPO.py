# import random
# import time

# #c1
# t1 = [5,6,7,8,9,0]
# t1.remove(7)
# print(t1)

# -------------------------------------------------------------
# c2 list
# a = input("enter first fruit name: ")
# b = input("enter second fruit name: ")
# c = input("enter third fruit name: ")
# d = input("enter fouth fruit name: ")
# e = input("enter fifth fruit name: ")
# f = input("enter sixth fruit name: ")
# g = input("enter seventh fruit name: ")

# man = [a, b, c, d, e, f, g]

# print(man)

# for i in range(25):
#     print(i)
# -------------------------------------------------------------
# c3    list
# a = int(input("enter 1st student's number: "))
# b = int(input("enter 2nd student's number: "))
# c = int(input("enter 3rd student's number: "))
# d = int(input("enter 4th student's number: "))
# e = int(input("enter 5th student's number: "))
# f = int(input("enter 6th student's number: "))

# man = [a, b , c , d , e , f]
# a[0] = 76778676876875

# man.sort()
# print(man)

# a = (3,2,1, 0, 0, 4, 0)
# m = (a.count(0))
# print(m)

# -------------------------------------------------------------
# c4
# a = int(input("enter 1st number: "))
# b = int(input("enter 2nd number: "))
# c = int(input("enter 3rd number: "))
# d = int(input("enter 4th number: "))

# man = (a + b + c + d)

# print(man)

# -------------------------------------------------------------
# c5 dictinary

# my_dict = {
#     "man": "alpha",
#            "nam": "beta",
#                 "a" : "kota",
#                     "bata" : 45, 1 : 64 , "beta" : "gama"
#                         }

# print(my_dict["bata"])
# print(my_dict.keys()) #writes all values
# print(list(my_dict.keys()))
# print(my_dict.values())
# print(my_dict.items()) #writes all keys with corresponding values
# updateDict = {
#     "bad" : "good"

# }
# my_dict.update(updateDict)
# print(my_dict)

# print(my_dict["bea"])  # if string is wrong gives an error
# print(my_dict.get("bea")) #never gives an error only gives none even if string is wrong

# -------------------------------------------------------------
# c 6 sets
# a = set() #it is empty set

# b = {} # is an empty dictionary

# c = {5, 6, 78, 2, 23}
# c.add(8578475)
# c.remove(2)
# print(type(c))
# print((c))

# -------------------------------------------------------------
# #c 7int(
# f1 = int(input("enter 1st number: "))
# f2 = int(input("enter 2st number: "))
# f3 = int(input("enter 3st number: "))
# f4 = int(input("enter 4st number: "))
# f5 = int(input("enter 5st number: "))
# f6 = int(input("enter 6st number: "))

# a = {f1, f2 , f3 , f4 , f5 , f6}
# print(a)

# -------------------------------------------------------------
# c 8

# s = {18, "18", 18.1}
# print(len(s)) # 18 == 18.0
# -------------------------------------------------------------
# c 9

# a = int(input("enter the number which you want to find factorial:\n "))
# man = 1

# for i in range(a,0,-1):
#     man = man*i

# print("the factorial of", a , "is" , man)

# -------------------------------------------------------------
# c 10
# a = int(input("enter 1st number: "))
# b = int(input("enter 2nd number: "))
# c = int(input("enter 3rd number: "))
# d = int(input("enter 4th number: "))

# if a > b:
#     e = a
# else:
#     e = b

# if c > d:
#     f = c
# else:
#     f = d

# if f > e:
#     print(f, "is the greatest")

# else:
#     print(e , "is the greatest")

# -------------------------------------------------------------
# c 11

# a = (input("type any sentence: "))
# man = (len(a))
# if man <= 10:
#     print("this sentence contains less characters")

# else:
#     print("sentence is perfect")
# -------------------------------------------------------------
# c 12

# names = ["shubam", "sahith" , "alpha", "beta"]

# a = input("enter any name\n")

# if a in names:
#     print("ye tho list me he")

# else:
#     print("ye naya word he ")

# -------------------------------------------------------------
# c 13
# print("""note: can only enter numbers
#       """)

# stu_1 = int(input("enter you marks\n"))

# if 100>=stu_1>=90:
#     print("""you got excellent grade""")

# if 90>=stu_1>=80:
#     print("you got A grade")

# if 80>=stu_1>=70:
#     print("you got B grade")

# if 60>=stu_1>=50:
#     print("you got D grade")

# if 70>=stu_1>=60:
#     print("you got C grade")

# elif stu_1 > 100:
#     print("asambav BC")

# elif stu_1 < 50:
#     Print("you are failed")

# else:
#     print("invalid syntax")

# -------------------------------------------------------------
# c 14 while loop for the first time

# i = 1
# while i <51:
#     print(i)
#     i += 1
# -------------------------------------------------------------
# c 15 while loop with list

# fruits = [ "apple", "banana", "grapes" , ]
# i = 0
# while i < len(fruits):
#     print(fruits[i])
#     i += 1

# print("len of fruit is " + str(len(fruits)))

# -------------------------------------------------------------
# c 16 c 15's loop with for
# fruits = [ "apple", "banana", "grapes" ]
# for i in fruits:
#     print(i)
# -------------------------------------------------------------
# # c 17 range function in for loop
# for i in range(1,8,2):
#     print(i)
# -------------------------------------------------------------
# c18 tables with for loop

# a = int(input("enter a number for which you want table "))
# for i in range(10,0,-1):
#     print(f"{a} x {i} = {i*a}")
#     # print(a , "x" , i , "=", i*a)
# -------------------------------------------------------------
# c 19 greeting using for loop

# l = ["alpha", "beta", "gama" , "delta" , "eplison" ]
# for i in l:
#     print("good moring" , i)
# -------------------------------------------------------------
# c 20
# a = int(input("enter the number for which you want to find factorial"))
# man = 1
# for i in range(a,0,-1):
#     man = man*i
# print(man)

# -------------------------------------------------------------
# c 21 find  the given number is prime or not

# a = int(input("enter a number which you want to check if it is prime or not "))
# prime = True
# for i in range(2,a):
#     if a%i == 0:
#         prime = False
#         break

# if a ==1:
#     print(1, "is neither prime nor composite")
# elif a == 0:
#     print(0, "is prime")
# elif a < 0:
#     print("pakka daru pee ke aya he ye   ")
# elif prime == True:
#     print(a , "is a prime")
# elif prime == False:
#     print(a , "is not a prime")
# -------------------------------------------------------------

# c 22 range with stars
# for i in range(1,56):
#     print("*" * i)
# -------------------------------------------------------------
# c 23 def function greetings
# def alpha(name= "stranger"):
#     return("good moring, " + name)
# print(alpha("an"))
# print(alpha())

# -------------------------------------------------------------
# c24
# a = int(input("enter a number "))
# for i in range(a,0,-1):
#     print("*" * i)

# -------------------------------------------------------------
# c25 def
# m = int(input("first number "))
# n = int(input("second number "))
# def name(x,y):
#     c = x + y
#     print(c)
# name(m,n)

# -------------------------------------------------------------
# c26

# print("Hope all fine brother ")

# print("1 for addition ")
# print("2 for subtraction ")
# print("3 for multiplication " )
# print("4 for division ")
# print("5 for division without decimal")

# a = int(input("enter any operation: "))

# if a == 1:
#     num1 = int(input("enter 1st number: "))
#     num2 = int(input("enter 2nd number: "))
#     print(f"addition of {num1} + {num2} is {num1 + num2}")
# elif a == 2:
#     num1 = int(input("enter 1st number:+"))
#     num2 = int(input("enter 2nd number: "))
#     print(f"subtraction of {num1} - {num2} is {num1 - num2}")
# elif a == 3:
#     num1 = int(input("enter 1st number: "))
#     num2 = int(input("enter 2nd number: "))
#     print(f"multiplication of {num1} * {num2} is {num1 * num2}")
# elif a == 4:
#     num1 = int(input("enter 1st number: "))
#     num2 = int(input("enter 2nd number: "))
#     print(f"division of {num1} / {num2} is {num1 / num2}")
# elif a == 5:
#     num1 = int(input("enter 1st number: "))
#     num2 = int(input("enter 2nd number: "))
#     print(num1 // num2)

# else:
#     print("invalid syntax")

# -------------------------------------------------------------
# c27 def function

# print("1 for addition ")
# print("2 for subtraction ")
# print("3 for multiplication " )
# print("4 for division ")
# print("5 for division without decimal")

# man = int(enter)
# x = int(input("first number"))
# y = int(input("second number"))

# def name(x, y):
#     a = (x + y)
#     b = (x - y)
#     c = (x * y)
#     d = (x /y)

# -------------------------------------------------------------

# rand = random.randint(1,3)
# if rand == 1:
#     comp = "s"
# elif rand == 2:
#     comp = "g"
# elif rand == 3:
#     comp = "w"

# you = input("choose snake(s) water(w) gun(g): ")

# def gamewin(comp, you):
#     if comp ==you:
#         return None
#     elif comp == "g":
#         if you == "w":
#             return True
#         elif you == "s":
#             return False

#     elif comp == "s":
#         if you == "w":
#             return False
#         elif you == "g":
#             return True

#     elif comp == "w":
#         if you == "g":
#             return False
#         elif you == "s":
#             return True

# print(f"computer chose {comp}")
# print(f"you chose {you}")
# a = gamewin(comp,you)
# if a == False:
#     print("you lose")
# elif a == True:
#     print("you win")
# elif a == None:
#     print("It's a tie")

# -------------------------------------------------------------
#bac+bca+acb+cab+cba =3194
# input()
# a = 0
# b = 0
# c = 0
# n = 0

# for x in range(a,10):
#     for y in range(b,10):
#         for z in range(c,10):
#             n = 100*y+10*x+z + 100*y+10*z+x + 100*x+10*z+y + 100*z+10*x+y + 100*z+10*y+x
#             #n = x + y +z
#             if n == 3194:

#                 print("found it: " + str(n))
#                 print(f"found at: {x},{y},{z}" )

# -------------------------------------------------------------
# for x in range(a,10):
#     for y in range(b,10):
#         for z in range(c,10):
#             n = 100*y+10*x+z + 100*y+10*z+x + 100*x+10*z+y + 100*z+10*x+y + 100*z+10*y+x
#             #n = x + y +z
#             if n == x:

#                 print("found it: " + str(n))
#                 print(f"found at: {x},{y},{z}" )

# desired_outcome = int(input())
# -------------------------------------------------------------

# for x in range(0,10):
#     for y in range(0,10):
#         for z in range(0,10):
#             n = 100*y+10*x+z + 100*y+10*z+x + 100*x+10*z+y + 100*z+10*x+y + 100*z+10*y+x
#             #n = x + y +z
#             if n == desired_outcome:
#                 print(f"found at: {x},{y},{z}" )

# -------------------------------------------------------------
# cond = []
# a = int(input("enter the first number from which you want to find prime numbers: "))
# b = int(input("enter the second number till which you want to find prime numbers : "))
# if a == 1 and a == 0:
#     a = 2
# if a < 0:
#     print("prime numbers ca cannot be negative")
# for i in range(a,b+1):
#     for j in range(2,b):
#         if i%j == 0 and i != j:
#             cond.append(False)
#         else:
#             cond.append(True)

#     if False not in cond:
#         print(i)
#     cond.clear()

# -------------------------------------------------------------

# a = int(input("enter a num for which you want prime or not: "))
# if a < 2:
#     print("ganga fuktha kya bhe")
# else:
#     for i in range(2,a):
#         if a%i == 0 and i !=a:
#             print("its not a prime ")
#             break
#     else:
#         print("Number is prime")

# ------------------------------------------------------------
# import math
# if a == 1:
#     b = float(input("Enter a number for which you want to find square root: "))
#     if b < 0:
#         b = abs(b)
#         m = math.sqrt(b)
#         print(str(m) + "i")
#         print("i for iota imaginary number (under root -1S)")
#     else:
#         m = math.sqrt(b)
#         print(m)

# elif a == 2:
#     b = float(input("Enter a number for which you want to find cube root: "))
#     if a < 0:
#         b = abs(b)
#         m = a**(1/3) * (-1)
#         print(m)
#     else:
#         m = b**(1/3)
#         print(m)
#   print("""enter 1 if you want to find square root
# Enter 2 if you want to find cube root
# """)
# a = int(input( "enter a operator: "))

# ------------------------------------------------------------

# import random
# a = ("r", "p", "s")
# rand = random.choice(a)

# a = int(input("enter a number for which you want to find factorial: "))
# if a < 0:
#    print("nasha krke aya kya be")
# if a == 0:
#    print("1")
# man = 1
# for i in range (a,0,-1):
#    man = i*man
#    print("your factorial = ", man)

# ------------------------------------------------------------
# for i in range(6):
#    print("*" * i)

# ------------------------------------------------------------
# class computer:
#     def alpha(self):
#         print("Sahith is good boy, and also ....")
#     def __init__(self):
#         print("sahith is pro at coding ")

# # comp1 = computer()
# computer().alpha()
# print(type(comp1))
# ------------------------------------------------------------
# print("""choose a operator
# 1 for addition
# 2 for subraction
# 3 for multiplication
# 4 for division """)
# operator = int(input("enter a operator: "))
# def add(a,b):
#     if operator == 1:
#        print(a+b)
#     if operator == 2:
#         print(a-b)
#     if operator == 3:
#         print(a*b)
#     if operator == 4:
#         print(a/b)
# a = int(input("enter a number: "))
# b = int(input("enter second number: "))
# add(a,b)

# ------------------------------------------------------------

# a = int(input("for how many number do you want to find average: "))
# total = 0
# for i in range(a):
#     kota = float(input("enter the number: "))
#     total += kota
#     avg = total/a

# print(avg)

# ------------------------------------------------------------
# sum of n natural numbers == code
# print("sum of n natural numbers ")
# n = int(input("enter n number for which you want to find summation: "))
# sum = (n*(n+1))/(2)
# print(sum)

# ------------------------------------------------------------

# if __name__ == '__main__':
#     n = int(input().strip())
#     if n % 2 != 0:
#         print("weird")
#     elif n%2==0 and 1<n<6:
#         print("Not Weird")
#     elif 5<n<21:
#         print("Weird")
#     elif 21<n and n%2 == 0:
#         print("Not Weird")

# ------------------------------------------------------------
# if __name__ == "__main__":
#     n = int(input())
#     for i in range(n+1):
#         print(f" square of {i} = {i*i}")

# ------------------------------------------------------------

# def is_leap(year):
#     if year%4 == 0:
#         if year%100 == 0:
#             if year%400 == 0:
#                 print("it's a leap year")
#             else:
#                 print("it's not a leap year")
#         else:
#             print("it's a leap year")
#     else:
#         print("it is not a leap year")
# year = int(input("enter the year which you want to find leap or not: "))
# is_leap(year)

# ------------------------------------------------------------

# import pyautogui as p
# import time
# time.sleep(5)
# for i in range(10):
#     p.typewrite("Aa yeah !")
#     p.press("enter")

# ------------------------------------------------------------
# number_mean = input("enter as many as numbers you want: ")
# list_mean = number_mean.split()
# elemts_of_in_mean = len(list_mean) # number of elements in a
# list_mean = [int(i) for i in list_mean]
# total_sum = sum(list_mean)
# mean = total_sum/elemts_of_in_mean
# print(f"the mean of number {list_mean} = {mean}")

# ------------------------------------------------------------

# fibonnaci number
# m = []
# a = int(input("enter a number: "))
# n1 = 0
# n2 = 1
# sum = 0
# for i in range(a):
#    m.append(sum)
#    n1 = n2
#    n2 = sum
#    sum = n1 + n2
# print(m[a-1])

# ----------------------------------------------------------

# a = (input("enter the numbers: "))
# a = a.split()
# a = [int(i) for i in a]
# b = set(a)
# a = list(b)
# a.sort()
# a.reverse()
# print(a[1])

# ----------------------------------------------------------

# a = input("enter numbers to find median: ")
# a = a.split()

# a = [int(i) for i in a]
# a.sort()
# m = int(len(a))
# if m%2 == 0:
#    m = int(m/2)
#    d = (a[m] + a[(m-1)])/2
#    print(f"the meadian of numbers = ", d)
# elif m % 2 != 0:
#    k = m//2
#    print(f"the median of numbers = ", a[k] )

# ----------------------------------------------------------

# def median(text):
#    text = text.split()
#    text.sort()
#    text = [int(i) for i in text]
#    m = int(len(text))

#    if m % 2 == 0:
#       m = int(m/2)
#       b = (text[m] + text[m-1])/(2)
#       print(b)
#    if m%2 != 0:
#       m = m//2
#       print(text[m])

# a = input("enter the numbers: ")
# median(a)

# ----------------------------------------------------------

# a = input("enter the number for mode: ")
# a = a.split()
# a.sort()
# text = [int(i) for i in a]
# m = set()
# hc = text.count(text[0])
# def mode(text):
#    for i in range(len(text)):
#       temp = text.count(i)
#       if temp > hc:
#          hc = temp
# print(hc)

# for i in range(len(text)):
#    if text.count(text) == hc:

# ----------------------------------------------------------

# arithmetic progression

# a = int(input("enter 1st term: "))
# d = int(input("enter common difference: "))
# b = int(input("enter the nth term you want: "))
# f = (a + ((b-1)*d))
# print(f"the {b}th term is {f}")

# ----------------------------------------------------------

# a = int(input("enter first number: "))
# b = int(input("enter second number: "))

# if a > b:
#    mn = b
# else:
#    mn = a
# for i in range(1,mn + 1):
#    if a % i == 0 and b%i == 0:
#       x = i

# print(x)

# ----------------------------------------------------------

# a = int(input("enter first number: "))
# b = int(input("enter second number: "))
# try:
#    print(a + b)
# except:
#    pass

# ----------------------------------------------------------

# import random

# list = ["r", "p", "s"]
# comp = random.choice(list)

# def rps(man,comp):
#    if man == comp:
#       print("draw")
#    elif man == "s":
#       if comp == "r":
#          print("computer won")
#       elif comp == "p":
#          print("you won")

#    elif man == "p":
#       if comp == "s":
#          print("computer won")
#       elif comp == "r":
#          print("you won")

#    elif man == "r":
#       if comp == "p":
#          print("computer won")
#       elif comp == "s":
#          print("you won")

#    else:
#       print("try again")

# while True:
#    man = input("enter rock paper scisor ")
#    print(f"computer chose {comp}")
#    rps(man,comp)

# ----------------------------------------------------------

# a = int(input("enter a number: "))
# m = []
# f= []
# for i in range(1,a+1):
#    for j in range(i+1):
#       # if j%i == 0 and j != i:
#       #    f.append(j)
#       if j%i != 0 and j != i:
#          m.append(j)
# m = set(m)
# m = list(m)
# for k in m:
#    print(k)

# ----------------------------------------------------------

# a = int(input("enter a number: "))
# for i in range(1,a+1):
#    man = 0
#    for j in range(2,i):# import random
# import time



# #c1
# t1 = [5,6,7,8,9,0]
# t1.remove(7)
# print(t1)


# -------------------------------------------------------------
# c2 list
# a = input("enter first fruit name: ")
# b = input("enter second fruit name: ")
# c = input("enter third fruit name: ")
# d = input("enter fouth fruit name: ")
# e = input("enter fifth fruit name: ")
# f = input("enter sixth fruit name: ")
# g = input("enter seventh fruit name: ")

# man = [a, b, c, d, e, f, g]

# print(man)
 
# for i in range(25):
#     print(i)
 # -------------------------------------------------------------   
# c3    list
# a = int(input("enter 1st student's number: "))
# b = int(input("enter 2nd student's number: "))
# c = int(input("enter 3rd student's number: "))
# d = int(input("enter 4th student's number: "))
# e = int(input("enter 5th student's number: "))
# f = int(input("enter 6th student's number: "))

# man = [a, b , c , d , e , f]
# a[0] = 76778676876875

# man.sort()
# print(man)


# a = (3,2,1, 0, 0, 4, 0)
# m = (a.count(0))
# print(m)

# -------------------------------------------------------------
# c4
# a = int(input("enter 1st number: "))
# b = int(input("enter 2nd number: "))
# c = int(input("enter 3rd number: "))
# d = int(input("enter 4th number: "))

# man = (a + b + c + d)

# print(man)





# import random
# import time

# #c1
# t1 = [5,6,7,8,9,0]
# t1.remove(7)
# print(t1)

# -------------------------------------------------------------
# c2 list
# a = input("enter first fruit name: ")
# b = input("enter second fruit name: ")
# c = input("enter third fruit name: ")
# d = input("enter fouth fruit name: ")
# e = input("enter fifth fruit name: ")
# f = input("enter sixth fruit name: ")
# g = input("enter seventh fruit name: ")

# man = [a, b, c, d, e, f, g]

# print(man)

# for i in range(25):
#     print(i)
# -------------------------------------------------------------
# c3    list
# a = int(input("enter 1st student's number: "))
# b = int(input("enter 2nd student's number: "))
# c = int(input("enter 3rd student's number: "))
# d = int(input("enter 4th student's number: "))
# e = int(input("enter 5th student's number: "))
# f = int(input("enter 6th student's number: "))

# man = [a, b , c , d , e , f]
# a[0] = 76778676876875

# man.sort()
# print(man)

# a = (3,2,1, 0, 0, 4, 0)
# m = (a.count(0))
# print(m)

# -------------------------------------------------------------
# c4
# a = int(input("enter 1st number: "))
# b = int(input("enter 2nd number: "))
# c = int(input("enter 3rd number: "))
# d = int(input("enter 4th number: "))

# man = (a + b + c + d)

# print(man)

# -------------------------------------------------------------

#       if i%j == 0:
#          man = 1
#          break
#    if man == 0:
#       print(i)

# ----------------------------------------------------------

# a = int(input("nth fibonnaci number: "))
# n = 0
# b = 1
# sum = 0
# man = []
# for i in range(a):
#    man.append(sum)
#    n = b
#    b = sum
#    sum = n + b
# print(man[a-1])

# ----------------------------------------------------------

# man = input("enter a sentence: ")
# ack = list(set(man))
# ack.sort()
# for i in ack:
#    print(f"{i} : {man.count(i)}")

# ----------------------------------------------------------
# Enter your code here. Read input from STDIN. Print output to STDOUT
# A = input("enter numbers: ")
# B = input("enter numbers; ")
# array = input("enter numbers: ")
# A = A.split()
# B = B.split()
# A,B = list(set(A)), list(set(B))
# A = [int(i) for i in A]
# B = [int(i) for i in B]
# array = [int(i) for i in array]
# happiness = 0
# for i in array:
#     for m in A:
#         for k in B:
#             if i == m:
#                 happiness += 1
#             elif i == k:
#                 happiness -= 1

# print(happiness)

# ----------------------------------------------------------

# string = input("Enter a sentence: ")
# man = list(set(list(string)))
# man.sort()
# cat = []
# for i in man:
#    cat.append(f"{i} : {string.count(i)} ")
# print(cat)

# ----------------------------------------------------------

# first = 0
# second = 1
# sum = 0
# a = int(input("enter the fibonnaci number you want to fetch: "))
# for i in range(a):
#    print(sum)
#    first = second
#    second = sum
#    sum = first + second

# ----------------------------------------------------------

# for i in range(1,11):
#    print(i, end = " null ")

# ----------------------------------------------------------

# import pyautogui as p
# import time
# time.sleep(5)

# for i in range(20):
#    p.typewrite("aisa dusra baar karega tho gand mrr lunga!")
#    p.press("enter")

# ----------------------------------------------------------
 
# def is_leap(year):
    
#     if year % 4== 0:
#         if year % 100 == 0:
#             if year % 400 == 0: 
#                 man = "True"  
#             else: 
#                 man = "False"
#         else:
#             man = "True"
#     else:
#         man = "False"
    

#     print(man)
    


# year = int(input("enter the year: "))
# is_leap(year)
# ----------------------------------------------------------


#!/bin/python3

# import math
# import os
# import random
# import re
# import sys

# def sahith(n):
#     if n %2 != 0:
#         man = "weird" 
#     elif n % 2 == 0 and 1<n<6:
#         man = "Not Weird"
#     elif n % 2 == 0 and 5<n<21:
#         man = "Weird"
#     elif n % 2 ==0 and n>20:
#         man = "Not Weird"
#     return man

# if __name__ == '__main__':
#     n = int(input().strip())
#     print(sahith(n))


# import itertools

# A = input("input").split
# B = input("input").split
# print(A)

# # print((itertools.product(A, B)))

# ----------------------------------------------------------

# import random
# import string
# input = input("enter the sentence you want to convert into secret code: ")

# input = list(input)
# first = input[0]
# input.pop(0)
# input.append(first)
# input.insert(0, random.choice(string.ascii_letters))
# input.insert(1, random.choice(string.ascii_letters))
# input.insert(2, random.choice(string.ascii_letters))
# input.append(random.choice(string.ascii_letters))
# input.append(random.choice(string.ascii_letters))
# input.append(random.choice(string.ascii_letters))
# input = "".join(input)
# print(input)



# ----------------------------------------------------------

# num = int(input("enter a number: "))
# if(num < 5):
#     raise ValueError(chutitya)


# ----------------------------------------------------------


# a = input()

# if a != "quit":
#     raise ValueError("You iz bherry dangerous")


# a = input ("Enter any number value between 5 and 9 or enter quit \n>>")
# try: 
#    if (int(a)<5 and int(a)>9):
#            raise ValueError("The number is either lesser than 5 or bigger than 9")
# except:
#         if a!= "quit":
                 # raise ValueError ("You entered a string other than quit")
# ----------------------------------------------------------
# from datetime import datetime

# now = datetime.now()

# current_time = now.strftime("%H:%M:%S")
# current_time = current_time.split(":")[0]
# if(7<current_time < 13):
#   print("Good morning")

# print("Hello world.")



# a = input("enter the number between 5 and 9: ")

# if a == "quit":
#     pass
# elif a != "quit":    
#     try:
#         a = int(a)
#         if a< 5 or a>9:
#             raise ValueError("The value should be between 5 and 9")
        
#     except Exception as e:
#         print(e)          





# a = {"value" : 23}
# b = a 
# a["value"] = 234

# print(b)




# for i in range(2009111):
#     print(i)

# a = 550*8 + 650*14 + 750*35 + 850*21 +50*17 + 1050*5

# print(a/100)


# class employee:
#     def __init__(self, name , id):
#         self.name = name
#         self.id = id
        
#     def showDetails(self):
#         return (f"the name is {self.name} and id is {self.id}")
        
# class programmer(employee):
#     def programmer():
#         return "love programmeing
# e1 = programmer("Sahith", 34)
# print(e1.showDetails())

# class library:
#     def books(self):
#         return ["Sahith"]
# sai = library()
# print(sai.books())



# inputNumber = int(input("Enter the number: "))
# for i in range(0, inputNumber+1):
#     print(i)

# inputString = input("Enter your name : ")

# def add(a, b):
#     return a + b

# x = lambda a , b : a + b


# print(x(8, 10))


# x = lambda a , b : a + b
# print(x(5 , 10))

# array = [1, 2, 3, 4, 5, 6, 7,8, 9 , 10]
# array2 = list(filter(lambda i : i < 5 , array))
# print(array2)

# """
# this is 
# multiline comment
# lksdjf
# jlksdjf
# """

# def add(number1 , number2):
#     return number1 

# add(10 , 20)

# print("")

# def add(number1, number2):
#     return  number1 + number2

# print(f"The answer is " + str(add(10 , 5)))



# array = [1, 2, 3, 4, 10, 234]

# for index , item in enumerate(array):
#     print(f"{index} {{: {item} ")

# list = []

# sahith = 0
# while(sahith < 10):
#     no =input("Enter your number to save in the list: " )
#     print("enter another number to register or enter 'q' to quit!")
#     if no == 'q':
#         sahith = 40
#     else:
#         list.append(no)
    


# print(f"\nThe following number have been added:")
# for x in list:
#     print(f"{x}")

# dict = {
#     "name" : "sahtith",
#     "roll" :  23,
#     "inSchool" : False
# }

# sahith = {}

# def index(**genMan):
#     genMan["first name"] = "sahith"
#     return genMan

# print(index(**sahith))




array = []
for i in range(1 , 100):
    squareOfI = str(i **2)
    squareOfILen = len(squareOfI)
    cubeOfI = str(i ** 3)
    cubeOfILen= len(cubeOfI)

    if(cubeOfILen + squareOfILen  == 10):
        array = [int(x) for x in squareOfI]
        for i in cubeOfI:
            array.append(int(i))

print(array)