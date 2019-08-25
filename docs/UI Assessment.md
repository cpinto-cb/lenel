Given following data sets, create a list detail view show in Image below.

Use any JavaScript framework of your choice.

Main goal of the page would be to show details on right side panel upon selecting a row from the list on left side.

Changes on the right side panel should be reflected in grid.

Spotlight search at top, will filter rows in grid, a substring in either Access Level Name, Reader Type, or Reader Name is a match.

**UI Mockup**
![alt text](https://github.com/cpinto-cb/lenel/blob/master/docs/Ui%20Mockup.png "UI Mockup")
 
**Datasets**

accessLevels json

===========================  
```[{  
   "id": 1,  
   "name": "Morning 9:00 - 10:00",  
   "readerId": 10,  
   "Description": "Morning Front door Access"  
 },  
 
   {
     "id": 2,
     "name": "Morning 10:00 - 11:00",
     "readerId": 11,
     "Description": ""
   },
   {
     "id": 3,
     "name": "Morning 11:00 - 12:00",
     "readerId": 12,
     "Description": ""
   },
   {
     "id": 4,
     "name": "Evening 3:00 - 4:00",
     "readerId": 13,
     "Description": ""
   },
   {
     "id": 5,
     "name": "Evening5:00 - 6:00",
     "readerId": 14,
     "Description": ""
   },
   {
     "id": 6,
     "name": "All Day Elevator",
     "readerId": 15,
     "Description": ""
   },
   {
     "id": 7,
     "name": "All Day Back Door",
     "readerId": 16,
     "Description": ""
   },
   {
     "id": 8,
     "name": "All Day Supply Door",
     "readerId": 17,
     "Description": ""
   }
 ]
```
===========================  

 &quot;readers&quot;  

===========================  

```[{
   "id": 10,
   "typeId": 1,
   "name": "Reader F1"
 },
   {
     "id": 11,
     "typeId": 1,
     "name": "Reader F2"
   },
   {
     "id": 12,
     "typeId": 1,
     "name": "Reader F3"
   },
   {
     "id": 13,
     "typeId": 1,
     "name": "Reader F4"
   },
   {
     "id": 14,
     "typeId": 1,
     "name": "Reader F5"
   },
   {
     "id": 15,
     "typeId": 2,
     "name": "Reader E"
   },
   {
     "id": 16,
     "typeId": 3,
     "name": "Reader B"
   },
   {
     "id": 17,
     "typeId": 4,
     "name": "Reader S"
   }
 ]
```

===========================  

 &quot;readerTypes&quot;  

===========================  
```[{
   "id": 1,
   "name": "Front Door"
 },
   {
     "id": 2,
     "name": "Elevator Door"
   },
   {
     "id": 3,
     "name": "Back Door"
   },
   {
     "id": 4,
     "name": "Supply Door"
   }
 ]
```

===========================