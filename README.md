### Step Zero: Create a supbase project with a `workshops` table and a `participants` table. Add a few rows to your workshops table in the supabase.io dashboard.

For the workshops, use this RLS:

![image](https://user-images.githubusercontent.com/16160135/149039220-e433ee10-afcd-45b3-a6b5-b1db31c876ff.png)

For participants, use this RLS:

![image](https://user-images.githubusercontent.com/16160135/149039242-1bf3c580-839a-42e3-963c-975d75f2f5d5.png)

![image](https://user-images.githubusercontent.com/16160135/149039336-e96e7e9b-ec6f-4aa1-903c-34f2e62925ea.png)


| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo |    1 |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On the home page (`'/'`), Login and Signup using the login and signup form. On success, redirect to the `/workshops` page   |        1 |
| Logout by clicking the logout button                                                       |        1 |
| If a non-logged-in user tries to visit the `/workshops` or `/create` page, redirect them to the login page     |       1 |
| On the `/workshops` page load, fetch the workshops (with their participants) from supabase and render them to the page. Participants should be listed as well.         |        2 |
| On clicking a participant, delete it from supabase. Clear out all workshops from the DOM, refetch, and render them again.                                              |        2 |
| On the `/create` page, on load, fetch workshops. Use these workshops to create the dropdown to let the user attach a participant to a workshop.                            |        2 |
| On the `/create` page, on submit, create a participant. The form should include a name for the participant and a dropdown for the workshop (from the fetched workshops in supabase).                            |        2 |


| Functions                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| TDD PURE: `renderParticipant(participant)` : returns a DOM node the participant (don't worry about this passing in github CI. Use the `skip` instead of `test` when you push it to github. That way github actions won't count it against you. However, do run the test locally and include a screenshot of the passing test in your repo. |2|
| ASYNC: `getWorkshops()` : get all participants in supabase. (These workshops are the same for everybody in the cohort and do not 'belong' to any particular user. Your participants will show up only for you) |2|
| ASYNC: `createParticipant(participant)` : create participant in supabase and attach it to a workshop |2|
| ASYNC: `deleteParticipant(id)` : delete a participant in supabase |2|

### Stretch Goals Ideas
1) Add a page that lets you create a new workshop
2) On click, don't delete the participant--go to the participant's "detail page". The detail page will have an interface that lets the user update the participant. This includes allowing the user to change which workshop the participant belongs to.
3) Automatically generate the participant form using a participant fetched from the database. That way if new properties end up added to the participant table, the front end dev doesn't need to update the front end later.
4) Add filter/sort functionality to the workshops page? Only show participants who are older than 21, for example? Only show workshops with more than 2 participants?
5) _Mega ambitious_: I want to able to drag and drop participants to different workshops.


# Workshops List Page

## HTML Setup
- 'destination' div for all the workshops
  - we will dynamically create workshops. Each workshop also has a list of participants. That list will _also_ need to be dynamically generated
- link to create page

## Event
- On load
  - Fetch all workshops (with participants)
    - for each workshop, 
      - loop through participants. for each partipant, render and append participant element to workshop element
    - render and append workshop element to list element
- On click of participant
  - delete the participant
  - rerender the list

# Create Page
## HTML Setup
- We need a form!

## Event
- On submit
  - Create the participant
  - then navigate back to the workshop list
- On load
  - Fetch workshops from supabase
  - Loop through workshops
    - For each workshop, render and append an option to the dropdown