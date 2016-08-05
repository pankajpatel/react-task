# react-tasks
Environment for react tasks

You can use this frontend setup to solve the react tasks below. If you use the CSS classnames as described in each task you don't have to care about styling. In case you want to provide an own styling as well a gulp task is taking care of compiling your SCSS to CSS.
Gulp will also take care for compiling your jsx files to js. To see your results just run the index.html in browser. Good luck!

1) Create a DropDown component.
- Wrapper's className: drop-down
- Before any option in DropDown is chosen it should say 'Chose option' in head (should be an a-tag with className: head).
- Provide three options: 'File', 'Document' and 'Folder'. Store these as initial state. HTML should be an unsorted list, where each list element has an a-tag inside. List elements className: list-item
- After having clicked any option, DropDown should be closed and head should display chosen option.

Hints:
- Place DropDown inside of first <div className='col'></div>
- Make sure there will be no warnings about key properties in list.
- It is not necessary to implement a closing behaviour when clicking outside of the DropDown.
- What techniques you should know here: How to build a simple react component and how to work with state and props


2) Make the DropDown's options be filter- and editable.
- Create two other components:
a) InputField: consisting out of one input and one button, give wrapper className 'user-input'
b) List : consisting out of two InputField instances, a list element, displaying the options from DropDown and a reset button (className: 'reset-button')

- One InputField instance should be responsible for filtering the list elements. The button should be labeled with 'Filter'. Expected behaviour: 1.Type in text into input field. 2. Click 'Filter' 3. List below should only display list elements containing according substrings.
- The other InputField is supposed to add elements to the list as well as to the dropdown options. (Mind: adding items should be synchronized in DropDown and List whereas filtering should only affect List.)
- Reset button should reset filtered list back to all options (also added ones).

Optional:
- When resetting list, also reset input fields to no value.

Hints:
- Place List inside of second <div className='col'></div>
- Make sure there will be no warnings about key properties in lists.
- Make sure DropDown and List always display same options except when List gets filtered.
- What techniques you should know here: Inheritance and communication between components with state and props, referencing with ref.


3) Create a DropDown with options provided by an API.
- Use any architecture you prefer (Reflux is a plus though)
- Use API of http://jsonplaceholder.typicode.com
- Create a new DropDown, below first one
- This should be displaying all users (/users)

Hints:
- Install node packages when necessary
- What you should know here: How to fetch information from APIs and how to process them within a components life cycle


4) Implement closing behaviour for DropDown when clicking outside of dropdown.

Hints:
- Make sure the DropDowns will be distinguishable. Expected behaviour: 1. Open one DropDown 2. Click on head of other DropDown 3. First DropDown should be closing and other one be opening at the same time.
- What you should know here: How to work with different instances of a component.
