import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Service = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  services?: Service[];
};

const initialState: Product[] = [
  {
    id: "253b1429-3d4e-4ddb-a9c4-57a766f81865",
    name: "Engineering",
    price: 25000,
    image: "/civil.jpg",
    description: "Turn your dream projects into reality with our comprehensive engineering services. From architectural design to structural engineering and interior design, our team of experts will bring your vision to life. Experience the perfect blend of creativity, functionality, and quality.",
    services: [
      {
        id: "5f9a09e4-0942-11ee-be56-0242ac120002",
        name: "Architectural Design",
        price: 0,
        image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
        description:
          "Visualize Your Dream Home in Stunning 2D Plans and 3D Impressions",
      },
      {
        id: "6a5c49aa-0942-11ee-be56-0242ac120002",
        name: "Building Construction",
        price: 0,
        image: "https://images.unsplash.com/photo-1621511075938-f03482369feb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description:
          "Transforming Your Dream Into a Solid Reality with Expert Builders",
      },
      {
        id: "705459d8-0942-11ee-be56-0242ac120002",
        name: "Labour Contract",
        price: 0,
        image: "https://images.unsplash.com/photo-1669910462922-32b56f4998a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        description:
          "Quality Materials, Skilled Experts, and Professional Execution - Your Project in Safe Hands",
      },
      {
        id: "77476e4c-0942-11ee-be56-0242ac120002",
        name: "Structural Design",
        price: 0,
        image: "https://images.unsplash.com/photo-1581093196867-ca3dba3c721b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        description:
          "Ensuring Safety and Cost-Efficiency in Your Construction Project with Expert Structural Engineers",
      },
      {
        id: "7ef6791c-0942-11ee-be56-0242ac120002",
        name: "Interior Design",
        price: 0,
        image: "https://images.unsplash.com/photo-1556702571-3e11dd2b1a92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        description:
          "Transforming Spaces Into Beautiful, Functional, and Personalized Homes",
      },
      {
        id: "84548890-0942-11ee-be56-0242ac120002",
        name: "Costing and Estimation (BOQ)",
        price: 0,
        image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
        description:
          "Accurate Cost Estimation and Efficient Material Planning for Seamless Project Execution",
      },
    ],
  },
  {
    id: "d23da9a1-3db1-4862-9692-8bc8450ba108",
    name: "Delivery Services",
    price: 100.0,
    image: "/hintshubdeliver.jpeg",
    description: "Experience the convenience and reliability of our premium delivery services. Whether you need express delivery, same-day delivery, parcel tracking, or international shipping, we've got you covered. Your packages will be handled with utmost care and delivered with efficiency, ensuring peace of mind every step of the way.",
    services: [
      {
        id: "20e14aa3-0943-11ee-be56-0242ac120002",
        name: "Express Delivery",
        price: 0,
        image: "express-delivery.jpg",
        description: "Quick and Reliable Delivery Service for Your Packages",
      },
      {
        id: "23c7ce73-0943-11ee-be56-0242ac120002",
        name: "Same-Day Delivery",
        price: 0,
        image: "same-day-delivery.jpg",
        description:
          "Get Your Items Delivered on the Same Day with Efficiency and Care",
      },
      {
        id: "26eacfb7-0943-11ee-be56-0242ac120002",
        name: "Parcel Tracking",
        price: 0,
        image: "parcel-tracking.jpg",
        description: "Stay Informed with Real-Time Tracking of Your Deliveries",
      },
      {
        id: "29beef41-0943-11ee-be56-0242ac120002",
        name: "Fragile Item Handling",
        price: 0,
        image: "fragile-item-handling.jpg",
        description:
          "Specialized Care and Attention for Safe Delivery of Fragile Items",
      },
      {
        id: "2c92e57f-0943-11ee-be56-0242ac120002",
        name: "International Shipping",
        price: 0,
        image: "international-shipping.jpg",
        description:
          "Efficient and Secure Shipping Services for International Deliveries",
      },
    ],
  },
  {
    id: "9899fcbd-7366-435c-8d20-5ec60098a99a",
    name: "Arts & Lifestyle",
    price: 2000,
    image: "/artslifestyle.jpeg",
    description: "Indulge in a world of creativity, inspiration, and personal growth with our arts and lifestyle offerings. Join our engaging creative workshops, immerse yourself in captivating art exhibitions, seek expert lifestyle consultancy, explore vibrant cultural events, and unlock your true potential through personalized development programs. Elevate your lifestyle and embrace the extraordinary.",
    services: [
      {
        id: "2f27c63b-0944-11ee-be56-0242ac120002",
        name: "Creative Workshops",
        price: 0,
        image: "creative-workshops.jpg",
        description:
          "Unleash Your Creativity through Engaging and Inspiring Workshops",
      },
      {
        id: "31db6bb1-0944-11ee-be56-0242ac120002",
        name: "Art Exhibitions",
        price: 0,
        image: "art-exhibitions.jpg",
        description:
          "Discover and Appreciate Unique Artworks in Inspiring Exhibitions",
      },
      {
        id: "34f01741-0944-11ee-be56-0242ac120002",
        name: "Lifestyle Consultancy",
        price: 0,
        image: "lifestyle-consultancy.jpg",
        description: "Expert Guidance to Enhance Your Lifestyle and Well-being",
      },
      {
        id: "37f4b2e5-0944-11ee-be56-0242ac120002",
        name: "Cultural Events",
        price: 0,
        image: "cultural-events.jpg",
        description:
          "Immerse Yourself in Vibrant Cultural Events and Celebrations",
      },
      {
        id: "3af0817d-0944-11ee-be56-0242ac120002",
        name: "Personal Development",
        price: 0,
        image: "personal-development.jpg",
        description:
          "Unlock Your Potential with Personalized Development Programs",
      },
    ],
  },
];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      const newState = state.filter((val) => val.id !== action.payload.id);
      return newState;
    },
    resetProducts: () => {
      return [];
    },
  },
});

export const {
  addProduct,
  removeProduct,
  resetProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
