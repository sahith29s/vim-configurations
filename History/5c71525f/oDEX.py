import matplotlib as plt
import numpy as np 
from sklearn import datasets , linear_model

diabetes = datasets.load_diabetes()
# dict_keys(['data', 'target', 'frame', 'DESCR', 'feature_names', 'data_filename', 'target_filename', 'data_module'])

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10 , 11, 12, 13, 14, 15])
# print(arr[ : 3])
print(arr)
diabetes_X = diabetes.data[:, np.newaxis, 2]



diabetes_X_train = diabetes_X[ : - 30]

diabetes_X_test = diabetes_X[-30 : ]