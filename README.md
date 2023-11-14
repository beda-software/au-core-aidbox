# AU Core aidbox
This repository contains aidbox configuration project that enables AU Core profiles support.  
You can try the deployed version [au-core.beda.software](https://au-core.beda.software/).  
All FHIR endpoints are publicly available for read and write.
```
curl https://au-core.beda.software/fhir/metadata
```  
To login in the web ui please use this login and password.  
Username: `admin`  
Password: `password`  


## Local environment
To run it locally you will need a license that you can get here [aidbox.app](https://aidbox.app/ui/portal#/signin)   
Then add a `.env` file that contains the store license key in the `AIDBOX_LICENSE` variable.   
Run aidbox with docker: `docker compose up`   

## SMART launch track
For the smart launch track I have prepared a simple SMART on FHIR app that just loads a list of patients.
The source code is available in [smart](https://github.com/beda-software/au-core-aidbox/tree/main/) folder of this repository.
You can launch it locally with npm, or use smart-app docker compose profile
```
docker compose --profile smart-app up
```
The app launches in dev mode so any changes in the source code will be represented in the browser.
 
