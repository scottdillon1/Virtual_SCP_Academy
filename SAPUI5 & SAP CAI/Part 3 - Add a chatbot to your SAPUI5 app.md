# Add a chatbot to your SAPUI5 Application

You are now able to visualize and create indicents in a SAPUI5 application. By adding a chatbot you will enable a new channel to interact with your business applications.

In this part, we will create a chatbot by leveraging SAP Conversational AI and embed it into your SAPUI5 application.

> Note: For this execise you will require a service URL. Please write down the *(YOUR SERVICE BASE URL)* that corresponds to your platform user

Platform User | (YOUR SERVICE BASE URL)
------------ | ------------- 
 platformA | **incidentsmaster-srv-noisy-bongo.cfapps.eu10.hana.ondemand.com**
 platformB | **incidentsmaster-srv-anxious-quokka.cfapps.eu10.hana.ondemand.com**
 platformC | **incidentsmaster-srv-patient-lynx.cfapps.eu10.hana.ondemand.com**
 platformD | **incidentsmaster-srv-sleepy-camel.cfapps.eu10.hana.ondemand.com**


## Step 1: Create a SAP Conversational AI account

We will first create a SAP Conversational AI account. If you already have one, please skip this step.

1. Access to https://cai.tools.sap/ and click on **SIGN UP**

![Sign up button](Part3Images/0.1.SignUpButton.png)

2. Fill out the form with your corporate *Email, an unique Username and Password* anc click on **CONTINUE TO SIGN UP** and then click on **ACCEPT AND REGISTER** at the bottom of your screen

![Sign up Form](Part3Images/0.2.FillOutForm.png)
![Accept and Register](Part3Images/0.3.AcceptandRegister.png)

3. You will receive a verification email, click **Click to validate your email**.

![Sign up Form](Part3Images/0.4.ConfirmEmail.png)

4. Access the TA Landing Page https://virtual-scp-roadshow.cfapps.eu10.hana.ondemand.com/ (open it in a different tab).

For this scenario, we will be using an independent SAP Conversational AI tenant. Click on **Let's Go** in the Conversational AI Title. 

![Open Conversational AI](Part3Images/1.OpenConversaionalAI.png)

5. Log in to SAP Conversational AI by clicking **Log in** at the upper right-hand corder of your screen.

![Log in SAP CAI](Part3Images/5.LoginSAPCAI.png)

![Log in Form](Part3Images/5.1.LoginForm.png)

## Step 2: Create a new chatbot

1. We will create a new chatbot. Click **START WITH A TEMPLATE**

> Note: If you have previously created a bot in your account, you won't see the **START WITH A TEMPLATE** button. Please click on **+ NEW BOT** at the upper right hand corner of your screen

![Log in SAP CAI](Part3Images/6.NewBot.png)

2. There are 2 types of chatbot that can be created *Perform Actions* and *Retrieve Answers*. For this scenario we will create a standard chatbot therefore, we will select *Perform Actions*.

Select *Greetings* as predifined skill. This will create a few intents to handle common greetings.

![Create New Chatbot 1](Part3Images/7.NewProjectSetup1.png)

For section 3, 4 and 5, please use the information below:

Parameter | Value
------------ | ------------- 
 name | **incidents-scp**
 Description | **Display and create incidents**
 Default language | **English**
 Type of data | **Non-personal**
 End users | **Non-vulnerable**
 Bot visibility | **Private**

![Create New Chatbot 2](Part3Images/7.NewProjectSetup2.png)

![Create New Chatbot 3](Part3Images/7.NewProjectSetup3.png)

## Step 3: Create new intents

An intent is a box of expressions that mean the same thing but are constructed in different ways. Intents are the heart of your bot’s understanding. Each one of your intents represents an idea your bot is able to understand.

1. Under **Train** tab, select **Intents** and click **+ CREATE**. Name it  *viewincidents* and click *CREATE INTENT*
 
![Create New Intent](Part3Images/8.CreateIntents.png)

