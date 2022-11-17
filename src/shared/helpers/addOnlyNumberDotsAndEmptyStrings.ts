

export function addOnlyNumberDotsAndEmptyStrings(value: string, currentValue: string) {
    if (/^[0-9]*\.?[0-9]*$/.test(value.toString()) || value == "") {
        return value
    }

    return currentValue
}