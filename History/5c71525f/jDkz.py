import matplotlib as plt
import numpy as np 
from sklearn import datasets , linear_model

diabetes = datasets.load_diabetes()
# dict_keys(['data', 'target', 'frame', 'DESCR', 'feature_names', 'data_filename', 'target_filename', 'data_module'])

diabetes_X = diabetes.data[:, np.newaxis, 2]


diabetes_X_train = diabetes_X[ : - 30]

diabetes_X_test = diabetes_X[-30:]