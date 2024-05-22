// Form 
{
    const car = {
        "Name": "chevrolet chevelle malibu",
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Origin": "USA",
        "in_production": false
    };
    
    function generateFormFromObject(obj) {
        let str = "<form>";
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                str += `<label>${key}: `;
                str += (typeof obj[key] === "number") ? `<input type="number" value="${obj[key]}"/>` :
                       (typeof obj[key] === "boolean") ? `<input type="checkbox" ${obj[key] ? 'checked' : ''}/>` :
                       `<input type="text" value="${obj[key]}"/>`;
                str += "</label><br><br>";
            }
        }
        str += "</form>";
        return str;
    }
    
    document.write(generateFormFromObject(car));
    
}