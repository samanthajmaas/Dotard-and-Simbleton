import { logBusinesses, findSearchItems } from "./BusinessProvider.js"
import { businessHTML } from "./Business.js"

const contentElement = document.querySelector(".businesses")

export const allBusinesses = () => {
    const businesses = logBusinesses()
    contentElement.innerHTML += "<h1>Active Businesses</h1>"
    businesses.forEach(businessObj => {
        contentElement.innerHTML += businessHTML(businessObj)
    })
}

const searchResult = document.querySelector(".foundInfo")

document.querySelector("#searchBar").addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {

            const foundResults = findSearchItems(keyPressEvent.target.value)

            searchResult.innerHTML = `
                <h3>
                ${foundResults.companyName}
                </h3>
                <section>
                ${foundResults.purchasingAgent.nameFirst} ${foundResults.purchasingAgent.nameLast}
                </section>
                <section>
                ${foundResults.addressFullStreet}
                </section>
                <section>
                ${foundResults.addressCity}, ${foundResults.addressStateCode} ${foundResults.addressZipCode}
                </section>
            `;
        }
    });