import { createRoot } from 'react-dom/client';
import { oauth2 as SMART } from "fhirclient";
import {App} from './App'

const root = createRoot(document.getElementById("root")!);

const FHIRServerUrl = "http://localhost:8080";
/* const FHIRServerUrl = "https://au-core.beda.software"; */

interface LaunchData {
    result: {
        uri: string,
        launch: string,
    }
}

function launch(){
    fetch(`${FHIRServerUrl}/rpc`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            method: 'aidbox.smart/get-launch-uri',
            params: { iss: encodeURIComponent(`${FHIRServerUrl}/fhir`), client: 'smart-app', user: 'admin'}
            })
    }).then((response) => {
        return response.json()
    }).then((data:LaunchData) => {
        localStorage.setItem('launch', data.result.launch)
        window.location.href = data.result.uri
    })
}

SMART.init({
    clientId: "smart-app",
    scope: "system/patient.r",
    launch: localStorage.getItem('launch')!,
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
