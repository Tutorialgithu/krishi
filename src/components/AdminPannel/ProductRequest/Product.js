const products = [
    {
        id: 'P001',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Wheat Seeds",
        orderDate: "15 Mar 2024"
    },
    {
        id: 'P002',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Corn Fertilizer",
        orderDate: "20 Mar 2024"
    },
    {
        id: 'P003',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Rice Seeds",
        orderDate: "25 Mar 2024"
    },
    {
        id: 'P004',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Soybean Fertilizer",
        orderDate: "30 Mar 2024"
    },
    {
        id: 'P005',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Barley Seeds",
        orderDate: "05 Apr 2024"
    },
    {
        id: 'P006',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Vegetable Fertilizer",
        orderDate: "10 Apr 2024"
    },
    {
        id: 'P007',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Maize Seeds",
        orderDate: "15 Apr 2024"
    },
    {
        id: 'P008',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Organic Compost",
        orderDate: "20 Apr 2024"
    },
    {
        id: 'P009',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Tomato Seeds",
        orderDate: "25 Apr 2024"
    },
    {
        id: 'P010',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Potato Fertilizer",
        orderDate: "30 Apr 2024"
    },
    {
        id: 'P011',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Carrot Seeds",
        orderDate: "05 May 2024"
    },
    {
        id: 'P012',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Leafy Greens Fertilizer",
        orderDate: "10 May 2024"
    },
    {
        id: 'P013',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Pepper Seeds",
        orderDate: "15 May 2024"
    },
    {
        id: 'P014',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Strawberry Fertilizer",
        orderDate: "20 May 2024"
    },
    {
        id: 'P015',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Lettuce Seeds",
        orderDate: "25 May 2024"
    },
    {
        id: 'P016',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Cucumber Fertilizer",
        orderDate: "30 May 2024"
    },
    {
        id: 'P017',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Onion Seeds",
        orderDate: "05 Jun 2024"
    },
    {
        id: 'P018',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Melon Fertilizer",
        orderDate: "10 Jun 2024"
    },
    {
        id: 'P019',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Garlic Seeds",
        orderDate: "15 Jun 2024"
    },
    {
        id: 'P020',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Berry Fertilizer",
        orderDate: "20 Jun 2024"
    },
    {
        id: 'P021',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PKTdXAJjKSMXfY3cbqHFncRXbLu34lPRow&s",
        name: "Pumpkin Seeds",
        orderDate: "25 Jun 2024"
    }
];

export default products;
