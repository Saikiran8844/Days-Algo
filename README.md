#

A Pen created on CodePen.io. Original URL: [https://codepen.io/saikiran8844/pen/ZEoVwpm](https://codepen.io/saikiran8844/pen/ZEoVwpm).

Given a dictionary D where key is of form YYYY-MM-DD and its corresponding value is an integer, returns a new dictionary D such that:

  it's key (type: String) is a Day: [Mon, Tue, Wed, Thu, fri, Sat, Sun]
  corresponding value (type INT) is sum of values on that day

 

Also, if Input Dictionary don't have particular day then Output Dictionary will have value
of that day as the mean of Prev and Next Day

Constrains:
 
 - Input Dictionary will have at least Mon & Sun
 - Input Dictionary key is string within thc range [1970-01-01..2100-01-0L]
 - Ard its corresponding value is al. integer within the range [-1,000,000..1,000,000]


Input || Output:
case1:
     {'2020-01-01':4,'2020-01-02':4,'2020-01-03':6,'2020-01-04':8,'2020-01-05':2,'2020-01-06':-6,'2020-01-07':2,'2020-01-08':-2}

     {'Mon': 6, 'Tue': 2, 'Wed': 2, 'Thu' 4, 'Fri': 6, 'Sat': 8, 'Sun': 2}

case2:
     {'2020-01-01':6,'2020-01-04':12,'2020-01-05':14,'2020-01-06':2,'2020-01-07':4}

     {'Mon': 2, 'Tue': 4, 'Wed': 6, 'Thu': 8, 'Fri': 10, 'Sat': 12, 'Sun':14}
