adapt-previous-button
=================
The **previous Page Button** provides a button for easily navigating to the previous page in an Adapt course.

Settings
--------
### Attributes
**_component (string)**: This value must be: `previous-button`.

**displayTitle (string)**: The title to display on the button.

**_classes (string)**: CSS class name to be applied to the button's containing div. The class must be predefined in one of the Less files. Separate multiple classes with a space.

**_layout (string)**: This defines the horizontal position of the component in the block. Acceptable values are full, left or right.

**_hoverText (string, optional):** This optional text appears when the user hovers over the previous button.

**_requirePageCompletion (boolean, default=true):** By default, the previous button is disabled until the rest of the page is complete. However, you can set the previous button to always be enabled by setting this to `false`.

**_skipMenus (boolean, default=true):** By default, clicking the previous button will take the user to the previous *page*. However, disabling this setting would take the user to whatever the previous content object is: either page or menu.

**_previousPage (string, optional)**: This component automatically determines the previous page based on the structure of the course. However, if you want to explicitly set the previous page, you can set the ID of the page here.

Limitations
-----------
No known limitations.
