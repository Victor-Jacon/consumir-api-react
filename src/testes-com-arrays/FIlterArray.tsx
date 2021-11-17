import { useState } from 'react/cjs/react.production.min'; // minimum version of react, just to test out the filter.

// LOCAL FILTER
const [productList, setProductList] = useState([
  {
     "id":"70788059",
     "title":"Forest Gump Shoes",
     "productImage":{
        "url":"https://www.datocms-assets.com/58030/1636297575-image1.png?fm=jpg"
     },
     "description":"amazing forest gump shoes",
     "rating":2,
     "price":13.48
  },
  {
     "id":"70780958",
     "title":"Charger (duplicate)",
     "productImage":{
        "url":"https://www.datocms-assets.com/58030/1636297560-image4.png?fm=jpg"
     },
     "description":"Charge your phone with a passport-charger hibrid. The amazon choice for digital nomads.",
     "rating":4.5,
     "price":16.48
  },
  {
     "id":"70780948",
     "title":"Gift (duplicate)",
     "productImage":{
        "url":"https://www.datocms-assets.com/58030/1636297552-image5.png?fm=jpg"
     },
     "description":"Random gift, can be a 200 reais bill, who knows?",
     "rating":4.75,
     "price":17.48
  },
  {
     "id":"70780962",
     "title":"Drink (duplicate)",
     "productImage":{
        "url":"https://www.datocms-assets.com/58030/1636297565-image3.png?fm=jpg"
     },
     "description":"Mate, the best for your coding nights",
     "rating":4,
     "price":15.48
  },
  {
     "id":"70780969",
     "title":"Typewriter (duplicate)",
     "productImage":{
        "url":"https://www.datocms-assets.com/58030/1636297570-image2.png?fm=jpg"
     },
     "description":"A typewriter will help you write better typescript, 50% off today...",
     "rating":3,
     "price":14.48
  },
  {
     "id":"70780976",
     "title":"Miscellaneous (duplicate)",
     "productImage":{
        "url":"https://www.datocms-assets.com/58030/1636297581-image.png?fm=jpg"
     },
     "description":"Amazing unknown misc products",
     "rating":1,
     "price":12.48
  }
]);

const filterProducts = (productList: any, rating?: any, maxValue?: any, minValue?: any) => {
  // How's data arriving?
  // console.log(productList);
  // console.log(rating, maxValue, minValue);
  // console.log(typeof minValue; typeof maxValue);

  // How's new data structure now?
  const minValueNumber = Number(minValue);
  const maxValueNumber = Number(maxValue);
  // console.log(typeof minValueNumber, typeof maxValueNumber, typeof rating);

  const filterRating = (productList: any) => {
    // is data arriving as expected?
    // console.log(typeof productList.rating, productList.rating);
    // console.log(typeof rating, rating);

    if(Number(productList.rating) >= rating) return true    
  }

  const filterValue = (productList: any) => {
    if(Number(productList.price) >= minValueNumber && Number(productList.price) <= maxValueNumber) {
      return true
    }
  }

  if (rating && minValue | maxValue) {
    const filteredByRatingAndValue = productList
      .filter(filterValue)
      .filter(filterRating)

    // console.log('rating and value')
    // console.log(filteredByRatingAndValue)
    return filteredByRatingAndValue
  }

  if (rating) {
    const filteredByRating = productList.filter(filterRating)
    // console.log('rating')
    // console.log(filteredByRating)
    return filteredByRating
  }

  if (minValue | maxValue) {
    const filteredByValue = productList.filter(filterValue)
    // console.log('value')
    // console.log(filteredByValue)
    return filteredByValue
  }

  return productList
}