import { Bundle, Patient } from "fhir/r4b";
import Client from "fhirclient/lib/Client";
import { useEffect, useState } from "react";

interface AppProps {
    client: Client;
}

export function App({client}:AppProps) {
    const [patients, setPatients] = useState<Bundle<Patient>|null>(null);
    useEffect(() => {
        client.request("Patient").then(setPatients);
    }, [])


    if(patients){
        return <ul>
            {patients.entry?.map(p => {
                return <li>{JSON.stringify(p.resource?.name, undefined, 4)}</li>
            })}
        </ul>
    } else {
        return <p>Loading...</p>
    }
}
