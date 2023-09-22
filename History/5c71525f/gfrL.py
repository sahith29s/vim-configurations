import matplotlib.pyplot as plt
import numpy as np 
from sklearn import datasets , linear_model
from sklearn.metrics import mean_squared_error

diabetes = datasets.load_diabetes()
# dict_keys(['data', 'target', 'frame', 'DESCR', 'feature_names', 'data_filename', 'target_filename', 'data_module'])

# arr = np.array([1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10 , 11, 12, 13, 14, 15])
diabetes_X = diabetes.data

diabetes_X_train = diabetes_X[ : - 30]
diabetes_X_test = diabetes_X[-30 : ]


diabetes_Y_train = diabetes.target[ : -30]
diabetes_Y_test = diabetes.target[ -30 : ]

model = linear_model.LinearRegression()

model.fit(diabetes_X_train , diabetes_Y_train)

diabetes_Y_predict = model.predict(diabetes_X_test)
print(mean_squared_error(diabetes_Y_test , diabetes_Y_predict))

# print(model.coef_)
# plt.scatter(diabetes_X_test , diabetes_Y_predict)

# plt.show()

