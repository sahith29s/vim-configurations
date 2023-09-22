import pandas as pd
df = pd.read_csv("man.csv" , index_col=False)

print(df.to_string())