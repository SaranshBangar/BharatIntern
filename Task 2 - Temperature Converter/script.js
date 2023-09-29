document.addEventListener("DOMContentLoaded", function()
{
    const convertButton = document.querySelector(".conButton button");
    const unitValueInput = document.getElementById("unitValue");
    const type1Select = document.getElementById("type1");
    const type2Select = document.getElementById("type2");
    const ansValueInput = document.getElementById("ansValue");
    convertButton.addEventListener("click", function()
    {
        const inputValue = parseFloat(unitValueInput.value);
        const fromType = type1Select.value;
        const toType = type2Select.value;
        let convertedValue;
        let errorMessage = "";
        if (isNaN(inputValue))
        {
            errorMessage = "Input not found";
        }
        else if (fromType === "cel" && toType === "far")
        {
            convertedValue = (inputValue * 9 / 5) + 32;
        }
        else if (fromType === "far" && toType === "cel")
        {
            convertedValue = (inputValue - 32) * 5 / 9;
        }
        else if (fromType !== toType)
        {
            errorMessage = "Invalid Conversion";
        }
        else
        {
            convertedValue = inputValue;
        }
        if (errorMessage)
        {
            ansValueInput.value = errorMessage;
        }
        else
        {
            ansValueInput.value = convertedValue.toFixed(2);
        }
    });
});