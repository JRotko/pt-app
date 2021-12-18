
export function searchCustomers(rows, q) {
        return rows.filter(
            (row) => 
                row.firstname.toLowerCase().indexOf(q) > -1 ||
                row.lastname.toLowerCase().indexOf(q) > -1 ||
                row.streetaddress.toLowerCase().indexOf(q) > -1 ||
                row.city.toLowerCase().indexOf(q) > -1 ||
                row.email.toLowerCase().indexOf(q) > -1 ||
                row.phone.toLowerCase().indexOf(q) > -1
            )
}

export function searchTrainings(rows, q) {
    return rows.filter(
        (row) => 
            row.customer.firstname.toLowerCase().indexOf(q) > -1 ||
            row.customer.lastname.toLowerCase().indexOf(q) > -1 ||
            row.activity.toLowerCase().indexOf(q) > -1 ||
            // TODO: fix search with date
            row.date.toString().indexOf(q) > -1 ||
            row.duration.toString().indexOf(q) > -1
        )
}

