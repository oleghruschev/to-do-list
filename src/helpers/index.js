export default {
  formateDate(date) {
    const dateEnd = new Date(date);
    const day = dateEnd.getDate();
    const hours = dateEnd.getHours();
    const month = dateEnd.getMonth() + 1;
    const minutes = dateEnd.getMinutes();
    const year = dateEnd.getFullYear();

    const formatMonth = month < 10 ? `0${month}` : month;
    const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return  (
      `${day}.${formatMonth}.${year} ${hours}:${formatMinutes}`
    )
  }
}
