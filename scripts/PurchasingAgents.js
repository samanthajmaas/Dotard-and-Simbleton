import { logBusinesses } from "./BusinessProvider.js"
import {purchasingAgentsHTML} from "./PurchasingAgentsHTML.js"


export const purchasingAgentsFunction = () => {
    const contentElement = document.querySelector(".agents")
    const businesses = logBusinesses()
    contentElement.innerHTML += "<h1>Purchasing Agents</h1>"
    const purchasingAgents = businesses.map(businessesObject => {
        return businessesObject
    })
    for (const business of purchasingAgents) {
        contentElement.innerHTML += purchasingAgentsHTML(business)
    }
}