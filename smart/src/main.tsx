import { createRoot } from 'react-dom/client';
import { oauth2 as SMART } from "fhirclient";
import {App} from './App'

const root = createRoot(document.getElementById("root")!);

function launch(){
    fetch('http://localhost:8080/rpc', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            method: 'aidbox.smart/get-launch-uri',
            params: { iss: encodeURIComponent(`http://localhost:8080/fhir`), client: 'smart-app', user: 'admin'}
            })
    }).then((response) => {
        return response.json()
    }).then(data => {
        window.location.href = data.result.uri
    })
}

SMART.init({
    clientId: "smart-app",
    scope: "system/patient.r"
})
     .then((client) => {
         root.render(<App client={client} />);
     })
     .catch((e) => {
         root.render(
             <div className="flex-container">
                 <button onClick={launch}>Launche the app</button>
             </div>
         );
     });
