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

# import pyautogui as py
# import time as t

# abusiveWords = ["chuitye" , "bcOrWot" , "mc he thu"  , "lc" , "kc" ]
# t.sleep(3)
# k = 0
# for i in range(10):
#     if(k > len(abusiveWords) -1 ) : k = 0
#     word = abusiveWords[k]
#     py.typewrite(word)
#     py.press("enter")
#     k =  k +1

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


s = "this is me inside the vim"
l = set(s)
dict = {}

for i in l:
    if(i != " "):
        dict[i] = s.count(i)

k = 0;
max = 0
for i in dict:
    if(dict[i] > max):
        max = dict[i]
        name = i
    
# print(dict , name)
print(max, name)