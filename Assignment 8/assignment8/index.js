const check = document.getElementById("check");

check.addEventListener('click', () => {
    const age = Number(document.getElementById('age').value);
    const income = Number(document.getElementById('income').value);
    const employment = document.getElementById('employment').value;
    const job = document.getElementById('job').value;
    const result = document.getElementById('result');

    // Validate input fields
    if (isNaN(age) || isNaN(income) || !employment || !job) {
        result.textContent = "Please fill in the fields correctly";
        result.style.color = 'red';
        return;
    }

    // Age check
    if (age < 60) {
        result.textContent = "You must be at least 60 years old";
        result.style.color = "red";
        return;
    }

    let eligible = false;
    let reason = "";

    // Eligibility conditions
    if (income >= 20000 && employment !== "unemployed") {
        eligible = true;
    } else if (income >= 15000 && employment === "employed") {
        eligible = true;
    } else {
        reason = "Not employed or insufficient income. ";
    }

    // Additional reasons based on employment status
    switch (employment) {
        case "unemployed":
            reason += " Employment status is a key factor.";
            break;
        case "self-employment":
            reason += " Self-employed applicants may need more documentation.";
            break;
        default:
            reason += " Miscellaneous reason.";
            break;
    }

    // Display result
    if (eligible) {
        result.textContent = "You are eligible for pension";
        result.style.color = "green";
    } else {
        result.textContent = "Not eligible... " + reason;
        result.style.color = "red";
    }
});
