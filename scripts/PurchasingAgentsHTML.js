export const purchasingAgentsHTML = (businessObj) => {
    return `
    <section class="purchasingAgents">
        <h2 class ="agents__name">${businessObj.purchasingAgent.nameFirst} ${businessObj.purchasingAgent.nameLast}</h2>
            <div class="agents__company">${businessObj.companyName}</div>
            <div class="agents__phoneNumber">${businessObj.phoneWork}</div>
    </section>`
}