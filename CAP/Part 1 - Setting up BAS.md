## Using the Business Application Studio to Create a CAP Application

Now we have our Business Application Studio installed, configured and ready for use, we should be looking at a screen that looks like this
![Business Application Stuidio](../Images/BAS_Start.jpg)

From here, you will select "New Project from Template".<br>
![CAP Template](../Images/CAPtemplate.jpg)

Select the Cloud Platform Business Application Project Generator.
![Select CAP Template](../Images/CAPtemplate2.jpg)

:point_right: You need to provide a name for the project, suggest you use **incidents_p00XXXX**.

**Did you include your username in the name of your project....you should**

Select the check box for "Hana".
![Select Options](../Images/templateoptions.jpg)

Behind the scenes, your project will be generated. Once complete, the screen will return and you will see a pop-up message box in the bottom right to open a workspace with your project, you need to Open the workspace with this pop-up to start work on your project.

![Select Workspace](../Images/CAPtemplate4.jpg)

The editor will reopen in the context of a new workspace and now you can begin work on your project. However, you will likely see in the bottom of the screen a message that says that the Space has not been set with Cloud Foundy. 
Why are we seeing this message? It's an information message indicating that currently your BAS installation has no idea how to deploy/connect to Cloud Foundry which is where we eventually want to deploy this application. So, by following through the next few steps we will get you connected to the appropriate Cloud Foundry instance.

Now we will connect your app studio to Cloud Foundry. For this connectivity to work, you will be using a different userid...a Platform User ID.
## For these steps only, please use the platform user assigned to your group.
- Users P005001 - P005030 Username -> platformA Password -> RoadShowA1 
- Users P005031 - P005060 Username -> platformB Password -> RoadShowB2 
- Users P005061 - P005090 Username -> platformC Password -> RoadShowC3 
- Users P005091 - P005120 Username -> platformD Password -> RoadShowD4 

![CF Space Not SEt](../Images/CFSpaceNotSet.jpg)

From there, you will use the menu at the top and select View -> Find Command as shown
![View Find](../Images/FindCommand.jpg)

From there, you will look for "CF Log into Cloud Foundry".
![Log Into CF](../Images/FindCommand2.jpg)

From there, the API endpoint should be automatically inserted into the text box (api.cf.eu10.hand.ondemand.com). 
![Log Into CF](../Images/FindCommand3.jpg)

Next, you will be prompted for user credentials...notice you will specify the userid mentioned above for your group (it's not an email address)
![Username](../Images/CFEmailAddress.jpg)

Now, you will enter the password specified above for your group
![Password](../Images/CFPassword.jpg)

Select the Cloud Foundry Organization, there should only be one unlike inthe screenshot :-)
![Log Into CF](../Images/FindCommand4.jpg)

Select the Cloud Foundry Space that is also auto-populated.
![Log Into CF](../Images/FindCommand5.jpg)

After these set of steps, you should see a connected message at the bottom as seen here:
![CF Space Set](../Images/CFSpaceSet.jpg)

Now we can start to create our first CAP Project.

[Next Exercise](Part2%20-%20Creating%20First%20CAP%20Project.md)





