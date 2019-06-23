const filterByExpiration = (items) => {
    const newItems = items.filter(item => {
        return Math.floor(Date.parse(new Date(item.expirationDate)) / 1000) > Math.floor(Date.now() / 1000);
    })

    return newItems;
};