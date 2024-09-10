
document.addEventListener('DOMContentLoaded', () => {


    // Load seved checkbox states
    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    var previousState = {};

    checkboxes.forEach(checkbox => {
        const isChecked = localStorage.getItem(checkbox.id) === 'true';
        checkbox.checked = isChecked;
    });

    // Save checkbox state on change
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    // Handle reset button click
    document.querySelector('button[type="reset"]').addEventListener('click', () => {
        
        // Save current state before resetting
        previousState = {};
        checkboxes.forEach(checkbox => {
            previousState[checkbox.id] = checkbox.checked
        });

        // Clear all checkboxes and save the state
        checkboxes.forEach(checkbox => {
            checkbox.checked = false
            localStorage.setItem(checkbox.id, checkbox.checked)
        });

    });
    

    // Handle restore button click
    document.getElementById('restore_btn').addEventListener('click', () => {

        // Restore the saved state
        for (const id in previousState){
            if (Object.prototype.hasOwnProperty.call(previousState, id)){
                const checkbox = document.getElementById(id);
                if (checkbox){
                    checkbox.checked = previousState[id];
                    localStorage.setItem(id, previousState[id]);
                }
            }
        }

    });



});



