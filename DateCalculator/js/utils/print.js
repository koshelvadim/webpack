function printError(errorText, output) {
    output.innerHTML = `
        <span style="color: red;">
            ${errorText}
        </span>
    `
}

function printDateDiff({years, months, days}, output) {
    output.innerHTML = `
        Годы: ${years}
        Месяцы: ${months}
        Дни: ${days}
    `
}

export { printDateDiff, printError }