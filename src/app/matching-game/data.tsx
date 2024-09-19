const data = [
    {
        id: 1,
        name: "red",
        color: "bg-red-500",
        img: "",
        open: false,
    },
    {
        id: 2,
        name: "blue",
        color: "bg-blue-500",
        img: "",
        open: false,
    },
    {
        id: 3,
        name: "yellow",
        color: "bg-yellow-500",
        img: "",
        open: false,
    },
    {
        id: 4,
        name: "green",
        color: "bg-green-500",
        img: "",
        open: false,
    },
    {
        id: 5,
        name: "pink",
        color: "bg-pink-500",
        img: "",
        open: false,
    },
    {
        id: 6,
        name: "orange",
        color: "bg-orange-500",
        img: "",
        open: false,
    },
    {
        id: 7,
        name: "gray",
        color: "bg-gray-500",
        img: "",
        open: false,
    },
    {
        id: 8,
        name: "black",
        color: "bg-black",
        img: "",
        open: false,
    },
    {
        id: 11,
        name: "red",
        color: "bg-red-500",
        img: "",
        open: false,
    },
    {
        id: 12,
        name: "blue",
        color: "bg-blue-500",
        img: "",
        open: false,
    },
    {
        id: 13,
        name: "yellow",
        color: "bg-yellow-500",
        img: "",
        open: false,
    },
    {
        id: 14,
        name: "green",
        color: "bg-green-500",
        img: "",
        open: false,
    },
    {
        id: 15,
        name: "pink",
        color: "bg-pink-500",
        img: "",
        open: false,
    },
    {
        id: 16,
        name: "orange",
        color: "bg-orange-500",
        img: "",
        open: false,
    },
    {
        id: 17,
        name: "gray",
        color: "bg-gray-500",
        img: "",
        open: false,
    },
    {
        id: 18,
        name: "black",
        color: "bg-black",
        img: "",
        open: false,
    },
]

export default data




export const cardsData = data.map((card) => ({
    ...card,
    order: Math.floor(Math.random() * 12),
    isFlipped: false,
}));
