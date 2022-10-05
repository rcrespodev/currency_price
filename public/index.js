const main = () => {
    const targetCommands = ["usd_cmd", "eur_cmd", "gbp_cmd"]
    targetCommands.forEach((id) => {
        const targetCommand = document.getElementById(id)
        targetCommand.addEventListener(('click'), (evt) => {
            redirect(evt.target.id)
        })
    })
}

const redirect = (id) => {
    const baseUrl = 'http://0.0.0.0:8080/'
    const trimId = id.split("_");
    let newId = trimId[0];
    newId = newId.toUpperCase()
    switch (newId) {
        case "EUR":
            window.location.assign(baseUrl + 'currency-price/' + newId)
            break
        case "USD":
            window.location.assign(baseUrl + 'currency-price/' + newId)
            break
        case "GBP":
            window.location.assign(baseUrl + 'currency-price/' + newId)
            break
    }
}

main()