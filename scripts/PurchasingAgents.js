import { logBusinesses } from "./BusinessProvider.js"
import {purchasingAgentsHTML} from "./PurchasingAgentsHTML.js"


export const purchasingAgentsFunction = () => {
    const contentElement = document.querySelector(".main")
    const businesses = logBusinesses()
    const purchasingAgents = businesses.map(businessesObject => {
        return businessesObject.purchasingAgent
    })
    let purchasingAgentsHTMLRepresentations = ""

    for (const business of purchasingAgents) {
        purchasingAgentsHTMLRepresentations += purchasingAgentsHTML(business)
    }
    contentElement.innerHTML += `
    <article class="agents">
        <h2>Purchasing Agents</h2>
        ${purchasingAgentsHTMLRepresentations}
    </article>`
}