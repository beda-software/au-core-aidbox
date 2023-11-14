import Client from "fhirclient/lib/Client";
import { useEffect, useState } from "react";

interface AppProps {
    client: Client;
}

export function App({client}:AppProps) {
    const [patients, setPatients] = useState<any>(null);
    useEffect(() => {
        client.request("Patient").then(setPatients);
    }, [])

    return (<pre>{JSON.stringify(patients, undefined, 4)}</pre>);
}
