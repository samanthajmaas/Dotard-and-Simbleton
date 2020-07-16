export const businessHTML = (businessObj) => {
    return `
    <section class="business">
        <h2 class ="business__name">${businessObj.companyName}</h2>
            <div class="business__street">${businessObj.addressFullStreet}</div>
            <div class="business__address">${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</div>
    </section>`
}