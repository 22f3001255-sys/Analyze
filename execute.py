import pandas as pd

# Read CSV file (converted from data.xlsx)
data = pd.read_csv('data.csv')

# Perform a simple aggregation - count rows for example
result = {
    'row_count': len(data),
    'columns': list(data.columns),
}

# Save result as JSON
import json
with open('result.json', 'w', encoding='utf-8') as f:
    json.dump(result, f)