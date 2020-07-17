import { logBusinesses } from "./BusinessProvider.js"
import { businessHTML } from "./Business.js"

export const manufacturingBussinesses = () => {
    const contentElement = document.querySelector(".main")
    const businesses = logBusinesses()
    const manufacturingCompanies = businesses.filter(businessesObject => {
        if (businessesObject.companyIndustry === "Manufacturing")
            return businessesObject
    })
    
    let businessesHTMLRepresentations = ""

    for (const business of manufacturingCompanies) {
        businessesHTMLRepresentations += businessHTML(business)
    }
    contentElement.innerHTML += `
    <article class="businessList--manufacturing">
        <h2>Manufacturing Companies</h2>
        ${businessesHTMLRepresentations}
    </article>`
}
