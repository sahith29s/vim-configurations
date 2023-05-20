quadraticEquation = input("Enter the coefficients of the quadratic Equation: ")

print("""eg : 2 , 5, 1

eg2 : 2, 0 , 4

eg3 : 7, 4, 0""")

quadraticEquationList = quadraticEquation.split(",")

firstCoefficient = int(quadraticEquationList[0])
secondCoefficient = int(quadraticEquationList[1])
thridCoefficient = int(quadraticEquationList[2])

discriminant = (secondCoefficient ** 2 - (4 * firstCoefficient * thridCoefficient) )
print(discriminant)

if(discriminant < 0 ):
    print("no real roots")
else:
    