Part 3: Connect your iFlow
==========================

Please make sure that everything has been done properly from [Part 2](Part%202%20-%20SCP%20Integration%20-%20Create%20your%20iFlow.md)
before going further.

In this step, you are going to setup your iFlow so that it can receive
the payload when an incident is published to a queue through AMQP
protocol. Also, you will setup the SFTP server connection to write the
incident details in a file.

Click on Edit.

![](.//Part3Images/image1.png)

On the left, you can see that you have a component named Sender. This
represents from where the integration flow will be triggered. In your
case, it's going to be the SAP Cloud Platform Enterprise Messaging
service that will trigger your iFlow. So, click on the Sender and rename
it **EM**.

![](.//Part3Images/image2.png)

Similarly, the iFlow is going to write the result of its processing in a
file hosted in an SFTP server. So, you can rename the Receiver component
to **SFTPserver.**

![](.//Part3Images/image3.png)

Now, we need to establish a link between EM and our Integration Process
and between our Integration Process and SFTPserver. You should have
noticed the Start and End inside of your Integration Process. By
default, Start and End Messages are created for you and we are going to
keep them in this exercise. However, be aware that you can change them.
If you click on the Event button in the toolbar on the left, you will
see a list of all the possible ways to start/end an iFlow. It could be
started/ended by triggering an event, it could de started periodically
(with a timer), etc.

![](.//Part3Images/image4.png)

Let's link EM with the Start Message. Select EM.

![](.//Part3Images/image5.png)

Drag and drop the Connector arrow on the Start Message.

![](.//Part3Images/image6.png)

The service will ask you for the Adapter Type. Note that you have a lot
of preconfigured options to setup the connection between the Sender and
your iFlow. In this case, choose AMQP and then WebSocket.

![](.//Part3Images/image7.png)    ![](.//Part3Images/image8.png)

Now you have to configure this AMQP adapter. Click on the AMQP arrow if
it's not selected yet. You should see a configuration panel at the
bottom of the browser page. Open the Connection tab. And enter the
following information:

Host:
**enterprise-messaging-messaging-gateway.cfapps.eu10.hana.ondemand.com**<br/>
Port: **443**<br/>
Path: **/protocols/amqp10ws**<br/>
Authentication: **OAuth2 Client Credentials**<br/>
Credential Name: **EMSCred**<br/><br/>

> :information_source: **Where is this information coming from?**<br/><br/>
> The administrator of your SAP Cloud Platform tenant has access to the
Enterprise Messaging service instance information. This includes Service
Keys which allows you to make your iFlow subscribing to Enterprise
Messaging events in a secured way.
![](.//Part3Images/image11.png)
> For further information about Enterprise Messaging Service Keys, refer
to the following tutorial:
<https://developers.sap.com/tutorials/cp-enterprisemessaging-instance-create.html#306a3831-6530-4792-b4da-2f212c7f497e>.<br/><br/>
> EMSCred is an OAuth2 Client Credentials that has been preconfigured for
you in the SCP Virtual Roadshow Integration service instance. It
contains the clientid and the clientsecret to allow the secured
connection to the Enterprise Messaging service instance (as shown on the
previous screenshot).<br/><br/>
> For further information on how to create credentials in SAP Cloud
Platform Integration service, check the following tutorial:
<https://developers.sap.com/tutorials/cp-integration-consume-external-api.html#51176c0b-d5a0-4ed5-8cac-0b5991435bc8>.

<br/>Then, go to the Processing tab and enter **queue:sap/vr/A/PXXXXXXcpi**
as Queue Name. **It is very important that you replace PXXXXXX with your
own P-user here.** For further information on this queue name, please
refer to the [Part 1](Part%201%20-%20SCP%20Setup%20for%20Enterprise%20Messaging.md) of this session.

![](.//Part3Images/image12.png)

Now, let's connect the End Message with your SFTPserver. Select the End
Message.

![](.//Part3Images/image13.png)

Drag and drop the Connector arrow on the SFTPserver.

![](.//Part3Images/image14.png)

This time, choose SFTP as Adapter Type.

![](.//Part3Images/image15.png)

Select the SFTP arrow if it's not selected yet. Open the Target tab and enter the
following information:

Directory: **/GTM/PXXXXXX**<br/>
(This is the directory where you will find the created file after the
execution of your iFlow).

File Name: **\${header.IncidentID}.json**<br/>
(The created file will be a JSON file. The file name is a parameter that
we are going to create in a few minutes.)

Address: **cpta.sftp.solex.voracloud.sapcloud.io**<br/>
(This is the address of the FTP server.)

Authentication: **User Name/Password**

Credential Name: **cptafiles**<br/>
(As part of the SAP Cloud Platform Integration service, there is an application 
where you can save securely the credentials that you need in your integration 
tenant. cptafiles is a credential that as been created for you in this KeyStore 
before you work this exercise. More information here:
<https://developers.sap.com/tutorials/cp-integration-consume-external-api.html#51176c0b-d5a0-4ed5-8cac-0b5991435bc8>.)

![](.//Part3Images/image16.png)

It's a good time to save your work!

![](.//Part3Images/image17.png)

Great job! You are now ready to jump into Part 4!

[Next](Part%204%20-%20SCP%20Integration%20-%20Build%20your%20iFlow.md)
