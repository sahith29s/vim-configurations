arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,0]

emptyarry = []
for i in arr:
    emptyarry.append(str(i))

emptyarry = "".join(emptyarry)
print(emptyarry)
print(emptyarry.count("1"))

for i in arrNum:
    print(f"{i} : {emptyarry.count(str(i))}")

