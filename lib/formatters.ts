const DATE_TIME_FROMMATER = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
})

export function formateDate(date: Date) {
    return DATE_TIME_FROMMATER.format(date)
}