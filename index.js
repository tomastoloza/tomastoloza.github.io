const descriptions = {
    "exp-jsd": "<p>Mulesoft connectors development such as NetSuite, MongoDB. Along with maintenance and bugs and vulnerabilities fixing</p>",
    "exp-mtf":
        "<p>Migration of JUnit funcional tests to MTF (Mule Testing Framework) for all Mulesoft connectors, such as SAP, Salesforce, Oracle EBS connectors.</p>"
}

const details = {}

function loadExperience(id) {
    document.getElementById(id).innerHTML === details[id] ?
        document.getElementById(id).innerHTML = descriptions[id] :
        document.getElementById(id).innerHTML = details[id]
}

function save() {
    let ids = ["exp-jsd", "exp-mtf"]
    ids.forEach(id => {
        details[id] = document.getElementById(id).innerHTML;
    })
}

