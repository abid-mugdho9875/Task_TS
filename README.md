# Task_TS

## One-to-One Relationship: User and Profile

### User One

- ID: 'clqcl6c420000dtu4dc7kk4m5'
- Created At: 2023-12-19T16:55:48.411Z
- Updated At: 2023-12-19T16:55:48.434Z
- Profile: { name: 'abid', id: 'clqcl6c4m0002dtu4rmxuka2l' }

### User Two

- ID: 'clqcl6c510003dtu450vh20ju'
- Created At: 2023-12-19T16:55:48.460Z
- Updated At: 2023-12-19T16:55:48.470Z
- Profile: { id: 'clqcl6c510004dtu4wlewhdya', name: 'hasan' }

## One-to-Many Relationship: User and Order

### Created Order

- ID: 'clqclan7i000mkfsyc075kkwn'
- User ID: 'clqclan74000kkfsyw8f2zsoz'
- Created At: 2023-12-19T16:59:09.439Z
- Updated At: 2023-12-19T16:59:09.439Z
- User:
  - ID: 'clqclan74000kkfsyw8f2zsoz'
  - Created At: 2023-12-19T16:59:09.425Z
  - Updated At: 2023-12-19T16:59:09.425Z

### All Orders

- [
  { - ID: 'clqclan7i000mkfsyc075kkwn' - User ID: 'clqclan74000kkfsyw8f2zsoz' - Created At: 2023-12-19T16:59:09.439Z - Updated At: 2023-12-19T16:59:09.439Z - User: - ID: 'clqclan74000kkfsyw8f2zsoz' - Created At: 2023-12-19T16:59:09.425Z - Updated At: 2023-12-19T16:59:09.425Z - Products: [ [Object], [Object] ]
  }
  ]

## Many-to-Many Relationship: Category and Product

### Example Products

1. Small Wooden Salad

   - ID: 'clqclead9000a145i5gbndg7o'
   - Description: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J'
   - Price: 100
   - Created At: '2023-12-19T17:01:59.422Z'
   - Updated At: '2023-12-19T17:01:59.422Z'
   - Categories: [ Unbranded, Bespoke ]

2. Recycled Cotton Chips

   - ID: 'clqcleadc000b145iamvhqx2n'
   - Description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit'
   - Price: 100
   - Created At: '2023-12-19T17:01:59.422Z'
   - Updated At: '2023-12-19T17:01:59.422Z'
   - Categories: [ Intelligent, Oriental ]

3. Sleek Rubber Chair
   - ID: 'clqcleadc000c145itb9pb4s6'
   - Description: 'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals'
   - Price: 100
   - Created At: '2023-12-19T17:01:59.422Z'
   - Updated At: '2023-12-19T17:01:59.422Z'
   - Categories: [ Unbranded, Ergonomic ]
