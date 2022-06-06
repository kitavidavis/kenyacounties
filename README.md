# kenyacounties
Kenya counties and sub-counties as json objects

# Installation
```
npm install --save kenyacounties
```

# Usage
```
import KenyaCounties from 'kenyacounties'
```

# Getting full kenya counties data
```
let counties = KenyaCounties()
console.log(counties)
```

# Get a county's metadata using county's code
Note: the code should be an intenger ranging from 1 - 47
```
let Nairobi = KenyaCounties.getCountyByCode(47);
```

# Get a county's sub-counties based on code or county name
Note: the code should be an intenger ranging from 1 - 47, while the county name should be a string irregardless of cases.
```
// Name = Nairobi, code = 47
let obj = KenyaCounties.getSubCountiesByCountyCode(47) // returns all the subcounties within Nairobi
let obj = KenyaCounties.getSubCountiesByCountyName("Nairobi") // returns all the subcounties within Nairobi
```
