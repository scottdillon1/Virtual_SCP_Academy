#  1. Building a Data Model

## Login into the SAC environment
Direct your Chrome browser to the following URL:
        <https://experienceacademy.us10.hanacloudservices.cloud.sap/sap/fpa/ui/app.html#;view_id=home>        

From the home icon (oddly shaped like a hamburger), Select **Create > Model**

![](.//media/image1.png)

:point_right: **Select "Get data from a datasource"**


![](.//media/image2.png)

:point_right: **Select "oData Services" from the right-hand side of the page. Please note all the connection types.**

![](.//media/image3.png)

:point_right: **From the drop down select "SCP Tech Academy Acquired Data".**

![](.//media/image4.png)

:point_right: **Select the copy a query option and then next**

![](.//media/image99.png)



:point_right: **Select Safety Incidents. Drag across all the objects in the query
    panel. Select Next.**

![](.//media/image6.png)


:point_right:**Drag your objects across.  Select Create**

![](.//media/image7.png)


:point_right:**You will now see a preview option for your model. Select the model "SafetyIncidentsQuery"**

![](.//media/image5.png)

i.  You now see the raw data model. 11 columns, but no measures. We also
    have no date objects
    ![](.//media/image8.png)

j.  Let's add a measure. Select the fx command button and create a
    calculated column. Then add a counter object.

Step 1

![](.//media/image9.png)

Step 2, call the new field "Number of Incidents", simply add the value
1 to the Edit Formula section.

![](.//media/image10.png)

> Notes: after you create this column, you should see it at the very end
> of a data set. It should be the measure (a column we can perform
> mathematical functions on). You will also notice the data quality
> should be green
>
> ![](.//media/image11.png)

:point_right:**Let's transform the CreatedAt column so it looks like a date. Select
    the column header and select "Create a Transform"**

![](.//media/image12.png)

![](.//media/image13.png)

l.  Change the transform syntax to "Extract everything before last T
    from createdAt". Here you can see the syntax you need to use for the transform of the CreatedAt Column.

![](.//media/image14.png)

:point_right:**Here's the correct syntax for the transform of the modifiedAt Column**

![](.//media/image15.png)

:point_right:**Change the data type of the new Column to a Date. You may need to
    select the date format to YYYY-MM-DD from the drop down.**
    
    ![](.//media/image16.png)

:point_right: **Repeat this process for the ModifiedAt Column. Be sure to that's
    data type is Date and in the format of YYYY-MM-DD just like we did
    in step l.**

:point_right:**Let's create a "Days Between" column which measures how quickly our
    support staff react to ticket. Select the fx icon again.**

![](.//media/image17.png)

In the formula and functions section (right hand side), scroll to
DATEDIFF function. Select it'.

![](.//media/image18.png)

The formula should look like this. **DATEDIFF(\[modifiedAt\_2\] ,
\[createdAt\_2\],\"day\")**

If you run into troubles on this step, clear any formulas and just
paste in the following **DATEDIFF(\[modifiedAt\_2\] ,
\[createdAt\_2\],\"day\")** I have seen some bugs on Safari with this.

![](.//media/image19.png)

:point_right:**If you have no data errors, select Create Model on the right-hand
    side of the screen.**

![](.//media/image20.png)

:point_right:**Name the data set **SCPTA**