![Name Intent](Part3Images/9.NameIntent.png)

2. We will train the intent with some sample expressions of how an user would ask to *view intents*.

Open intent *viewincidents* and add the expression samples below or add your own (there has to be at least 3 expressions), every time you add a new expression you have to press *Enter*:

 | Expression 
 | ------------- 
 *What are the latest incidents*
 *Show me the most recent incidents*
 *show me latest incidents*

>
  If you want to improve the chatbot's accuracy, you can add more expressions (~10 for a PoC and ~50 for production). 

![Train Intent](Part3Images/10.TrainIntent.png)

![Final Training](Part3Images/11.FinalTraining.png)

3. Repeat steps 1 and 2 to create a new intent *createincident*

 | Expression 
 | ------------- 
 *I want create an incident*
 *I need to create a new incident*
 *Create incident*


![Create Intent](Part3Images/12.CreateIncidentTraining.png)

## Step 4: Create new entities

An **entity** is a keyword that is extracted from an expression. SAP Conversational AI automatically detects 28 different entities such as Datetime, Location, Person, and so on. We call them gold entities. However, you’re not limited to these gold entities. You can also tag your own custom entities to detect keywords depending on your bot’s context, such as subway stations if you’re building a transport assistant.

1. Go to **Entities** tab and click **CREATE AN ENTITY**

![Create Entity](Part3Images/13.CreateEntity.png)

2. Name the new entity *CATEGORY_CODE* and select *Restricted entity* and click **CREATE**.

> A **restricted** custom entity is used if you have a strict list of words to detect and don’t need automatic detection of the entity. No  word can be recognized as an entity if it doesn’t appear in a closed list of synonyms. For example, you build a bot to help your customers order pizza. You want to detect all pizza names that your restaurant offers

> A **free** custom entity is used when you don’t have a strict list of values and want machine learning to detect all possible values. For  example, you want to detect book titles.

![Configure Entity](Part3Images/14.CreateCategory_CodeEntity.png)

3. Similarly to intents, entites need to be trained with expressions. In this case, we need to enter exactly those phrases we want to extract from the conversation. 

Access the new entity and add all the expressions below:

| Expression 
| ------------- 
 *telephony*
 *software*
 *security*
 *inquiry*
 *hardware*
 *database*

 ![Train Entity](Part3Images/15.TrainEntityCategoryCode.png)
 
 4. Repeat steps 1-3 to create a new entity called *PRIORITY_CODE*
 
 | Expression 
 | ------------- 
 *low*
 *medium*
 *high*
 *critical*

 ![Priority Entity](Part3Images/16.TrainEntityPriorityCode.png)

## Step 5: Create skills

A **skill** is a block of conversation that has a clear purpose and that your bot can execute to achieve a goal. It can be as simple as the ability to greet someone, but it can also be more complex, like giving movie suggestions based on information provided by the user.

1. Click on **Build** tab and then on the left side of your screen click on **Create skill** and name it **queryincidents** and choose skill type **BUSINESS**

> You can create three different types of skills:
 
