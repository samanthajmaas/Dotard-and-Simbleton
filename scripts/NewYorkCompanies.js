import { logBusinesses } from "./BusinessProvider.js"
import { businessHTML } from "./Business.js"

export const newYorkBussinesses = () => {
    const contentElement = document.querySelector(".main")
    const businesses = logBusinesses()
    const newYorkCompanies = businesses.filter(businessesObject => {
        if (businessesObject.addressStateCode === "NY")
            return businessesObject
    })
    
    let businessesHTMLRepresentations = ""

    for (const business of newYorkCompanies) {
        businessesHTMLRepresentations += businessHTML(business)
    }
    contentElement.innerHTML += `
    <article class="business--newYork">
        <h2>New York Businesses</h2>
        ${businessesHTMLRepresentations}
    </article>`
}






