import pandas as pd
df = pd.read_json("man.csv")

print(df.to_string())