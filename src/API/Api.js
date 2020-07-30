import axios from 'axios'

const API_KEY="08b99a7e0e12220737573be14114740b";
const API_ID="b32179fc"


export const coffee=axios.create({
    baseURL:`https://api.edamam.com/search?q=coffee&app_id=${API_ID}&app_key=${API_KEY}`,
})

export const pizza=axios.create({
    baseURL:`https://api.edamam.com/search?q=pizza&app_id=${API_ID}&app_key=${API_KEY}`,
})


export const foodAPI=(type)=>(
    axios.create({
        baseURL:`https://api.edamam.com/search?q=${type}&app_id=${API_ID}&app_key=${API_KEY}`,
    })
)


export const restaurants=(type)=>(
    axios.create({
        baseURL:`https://developers.zomato.com/api/v2.1/search?entity_id=4&entity_type=city&q=${type}`,
        headers:{
            'user-key':'c5af407da9665db5abb87ed8103422cd'
        }
    })
)

export const restaurantCategories= axios.create({
        baseURL:`https://developers.zomato.com/api/v2.1/categories`,
        headers:{
            'user-key':'c5af407da9665db5abb87ed8103422cd'
        }
    })

