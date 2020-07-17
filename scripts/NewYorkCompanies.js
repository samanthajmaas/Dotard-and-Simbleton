import { logBusinesses } from "./BusinessProvider.js"
import { businessHTML } from "./Business.js"

export const newYorkBussinesses = () => {
    const contentElement = document.querySelector(".business--newYork")
    const businesses = logBusinesses()
    contentElement.innerHTML += "<h1>New York Businesses</h1>"
    const newYorkCompanies = businesses.filter(businessesObject => {
        if (businessesObject.addressStateCode === "NY")
            return businessesObject
    })
    for (const business of newYorkCompanies) {
        contentElement.innerHTML += businessHTML(business)
    }
}






