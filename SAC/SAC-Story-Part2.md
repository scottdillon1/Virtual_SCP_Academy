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

**Once you select "Show All", you will see all the dimensions**

![](.//media/image98.png)

d)  From here, under **Measures**, select *Number of Incidents* (measure value) and select the Category Code (header).
    
   Once the measure and Category code is selected, you should see a chart appear that reflects this data.
   
   We will now add this chart to a responsive page.
   
   From the far right of the chart, Select Copy to New Responsive Page
   ![](.//media/image26.png)
### How to add Smart Insights with the click of a mouse
i.  You are now on the Responsive Page (designed for mobile view).
        Enhance your chart by adding Smart Insights. 
        In order to do this, you must first make the chart active by clicking on it which should reveal three dots next to the side of the chart. Click on these to reveal the Smart Insights option and select it.

![](.//media/image27.png)

Once the Smart Insights has been applied, you can then change the title by simply clicking on it and modifiying it to "Number of Incidents by Category".

![](.//media/image28.png)

Now let's calculate the average time it takes to engage our support team and display this as it relates to each category of incident. 
In order to do this we will be changing our chart type and adding some additional calculations.

To start, open the builder pane. Make sure the chart is selected and select Designer in the top right hand side.              
![](.//media/builderpane.png)

From the builder pane, under **Meausures**, you will now select **Add Measure** and this will reveal the "Create Calculation" option that we will select. 

![](.//media/createcalcbuilder.png)

iv. In the editor dialogue select "Calculated Measure" and create a
    formula of Days Between/ Number of Incidents. As you type, SAC will
    propose options to you. Name the measure "Average Days Between".  

![](.//media/image30.png)

v.  Change the chart to a Combination Column and Line chart. You will see you have 2 values under the Columns Axis. Drage the "Average Days Between" down under the "Line Axis" so that your chart matches the screenshot below.

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
