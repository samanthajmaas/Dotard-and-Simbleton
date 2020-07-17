import { logBusinesses } from "./BusinessProvider.js"
import { businessHTML } from "./Business.js"

export const manufacturingBussinesses = () => {
    const contentElement = document.querySelector(".businessList--manufacturing")
    const businesses = logBusinesses()
    contentElement.innerHTML += "<h2>Manufacturing Companies</h2>"
    const manufacturingCompanies = businesses.filter(businessesObject => {
        if (businessesObject.companyIndustry === "Manufacturing")
            return businessesObject
    })
    for (const business of manufacturingCompanies) {
        contentElement.innerHTML += businessHTML(business)
    }
}