> **Business**: Skills that are closely linked to the core purpose of your bot.
 **Floating**: Smalltalk skills, that is, topics that are not closely related to the core purpose of your bot.
 **Fallback**: Skill that is triggered if no other skill is triggered. Your bot can only have one fallback skill. So when you add a skill to your bot, the skill type Fallback is offered only if your bot doesn’t already have a fallback skill.

 ![Open Build Tab](Part3Images/17.OpenBuildTab.png)
 
 ![Create Skill](Part3Images/18.CreateSkillqueryincidents.png)
 
 2. Click on the new skill and then click on **Triggers**.
 
 > Triggers are conditions that determine whether the bot should execute the current skill or not.
 
 ![Open Skill](Part3Images/19.OpenSkillqueryIncidents.png)
 
 ![Open Triggers](Part3Images/20.OpenTriggersTab.png)
 
 3. Click on the line next to *If* and select *@viewincidents* which is the intent that will trigger this skill, then click *SAVE*.
 
 ![Select Trigger](Part3Images/21.SelectViewindicentsIf.png)
 
 ![Save Trigger](Part3Images/22.SaveTrigger.png)
 
 4. Click on **Actions** tab then **ADD NEW MESSAGE GROUP > ADD CONDITION to trigger messages** and select *@viewincidents* once again, then click on **SAVE**.
 
 > An **action** is something that your bot executes at a specific point when executing a skill.
 
 ![Open Actions](Part3Images/23.OpenActionsTab.png)
 
 ![Add Condition](Part3Images/24.AddConditioninAction.png)
 
 ![Save Trigger](Part3Images/24.1.SaveTriggerAction.png)
   
 5. Our first action will be to consume our oData service. Click on **CONNECT EXTERNAL SERVICE > CONSUME API SERVICE**
 
  ![Add External Service](Part3Images/25.ConnectAPI.png)
  
 6. We will make a *GET* call to our incident service. Select *GET* and specify the following URL. 
 
 Platform User | (YOUR SERVICE BASE URL)
------------ | ------------- 
 platformA | **incidentsmaster-srv-noisy-bongo.cfapps.eu10.hana.ondemand.com**
 platformB | **incidentsmaster-srv-anxious-quokka.cfapps.eu10.hana.ondemand.com**
 platformC | **incidentsmaster-srv-patient-lynx.cfapps.eu10.hana.ondemand.com**
 platformD | **incidentsmaster-srv-sleepy-camel.cfapps.eu10.hana.ondemand.com**
 
 > URL: https://(YOUR SERVICE BASE URL)/incident/SafetyIncidents?$expand=incidentPhotos&$top=3&$orderby=createdAt%20desc
 
 ![Basic Authentication](Part3Images/26.BasicAuthentication.png)
 
 7. Go to **Headers** tab and add the following: 
  
 Parameter | Value
