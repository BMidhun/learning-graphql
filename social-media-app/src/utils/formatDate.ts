function formatDate(date:string) {

    
    const formattedDate = new Date(Number(date));


    return formattedDate.toDateString().split(' ').slice(1).join(' ')

}

export default formatDate;