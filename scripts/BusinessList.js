import { logBusinesses } from "./BusinessProvider.js"
import { businessHTML } from "./Business.js"

const contentElement = document.querySelector(".main")

export const allBusinesses = () => {
    const businesses = logBusinesses()
    contentElement.innerHTML += "<h1>Active Businesses</h1>"
    businesses.forEach(businessObj => {
            contentElement.innerHTML += businessHTML(businessObj)
        })
}
