#  1. Logging-In and Building your Data Model

a.  Direct your Chrome browser to the following URL:
        <https://experienceacademy.us10.hanacloudservices.cloud.sap/sap/fpa/ui/app.html#;view_id=home>        

b.  From the home icon (oddly shaped like a hamburger), Select
        Create > Model.

![](.//media/image1.png)

c.  Select "Get data from a datasource"

![](.//media/image2.png)

d.  Select "oData Services" from the right-hand side of the page. Please
    note all the connection types.

![](.//media/image3.png)

e.  From the drop down select "SCP Tech Academy Acquired Data".
![](.//media/image4.png)

Select the copy a query option and then next

![](.//media/image99.png)



f.  Select Safety Incidents. Drag across all the objects in the query
    panel. Select Next.

![](.//media/image6.png)


g.  Drag your objects across.  Select Create

![](.//media/image7.png)


h.  You will now see a preview option for your model. Select the model
    "SafetyIncidentsQuery".

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

k.  Let's transform the CreatedAt column so it looks like a date. Select
    the column header and select "Create a Transform"

![](.//media/image12.png)

![](.//media/image13.png)

l.  Change the transform syntax to "Extract everything before last T
    from createdAt". Here you can see the syntax you need to use for the transform of the CreatedAt Column.

![](.//media/image14.png)

m.  Here's the correct syntax for the transform of the modifiedAt Column.

![](.//media/image15.png)

n.  Change the data type of the new Column to a Date. You may need to
    select the date format to YYYY-MM-DD from the drop down.
    ![](.//media/image16.png)

o.  Repeat this process for the ModifiedAt Column. Be sure to that's
    data type is Date and in the format of YYYY-MM-DD just like we did
    in step l.

p.  Let's create a "Days Between" column which measures how quickly our
    support staff react to ticket. Select the fx icon again.

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

q.  If you have no data errors, select Create Model on the right-hand
    side of the screen.

![](.//media/image20.png)

r.  Name the data set **SCPTA**

# 2.  Let's build a story! 

From the home menu (hamburger icon), select Create > Story.

![](.//media/image21.png)

a)  Select Access and Explore
    Data![](.//media/image22.png)

b)  Select Data Acquired from an Existing Model

 ![](.//media/image23.png)

Browse to the data model that you created. This will be in "your
Files". This will be the model you will be created.

![](.//media/image24.png)

c)  Add dimensions to increase your search capability (do this by clicking the plus sign):

![](.//media/image25a.png)

you should see all the dimensions now

![](.//media/image98.png)

d)  Number of Incidents (measure value) and Category Code (header).
    Select Copy to New Responsive Page (right hand
    side)![](.//media/image26.png)

i.  You are now on the Responsive Page (designed for mobile view).
        Enhance your chart by adding Smart Insights.

![](.//media/image27.png)

It should look like this:

![](.//media/image28.png)

ii. Change the title to Number of Incidents by Category.  The easiest way to do this is select the header of the chart and type.

![](.//media/image97.png)


iii. Let's calculate Average time it takes to engage our support team.
     In the builder pane, go to the measures section. Select Create
     Calculation.  To get the builder pane, make sure the chart is selected and select Desigern in the top right hand side.              
     See the greyed area "Designer".  

![](.//media/image96.png)


Select the "+ create calculation" option under calculations

![](.//media/image29.png)

iv. In the editor dialogue select "Calculated Measure" and create a
    formula of Days Between/ Number of Incidents. As you type, SAC will
    propose options to you. Name the measure "Average Days Between".  

![](.//media/image30.png)

v.  Change the chart to a Combination Column and Line chart. Move the
    Average Days Between to the Line section.

![](.//media/image31.png)

![](.//media/image32.png)

Your chart now looks like this

![](.//media/image33.png)

e)  Delete the second lane, located on the right-hand side of the
    screen. Click on the header of the lane and an the selector appears
    (circle with three dots).

![](.//media/image34.png)

f)  Insert a new chart. Change the chart to a numeric point. Insert
    Average Number of Days. You will notice that once you select insert chart, SAC does this for you.  
    You don't need to use your mouse.
    
![](.//media/image35.png)

   Let's move the numeric point to far left-hand side of the screen.  Select the chart until you get a 4 way pointer by
   by hovering your mouse over the edge of the chart.  Notice how it snaps to grid in responsive mode? This is for mobile
   consumption.  

Your storyboard looks like this now:

![](.//media/image36.png)

g)  i.  Step 1: Duplicate the numeric point chart showing "Average
        Number of Days". In the new numeric point chart, replace Average
        Number of Days and insert Total Incidents.

![](.//media/image37.png)

It should look like this:

![](.//media/image38.png)

ii. Step 2: In the Builder pane, put a filter on Priority Code. Select
    Values "High" and "Critical".

![](.//media/image39.png)![](.//media/image40.png)

iii. Step 3: Put on the Explorer option. This is also in the Builder
     pane, Properties section.

![](.//media/image41.png)

From the numeric point chart menu, select the explorer icon. See how
you can jump to details?

![](.//media/image42.png)

It should look like this:

![](.//media/image43.png)

Let's move back to your storyboard. by selectig the Exit Explorer Mode command button

![](.//media/image95.png)

h)  Add an RSS feed, so your dashboard users can stay up to date on this
    important topic.

    i.  Select RSS Feed from menu

![](.//media/image44.png)

It should look like this.  The builder pane can be found by selecting the design option (see screen shot from our first numeric point chart if you don't remember)

![](.//media/image45.png)

Copy and paste this URL into the Builder Pane. Enter in a title
"Health and Safety News".  The title is right above the URL screen
<https://www.safetyandhealthmagazine.com/rss/topic/99-news>

ii. Add a title to the very top.

iii. Move this to the left-hand side of your screen. Your page should
     look like this:

![](.//media/image46.png)

i)  Final Step: Run a Smart Discovery.

![](.//media/image94.png)

    i.  Step One: Save your work!

    ii. Step Two: Select Smart Discovery from the Tools Menu (note for
        those on smaller screens/high zoom you might find this option
        under the "More" options area):

    iii. Selecting a measure will perform
         a regression. Dimensions will do a classification. Let's select
         "Days Difference". Notice how only columns from the data set or
         created in the model can be used? This is important to know
         when you model your data!

Explore Advanced Options. Run.

![](.//media/image48.png)

You now have the following results. Let's discuss the four tabs in
question.

![](.//media/image52.png)
