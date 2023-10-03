import { Car } from "@/store/CarStore"
import { Hotel } from "@/store/HotelStore"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Rentals",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Cars",
      href: "/cars/1",
    },
    {
      title: "Hotels",
      href: "/hotels",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}


export const carsData: Car[] = [
  {
    "id": "1",
    "model": {
      "name": "Toyota Prius",
      "year": 2022
    },
    "specs": {
      "capacity": 5,
      "engineType": "Hybrid",
      "mileage": "50",
      "gearShiftAutomatic": true
    },
    "rentalDetails": {
      "costPerMonth": 600,
      "availability": true
    },
    "media": {
      "imageLink": "https://images.unsplash.com/photo-1602343504619-b057fdc14213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG95b3RhJTIwUHJpdXN8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
    }
  },
  {
    "id": "2",
    "model": {
      "name": "Tesla Model 3",
      "year": 2022
    },
    "specs": {
      "capacity": 5,
      "engineType": "EV",
      "mileage": "140",
      "gearShiftAutomatic": true
    },
    "rentalDetails": {
      "costPerMonth": 700,
      "availability": true
    },
    "media": {
      "imageLink": "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVzbGElMjBNb2RlbCUyMDN8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
    }
  },
  {
    "id": "3",
    "model": {
      "name": "Ford Mustang",
      "year": 2021
    },
    "specs": {
      "capacity": 4,
      "engineType": "Gasoline",
      "mileage": "25",
      "gearShiftAutomatic": false
    },
    "rentalDetails": {
      "costPerMonth": 750,
      "availability": false
    },
    "media": {
      "imageLink": "https://images.unsplash.com/photo-1581650107963-3e8c1f48241b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Rm9yZCUyME11c3Rhbmd8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
    }
  },
  {
    "id": "4",
    "model": {
      "name": "Chevrolet Bolt EV",
      "year": 2022
    },
    "specs": {
      "capacity": 5,
      "engineType": "EV",
      "mileage": "127",
      "gearShiftAutomatic": true
    },
    "rentalDetails": {
      "costPerMonth": 650,
      "availability": true
    },
    "media": {
      "imageLink": "https://images.unsplash.com/photo-1667805630247-28c2a8db1cb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hldnJvbGV0JTIwQm9sdCUyMEVWfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  },
  {
    "id": "5",
    "model": {
      "name": "Hyundai Sonata",
      "year": 2022
    },
    "specs": {
      "capacity": 5,
      "engineType": "Gasoline",
      "mileage": "30",
      "gearShiftAutomatic": true
    },
    "rentalDetails": {
      "costPerMonth": 580,
      "availability": true
    },
    "media": {
      "imageLink": "https://images.unsplash.com/photo-1681361270520-4cc3961d3b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SHl1bmRhaSUyMFNvbmF0YXxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
    }
  },
  {
    "id": "6",
    "model": {
      "name": "BMW i3",
      "year": 2021
    },
    "specs": {
      "capacity": 4,
      "engineType": "EV",
      "mileage": "113",
      "gearShiftAutomatic": true
    },
    "rentalDetails": {
      "costPerMonth": 800,
      "availability": true
    },
    "media": {
      "imageLink": "https://images.unsplash.com/photo-1523983302122-73e869e1f850?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qk1XJTIwaTN8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
    }
  },
  {
    "id": "7",
    "model": {
      "name": "Mazda CX-5",
      "year": 2022
    },
    "specs": {
      "capacity": 5,
      "engineType": "Gasoline",
      "mileage": "28",
      "gearShiftAutomatic": true
    },
    "rentalDetails": {
      "costPerMonth": 610,
      "availability": false
    },
    "media": {
      "imageLink": "https://images.unsplash.com/photo-1675742549369-84dbcb262baa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fE1hemRhJTIwY3h8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
    }
  },
  {
    "id": "8",
    "model": {
      "name": "Audi e-tron",
      "year": 2021
    },
    "specs": {
      "capacity": 5,
      "engineType": "EV",
      "mileage": "78",
      "gearShiftAutomatic": true
    },
    "rentalDetails": {
      "costPerMonth": 850,
      "availability": true
    },
    "media": {
      "imageLink": "https://images.unsplash.com/photo-1626075195920-5df44dc27674?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXVkaSUyMGUlMjB0cm9ufGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  },
  {
    "id": "9",
    "model": {
      "name": "Subaru Outback",
      "year": 2022
    },
    "specs": {
      "capacity": 5,
      "engineType": "Gasoline",
      "mileage": "26",
      "gearShiftAutomatic": true
    },
    "rentalDetails": {
      "costPerMonth": 590,
      "availability": true
    },
    "media": {
      "imageLink": "https://images.unsplash.com/photo-1609772168547-d216c44c3f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U3ViYXJ1JTIwT3V0YmFja3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
    }
  },
  {
    "id": "10",
    "model": {
      "name": "Honda Civic",
      "year": 2021
    },
    "specs": {
      "capacity": 5,
      "engineType": "Gasoline",
      "mileage": "32",
      "gearShiftAutomatic": false
    },
    "rentalDetails": {
      "costPerMonth": 500,
      "availability": true
    },
    "media": {
      "imageLink": "https://images.unsplash.com/photo-1605816988069-b11383b50717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG9uZGElMjBDaXZpY3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
    }
  }
]


export const hotelsData: Hotel[] = [
  {
    "id": "NY1001",
    "listingType": "Rent",
    "city": "New York",
    "location": {
      "streetAddress": "Broadway",
      "detailedAddress": "123 Broadway, NY 10001"
    },
    "features": {
      "totalRooms": 3,
      "bedroomCount": 2,
      "bathroomCount": 1.5,
      "sizeInSqFt": 1500
    },
    "monthlyRent": 2500,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1589369125493-4a4e829208ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFsbCUyMGJ1aWxkaW5nc3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "NY1002",
    "listingType": "Rent",
    "city": "New York",
    "location": {
      "streetAddress": "5th Avenue",
      "detailedAddress": "768 5th Ave, New York, NY 10019"
    },
    "features": {
      "totalRooms": 15,
      "bedroomCount": 5,
      "bathroomCount": 3,
      "sizeInSqFt": 3000
    },
    "monthlyRent": 10000,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmdzfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "NY1003",
    "listingType": "Sale",
    "city": "New York",
    "location": {
      "streetAddress": "7th Avenue",
      "detailedAddress": "456 7th Ave, New York, NY 10018"
    },
    "features": {
      "totalRooms": 18,
      "bedroomCount": 6,
      "bathroomCount": 4,
      "sizeInSqFt": 3100
    },
    "monthlyRent": 10500,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmdzfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "NY1004",
    "listingType": "Sale",
    "city": "New York",
    "location": {
      "streetAddress": "6th Avenue",
      "detailedAddress": "123 6th Ave, New York, NY 10020"
    },
    "features": {
      "totalRooms": 20,
      "bedroomCount": 7,
      "bathroomCount": 5,
      "sizeInSqFt": 3300
    },
    "monthlyRent": 11000,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1516893676001-52fdf7605797?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "NY1005",
    "listingType": "Rent",
    "city": "New York",
    "location": {
      "streetAddress": "West Street",
      "detailedAddress": "85 West St, New York, NY 10006"
    },
    "features": {
      "totalRooms": 14,
      "bedroomCount": 4,
      "bathroomCount": 3,
      "sizeInSqFt": 2900
    },
    "monthlyRent": 9800,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1502905704466-2690947baeee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1aWxkaW5nc3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "LD1004",
    "listingType": "Rent",
    "city": "London",
    "location": {
      "streetAddress": "Baker Street",
      "detailedAddress": "10 Baker St, London W1U 3LA"
    },
    "features": {
      "totalRooms": 22,
      "bedroomCount": 8,
      "bathroomCount": 5,
      "sizeInSqFt": 3100
    },
    "monthlyRent": 13000,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1550676224-f5a1e8b6e15f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJ1aWxkaW5nc3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "LD1005",
    "listingType": "Sale",
    "city": "London",
    "location": {
      "streetAddress": "King's Cross",
      "detailedAddress": "1 King's Cross Rd, London WC1X 9HX"
    },
    "features": {
      "totalRooms": 20,
      "bedroomCount": 7,
      "bathroomCount": 4,
      "sizeInSqFt": 2900
    },
    "monthlyRent": 12500,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1523540383849-4ae4125acd6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJ1aWxkaW5nc3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "LD1006",
    "listingType": "Rent",
    "city": "London",
    "location": {
      "streetAddress": "Camden Town",
      "detailedAddress": "15 Camden High St, London NW1 7JE"
    },
    "features": {
      "totalRooms": 24,
      "bedroomCount": 9,
      "bathroomCount": 5,
      "sizeInSqFt": 3200
    },
    "monthlyRent": 14000,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1614261229399-a4ab437afcdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1aWxkaW5ncyUyMGF0JTIwbmlnaHR8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "LD1007",
    "listingType": "Rent",
    "city": "London",
    "location": {
      "streetAddress": "Covent Garden",
      "detailedAddress": "20 Covent Garden Piazza, London WC2E 8RB"
    },
    "features": {
      "totalRooms": 21,
      "bedroomCount": 8,
      "bathroomCount": 4.5,
      "sizeInSqFt": 3000
    },
    "monthlyRent": 13500,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJ1aWxkaW5nc3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "LD1008",
    "listingType": "Rent",
    "city": "London",
    "location": {
      "streetAddress": "Chelsea",
      "detailedAddress": "35 King's Rd, London SW3 4NB"
    },
    "features": {
      "totalRooms": 25,
      "bedroomCount": 10,
      "bathroomCount": 6,
      "sizeInSqFt": 3300
    },
    "monthlyRent": 14500,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1479660095429-2cf4e1360472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJ1aWxkaW5ncyUyMGF0JTIwbmlnaHR8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "LD1009",
    "listingType": "Sale",
    "city": "London",
    "location": {
      "streetAddress": "Greenwich",
      "detailedAddress": "12 Greenwich Peninsula, London SE10 0ES"
    },
    "features": {
      "totalRooms": 23,
      "bedroomCount": 9,
      "bathroomCount": 5.5,
      "sizeInSqFt": 3150
    },
    "monthlyRent": 13800,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJ1aWxkaW5nc3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "LD1010",
    "listingType": "Sale",
    "city": "London",
    "location": {
      "streetAddress": "Soho",
      "detailedAddress": "22 Soho Square, London W1D 4NS"
    },
    "features": {
      "totalRooms": 26,
      "bedroomCount": 11,
      "bathroomCount": 6,
      "sizeInSqFt": 3400
    },
    "monthlyRent": 14800,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1490318134124-34dadea1b8b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGJ1aWxkaW5nc3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "NY1006",
    "listingType": "Rent",
    "city": "New York",
    "location": {
      "streetAddress": "Duffield Street",
      "detailedAddress": "140 Duffield St, Brooklyn, NY 11201"
    },
    "features": {
      "totalRooms": 12,
      "bedroomCount": 3,
      "bathroomCount": 2,
      "sizeInSqFt": 2700
    },
    "monthlyRent": 8900,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1512502600-e4aaa316250d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGJ1aWxkaW5nc3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "NY1007",
    "listingType": "Sale",
    "city": "New York",
    "location": {
      "streetAddress": "Grand Concourse",
      "detailedAddress": "800 Grand Concourse, Bronx, NY 10451"
    },
    "features": {
      "totalRooms": 15,
      "bedroomCount": 5,
      "bathroomCount": 3,
      "sizeInSqFt": 2800
    },
    "monthlyRent": 8700,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1445296608114-4b8fabe48256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGJ1aWxkaW5nc3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "MU1002",
    "listingType": "Sale",
    "city": "Mumbai",
    "location": {
      "streetAddress": "Marine Drive",
      "detailedAddress": "456 Marine Drive, Mumbai 400001"
    },
    "features": {
      "totalRooms": 4,
      "bedroomCount": 3,
      "bathroomCount": 2,
      "sizeInSqFt": 2200
    },
    "monthlyRent": 3500,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1506450041641-40545dddaf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE5ldyUyMFlvcmslMjB0YWxsJTIwYnVpbGRpbmdzfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "MU1003",
    "listingType": "Rent",
    "city": "Mumbai",
    "location": {
      "streetAddress": "Marine Drive",
      "detailedAddress": "80 Marine Drive, Mumbai, 400020"
    },
    "features": {
      "totalRooms": 20,
      "bedroomCount": 8,
      "bathroomCount": 5,
      "sizeInSqFt": 3200
    },
    "monthlyRent": 12000,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1445296608114-4b8fabe48256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGJ1aWxkaW5nc3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "MU1004",
    "listingType": "Rent",
    "city": "Mumbai",
    "location": {
      "streetAddress": "Colaba Causeway",
      "detailedAddress": "25 Colaba Causeway, Mumbai, 400039"
    },
    "features": {
      "totalRooms": 18,
      "bedroomCount": 6,
      "bathroomCount": 4,
      "sizeInSqFt": 2800
    },
    "monthlyRent": 11000,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1505063080835-c595bc339ddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "MU1005",
    "listingType": "Sale",
    "city": "Mumbai",
    "location": {
      "streetAddress": "Bandra West",
      "detailedAddress": "14 Bandra West, Mumbai, 400050"
    },
    "features": {
      "totalRooms": 22,
      "bedroomCount": 7,
      "bathroomCount": 5,
      "sizeInSqFt": 3400
    },
    "monthlyRent": 10000,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1445296608114-4b8fabe48256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGJ1aWxkaW5nc3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "MU1006",
    "listingType": "Sale",
    "city": "Mumbai",
    "location": {
      "streetAddress": "Juhu Tara Road",
      "detailedAddress": "67 Juhu Tara Rd, Mumbai, 400049"
    },
    "features": {
      "totalRooms": 24,
      "bedroomCount": 8,
      "bathroomCount": 6,
      "sizeInSqFt": 3600
    },
    "monthlyRent": 15000,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1571512964945-7edd9855df7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGJ1aWxkaW5nc3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "MU1007",
    "listingType": "Rent",
    "city": "Mumbai",
    "location": {
      "streetAddress": "Lokhandwala Complex",
      "detailedAddress": "43 Lokhandwala Complex, Mumbai, 400053"
    },
    "features": {
      "totalRooms": 20,
      "bedroomCount": 7,
      "bathroomCount": 4,
      "sizeInSqFt": 3300
    },
    "monthlyRent": 13000,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1502111394009-1d7f7b3faa51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "MU1008",
    "listingType": "Sale",
    "city": "Mumbai",
    "location": {
      "streetAddress": "Versova Beach",
      "detailedAddress": "4 Versova Beach, Mumbai, 400061"
    },
    "features": {
      "totalRooms": 18,
      "bedroomCount": 6,
      "bathroomCount": 5,
      "sizeInSqFt": 3100
    },
    "monthlyRent": 14000,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGJ1aWxkaW5nc3xlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "MU1009",
    "listingType": "Rent",
    "city": "Mumbai",
    "location": {
      "streetAddress": "Powai",
      "detailedAddress": "90 Hiranandani Gardens, Powai, Mumbai, 400076"
    },
    "features": {
      "totalRooms": 23,
      "bedroomCount": 8,
      "bathroomCount": 5.5,
      "sizeInSqFt": 3500
    },
    "monthlyRent": 13500,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1541781286675-7b70223358d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "PR1003",
    "listingType": "Rent",
    "city": "Paris",
    "location": {
      "streetAddress": "Champs-Élysées",
      "detailedAddress": "789 Champs-Élysées, Paris 75008"
    },
    "features": {
      "totalRooms": 3,
      "bedroomCount": 2,
      "bathroomCount": 2,
      "sizeInSqFt": 1800
    },
    "monthlyRent": 2700,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1512494103629-063d0a5ed3c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmdzJTIwYXQlMjBuaWdodHxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "LD1004",
    "listingType": "Sale",
    "city": "London",
    "location": {
      "streetAddress": "Oxford Street",
      "detailedAddress": "101 Oxford Street, London W1D 1LL"
    },
    "features": {
      "totalRooms": 4,
      "bedroomCount": 3,
      "bathroomCount": 1.5,
      "sizeInSqFt": 2000
    },
    "monthlyRent": 2900,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1519126400611-d57095205936?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhbGwlMjBidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "PR1004",
    "listingType": "Rent",
    "city": "Paris",
    "location": {
      "streetAddress": "Champs-Élysées",
      "detailedAddress": "50 Champs-Élysées, 75008 Paris"
    },
    "features": {
      "totalRooms": 20,
      "bedroomCount": 7,
      "bathroomCount": 4,
      "sizeInSqFt": 2800
    },
    "monthlyRent": 11000,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1518168741044-13e051f834f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "PR1005",
    "listingType": "Rent",
    "city": "Paris",
    "location": {
      "streetAddress": "Saint Germain",
      "detailedAddress": "45 Saint Germain, 75006 Paris"
    },
    "features": {
      "totalRooms": 18,
      "bedroomCount": 6,
      "bathroomCount": 3.5,
      "sizeInSqFt": 2600
    },
    "monthlyRent": 10500,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmdzJTIwUGFyaXN8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "PR1006",
    "listingType": "Sale",
    "city": "Paris",
    "location": {
      "streetAddress": "Montmartre",
      "detailedAddress": "90 Montmartre, 75018 Paris"
    },
    "features": {
      "totalRooms": 15,
      "bedroomCount": 5,
      "bathroomCount": 3,
      "sizeInSqFt": 2500
    },
    "monthlyRent": 10000,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1521208165866-0c15d9db029e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "PR1007",
    "listingType": "Sale",
    "city": "Paris",
    "location": {
      "streetAddress": "La Marais",
      "detailedAddress": "33 La Marais, 75003 Paris"
    },
    "features": {
      "totalRooms": 20,
      "bedroomCount": 8,
      "bathroomCount": 4.5,
      "sizeInSqFt": 2900
    },
    "monthlyRent": 11500,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1564289184031-c9e3f3c29444?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "PR1008",
    "listingType": "Rent",
    "city": "Paris",
    "location": {
      "streetAddress": "Belleville",
      "detailedAddress": "70 Belleville, 75020 Paris"
    },
    "features": {
      "totalRooms": 15,
      "bedroomCount": 6,
      "bathroomCount": 3,
      "sizeInSqFt": 2400
    },
    "monthlyRent": 9500,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1597047084993-bf337e09ede0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "PR1009",
    "listingType": "Rent",
    "city": "Paris",
    "location": {
      "streetAddress": "Bastille",
      "detailedAddress": "5 Bastille, 75011 Paris"
    },
    "features": {
      "totalRooms": 19,
      "bedroomCount": 7,
      "bathroomCount": 4,
      "sizeInSqFt": 2650
    },
    "monthlyRent": 9600,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1541371763992-a9d00e78b865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5ncyUyMFBhcmlzfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "PR1010",
    "listingType": "Sale",
    "city": "Paris",
    "location": {
      "streetAddress": "Trocadéro",
      "detailedAddress": "40 Trocadéro, 75016 Paris"
    },
    "features": {
      "totalRooms": 21,
      "bedroomCount": 7,
      "bathroomCount": 4.5,
      "sizeInSqFt": 2750
    },
    "monthlyRent": 12000,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1597282020758-7e0954e5cfa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU2fHxidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "NY1008",
    "listingType": "Rent",
    "city": "New York",
    "location": {
      "streetAddress": "Fifth Avenue",
      "detailedAddress": "112 Fifth Avenue, NY 10011"
    },
    "features": {
      "totalRooms": 3,
      "bedroomCount": 2,
      "bathroomCount": 1,
      "sizeInSqFt": 1600
    },
    "monthlyRent": 2600,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1556788286-69975ea09aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHRhbGwlMjBidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "MU1006",
    "listingType": "Sale",
    "city": "Mumbai",
    "location": {
      "streetAddress": "Linking Road",
      "detailedAddress": "234 Linking Road, Mumbai 400050"
    },
    "features": {
      "totalRooms": 4,
      "bedroomCount": 3,
      "bathroomCount": 2.5,
      "sizeInSqFt": 2100
    },
    "monthlyRent": 3400,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1512847819326-205ee05f3ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHRhbGwlMjBidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "PR1007",
    "listingType": "Rent",
    "city": "Paris",
    "location": {
      "streetAddress": "Rue Cler",
      "detailedAddress": "345 Rue Cler, Paris 75007"
    },
    "features": {
      "totalRooms": 2,
      "bedroomCount": 1,
      "bathroomCount": 1,
      "sizeInSqFt": 1300
    },
    "monthlyRent": 2200,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1486607303850-bc051a4ffad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHRhbGwlMjBidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "LD1008",
    "listingType": "Sale",
    "city": "London",
    "location": {
      "streetAddress": "Baker Street",
      "detailedAddress": "567 Baker Street, London NW1 6XE"
    },
    "features": {
      "totalRooms": 4,
      "bedroomCount": 3,
      "bathroomCount": 2,
      "sizeInSqFt": 1900
    },
    "monthlyRent": 2800,
    "isHighlighted": false,
    "imageUrl": "https://images.unsplash.com/photo-1641304009599-e994aba69b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHRhbGwlMjBidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": "NY1009",
    "listingType": "Rent",
    "city": "New York",
    "location": {
      "streetAddress": "Wall Street",
      "detailedAddress": "890 Wall Street, NY 10005"
    },
    "features": {
      "totalRooms": 3,
      "bedroomCount": 2,
      "bathroomCount": 2,
      "sizeInSqFt": 1700
    },
    "monthlyRent": 2400,
    "isHighlighted": true,
    "imageUrl": "https://images.unsplash.com/photo-1506450041641-40545dddaf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHRhbGwlMjBidWlsZGluZ3N8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
  }
]
