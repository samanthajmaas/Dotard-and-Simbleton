import { logBusinesses, findBusinessBelowName } from "./BusinessProvider.js"
import { businessHTML } from "./Business.js"

const contentElement = document.querySelector(".businesses")

export const allBusinesses = () => {
    const businesses = logBusinesses()
    contentElement.innerHTML += "<h1>Active Businesses</h1>"
    businesses.forEach(businessObj => {
        contentElement.innerHTML += businessHTML(businessObj)
    })
}

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {

            const foundBusiness = findBusinessBelowName(keyPressEvent.target.value)

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });