# Create a new application from a template

After you successfully created a new SAP Fiori dev space in Business Application Studio, you can now create a SAP UI5 applications. To reduce development time you will be leveraging one of the preexisting templates available.

## Step 1: Create new project

1. In SAP Business Application Studio, open the SAP Fiori dev space you created by clicking the name of the dev space.

![Open SAP Fiori dev space](Part1Images/OpenSpace.png)

![Dev space](Part1Images/SAPBASProjectHome.jpg)

2. Open **View > Find Command...** and select **CF: Login to cloud foundry**.

![Open Command](Part1Images/10.FindCommand.png)

![cf Command](Part1Images/11.cfCommand.png)

3. The API endpoint should be automatically inserted (https://api.cf.eu10.hand.ondemand.com), press *Enter*

![cf API](Part1Images/12.ApiSelection.png)

4. When prompted for user credentials, please use the platform user assigned to your group. You can check this user in the TA Landing Page.

![Platform User](Part1Images/12.1.LandingPage.png)

![cf User ID](Part1Images/13.UserID.png)

![cf Password](Part1Images/14.Password.png)

5. For the next two prompts (Organization and Space) leave the default values and press *Enter*

![Organization CF](Part1Images/15.Organization.jpg)

![Space CF](Part1Images/16.space.jpg)

6. After these set of steps, you should see a connected message at the bottom as seen here:

![Success CF](Part1Images/18.SuccessCF.png)

## Step 2: Create new project

1. Create a new SAP Fiori project from a template.

![Create project from template](Part1Images/CreateProjectfromTemplate.jpg)

2. Select the Fiori Project template and click **Next**.

![Create project from template](Part1Images/SelectFioriProject.jpg)

3. For Target Running Environment, select the following, and click **Next**.

Step | Parameter | Value
------------ | ------------- | -------------
A | Select the target running environment | **Cloud Foundry**
B | Select the template you want to use | **SAP Fiori Worklist Application ODataV4**

![Create project from template](Part1Images/CreateWorklist.png)

4. For Project Name, enter **IncidentReport_P00XXXX**, and click **Next**.

> Note: Don't forget to replace *P00XXXX* with you P number.

![Project Name](Part1Images/ProjectName.png)

5. For HTML 5 Application Runtime select **Standalone Approuter**, and click **Next**.

![Application Runtime](Part1Images/AppRuntime.png)

6. For Basic Attributes select the following, and click **Next**.

> Note: Don't forget to replace *P00XXXX* with you P number.

Step | Parameter | Value
------------ | ------------- | -------------
A | Enter an HTML5 module name | **IncidentReport*P00XXXX***
B | Do you want to add authentication | **No**
C | Enter a namespace| **ns**

![Basic Attributes](Part1Images/BasicAttributes.png)

7. For Application Title select the following, and click **Next**.

Step | Parameter | Value
------------ | ------------- | -------------
A | Title | **Incident Report**
B | Description | **Display and create incidents in SAP HANA**
C | Application Component Hierarchy | _empty_
D | Choose if your app should run in SAP Fiori Launchpad or standalon | **Standalone App (optimized for individual deployment)**
E | Select batch mode corresponding  to selected oData Service | **Auto: Requests are grouped in one batch request**
  
![Application Title](Part1Images/ApplicationTitle.png)

8. For Consume Services select the following, and click **Next**.

> Note: When selecting a source, type *master* and replace the x with the your platform user group (a, b or c).

Step | Parameter | Value
------------ | ------------- | -------------
A | Select a system | **My SAP systems**
B | Select a source | **master_x_incidentservice** 
C | Enter a path to the oData service | **/incident/**

![Choosing Providers](Part1Images/Providers0.1.png)
![Providers](Part1Images/Providers.png)

9. For Object Collection select the following, and click **Next**.

Step | Parameter | Value
------------ | ------------- | -------------
A | Object Collection | **SafetyIncidents**
B | Object Collection ID | **ID**
C | Object Title | **title**
D | Object Numeric Attribute | **createdBy**
E | Object Unit of Measure | **priority_code**
  
![Object Collection](Part1Images/ObjectCollection.png)

10. After the new project is successfully created you will see a confirmation message. Click **Open in New Workspace** in the notification

![Creation Success](Part1Images/ProjectSuccess.png)

> Note: If you don't see the confirmation message, click **File > Open Workspace**, select your new project and click **Open**

![Open Workspace](Part1Images/OpenWorkspace.png)

![Select Space](Part1Images/SelectSpace.png)

## Step 3: Add a Destination Service Instance in Your Space

A destination service instance is required for test running the app.

1. Open a new terminal.

![Terminal](Part1Images/newterminal.png)

2. Create a new destination service called **dest_IncidentReport**_P00XXXX. 
Copy the code below and paste it in your **Terminal**, then press *Enter*.

> cf create-service destination lite **dest_IncidentReport**_P00XXXX

![Create Destination](Part1Images/createDestinationCommand.png)

![Destination Created](Part1Images/OkCreationDest.png)

## Step 4: Test run the application

Run your new application to test it.

1. Open the **Run Configurations** (Play icon on the left-hand side) view and click **+** and select **IncidentReport**.

![Create Run Configuration](Part1Images/RunConfiguration.png)

![Create Run Project](Part1Images/runcconfig_selectProject.png)
 
 2. Select **index.html** and **latest**
  
![Run Index.html](Part1Images/IndexRunconfig.png)
![Select latest](Part1Images/latestRunconfig.png)
 
 3. If you are asked to enter a name, leave the default value and press **Enter**.
 
 ![Expand configuration](Part1Images/19.NameRun.png)
 
 4. Expand the run configuration to display the services that can be bound.
  
 ![Run name](Part1Images/ExpandConfiguration.png)
 
 > SAP Business Application Studio allows you to test your app with resources.

 5. To bind to the destination service, Hover over Data Source (Destination) and click the bind icon to the right of the Destination Service.
 
 In the destinations list, type *master* and choose the *master_x_incidentservice* where x should be replaced by your platform user group (a, b, c or d).
 
 ![Bind Destination](Part1Images/bindDestination.png)
 
 ![Select Destination](Part1Images/SelectDestination.png)
 
> Once the destination service has been bound, the Bind icon turns green.

> To unbind the destination service, click the Unbind icon.

![Destination Binding](Part1Images/DestinationBindingSuccess.png)

6. Hover over the run configuration and click the Run Module icon.

**IMPORTNAT NOTE: If when you run the app you get an error meesage** _Attribute program does not exist ({path})_**, please open a new Terminal on Terminal > New Terminal and enter the two following commands:**

- _cd incidentreport-p00XXXX-approuter_ **(Replace XXXX with your P number)**
- _npm install_

**Then press Run Module icon again**

![Run Test](Part1Images/RunTest.png)

7. Wait for the notification saying _"A service is listening to port **6004**"_. Click the notification button.

> The left side panel changes to the debug pane and the status bar color changes to orange to indicate that the app is running in debug mode.

> If you are running the app for the first time, the button in the notification will say Expose and Open. Otherwise it will say Open in New Tab.

![Open Test](Part1Images/OpenTest.png)

> You may optionally add a port description.

![Optional Description](Part1Images/DescriptionRunTest.png)

The app will open in a new tab and a list of incidents is displayed.

![App Running](Part1Images/TestRunning.png)


Congratulations!. You have successfully completed part 1.

[Next Exercise](Part%202%20-%20Modify%20UI5%20App.md)
