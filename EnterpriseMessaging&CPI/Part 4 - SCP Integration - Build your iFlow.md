Part 4: Build your iFlow
========================

Please make sure that everything has been done properly from [Part 3](Part%203%20-%20SCP%20Integration%20-%20Connect%20your%20iFlow.md)
before going further.

You have setup the connections to and from your iFlow in the previous
step. But your iFlow is not doing anything with this payload it is
receiving so far. So, let's add some processing inside of it.

If you look at the tool bar on the left of the screen, you can see that
there are many options available to process the received payload in your
iFlow.

![](.//Part4Images/image1.png)

The iFlow is going to receive an event from EM which contains the
payload in JSON format. We need first to convert this payload from JSON
to XML. In the toolbar, click on Transformation button and then
Converter. Choose JSON to XML.

<img src=".//Part4Images/image2.png" width="30%" height="30%">    <img src=".//Part4Images/image3.png" width="25%" height="25%"> 

Place the converter between Start and End.

![](.//Part4Images/image4.png)

The JSON to XML Converter 1 should appear in your Integration Process.
You can keep the default configuration for this component.

![](.//Part4Images/image5.png)

Then we will add a Content Modifier. It will read the incident ID from
the payload which is now in XML format. Then this ID will be added as
Message Header of your iFlow. This way, it will be easy to use it in the
rest of the processing.

In the toolbar, click on Transformation button and then choose Content
Modifier.

<img src=".//Part4Images/image6.png" width="25%" height="25%">

Place it between your JSON to XML Converter and End.

![](.//Part4Images/image7.png)

Click on the Content Modifier 1 that should have appeared. Open Message
Header tab and click on Add button.

![](.//Part4Images/image8.png)

Enter the following information:

Action: **Create**<br/>
Name: **IncidentID**<br/>
Type: **XPath**<br/>
Data Type: **java.lang.String**<br/>
Value: **//ID**

![](.//Part4Images/image9.png)

This is creating a Message Header named IncidentID in your iFlow. While
processing, it's going to read the field ID from the payload which is of
type java.lang.String and put its value in IncidentID.

As part of the payload, there is only the incident ID, which is not so
helpful. So, we are going to call the CAP service to retrieve all the
information about this specific incident.

In the toolbar, click on the Participant button and choose Receiver.

![](.//Part4Images/image10.png)

Place it below your Integration Process and name it CAPservice.

![](.//Part4Images/image11.png)

The iFlow will call this CAP service. So, let's click on the Call button
from the toolbar. Select External Call and then Request Reply.

![](.//Part4Images/image12.png)    ![](.//Part4Images/image13.png)

Place it between Content Modifier 1 and End, just above the CAPservice
receiver.

![](.//Part4Images/image14.png)

> :information_source: **Note that you can move the elements around and resize the Integration Process box!**<br/>

Click on Request Reply 1, click on the connector arrow.

![](.//Part4Images/image15.png)

Drag and drop the arrow on CAPservice.

![](.//Part4Images/image16.png)

Choose HTTP as Adapter Type.

![](.//Part4Images/image17.png)

Open the Connection tab and fill in the following information:

Address:
| Tenant | Address | 
| ------------- | ------------- |
| A | **ht<span>tps://</span>incidentsmaster-srv-noisy-bongo.cfapps.eu10.hana.ondemand.com/incident/SafetyIncidents(\${header.IncidentID})** | 
| B | **ht<span>tps://</span>incidentsmaster-srv-anxious-quokka.cfapps.eu10.hana.ondemand.com/incident/SafetyIncidents(\${header.IncidentID})** | 
| C | **ht<span>tps://</span>incidentsmaster-srv-patient-lynx.cfapps.eu10.hana.ondemand.com/incident/SafetyIncidents(\${header.IncidentID})** | 
| D | **ht<span>tps://</span>incidentsmaster-srv-sleepy-camel.cfapps.eu10.hana.ondemand.com/incident/SafetyIncidents(\${header.IncidentID})** |

Method: **GET**<br/>
Authentication: **Client Certificate**<br/>
Private Key Alias: **CAPservice\_certif**

![](.//Part4Images/image18.png)

With this request, the generic CAP service that was created for you for
this session is going to be called. The request will get the information
about the specific SafetyIncident. Note that the URL contains the
Message Header IncidentID that you have created in the previous step.

Client Certificate is being used to connect to the external
service. This has been preconfigured for you for this session. You can
have more information about this in the following SAP Note:
<https://launchpad.support.sap.com/#/notes/2715005>.<br/>

<br/>At this stage, your iFlow is done and should look like this:

![](.//Part4Images/image19.png)

It's a good place to save your awesome work! Click on the Save button.

![](.//Part4Images/image20.png)

You can now deploy your iFlow.

![](.//Part4Images/image21.png)

Confirm the two next popups.

![](.//Part4Images/image26.png)    ![](.//Part4Images/image27.png)

To check if your deployment was successful, click on the Operations view
button.

![](.//Part4Images/image22.png)

This is the place where you basically configure all your Integration
service content. We won't spend too much time on this page today. But at
least you know how to access it. Note that this is where you can
configure the credentials and keys to have access to external endpoints
such as the CAP service, the SFTP server or the SCP Enterprise Messaging
service.

![](.//Part4Images/image23.png)

Click on the first tile of the Manage Integration Content.

![](.//Part4Images/image24.png)

On this page, search for your iFlow.

![](.//Part4Images/image25.png)

Once you find it, you are going to see that its status is **Starting**.

After a few minutes, if everything has been done properly, the status
should change to **Started**. Don't hesitate to refresh the page to
check.

Congratulations! You are done for this session.

Let's test what you have done today!

[Next](Part%205%20-%20Testing%20the%20Safety%20Incident%20Integration.md)
