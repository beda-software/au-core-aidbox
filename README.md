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
The only dependency that is needed is docker. If docker is not already installed on your system, you can download and install it from the [official docker website](https://docs.docker.com/get-docker/)

To run Aidbox FHIR server locally you will need a license that you can get here [aidbox.app](https://aidbox.app/ui/portal#/signin)   
Then add a `.env` file that contains the store license key in the `AIDBOX_LICENSE` variable.   

Run aidbox with docker: 
```
docker compose up
```   

## Jupyter client
You can run Jupyter Notebook that implements test connectathon scenarios.
### Run locally
To run it along with the local Aidbox FHIR server use:
```
docker compose --profile client up
```
If you would like to run the notebook only and test it with FHIR server deployed in the cloud please use this command
```
docker compose up --profile client up client
```
### Run in the cloud via mybinder.org
|Scenario|Run link|
|----|--------|
|[Read & Search Test Scenarios](https://confluence.hl7.org/pages/viewpage.action?pageId=203358353)|[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/beda-software/au-core-aidbox/main?labpath=client%2FRead+%26+Search+Test+Scenarios.ipynb)|
|[Validate & Create Test Scenarios](https://confluence.hl7.org/pages/viewpage.action?pageId=204276132)|[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/beda-software/au-core-aidbox/main?labpath=client%2FValidate+%26+Create+Test+Scenarios.ipynb)|

## SMART launch track
For the smart launch track, I have prepared a simple SMART on the FHIR app that just loads a list of patients.
The source code is available in the [smart](https://github.com/beda-software/au-core-aidbox/tree/main/) folder of this repository.
You can launch it locally with npm, or use smart-app docker compose profile
```
docker compose --profile smart-app up
```
The app launches in dev mode so any changes in the source code will be represented in the browser.
If you are a Windows user, you should  add `HOST_OS=Windows` into .env file. It enables file polling that is required for code reload in Windows.
You can run just the SMART on FHIR app and configure it to work with cloud version of aidbox FHIR server.  
In this case please run just the app:
```
docker compose up --profile smart-app up smart-app
```
And adjust [FHIRServerUrl](https://github.com/beda-software/au-core-aidbox/blob/main/smart/src/main.tsx#L8)https://github.com/beda-software/au-core-aidbox/blob/main/smart/src/main.tsx#L8 variable value.