------------ | ------------- 
 Accept | ```*/* ``` 
 Host | **(YOUR SERVICE BASE URL)** (Only base URL without *http://*)
 
 ![Add Headers](Part3Images/28.AddHeaders.png)
 
 8. Click on **Response** and set the Namespace as **incidents**. Here is where the API response will be stored. 
 
 Click on **SAVE**.
 
![Set Namespace](Part3Images/29.ResponseNamespace.png)
 
 9. We will add a new response to inform users that their request is being processed. Click on **SEND MESSAGE > Text** and add a response text i.e. *Showing top 3 incidents...*
 
 ![Sen Message](Part3Images/30.AddSendMessage.png)
 
 ![Text](Part3Images/31.AddTextAction.png)
 
 Click on **SAVE**
 
 ![Add Response](Part3Images/32.WriteTextandSave.png)
 
 10. We will add a new message but now we will select a *List* item. Click on **SEND MESSAGE > List**
 
 ![Add List Message](Part3Images/33.AddListMessage.png)
 
 11. We will show the 3 latest incidents in our *List* item. To access the oData response we can use *{{api_service_response.(Namespace).body.value.(parameter)}}*. 
 
 Please add 3 items to the list by clicking twice on **ADD AN ITEM**, enter the values from the table below and click **SAVE**.
 
 List Item |Parameter | Value
------------ |------------ | ------------- 
 1 | Title | **{{api_service_response.incidents.body.value.0.title}}**
 1 | Subtitle | **Priority: {{api_service_response.incidents.body.value.0.priority_code}}. {{api_service_response.incidents.body.value.0.description}}**
 1 | Image url | **https://(YOUR SERVICE BASE URL)/incident/IncidentPhotos({{api_service_response.incidents.body.value.0.incidentPhotos.0.ID}})/image**
 2 | Title | **{{api_service_response.incidents.body.value.1.title}}**
 2 | Subtitle | **Priority: {{api_service_response.incidents.body.value.1.priority_code}}. {{api_service_response.incidents.body.value.1.description}}**
 2 | Image url | **https://(YOUR SERVICE BASE URL)/incident/IncidentPhotos({{api_service_response.incidents.body.value.1.incidentPhotos.0.ID}})/image**
 3 | Title | **{{api_service_response.incidents.body.value.2.title}}**
 3 | Subtitle | **Priority: {{api_service_response.incidents.body.value.2.priority_code}}. {{api_service_response.incidents.body.value.2.description}}**
 3 | Image url | **https://(YOUR SERVICE BASE URL)/incident/IncidentPhotos({{api_service_response.incidents.body.value.2.incidentPhotos.0.ID}})/image**
 
 > Note: You might notice a length error (*-52*) next to subtitle field. You can omit it because the expected response will be shorter than the maximum length allowed.
 
 ![Add oData Response](Part3Images/34.FillOutListControl.png)
  
 12. Go back to **Build** tab by clicking on **incidents-scp** at the top left-hand corner, and create a new skill (type *Business*) called *addtitle*. This skill will be triggered automatically from other skill.
 
 ![Go Back](Part3Images/35.GoBackSkills.png)
 
 ![Create Skill](Part3Images/35.1.CreateTitleSkill.png)
 
 13. Open the new skill by clicking *addtitle*, go to triggers tab and after if sentence add **_memory.asktitle** -> **is-present** and press enter to save your changes
 
 ![Trigger Title](Part3Images/35.1.1.triggeraddtitle.png)
 
 14. Go to **Actions** tab and at the center of your screen, click on **ADD NEW MESSAGE GROUP** and then **UPDATE CONVERSATION > EDIT MEMORY**.

 ![Update Conversation](Part3Images/35.1.2.1.Addmessagegroup.png)
 
 ![Update Conversation](Part3Images/35.1.2.AddMemoryField.png)
 
 Under *Set memory filed* add the data shown below:
 
 Your memory key | null
------------ | ------------- 
 title | **"{{nlp.source}}"**
 
 ![Update Conversation](Part3Images/35.1.3.MemorySet.png)
 
 ![Update Conversation](Part3Images/35.1.4.AddJson.png)
 
 Click **SAVE**
 
 ![Update Conversation](Part3Images/35.1.5.NewMemoryTitle.png)
  
 15. Right below the recently created condition click on **ADD NEW MESSAGE GROUP > CONNECT EXTERNAL SERVICE > CONSUME API SERVICE** and add the following URL. **DO NOT CLICK ON SAVE YET**:
 
 
 Platform User | (YOUR SERVICE BASE URL)
------------ | ------------- 
 platformA | **incidentsmaster-srv-noisy-bongo.cfapps.eu10.hana.ondemand.com**
 platformB | **incidentsmaster-srv-anxious-quokka.cfapps.eu10.hana.ondemand.com**
 platformC | **incidentsmaster-srv-patient-lynx.cfapps.eu10.hana.ondemand.com**
 platformD | **incidentsmaster-srv-sleepy-camel.cfapps.eu10.hana.ondemand.com**
 
 > URL: https://(YOUR SERVICE BASE URL)/incident/SafetyIncidents
 
 ![Add Action](Part3Images/46.AddSafetyIncidentsAPI.png)
 
 > Note: We don't need to add any specific *Condition* to trigger this actions since it's the only one to be executed
 
 16. Go to **Headers** tab and add the headers below. **DO NOT CLICK ON SAVE YET**:
  
  Header | Value
------------ | ------------- 
 Content-Type | **application/json** 
 Accept | ```*/* ``` 
 Host | **(YOUR SERVICE BASE URL)**
 
 ![Add Headers](Part3Images/48.API1Headers.png)
 
 17. In **Body** tab, we will add the payload to be sent to our end-point.**DO NOT CLICK ON SAVE YET**. 
 
 > 
 	{
 		"title": "{{memory.title}} - CAI",
		"description": "{{memory.category.value}}: New incident created",
		"category_code": "{{memory.category.value}}",
		"priority_code": "{{memory.priority.value}}",
		"assignedIndividual_ID": "067460c5-196c-4783-9563-ede797399da8",
		"incidentStatus_code":"new"
	}
 
  ![Add Body](Part3Images/49.AddBodyAPI1.png)
  
  As you can see in the payload to be sent, we are using *{{memory.(entity).value}}* to acces to values entered by the user.
  
  18. Go to **Response** and change the **Namespace** to *createstatus*. Then click **SAVE**
  
  ![Add Response](Part3Images/50.NameSpaceAPI1.png)
  
  19. Within the same action click **CONNECT EXTERNAL SERVICE > CONSUME API SERVICE**, leave authentication as **No authentication**  and use the information below for **Headers**, **YOUR SERVICE BASE URL**, **Body** and **Response** tabs and then click **SAVE**.
  
    
 Platform User | (YOUR SERVICE BASE URL)
------------ | ------------- 
 platformA | **incidentsmaster-srv-noisy-bongo.cfapps.eu10.hana.ondemand.com**
 platformB | **incidentsmaster-srv-anxious-quokka.cfapps.eu10.hana.ondemand.com**
 platformC | **incidentsmaster-srv-patient-lynx.cfapps.eu10.hana.ondemand.com**
 platformD | **incidentsmaster-srv-sleepy-camel.cfapps.eu10.hana.ondemand.com**
 
 > **Headers**
 
 Header | Value
------------ | ------------- 
 Content-Type | **application/json** 
 Accept | ```*/* ``` 
 Host | **(YOUR SERVICE BASE URL)**
 
 > **URL, Body and Response**
 
 Tab | Value
------------ | ------------- 
URL |  https://(YOUR SERVICE BASE URL)/incident/IncidentPhotos
Body | { "safetyIncident_ID": "{{api_service_response.createstatus.body.ID}}", "imageType": "image/png"  }
Response | photostatus
 
![Add Headers](Part3Images/48.API1Headers.png)

![Add Body](Part3Images/51.API2Body.png)
 
![Add Response](Part3Images/52.NamspaceAPI2.png)
 
 20. Add a new meesage by clicking **SEND MESSAGE > Text** and paste the text below and click **SAVE**:
 
 > 	Incident created 
 	Date: {{api_service_response.createstatus.body.createdAt}}
	Title: {{api_service_response.createstatus.body.title}}
	ID: {{api_service_response.createstatus.body.ID}}
 
 ![Send Message](Part3Images/52.1.AddSendMessage.png)
 
 ![Add Message](Part3Images/53.ConfirmationMessage.png)
 
 21. Lastly, we will reset the chatbot's memory so it can be ready for the next user interaction. Click on **UPDATE CONVERSATION > EDIT MEMORY** then select **Reset all memory** checkbox and click **SAVE**
 
 ![Edit Memory](Part3Images/54.EditMemoryAction.png)
 
 ![Reset Memory](Part3Images/55.ResetMemory.png)
 
 22. Once again, please follow steps 1 to 3, create a new skill called *createincident* and select *@createincident* as the trigger.
 
  ![Create Skill](Part3Images/36.CreateSkillCreate.png)
  
  ![Add Trigger](Part3Images/37.TriggerCreateIncident.png)
 
 23. We will define some requirements since we need some mandatory information to create a new incident.
 
 Select *#category_code* and assign name *category* then press enter and click on *+*
 
 > Requirements are either intents or entities that your skill needs to retrieve before executing actions. Requirements are pieces of information that are important in the conversation and that your bot can use, for example, the user’s name or a location.
 
 ![Add Entity](Part3Images/38.SelectEntityCategory.png)
 
 ![Add Requirement](Part3Images/39.AddNewRequirement.png)
 
 24. Add another requirement with entity *#priority_code* as *priority*
 
 ![Add Requirement](Part3Images/40.AddPiorityCodeEntity.png)
 
 25. If a requirement is missing, we need to define some replies to ask the user for the missing information. Expand the first trigger menu and click on **+ NEW REPLIES** for *if **#category** is missing* and select **SEND MESSAGE > Quick Replies**.
 
 ![Add New Replies](Part3Images/41.IfCatMissingReply.png)
 
 ![Add Quick Replies](Part3Images/42.SelectQuickReplies.png)
 
 26. Set text as **Please select an incident category** and add **6** replies with the folowing values:
 
 Quick reply title | Quick reply value
------------ | ------------- 
 Security | Security
 Software | Software
 Hardware | Hardware
 Telephony | Telephony
 Database| Database
 Inquiry | Inquiry
 
 Click on **SAVE** and then **Back**.
 
 ![Add Quick Replies](Part3Images/43.AddRepliesCategory.png)
 
 ![Add Quick Replies](Part3Images/44.CategoryRepliesFull.png)
 
 27. Repeat the 2 previous steps for the next trigger (*#priority_code*). Click on *if #priority_code is missing* and set text as **What's the incident's priority?** and add the following quick replies:
 
 Quick reply title | Quick reply value
------------ | ------------- 
 Low | Low
 Medium | Medium
 High | High
 Critical | Critical
 
 ![Add Missing Response](Part3Images/45.PriorityRepliesFull.png)
 
 28. Under *priority* entity, click on **+ NEW REPLIES** for *if **#priority** is complete*, then select **SEND MESSAGE > Text**, add the text below and click on **SAVE**
 
 > Please add an incident's title:
 
 ![Add Send Message](Part3Images/45.0.1.SendMessage.png)
 
 ![Text](Part3Images/45.0.2.SelectText.png)
 
 ![Save](Part3Images/45.0.3.ClickonSave.png)
   
 29. Below the previous reply, click on **UPDATE CONVERSATION > EDIT MEMORY** and add the values from the table below and click on **SAVE**.
 
> This will add a value to the chatbot's memory called *asktitle*, which will trigger skill *addtitle*. 
 
 Your memory key | null
------------ | ------------- 
 asktitle | **true** 
 
 ![Save](Part3Images/45.0.4.adDmemoryField.png)
 
 ![Save](Part3Images/45.0.5.SetAskTitle.png)
 
 30. Now, click on **UPDATE CONVERSATION > GO TO** and after **Redirect to**, please select *addtitle* skill and click on **Wait for user input** and finally click on **SAVE** and then **Back**.
 
 ![Go to Another Skill](Part3Images/45.0.6.Goto.png)
 
 ![Redirect To](Part3Images/45.0.7.SaveGoto.png)
  
 ## Step 6: Test chatbot
 
 1. Open the **CHAT WITH YOUR BOT** window at the bottom right corner of your screen
 
  ![Reset Memory](Part3Images/56.OpenTestChat.png)
 
 2. Test your chatbot, you can use any of the phrases below:
 
  a. Hello
  b. Show me latest incidents
  c. Create incident
  
 > Note: You don't have to use the exact same phrases, you can try to use alternative phrases with the same meaning and make typos to test your chatbot's uderstanding
 
 ![Testing](Part3Images/57.ChatbotTest.gif)
 
 ## Step 7: Integrate your chatbot with your SAPUI5 application
 
 1. We need first to create a new **User Channel**. In your SAP CAI main screen, please go to **Connect > Users channels** and click the **+** button on the right-hand side of **Webchat** channel.
 
 ![Adding a Channel](Part3Images/58.ConnectTabCreateChannel.png)
 
 2. Please customize you new channel. You can choose a color, a logo and  an initial onboarding message.
 
 ![Chat Color](Part3Images/59.ColorScheme.png)
 
 ![Chat Header](Part3Images/60.HeaderCustomization.png)
 
 ![Chat Message Settings](Part3Images/61.OnboardingMessage.png)
 
 ![Chat Call to Action](Part3Images/62.CallToAction.png)
 
 3. In step 5 **Global settings** please make sure you select **Not saved** UNDER **Conversation saved for**, this will delete you conversation every time you refresh your screen.
 
 After you are done, please click **CREATE**
 
 > Note: You can name your channel as you wish
 
 ![Chat Global Settings](Part3Images/63.GlobalSettings.png)
 
 4. Please write down the *channelId* and *token* and click **SAVE CHANGES**
 
 ![Save script](Part3Images/64.WebchatScript.png)
 
 5. Go back to Business Application Studio and open **IncidentReportP00XXXX > webapp > Component.js** file.
 
 ![Open Component.js](Part3Images/65.OpenComponentjs.png)
 
 6. Inside **Component.js** file, add the following code (**Please replace YOUR CHANNEL ID and YOUR TOKEN for the corresponding values gotten in point number 4**):
 
 After *this.getRouter().initializa();*
 
```javascript 
	//Initialize chatbot view
  	this.renderRecastChatbot();
``` 
 Right after the closing Brace of init function *},*:
 
```javascript 
	renderRecastChatbot: function () {
			if (!document.getElementById("cai-webchat")) {
				var s = document.createElement("script");
				s.setAttribute("id", "cai-webchat");
				s.setAttribute("src", "https://cdn.cai.tools.sap/webchat/webchat.js");
				document.body.appendChild(s);
			}
			s.setAttribute("channelId", "YOUR CHANNEL ID");
			s.setAttribute("token", "YOUR TOKEN");
		},
```
![Add chatbot](Part3Images/66.AddChatbotCode.png)

> Note: Don't forget to save your changes by clicking **File > Save All**

## Step 8: Deploy your application

1. In your project workspace, expand **IncidentReportP00XXXX** and right-click on **xs-app.json > Copy**

![Copy xs-app.json](Part2Images/CreateView/26.1.Copy_xs-json.png)

2. Go to **IncidentReportP00XXXX > webapp** and paste the *xs-app.json* by using *Ctrl + v*

![Paste xs-app.json](Part2Images/CreateView/26.2.Paste_xs-json.png)

3. Scroll down and open **mta.yaml** file

![Open mta](Part2Images/CreateView/26.0.OpenMta.png)

4. In order to optimize resources, we will adjust the memory usage. In **mta.yaml** Cchange **memory** value to **128M**

![Change Memory](Part2Images/CreateView/26.ChangeMemory.png)

> Note: Don't forget to save your changes by clicking **File > Save All**

5. Click to **Terminal > New Terminal**.

A new Terminal will be open at the bottom of your screen.

![Open Terminal](Part2Images/CreateView/27.OpenTerminalBuild.png)

6. Enter the command below and press enter.

>	mbt build -p=cf

The build process creates a multi target archive (MTAR) file in your project that packages all the project modules for deployment. You can find the MTAR file in the */mta_archive*.

![Run Building Command](Part2Images/CreateView/28.RunBuildingCommand.png)

![Building Done](Part2Images/CreateView/28.1.BuildFinished.png)

7. Right click on the mtar file and click **Deploy MTA Archive**

![MTA file](Part2Images/CreateView/29.OpenMTA_Archives.png)

![Deploy MTA](Part2Images/CreateView/30.ClickDeployMTA.png)

8. The deployment process takes a few minutes. You can see that the deployment is still in progress in the Task: Deploy console at the bottom right of your screen.

When the deployment process is complete, you will se the app URL in the console. Copy and paste in a new browser tab and append **/nsIncidentReportP00XXXX/index.html** (don't forget to replace P00XXXX with your P user)

![Deployment Finished](Part2Images/CreateView/31.FinalBuildURL.png)

Congratulations! You have successfully completed part 3.

![Running test mode](Part3Images/67.AppRunningChatbot.gif)

[Next Exercise](Part%204%20-%20(Optional)%20Connect%20your%20application%20to%20your%20own%20service.md)
